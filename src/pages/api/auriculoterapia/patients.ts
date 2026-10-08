import type { APIRoute } from "astro";
import { getEditorUser, canEditOwner } from "../../../lib/auriculoterapia-auth";
import { getDb } from "../../../lib/db";
import { writeAuditEvent } from "../../../lib/auriculoterapia-audit";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

function normalizeName(value: string) {
  return value.trim().toLocaleLowerCase("es");
}

function replacePatientName(session: Record<string, any>, oldName: string, newName: string) {
  Object.values(session.data?.forms || {}).forEach((fields) => {
    if (!Array.isArray(fields)) return;
    fields.forEach((field: any) => {
      if (
        String(field.id || "")
          .replace(/Col[12]$/, "")
          .startsWith("paciente") &&
        field.value === oldName
      ) {
        field.value = newName;
      }
    });
  });
}

export const PATCH: APIRoute = async ({ request }) => {
  const user = await getEditorUser(request);
  if (!user) return json({ message: "Inicia sesión para modificar pacientes." }, 401);
  try {
    const body = await request.json();
    const ownerUserId = String(body?.ownerUserId || user.id);
    const oldName = String(body?.oldName || "").trim();
    const newName = String(body?.newName || "").trim();
    if (!canEditOwner(user, ownerUserId))
      return json({ message: "No tienes permiso para modificar este paciente." }, 403);
    if (!oldName || !newName) return json({ message: "Indica el nombre actual y el nuevo." }, 400);

    const db = await getDb();
    const patients = db.collection("auriculoterapia_patients");
    const oldKey = normalizeName(oldName);
    const newKey = normalizeName(newName);
    const patient = await patients.findOne({ ownerUserId, normalizedName: oldKey });
    if (!patient) return json({ message: "No se encontró el paciente en este directorio." }, 404);
    const duplicate = await patients.findOne({
      ownerUserId,
      normalizedName: newKey,
      _id: { $ne: patient._id },
    });
    if (duplicate) return json({ message: "Ya existe un paciente con ese nombre." }, 409);

    await patients.updateOne(
      { _id: patient._id },
      { $set: { name: newName, normalizedName: newKey, updatedAt: new Date() } },
    );
    const sessions = await db
      .collection("auriculoterapia_sessions")
      .find({ ownerUserId, patientId: patient._id })
      .toArray();
    for (const session of sessions) {
      replacePatientName(session, oldName, newName);
      await db
        .collection("auriculoterapia_sessions")
        .updateOne(
          { _id: session._id },
          { $set: { patientName: newName, data: session.data, updatedAt: new Date() } },
        );
    }
    await writeAuditEvent(db, {
      actor: user,
      action: "patient.rename",
      targetType: "patient",
      targetId: String(patient._id),
      targetOwnerUserId: ownerUserId,
      details: { sessionsUpdated: sessions.length },
    });
    return json({ success: true, patient: { id: String(patient._id), name: newName } });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo cambiar el nombre.";
    return json({ message }, 500);
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  const user = await getEditorUser(request);
  if (!user) return json({ message: "Inicia sesión para borrar pacientes." }, 401);
  try {
    const body = await request.json();
    const ownerUserId = String(body?.ownerUserId || user.id);
    const name = String(body?.name || "").trim();
    if (!canEditOwner(user, ownerUserId))
      return json({ message: "No tienes permiso para borrar este paciente." }, 403);
    if (!name) return json({ message: "Selecciona un paciente." }, 400);

    const db = await getDb();
    const patient = await db
      .collection("auriculoterapia_patients")
      .findOne({ ownerUserId, normalizedName: normalizeName(name) });
    if (!patient) return json({ message: "No se encontró el paciente en este directorio." }, 404);

    await db
      .collection("auriculoterapia_sessions")
      .updateMany(
        { ownerUserId, patientId: patient._id },
        { $set: { patientId: null, patientName: "", updatedAt: new Date() } },
      );
    await db.collection("auriculoterapia_patients").deleteOne({ _id: patient._id });
    const sessions = await db
      .collection("auriculoterapia_sessions")
      .find({ ownerUserId })
      .toArray();
    for (const session of sessions) {
      Object.values(session.data?.forms || {}).forEach((fields) => {
        if (!Array.isArray(fields)) return;
        fields.forEach((field: any) => {
          if (
            String(field.id || "")
              .replace(/Col[12]$/, "")
              .startsWith("paciente") &&
            field.value === name
          ) {
            field.value = "";
          }
        });
      });
      await writeAuditEvent(db, {
        actor: user,
        action: "patient.delete",
        targetType: "patient",
        targetId: String(patient._id),
        targetOwnerUserId: ownerUserId,
        details: { sessionsUpdated: sessions.length },
      });
      await db
        .collection("auriculoterapia_sessions")
        .updateOne({ _id: session._id }, { $set: { data: session.data, updatedAt: new Date() } });
    }
    return json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo borrar el paciente.";
    return json({ message }, 500);
  }
};
