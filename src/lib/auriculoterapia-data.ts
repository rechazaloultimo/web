import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { GridFSBucket, ObjectId, type Db } from "mongodb";
import { canEditOwner, getPlanLimits, type EditorUser } from "./auriculoterapia-auth";
import { writeAuditEvent } from "./auriculoterapia-audit";

const IMAGE_BUCKET = "auriculoterapia_images";
const SESSION_COLLECTION = "auriculoterapia_sessions";
const PATIENT_COLLECTION = "auriculoterapia_patients";

function normalizedName(name: string) {
  return name.trim().toLocaleLowerCase("es");
}

export function getSessionNames(session: Record<string, any>) {
  const fields = Object.values(session.forms || {}).flatMap((value) =>
    Array.isArray(value) ? value : [],
  );
  const getValue = (fieldName: string) =>
    String(
      fields.find((field: any) =>
        String(field.id || "")
          .replace(/Col[12]$/, "")
          .startsWith(fieldName),
      )?.value || "",
    ).trim();
  return { patientName: getValue("paciente"), therapistName: getValue("terapeuta") };
}

function imageDataUrl(value: string) {
  const match = value.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,([\s\S]+)$/);
  if (!match) return null;
  return { contentType: match[1], buffer: Buffer.from(match[2], "base64") };
}

async function saveImage(
  db: Db,
  buffer: Buffer,
  contentType: string,
  metadata: Record<string, unknown>,
) {
  const bucket = new GridFSBucket(db, { bucketName: IMAGE_BUCKET });
  const upload = bucket.openUploadStream(`image-${Date.now()}`, {
    contentType,
    metadata,
  });
  await pipeline(Readable.from([buffer]), upload);
  return `/api/auriculoterapia/images/${upload.id.toString()}`;
}

async function normalizeSessionImages(
  db: Db,
  session: Record<string, any>,
  ownerUserId: string,
  limits: ReturnType<typeof getPlanLimits>,
  existingSession?: Record<string, any>,
  allowLegacyOverflow = false,
) {
  for (const sideName of ["IZQUIERDA", "DERECHA"]) {
    const side = session.sides?.[sideName];
    if (!side || !Array.isArray(side.images)) continue;
    const imageCount = side.images.filter(Boolean).length;
    const existingImageCount =
      existingSession?.sides?.[sideName]?.images?.filter(Boolean).length || 0;
    if (
      imageCount > limits.maxImagesPerEar &&
      !allowLegacyOverflow &&
      imageCount > existingImageCount
    ) {
      throw Object.assign(
        new Error(`Tu plan permite ${limits.maxImagesPerEar} imagen por oreja.`),
        {
          status: 403,
        },
      );
    }

    for (let index = 0; index < side.images.length; index += 1) {
      const image = side.images[index];
      if (typeof image !== "string") continue;

      const data = imageDataUrl(image);
      if (data) {
        side.images[index] = await saveImage(db, data.buffer, data.contentType, {
          ownerUserId,
          sessionId: String(session.id),
          side: sideName,
          slot: index,
        });
        continue;
      }

      const imageId = image.match(/\/api\/auriculoterapia\/images\/([a-f\d]{24})$/i)?.[1];
      if (!imageId) {
        throw Object.assign(new Error("La imagen no tiene un identificador válido."), {
          status: 400,
        });
      }
      const stored = await db.collection(`${IMAGE_BUCKET}.files`).findOne({
        _id: new ObjectId(imageId),
      });
      if (!stored || stored.metadata?.ownerUserId !== ownerUserId) {
        throw Object.assign(new Error("No tienes permiso para asociar esta imagen."), {
          status: 403,
        });
      }
    }
  }
}

