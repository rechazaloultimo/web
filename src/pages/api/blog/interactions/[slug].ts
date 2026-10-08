import type { APIRoute } from "astro";
import { ObjectId } from "mongodb";
import { getEditorUser } from "../../../../lib/auriculoterapia-auth";
import { getDb } from "../../../../lib/db";
import { writeAuditEvent } from "../../../../lib/auriculoterapia-audit";

type StaticPost = { slug?: string };

const staticPostSlugs = new Set(
  Object.values(
    import.meta.glob<StaticPost>("../../../../data/blog/*.ts", {
      eager: true,
      import: "default",
    }),
  ).map((post) => String(post.slug || "")),
);

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

function validSlug(slug: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

async function publishedPostExists(db: Awaited<ReturnType<typeof getDb>>, slug: string) {
  if (staticPostSlugs.has(slug)) return true;
  return Boolean(
    await db.collection("blog_posts").findOne({ slug, published: true }, { projection: { _id: 1 } }),
  );
}

export const GET: APIRoute = async ({ params, request }) => {
  const slug = String(params.slug || "");
  if (!validSlug(slug)) return json({ message: "Entrada no encontrada." }, 404);

  try {
    const db = await getDb();
    if (!(await publishedPostExists(db, slug))) return json({ message: "Entrada no encontrada." }, 404);
    const user = await getEditorUser(request).catch(() => null);
    const [likesCount, liked, comments] = await Promise.all([
      db.collection("blog_likes").countDocuments({ postSlug: slug }),
      user
        ? db.collection("blog_likes").findOne({ postSlug: slug, userId: user.id }, { projection: { _id: 1 } })
        : null,
      db
        .collection("blog_comments")
        .find({ postSlug: slug })
        .sort({ createdAt: -1 })
        .limit(50)
        .toArray(),
    ]);

    return json({
      authenticated: Boolean(user),
      likesCount,
      likedByMe: Boolean(liked),
      comments: comments.map((comment) => ({
        id: String(comment._id),
        authorName: String(comment.authorName || "Usuario"),
        text: String(comment.text || ""),
        createdAt: comment.createdAt,
        canDelete: Boolean(user && (user.role === "admin" || user.id === comment.userId)),
      })),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudieron cargar las interacciones.";
    return json({ message }, 500);
  }
};

export const POST: APIRoute = async ({ params, request }) => {
  const user = await getEditorUser(request);
  if (!user) return json({ message: "Inicia sesión para participar." }, 401);

  const slug = String(params.slug || "");
  if (!validSlug(slug)) return json({ message: "Entrada no encontrada." }, 404);

  try {
    const body = await request.json();
    const db = await getDb();
    if (!(await publishedPostExists(db, slug))) return json({ message: "Entrada no encontrada." }, 404);

    if (body?.action === "like") {
      const likes = db.collection("blog_likes");
      const removed = await likes.deleteOne({ postSlug: slug, userId: user.id });
      let liked = false;
      if (!removed.deletedCount) {
        try {
          await likes.insertOne({ postSlug: slug, userId: user.id, createdAt: new Date() });
          liked = true;
        } catch (error) {
          if (!(error && typeof error === "object" && "code" in error && error.code === 11000)) {
            throw error;
          }
          liked = true;
        }
      }
      return json({
        liked,
        likesCount: await likes.countDocuments({ postSlug: slug }),
      });
    }

    if (body?.action === "comment") {
      const text = String(body.text || "").trim();
      if (!text || text.length > 2000) {
        return json({ message: "El comentario debe tener entre 1 y 2.000 caracteres." }, 400);
      }
      const createdAt = new Date();
      const result = await db.collection("blog_comments").insertOne({
        postSlug: slug,
        userId: user.id,
        authorName: user.name,
        text,
        createdAt,
      });
      return json(
        {
          comment: {
            id: String(result.insertedId),
            authorName: user.name,
            text,
            createdAt,
            canDelete: true,
          },
        },
        201,
      );
    }

    return json({ message: "Acción no válida." }, 400);
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo guardar la interacción.";
    return json({ message }, 500);
  }
};

export const DELETE: APIRoute = async ({ params, request }) => {
  const user = await getEditorUser(request);
  if (!user) return json({ message: "Inicia sesión para moderar comentarios." }, 401);

  const slug = String(params.slug || "");
  if (!validSlug(slug)) return json({ message: "Entrada no encontrada." }, 404);

  try {
    const body = await request.json();
    const commentId = String(body?.commentId || "");
    if (!ObjectId.isValid(commentId)) return json({ message: "Comentario inválido." }, 400);

    const db = await getDb();
    const comments = db.collection("blog_comments");
    const comment = await comments.findOne({ _id: new ObjectId(commentId), postSlug: slug });
    if (!comment) return json({ message: "No se encontró el comentario." }, 404);
    if (user.role !== "admin" && user.id !== comment.userId) {
      return json({ message: "Solo puedes borrar tus propios comentarios." }, 403);
    }

    await comments.deleteOne({ _id: comment._id });
    await writeAuditEvent(db, {
      actor: user,
      action: "blog.comment.delete",
      targetType: "blogComment",
      targetId: commentId,
      targetOwnerUserId: String(comment.userId),
      details: { postSlug: slug },
    });
    return json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo borrar el comentario.";
    return json({ message }, 500);
  }
};