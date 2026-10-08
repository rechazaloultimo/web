import type { APIRoute } from "astro";
import { GridFSBucket, ObjectId } from "mongodb";
import { getEditorUser } from "../../../../lib/auriculoterapia-auth";
import { getDb } from "../../../../lib/db";
import { BLOG_IMAGE_BUCKET, blogImageUrls } from "../../../../lib/blog-content";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export const GET: APIRoute = async ({ request, params }) => {
  const id = String(params.id || "");
  if (!ObjectId.isValid(id)) return json({ message: "Imagen no encontrada." }, 404);
  try {
    const db = await getDb();
    const objectId = new ObjectId(id);
    const file = await db.collection(`${BLOG_IMAGE_BUCKET}.files`).findOne({ _id: objectId });
    if (!file) return json({ message: "Imagen no encontrada." }, 404);

    const admin = await getEditorUser(request).catch(() => null);
    const publishedPosts = await db.collection("blog_posts").find({ published: true }).toArray();
    const url = `/api/blog/images/${id}`;
    const isPublished = publishedPosts.some((post) => blogImageUrls(post).includes(url));
    if (!isPublished && admin?.role !== "admin")
      return json({ message: "Imagen no disponible." }, 404);

    const chunks: Buffer[] = [];
    for await (const chunk of new GridFSBucket(db, {
      bucketName: BLOG_IMAGE_BUCKET,
    }).openDownloadStream(objectId)) {
      chunks.push(Buffer.from(chunk));
    }
    return new Response(Buffer.concat(chunks), {
      headers: {
        "Content-Type": String(file.contentType || "application/octet-stream"),
        "Cache-Control": isPublished ? "public, max-age=3600" : "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return json({ message: "No se pudo leer la imagen." }, 500);
  }
};
