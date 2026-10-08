import type { APIRoute } from "astro";
import { GridFSBucket } from "mongodb";
import { getEditorUser } from "../../../lib/auriculoterapia-auth";
import { getDb } from "../../../lib/db";
import { blogImageUrls, normalizeBlogPost } from "../../../lib/blog-content";
import { writeAuditEvent } from "../../../lib/auriculoterapia-audit";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

function slugConflict(error: unknown) {
  return Boolean(error && typeof error === "object" && "code" in error && error.code === 11000);
}

async function removeUnusedImages(db: Awaited<ReturnType<typeof getDb>>, urls: string[]) {
  const bucket = new GridFSBucket(db, { bucketName: "blog_images" });
  for (const url of urls) {
    const stillReferenced = await db.collection("blog_posts").countDocuments({
      $or: [
        { coverImage: url },
        { "images.src": url },
        { body: { $regex: url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") } },
      ],
    });
    if (stillReferenced) continue;
    const imageId = url.split("/").at(-1) || "";
    const { ObjectId } = await import("mongodb");
    if (!ObjectId.isValid(imageId)) continue;
    try {
      await bucket.delete(new ObjectId(imageId));
    } catch {
      // Ya estaba eliminada; la entrada del post igualmente quedó borrada.
    }
  }
}

export const GET: APIRoute = async ({ request }) => {
  const admin = await getEditorUser(request);
  if (!admin) return json({ message: "Inicia sesión." }, 401);
  if (admin.role !== "admin") return json({ message: "Solo administradores." }, 403);
  const posts = await (await getDb())
    .collection("blog_posts")
    .find({})
    .sort({ updatedAt: -1, createdAt: -1 })
    .toArray();
  return json({ posts: posts.map(({ _id, ...post }) => ({ ...post, id: String(_id) })) });
};

export const POST: APIRoute = async ({ request }) => {
  const admin = await getEditorUser(request);
  if (!admin) return json({ message: "Inicia sesión." }, 401);
  if (admin.role !== "admin") return json({ message: "Solo administradores." }, 403);
  try {
    const input = await request.json();
    const post = normalizeBlogPost(input);
    const now = new Date();
    const record = {
      ...post,
      authorUserId: admin.id,
      authorName: admin.name,
      createdAt: now,
      updatedAt: now,
      publishedAt: post.published ? now : null,
    };
    const db = await getDb();
    const result = await db.collection("blog_posts").insertOne(record);
    await writeAuditEvent(db, {
      actor: admin,
      action: post.published ? "blog.publish" : "blog.create",
      targetType: "blogPost",
      targetId: post.slug,
      details: {
        published: post.published,
        imageCount: post.images.length + Number(Boolean(post.coverImage)),
      },
    });
    return json({ success: true, post: { ...record, id: String(result.insertedId) } }, 201);
  } catch (error) {
    if (slugConflict(error)) return json({ message: "Ya existe una entrada con ese slug." }, 409);
    const message = error instanceof Error ? error.message : "No se pudo crear el post.";
    return json({ message }, Number((error as { status?: number })?.status) || 500);
  }
};

export const PATCH: APIRoute = async ({ request }) => {
  const admin = await getEditorUser(request);
  if (!admin) return json({ message: "Inicia sesión." }, 401);
  if (admin.role !== "admin") return json({ message: "Solo administradores." }, 403);
  try {
    const input = await request.json();
    const id = String(input?.id || "");
    if (!id) return json({ message: "Falta el identificador del post." }, 400);
    const post = normalizeBlogPost(input);
    const db = await getDb();
    const collection = db.collection("blog_posts");
    const { ObjectId } = await import("mongodb");
    if (!ObjectId.isValid(id)) return json({ message: "Post inválido." }, 400);
    const existing = await collection.findOne({ _id: new ObjectId(id) });
    if (!existing) return json({ message: "No se encontró el post." }, 404);
    const now = new Date();
    const publishedAt = post.published ? existing.publishedAt || now : null;
    await collection.updateOne(
      { _id: existing._id },
      { $set: { ...post, updatedAt: now, publishedAt, updatedBy: admin.id } },
    );
    if (existing.slug !== post.slug) {
      await Promise.all([
        db.collection("blog_likes").updateMany(
          { postSlug: existing.slug },
          { $set: { postSlug: post.slug } },
        ),
        db.collection("blog_comments").updateMany(
          { postSlug: existing.slug },
          { $set: { postSlug: post.slug } },
        ),
      ]);
    }
    const removedUrls = blogImageUrls(existing).filter((url) => !blogImageUrls(post).includes(url));
    await removeUnusedImages(db, removedUrls);
    await writeAuditEvent(db, {
      actor: admin,
      action: post.published ? "blog.update" : "blog.unpublish",
      targetType: "blogPost",
      targetId: post.slug,
      details: {
        published: post.published,
        imageCount: post.images.length + Number(Boolean(post.coverImage)),
      },
    });
    return json({ success: true, post: { ...post, id, updatedAt: now, publishedAt } });
  } catch (error) {
    if (slugConflict(error)) return json({ message: "Ya existe una entrada con ese slug." }, 409);
    const message = error instanceof Error ? error.message : "No se pudo actualizar el post.";
    return json({ message }, Number((error as { status?: number })?.status) || 500);
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  const admin = await getEditorUser(request);
  if (!admin) return json({ message: "Inicia sesión." }, 401);
  if (admin.role !== "admin") return json({ message: "Solo administradores." }, 403);
  try {
    const body = await request.json();
    const id = String(body?.id || "");
    const { ObjectId } = await import("mongodb");
    if (!ObjectId.isValid(id)) return json({ message: "Post inválido." }, 400);
    const db = await getDb();
    const collection = db.collection("blog_posts");
    const post = await collection.findOne({ _id: new ObjectId(id) });
    if (!post) return json({ message: "No se encontró el post." }, 404);
    await collection.deleteOne({ _id: post._id });
    await Promise.all([
      db.collection("blog_likes").deleteMany({ postSlug: post.slug }),
      db.collection("blog_comments").deleteMany({ postSlug: post.slug }),
    ]);
    await removeUnusedImages(db, blogImageUrls(post));
    await writeAuditEvent(db, {
      actor: admin,
      action: "blog.delete",
      targetType: "blogPost",
      targetId: post.slug,
      details: { published: Boolean(post.published) },
    });
    return json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo borrar el post.";
    return json({ message }, 500);
  }
};
