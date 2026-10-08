import type { APIRoute } from "astro";
import { ObjectId } from "mongodb";
import { getEditorUser, canEditOwner } from "../../../../lib/auriculoterapia-auth";
import { getDb } from "../../../../lib/db";
import { imageBucketName } from "../../../../lib/auriculoterapia-data";
import { writeAuditEvent } from "../../../../lib/auriculoterapia-audit";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export const GET: APIRoute = async ({ request, params }) => {
  const user = await getEditorUser(request);
  if (!user) return json({ message: "Inicia sesión para ver imágenes." }, 401);
  if (!ObjectId.isValid(params.id || "")) return json({ message: "Imagen no encontrada." }, 404);

  try {
    const db = await getDb();
    const id = new ObjectId(params.id);
    const file = await db.collection(`${imageBucketName()}.files`).findOne({ _id: id });
    const ownerUserId = String(file?.metadata?.ownerUserId || "");
    if (!file || (!canEditOwner(user, ownerUserId) && user.plan !== "premium")) {
      return json({ message: "No tienes permiso para ver esta imagen." }, 403);
    }

    const chunks: Buffer[] = [];
    const { GridFSBucket } = await import("mongodb");
    for await (const chunk of new GridFSBucket(db, {
      bucketName: imageBucketName(),
    }).openDownloadStream(id)) {
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

export const DELETE: APIRoute = async ({ request, params }) => {
  const user = await getEditorUser(request);
  if (!user) return json({ message: "Inicia sesión para borrar imágenes." }, 401);
  if (!ObjectId.isValid(params.id || "")) return json({ message: "Imagen no encontrada." }, 404);

  try {
    const db = await getDb();
    const id = new ObjectId(params.id);
    const file = await db.collection(`${imageBucketName()}.files`).findOne({ _id: id });
    const ownerUserId = String(file?.metadata?.ownerUserId || "");
    if (!file) return json({ message: "Imagen no encontrada." }, 404);
    if (!canEditOwner(user, ownerUserId))
      return json({ message: "No tienes permiso para borrar esta imagen." }, 403);

    const { GridFSBucket } = await import("mongodb");
    await new GridFSBucket(db, { bucketName: imageBucketName() }).delete(id);
    await writeAuditEvent(db, {
      actor: user,
      action: "image.delete",
      targetType: "image",
      targetId: id.toString(),
      targetOwnerUserId: ownerUserId,
      details: {
        sessionId: String(file.metadata?.sessionId || ""),
        side: String(file.metadata?.side || ""),
        slot: Number(file.metadata?.slot || 0),
      },
    });
    return new Response(null, { status: 204 });
  } catch {
    return json({ message: "No se pudo borrar la imagen." }, 500);
  }
};
