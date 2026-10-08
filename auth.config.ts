import Credentials from "@auth/core/providers/credentials";
import Google from "@auth/core/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { defineConfig } from "auth-astro";
import bcrypt from "bcryptjs";
import { getMongoClient } from "./src/lib/db";

const mongoClient = await getMongoClient().catch(() => null);
const mongoAdapter = mongoClient ? MongoDBAdapter(mongoClient) : undefined;
const adminEmails = new Set(
  String(import.meta.env.AURICULO_ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean),
);

function getUserRole(email: string, currentRole?: unknown) {
  return adminEmails.has(email.toLowerCase()) || currentRole === "admin" ? "admin" : "user";
}

export default defineConfig({
  secret: import.meta.env.AUTH_SECRET || "dev-secret-auriculoterapia-change-me",
  trustHost: true,
  adapter: mongoAdapter,
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: import.meta.env.GOOGLE_CLIENT_ID || "",
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Credentials({
      name: "Credenciales",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        const email = String(credentials?.email ?? "")
          .trim()
          .toLowerCase();
        const password = String(credentials?.password ?? "");

        if (!email || !password) {
          return null;
        }

        const mongo = await getMongoClient();
        if (!mongo) {
          return null;
        }

        const db = mongo.db("auriculoterapia");
        const user = await db.collection("users").findOne({ email });

        if (!user || !user.password) {
          return null;
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
          return null;
        }

        const role = getUserRole(email, user.role);
        const plan = user.plan === "classic" || user.plan === "premium" ? user.plan : "free";
        if (user.role !== role || user.plan !== plan) {
          await db.collection("users").updateOne({ _id: user._id }, { $set: { role, plan } });
        }

        return {
          id: String(user._id),
          name: [user.firstName, user.lastName].filter(Boolean).join(" ") || user.email,
          email: user.email,
          image: user.image ?? null,
          firstName: user.firstName ?? "",
          lastName: user.lastName ?? "",
          plan,
          role,
        };
      },
    }),
  ],
  events: {
    async createUser({ user }) {
      const email = user.email?.trim().toLowerCase();
      if (!email) return;
      const mongo = await getMongoClient();
      if (!mongo) return;
      await mongo
        .db("auriculoterapia")
        .collection("users")
        .updateOne(
          { email },
          {
            $set: {
              role: getUserRole(email),
              plan: "free",
              name: user.name || email,
            },
          },
        );
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = String(user.id ?? user._id ?? "");
        token.plan = user.plan === "classic" || user.plan === "premium" ? user.plan : "free";
        token.role = getUserRole(String(user.email || ""), user.role);
      }
      return token;
    },
    async session({ session, user, token }) {
      if (session.user) {
        const email = String(user?.email || session.user.email || "").toLowerCase();
        session.user.id = String(token.sub ?? user?.id ?? user?._id ?? session.user.id ?? "");
        session.user.plan =
          token.plan === "classic" || token.plan === "premium"
            ? token.plan
            : user?.plan === "classic" || user?.plan === "premium"
              ? user.plan
              : "free";
        session.user.role = getUserRole(email, token.role);
      }

      return session;
    },
  },
});
