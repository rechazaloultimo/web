import type { APIRoute } from "astro";
import { ObjectId } from "mongodb";
import { getEditorUser, getPlanLimits, canEditOwner } from "../../../lib/auriculoterapia-auth";
import { getDb } from "../../../lib/db";
import { imageBucketName, storeUploadedImage } from "../../../lib/auriculoterapia-data";
import { writeAuditEvent } from "../../../lib/auriculoterapia-audit";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
await writeAuditEvent(db, {
  actor: user,
  action: "image.upload",
  targetType: "image",
  targetId: url.split("/").at(-1),
  targetOwnerUserId: ownerUserId,
  details: { sessionId, side, slot, bytes: file.size },
});

export const POST: APIRoute = async ({ request }) => {
  const user = await getEditorUser(request);
  if (!user) return json({ message: "Inicia sesión para cargar imágenes." }, 401);

  try {
    const form = await request.formData();
    const file = form.get("file");
    const ownerUserId = String(form.get("ownerUserId") || user.id);
    const sessionId = String(form.get("sessionId") || "");
    const side = String(form.get("side") || "");
    const slot = Number(form.get("slot"));

    if (!canEditOwner(user, ownerUserId))
      return json({ message: "No tienes permiso para editar estos datos." }, 403);
    if (!(file instanceof File) || !file.type.startsWith("image/")) {
      return json({ message: "El archivo debe ser una imagen válida." }, 400);
    }
    if (file.size > 12 * 1024 * 1024) {
      return json({ message: "Cada imagen debe pesar menos de 12 MB." }, 413);
    }
    if (
      !sessionId ||
      !["IZQUIERDA", "DERECHA"].includes(side) ||
      !Number.isInteger(slot) ||
      slot < 0 ||
      slot > 2
    ) {
      return json({ message: "Faltan datos de sesión para asociar la imagen." }, 400);
    }

    const db = await getDb();
    const session = await db
      .collection("auriculoterapia_sessions")
      .findOne({ ownerUserId, localId: sessionId });
    if (session && !canEditOwner(user, String(session.ownerUserId))) {
      return json({ message: "No tienes permiso para modificar esta sesión." }, 403);
    }

    const imageFiles = await db
      .collection(`${imageBucketName()}.files`)
      .find({
        "metadata.ownerUserId": ownerUserId,
        "metadata.sessionId": sessionId,
        "metadata.side": side,
      })
      .toArray();
    const occupiedSlots = new Set(
      imageFiles
        .filter((image) => image.metadata?.slot !== slot)
        .map((image) => Number(image.metadata?.slot)),
    );
    if (occupiedSlots.size + 1 > getPlanLimits(user).maxImagesPerEar) {
      return json(
        { message: `Tu plan permite ${getPlanLimits(user).maxImagesPerEar} imagen por oreja.` },
        403,
      );
    }

    const previous = imageFiles.filter((image) => Number(image.metadata?.slot) === slot);
    const url = await storeUploadedImage(
      db,
      ownerUserId,
      sessionId,
      side,
      slot,
      Buffer.from(await file.arrayBuffer()),
      file.type,
    );
    const bucket = new (await import("mongodb")).GridFSBucket(db, {
      bucketName: imageBucketName(),
    });
    await Promise.all(previous.map((image) => bucket.delete(image._id)));
    return json({ url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo guardar la imagen.";
    return json({ message }, 500);
  }
};

export const GET: APIRoute = async ({ request, url }) => {
  const user = await getEditorUser(request);
  if (!user) return json({ message: "Inicia sesión para ver imágenes." }, 401);
  const id = url.searchParams.get("id") || "";
  if (!ObjectId.isValid(id)) return json({ message: "Imagen no encontrada." }, 404);

  try {
    const db = await getDb();
    const file = await db
      .collection(`${imageBucketName()}.files`)
      .findOne({ _id: new ObjectId(id) });
    if (
      !file ||
      (user.role !== "admin" && user.id !== file.metadata?.ownerUserId && user.plan !== "premium")
    ) {
      return json({ message: "No tienes permiso para ver esta imagen." }, 403);
    }
    const chunks: Buffer[] = [];
    for await (const chunk of new (await import("mongodb")).GridFSBucket(db, {
      bucketName: imageBucketName(),
    }).openDownloadStream(new ObjectId(id))) {
      chunks.push(Buffer.from(chunk));
    }
    return new Response(Buffer.concat(chunks), {
      headers: {
        "Content-Type": String(file.contentType || "application/octet-stream"),
        "Cache-Control": "private, max-age=300",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return json({ message: "No se pudo leer la imagen." }, 500);
  }
};
