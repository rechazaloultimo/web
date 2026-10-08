import type { APIRoute } from "astro";
import { createUser } from "../../lib/users";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const firstName = String(body?.nombre ?? "").trim();
    const lastName = String(body?.apellido ?? "").trim();
    const email = String(body?.email ?? "")
      .trim()
      .toLowerCase();
    const password = String(body?.password ?? "");

    if (!firstName || !email || !password) {
      return new Response(JSON.stringify({ message: "Faltan datos obligatorios." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const user = await createUser({ firstName, lastName, email, password, plan: "free" });

    return new Response(JSON.stringify({ success: true, user }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo crear el usuario.";

    return new Response(JSON.stringify({ message }), {
      status: 409,
      headers: { "Content-Type": "application/json" },
    });
  }
};
