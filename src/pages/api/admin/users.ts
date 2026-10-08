import type { APIRoute } from "astro";
import { GridFSBucket, ObjectId } from "mongodb";
import { getEditorUser } from "../../../lib/auriculoterapia-auth";
import { getDb } from "../../../lib/db";
import { writeAuditEvent } from "../../../lib/auriculoterapia-audit";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export const GET: APIRoute = async ({ request }) => {
  const admin = await getEditorUser(request);
  if (!admin) return json({ message: "Inicia sesión." }, 401);
  if (admin.role !== "admin")
    return json({ message: "Solo un administrador puede ver usuarios." }, 403);
  const users = await (
    await getDb()
  )
    .collection("users")
    .find({}, { projection: { password: 0 } })
    .sort({ createdAt: -1 })
    .toArray();
  return json({
    users: users.map((user) => ({
      id: String(user._id),
      name: [user.firstName, user.lastName].filter(Boolean).join(" ") || user.name || user.email,
      email: user.email,
      plan: user.plan === "classic" || user.plan === "premium" ? user.plan : "free",
      role: user.role === "admin" ? "admin" : "user",
      createdAt: user.createdAt,
    })),
  });
};

export const PATCH: APIRoute = async ({ request }) => {
  const admin = await getEditorUser(request);
  if (!admin) return json({ message: "Inicia sesión." }, 401);
  if (admin.role !== "admin")
    return json({ message: "Solo un administrador puede cambiar usuarios." }, 403);
  try {
    const body = await request.json();
    const id = String(body?.id || "");
    if (!ObjectId.isValid(id)) return json({ message: "Usuario inválido." }, 400);

    const hasPlan = body?.plan !== undefined;
    const hasRole = body?.role !== undefined;
    if (!hasPlan && !hasRole) return json({ message: "No hay cambios para guardar." }, 400);

    const updates: Record<string, string | Date> = { updatedAt: new Date() };
    if (hasPlan) {
      const plan = String(body.plan);
      if (!["free", "classic", "premium"].includes(plan)) {
        return json({ message: "Plan inválido." }, 400);
      }
      updates.plan = plan;
    }

    if (hasRole) {
      const role = String(body.role);
      if (!["user", "admin"].includes(role)) {
        return json({ message: "Rol inválido." }, 400);
      }
      updates.role = role;
    }

    const db = await getDb();
    const users = db.collection("users");
    const target = await users.findOne({ _id: new ObjectId(id) });
    if (!target) return json({ message: "No se encontró el usuario." }, 404);

    if (hasRole && body.role === "user") {
      const email = String(target.email || "").trim().toLowerCase();
      const configuredAdmins = new Set(
        String(import.meta.env.AURICULO_ADMIN_EMAILS || "")
          .split(",")
          .map((value) => value.trim().toLowerCase())
          .filter(Boolean),
      );
      if (id === admin.id || configuredAdmins.has(email)) {
        return json({ message: "No puedes quitar el rol al administrador principal." }, 400);
      }
      if (target.role === "admin") {
        const otherAdmins = await users.countDocuments({
          _id: { $ne: target._id },
          role: "admin",
        });
        if (!otherAdmins) {
          return json({ message: "Debe quedar al menos un administrador." }, 409);
        }
      }
    }

    await users.updateOne({ _id: target._id }, { $set: updates });
    if (hasPlan) {
      await writeAuditEvent(db, {
        actor: admin,
        action: "user.plan.update",
        targetType: "user",
        targetId: id,
        targetOwnerUserId: id,
        details: { plan: updates.plan },
      });
    }
    if (hasRole) {
      await writeAuditEvent(db, {
        actor: admin,
        action: "user.role.update",
        targetType: "user",
        targetId: id,
        targetOwnerUserId: id,
        details: { role: updates.role },
      });
    }
    return json({
      success: true,
      id,
      ...(hasPlan ? { plan: updates.plan } : {}),
      ...(hasRole ? { role: updates.role } : {}),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo actualizar el usuario.";
    return json({ message }, 500);
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  const admin = await getEditorUser(request);
  if (!admin) return json({ message: "Inicia sesión." }, 401);
  if (admin.role !== "admin")
    return json({ message: "Solo un administrador puede borrar cuentas." }, 403);
  try {
    const body = await request.json();
    const id = String(body?.id || "");
    if (!ObjectId.isValid(id)) return json({ message: "Usuario inválido." }, 400);
    if (id === admin.id)
      return json({ message: "No puedes borrar tu propia cuenta de administrador." }, 400);

    const db = await getDb();
    const ownerUserId = id;
    const bucket = new GridFSBucket(db, { bucketName: "auriculoterapia_images" });
    const files = await db
      .collection("auriculoterapia_images.files")
      .find({ "metadata.ownerUserId": ownerUserId })
      .toArray();
    await Promise.all(files.map((file) => bucket.delete(file._id)));
    await Promise.all([
      db.collection("auriculoterapia_sessions").deleteMany({ ownerUserId }),
      db.collection("auriculoterapia_patients").deleteMany({ ownerUserId }),
      db.collection("accounts").deleteMany({ userId: new ObjectId(id) }),
      db.collection("sessions").deleteMany({ userId: new ObjectId(id) }),
      db.collection("users").deleteOne({ _id: new ObjectId(id) }),
    ]);
    await writeAuditEvent(db, {
      actor: admin,
      action: "user.delete",
      targetType: "user",
      targetId: id,
      targetOwnerUserId: id,
      details: { imagesDeleted: files.length },
    });
    return json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo borrar la cuenta.";
    return json({ message }, 500);
  }
};
