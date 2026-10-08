import bcrypt from "bcryptjs";
import { getDb } from "./db";

export type UserPlan = "free" | "classic" | "premium";
export type UserRole = "user" | "admin";

export interface CreateUserInput {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  plan?: UserPlan;
  role?: UserRole;
}

export async function createUser({
  firstName,
  lastName = "",
  email,
  password,
  plan = "free",
  role = "user",
}: CreateUserInput) {
  const db = await getDb();
  const normalizedEmail = email.trim().toLowerCase();

  const existing = await db.collection("users").findOne({ email: normalizedEmail });
  if (existing) {
    throw new Error("Ya existe un usuario con este email.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await db.collection("users").insertOne({
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: normalizedEmail,
    password: hashedPassword,
    plan,
    role,
    name: [firstName.trim(), lastName.trim()].filter(Boolean).join(" "),
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return {
    id: result.insertedId.toString(),
    firstName,
    lastName,
    email: normalizedEmail,
    plan,
    role,
  };
}
