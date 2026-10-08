import type { APIRoute } from "astro";
import { ObjectId } from "mongodb";
import { getEditorUser } from "../../../lib/auriculoterapia-auth";
import { getDb } from "../../../lib/db";
import { saveEditorData } from "../../../lib/auriculoterapia-data";
import { writeAuditEvent } from "../../../lib/auriculoterapia-audit";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

function fieldValue(data: Record<string, any>, prefix: string) {
  const fields = Object.values(data.forms || {}).flatMap((value) =>
    Array.isArray(value) ? value : [],
  );
  return String(
    fields.find((field: any) =>
      String(field.id || "")
        .replace(/Col[12]$/, "")
        .startsWith(prefix),
    )?.value || "",
  ).trim();
}

export const GET: APIRoute = async ({ request, url }) => {
  const admin = await getEditorUser(request);
  if (!admin) return json({ message: "Inicia sesión." }, 401);
  if (admin.role !== "admin") return json({ message: "Solo administradores." }, 403);

  const db = await getDb();
  const search = url.searchParams.get("q")?.trim().toLocaleLowerCase("es") || "";
  const ownerFilter = url.searchParams.get("ownerUserId");
  const ownerQuery =
    ownerFilter && ObjectId.isValid(ownerFilter) ? { _id: new ObjectId(ownerFilter) } : {};
  const owners = await db
    .collection("users")
    .find(ownerQuery, { projection: { password: 0 } })
    .sort({ firstName: 1, lastName: 1 })
    .limit(500)
    .toArray();
  const ownerNames = new Map(
    owners.map((owner) => [
      String(owner._id),
      [owner.firstName, owner.lastName].filter(Boolean).join(" ") || owner.name || owner.email,
    ]),
  );
  const ownerIds = owners.map((owner) => String(owner._id));
  const patients = await db
    .collection("auriculoterapia_patients")
    .find({ ownerUserId: { $in: ownerIds } })
    .sort({ name: 1 })
    .limit(1000)
    .toArray();
  const patientSessionCounts = await db
    .collection("auriculoterapia_sessions")
    .aggregate([
      { $match: { ownerUserId: { $in: ownerIds }, patientId: { $ne: null } } },
      { $group: { _id: "$patientId", count: { $sum: 1 } } },
    ])
    .toArray();
  const patientCounts = new Map(
    patientSessionCounts.map((entry) => [String(entry._id), entry.count]),
  );
  const sessionQuery =
    ownerFilter && ObjectId.isValid(ownerFilter)
      ? { ownerUserId: ownerFilter }
      : { ownerUserId: { $in: ownerIds } };
  const records = await db
    .collection("auriculoterapia_sessions")
    .find(sessionQuery)
    .sort({ updatedAt: -1 })
    .limit(500)
    .toArray();

  const patientRows = patients.map((patient) => ({
    id: String(patient._id),
    ownerUserId: String(patient.ownerUserId),
    ownerName: ownerNames.get(String(patient.ownerUserId)) || patient.ownerName || "Terapeuta",
    name: patient.name,
    sessionCount: patientCounts.get(String(patient._id)) || 0,
    createdAt: patient.createdAt,
    updatedAt: patient.updatedAt,
  }));
  const sessionRows = records.map((record) => {
    const data = record.data || {};
    const imageCount = ["IZQUIERDA", "DERECHA"].reduce(
      (count, side) => count + (data.sides?.[side]?.images || []).filter(Boolean).length,
      0,
    );
    const pointCount = ["IZQUIERDA", "DERECHA"].reduce(
      (count, side) =>
        count +
        Object.values(data.sides?.[side]?.pointsByImage || {}).reduce(
          (sum: number, points: any) => sum + Object.keys(points || {}).length,
          0,
        ),
      0,
    );
    return {
      id: String(record._id),
      ownerUserId: String(record.ownerUserId),
      ownerName: ownerNames.get(String(record.ownerUserId)) || record.ownerName || "Terapeuta",
      localId: String(record.localId),
      patientId: record.patientId ? String(record.patientId) : null,
      patientName: record.patientName || fieldValue(data, "paciente"),
      therapistName: record.therapistName || fieldValue(data, "terapeuta"),
      date: fieldValue(data, "fecha"),
      sessionNumber: fieldValue(data, "sesion") || String(record.localId),
      imageCount,
      pointCount,
      updatedAt: record.updatedAt,
      data,
    };
  });

  const matches = (value: unknown) =>
    !search ||
    String(value || "")
      .toLocaleLowerCase("es")
      .includes(search);
  return json({
    therapists: owners.map((owner) => ({
      id: String(owner._id),
      name:
        [owner.firstName, owner.lastName].filter(Boolean).join(" ") || owner.name || owner.email,
      email: owner.email,
    })),
    patients: patientRows.filter((patient) => matches(patient.name) || matches(patient.ownerName)),
    sessions: sessionRows.filter(
      (session) =>
        matches(session.patientName) ||
        matches(session.therapistName) ||
        matches(session.ownerName) ||
        matches(session.date),
    ),
  });
};

export const PATCH: APIRoute = async ({ request }) => {
  const admin = await getEditorUser(request);
  if (!admin) return json({ message: "Inicia sesión." }, 401);
  if (admin.role !== "admin") return json({ message: "Solo administradores." }, 403);

  try {
    const body = await request.json();
    const ownerUserId = String(body?.ownerUserId || "");
    const localId = String(body?.localId || "");
    const data = body?.data;
    if (!ObjectId.isValid(ownerUserId) || !localId || !data || typeof data !== "object") {
      return json({ message: "Faltan datos para actualizar la sesión." }, 400);
    }
    const db = await getDb();
    const existing = await db
      .collection("auriculoterapia_sessions")
      .findOne({ ownerUserId, localId });
    if (!existing) return json({ message: "No se encontró la sesión." }, 404);

    const saved = await saveEditorData(db, admin, {
      sessions: [{ ...data, id: localId, localId, ownerUserId, readOnly: false }],
      directory: { pacientes: [] },
    });
    await writeAuditEvent(db, {
      actor: admin,
      action: "admin.session.edit",
      targetType: "session",
      targetId: localId,
      targetOwnerUserId: ownerUserId,
      details: { ownerName: existing.ownerName || null },
    });
    return json({ success: true, sessions: saved.sessions });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo actualizar la sesión.";
    const status = Number((error as { status?: number })?.status) || 500;
    return json({ message }, status);
  }
};
