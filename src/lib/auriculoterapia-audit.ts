import type { Db } from "mongodb";
import type { EditorUser } from "./auriculoterapia-auth";

export interface AuditEventInput {
  actor: EditorUser;
  action: string;
  targetType: "session" | "patient" | "user" | "image" | "blogPost" | "blogComment";
  targetId?: string;
  targetOwnerUserId?: string;
  details?: Record<string, string | number | boolean | null>;
}

export async function writeAuditEvent(db: Db, event: AuditEventInput) {
  await db.collection("auriculoterapia_audit").insertOne({
    actorUserId: event.actor.id,
    actorEmail: event.actor.email,
    actorRole: event.actor.role,
    action: event.action,
    targetType: event.targetType,
    targetId: event.targetId || null,
    targetOwnerUserId: event.targetOwnerUserId || event.actor.id,
    details: event.details || {},
    createdAt: new Date(),
  });
}
