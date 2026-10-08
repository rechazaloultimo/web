import type { APIRoute } from "astro";
import { GridFSBucket } from "mongodb";
import { canEditOwner, getEditorUser } from "../../../lib/auriculoterapia-auth";
import { getDb } from "../../../lib/db";
import { writeAuditEvent } from "../../../lib/auriculoterapia-audit";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export const DELETE: APIRoute = async ({ request }) => {
  const user = await getEditorUser(request);
  if (!user) return json({ message: "Inicia sesión para borrar sesiones." }, 401);

  try {
    const body = await request.json();
    const ownerUserId = String(body?.ownerUserId || user.id);
    const localId = String(body?.localId || "");
    if (!localId) return json({ message: "Falta el identificador de la sesión." }, 400);
    if (!canEditOwner(user, ownerUserId))
      return json({ message: "No tienes permiso para borrar esta sesión." }, 403);

    const db = await getDb();
    const collection = db.collection("auriculoterapia_sessions");
    const session = await collection.findOne({ ownerUserId, localId });
    if (!session) return json({ success: true });

    const bucket = new GridFSBucket(db, { bucketName: "auriculoterapia_images" });
    const images = await db
      .collection("auriculoterapia_images.files")
      .find({ "metadata.ownerUserId": ownerUserId, "metadata.sessionId": localId })
      .toArray();
    await Promise.all(images.map((image) => bucket.delete(image._id)));
    await collection.deleteOne({ _id: session._id });
    await writeAuditEvent(db, {
      actor: user,
      action: "session.delete",
      targetType: "session",
      targetId: localId,
      targetOwnerUserId: ownerUserId,
      details: { imagesDeleted: images.length },
    });
    return json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo borrar la sesión.";
    return json({ message }, 500);
  }
};
