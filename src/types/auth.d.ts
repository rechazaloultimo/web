import type { DefaultSession } from "@auth/core/types";

type AuriculoterapiaPlan = "free" | "classic" | "premium";
type AuriculoterapiaRole = "user" | "admin";

declare module "@auth/core/types" {
  interface Session {
    user: {
      id: string;
      plan: AuriculoterapiaPlan;
      role: AuriculoterapiaRole;
    } & DefaultSession["user"];
  }

  interface User {
    plan?: AuriculoterapiaPlan;
    role?: AuriculoterapiaRole;
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    plan?: AuriculoterapiaPlan;
    role?: AuriculoterapiaRole;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    plan?: AuriculoterapiaPlan;
    role?: AuriculoterapiaRole;
  }
}

export {};
