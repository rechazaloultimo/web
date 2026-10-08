import type { APIRoute } from "astro";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { GridFSBucket } from "mongodb";
import { getEditorUser } from "../../../../lib/auriculoterapia-auth";
import { getDb } from "../../../../lib/db";
import { BLOG_IMAGE_BUCKET } from "../../../../lib/blog-content";
import { writeAuditEvent } from "../../../../lib/auriculoterapia-audit";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  const admin = await getEditorUser(request);
  if (!admin) return json({ message: "Inicia sesión." }, 401);
  if (admin.role !== "admin") return json({ message: "Solo administradores." }, 403);
  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) return json({ message: "Selecciona una imagen." }, 400);
    const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
    if (!allowedTypes.has(file.type)) {
      return json({ message: "Formato no permitido. Usa JPG, PNG, WEBP o GIF." }, 415);
    }
    if (file.size > 10 * 1024 * 1024) return json({ message: "Máximo 10 MB por imagen." }, 413);

    const db = await getDb();
    const bucket = new GridFSBucket(db, { bucketName: BLOG_IMAGE_BUCKET });
    const upload = bucket.openUploadStream(file.name.slice(0, 180), {
      contentType: file.type,
      metadata: { uploadedBy: admin.id, scope: "blog" },
    });
    await pipeline(Readable.from([Buffer.from(await file.arrayBuffer())]), upload);
    const url = `/api/blog/images/${upload.id.toString()}`;
    await writeAuditEvent(db, {
      actor: admin,
      action: "blog.image.upload",
      targetType: "image",
      targetId: upload.id.toString(),
      details: { bytes: file.size, contentType: file.type },
    });
    return json({ url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo subir la imagen.";
    return json({ message }, 500);
  }
};