async function ensurePatient(db: Db, ownerUserId: string, name: string, ownerName: string) {
  const normalized = normalizedName(name);
  let patient = await db
    .collection(PATIENT_COLLECTION)
    .findOne({ ownerUserId, normalizedName: normalized });
  if (!patient) {
    const result = await db.collection(PATIENT_COLLECTION).insertOne({
      ownerUserId,
      ownerName,
      name: name.trim(),
      normalizedName: normalized,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    patient = await db.collection(PATIENT_COLLECTION).findOne({ _id: result.insertedId });
  }
  return patient?._id ?? null;
}

export async function getEditorData(db: Db, user: EditorUser) {
  const sessionCollection = db.collection(SESSION_COLLECTION);
  const ownSessions = await sessionCollection.find({ ownerUserId: user.id }).toArray();
  const allSessions =
    user.role === "admin" || user.plan === "premium"
      ? await sessionCollection.find().sort({ updatedAt: -1 }).toArray()
      : ownSessions;
  const ownerIds = [...new Set(allSessions.map((session) => String(session.ownerUserId)))];
  const ownerObjectIds = ownerIds.filter(ObjectId.isValid).map((id) => new ObjectId(id));
  const owners = ownerObjectIds.length
    ? await db
        .collection("users")
        .find(
          { _id: { $in: ownerObjectIds } },
          { projection: { firstName: 1, lastName: 1, name: 1, email: 1 } },
        )
        .toArray()
    : [];
  const ownerNames = new Map(
    owners.map((owner) => [
      String(owner._id),
      [owner.firstName, owner.lastName].filter(Boolean).join(" ") || owner.name || owner.email,
    ]),
  );
  const visibleOwnerIds = user.role === "admin" || user.plan === "premium" ? ownerIds : [user.id];
  const patients = await db
    .collection(PATIENT_COLLECTION)
    .find({ ownerUserId: user.id })
    .sort({ name: 1 })
    .toArray();
  const sharedPatients =
    visibleOwnerIds.length > 1
      ? await db
          .collection(PATIENT_COLLECTION)
          .find({ ownerUserId: { $in: visibleOwnerIds.filter((id) => id !== user.id) } })
          .sort({ name: 1 })
          .toArray()
      : [];

  return {
    profile: user,
    directory: {
      terapeutas: [
        ...new Set([
          user.name,
          ...allSessions
            .map((item) => item.therapistName || ownerNames.get(String(item.ownerUserId)))
            .filter(Boolean),
        ]),
      ],
      pacientes: patients.map((patient) => patient.name),
      sharedPatients: sharedPatients.map((patient) => ({
        name: patient.name,
        ownerUserId: String(patient.ownerUserId),
        ownerName: ownerNames.get(String(patient.ownerUserId)) || patient.ownerName || "Terapeuta",
      })),
    },
    sessions: allSessions.map((record) => {
      const ownerUserId = String(record.ownerUserId);
      const localId = String(record.localId);
      return {
        ...record.data,
        id: ownerUserId === user.id ? localId : `shared:${ownerUserId}:${localId}`,
        localId,
        ownerUserId,
        ownerName: ownerNames.get(ownerUserId) || record.ownerName || "Terapeuta",
        patientId: record.patientId ? String(record.patientId) : null,
        readOnly: !canEditOwner(user, ownerUserId),
      };
    }),
    needsMigration: ownSessions.length === 0,
  };
}

export async function saveEditorData(
  db: Db,
  user: EditorUser,
  body: { sessions?: unknown; directory?: { pacientes?: unknown } },
  allowLegacyOverflow = false,
) {
  const sessions = Array.isArray(body.sessions) ? body.sessions : [];
  sessions.forEach((session: any) => {
    if (!session || session.readOnly || !session.ownerUserId) return;
    if (
      String(session.ownerUserId) !== user.id &&
      !canEditOwner(user, String(session.ownerUserId))
    ) {
      throw Object.assign(new Error("No puedes escribir datos de otro terapeuta."), {
        status: 403,
      });
    }
  });
  const directoryNames = Array.isArray(body.directory?.pacientes)
    ? body.directory.pacientes.map((name) => String(name).trim()).filter(Boolean)
    : [];
  const namesFromSessions = sessions.flatMap((session: any) => {
    if (!session || session.readOnly) return [];
    const ownerUserId = String(session.ownerUserId || user.id);
    if (!canEditOwner(user, ownerUserId)) return [];
    const { patientName } = getSessionNames(session);
    return patientName ? [patientName] : [];
  });
  const uniquePatientNames = [
    ...new Map(
      [...directoryNames, ...namesFromSessions].map((name) => [normalizedName(name), name]),
    ).values(),
  ];
  const limits = getPlanLimits(user);
  const existingPatientCount = await db.collection(PATIENT_COLLECTION).countDocuments({
    ownerUserId: user.id,
  });
  const existingNames = new Set(
    (
      await db
        .collection(PATIENT_COLLECTION)
        .find({ ownerUserId: user.id })
        .project({ normalizedName: 1 })
        .toArray()
    ).map((patient) => String(patient.normalizedName)),
  );
  const newPatientCount = uniquePatientNames.filter(
    (name) => !existingNames.has(normalizedName(name)),
  ).length;
  if (
    !allowLegacyOverflow &&
    newPatientCount > 0 &&
    existingPatientCount + newPatientCount > limits.maxPatients
  ) {
    throw Object.assign(
      new Error(`El plan ${user.plan} permite hasta ${limits.maxPatients} pacientes.`),
      {
        status: 403,
      },
    );
  }

  const targetOwners = new Set<string>([user.id]);
  sessions.forEach((session: any) => {
    if (session && !session.readOnly) {
      const ownerUserId = String(session.ownerUserId || user.id);
      if (canEditOwner(user, ownerUserId)) targetOwners.add(ownerUserId);
    }
  });

  for (const ownerUserId of targetOwners) {
    const owner = await db.collection("users").findOne({ _id: new ObjectId(ownerUserId) });
    const ownerName = owner
      ? [owner.firstName, owner.lastName].filter(Boolean).join(" ") || owner.name || owner.email
      : user.name;
    const ownerLimits =
      user.role === "admin"
        ? limits
        : ownerUserId === user.id
          ? limits
          : getPlanLimits({
              ...user,
              id: ownerUserId,
              plan: owner?.plan === "classic" || owner?.plan === "premium" ? owner.plan : "free",
              role: "user",
            });
    const patientNamesForOwner =
      ownerUserId === user.id
        ? uniquePatientNames
        : sessions
            .filter((session: any) => String(session?.ownerUserId || user.id) === ownerUserId)
            .map((session: any) => getSessionNames(session).patientName)
            .filter(Boolean);
    const uniqueNamesForOwner = [...new Set(patientNamesForOwner.map(normalizedName))];
    if (
      ownerLimits.maxPatients !== Infinity &&
      uniqueNamesForOwner.length > ownerLimits.maxPatients
    ) {
      throw Object.assign(
        new Error(`El plan de este terapeuta permite hasta ${ownerLimits.maxPatients} pacientes.`),
        {
          status: 403,
        },
      );
    }
    for (const name of patientNamesForOwner) {
      await ensurePatient(db, ownerUserId, name, ownerName);
    }
  }

  const collection = db.collection(SESSION_COLLECTION);
  for (const input of sessions as Record<string, any>[]) {
    if (!input || input.readOnly) continue;
    const ownerUserId = String(input.ownerUserId || user.id);
    if (!canEditOwner(user, ownerUserId)) continue;
    const owner =
      ownerUserId === user.id
        ? user
        : await db
            .collection("users")
            .findOne({ _id: new ObjectId(ownerUserId) })
            .then((record) => ({
              ...user,
              id: ownerUserId,
              plan: record?.plan === "classic" || record?.plan === "premium" ? record.plan : "free",
              role: "user" as const,
            }));
    const data = JSON.parse(JSON.stringify(input));
    const localId = String(data.localId || data.id || "1");
    data.id = localId;
    delete data.ownerUserId;
    delete data.ownerName;
    delete data.patientId;
    delete data.readOnly;
    delete data.localId;
    const existing = await collection.findOne({ ownerUserId, localId });
    await normalizeSessionImages(
      db,
      data,
      ownerUserId,
      getPlanLimits(owner),
      existing?.data,
      allowLegacyOverflow,
    );
    const { patientName, therapistName } = getSessionNames(data);
    const patientId = patientName
      ? await ensurePatient(db, ownerUserId, patientName, owner.name)
      : null;
    await collection.updateOne(
      { ownerUserId, localId },
      {
        $set: {
          ownerUserId,
          ownerName: owner.name,
          localId,
          patientId,
          patientName,
          therapistName: therapistName || owner.name,
          data,
          updatedAt: new Date(),
        },
        $setOnInsert: { createdAt: new Date() },
      },
      { upsert: true },
    );
    const pointCount = ["IZQUIERDA", "DERECHA"].reduce(
      (total, side) =>
        total +
        Object.values(data.sides?.[side]?.pointsByImage || {}).reduce(
          (imageTotal: number, points: any) => imageTotal + Object.keys(points || {}).length,
          0,
        ),
      0,
    );
    const imageCount = ["IZQUIERDA", "DERECHA"].reduce(
      (total, side) => total + (data.sides?.[side]?.images || []).filter(Boolean).length,
      0,
    );
    await writeAuditEvent(db, {
      actor: user,
      action: existing ? "session.update" : "session.create",
      targetType: "session",
      targetId: localId,
      targetOwnerUserId: ownerUserId,
      details: { patientId: patientId ? String(patientId) : null, pointCount, imageCount },
    });
  }

  return getEditorData(db, user);
}

export async function storeUploadedImage(
  db: Db,
  ownerUserId: string,
  sessionId: string,
  side: string,
  slot: number,
  buffer: Buffer,
  contentType: string,
) {
  return saveImage(db, buffer, contentType, { ownerUserId, sessionId, side, slot });
}

export function imageBucket(db: Db) {
  return new GridFSBucket(db, { bucketName: IMAGE_BUCKET });
}

export function imageBucketName() {
  return IMAGE_BUCKET;
}
