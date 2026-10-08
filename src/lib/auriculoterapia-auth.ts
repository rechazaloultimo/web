import { getSession } from "auth-astro/server";
import { ObjectId } from "mongodb";
import { getDb } from "./db";

export type AuriculoterapiaPlan = "free" | "classic" | "premium";
export type AuriculoterapiaRole = "user" | "admin";

export interface EditorUser {
  id: string;
  email: string;
  name: string;
  plan: AuriculoterapiaPlan;
  role: AuriculoterapiaRole;
}

function configuredAdminEmails() {
  return new Set(
    String(import.meta.env.AURICULO_ADMIN_EMAILS || "")
      .split(",")
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean),
  );
}

export async function getEditorUser(request: Request): Promise<EditorUser | null> {
  const session = await getSession(request);
  const email = session?.user?.email?.trim().toLowerCase();
  if (!session?.user || !email) return null;

  const db = await getDb();
  const userCollection = db.collection("users");
  const user = await userCollection.findOne({ email });
  if (!user) return null;

  const role: AuriculoterapiaRole =
    configuredAdminEmails().has(email) || user.role === "admin" ? "admin" : "user";
  const plan: AuriculoterapiaPlan =
    user.plan === "classic" || user.plan === "premium" ? user.plan : "free";
  const name =
    [user.firstName, user.lastName].filter(Boolean).join(" ") || session.user.name || email;

  if (user.role !== role || user.plan !== plan || user.name !== name) {
    await userCollection.updateOne(
      { _id: user._id },
      { $set: { role, plan, name, updatedAt: new Date() } },
    );
  }

  return { id: String(user._id), email, name, plan, role };
}

export function getPlanLimits(user: EditorUser) {
  if (user.role === "admin") {
    return { maxPatients: Infinity, maxImagesPerEar: Infinity, canReadOtherTherapists: true };
  }

  return {
    maxPatients: user.plan === "free" ? 3 : Infinity,
    maxImagesPerEar: user.plan === "free" ? 1 : 3,
    canReadOtherTherapists: user.plan === "premium",
  };
}

export function canReadOwner(user: EditorUser, ownerUserId: string) {
  return user.role === "admin" || user.id === ownerUserId || user.plan === "premium";
}

export function canEditOwner(user: EditorUser, ownerUserId: string) {
  return user.role === "admin" || user.id === ownerUserId;
}

export function asObjectId(id: string) {
  return ObjectId.isValid(id) ? new ObjectId(id) : null;
}
