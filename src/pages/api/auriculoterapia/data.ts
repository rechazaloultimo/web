import type { APIRoute } from "astro";
import { getDb } from "../../../lib/db";
import { getEditorUser } from "../../../lib/auriculoterapia-auth";
import { getEditorData, saveEditorData } from "../../../lib/auriculoterapia-data";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

async function getUser(request: Request) {
  return getEditorUser(request);
}

export const GET: APIRoute = async ({ request }) => {
  const user = await getUser(request);
  if (!user) return json({ message: "Inicia sesión para acceder al editor." }, 401);
  try {
    return json(await getEditorData(await getDb(), user));
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudieron cargar los datos.";
    return json({ message }, 500);
  }
};

export const POST: APIRoute = async ({ request }) => {
  const user = await getUser(request);
  if (!user) return json({ message: "Inicia sesión para importar tus datos." }, 401);
  try {
    const db = await getDb();
    const existing = await db.collection("auriculoterapia_sessions").countDocuments({
      ownerUserId: user.id,
    });
    if (existing) return json(await getEditorData(db, user), 200);
    const body = await request.json();
    return json(await saveEditorData(db, user, body, true), 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudieron importar los datos.";
    const status = Number((error as { status?: number })?.status) || 400;
    return json({ message }, status);
  }
};

export const PUT: APIRoute = async ({ request }) => {
  const user = await getUser(request);
  if (!user) return json({ message: "Inicia sesión para guardar datos." }, 401);
  try {
    const body = await request.json();
    return json(await saveEditorData(await getDb(), user, body));
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudieron guardar los datos.";
    const status = Number((error as { status?: number })?.status) || 400;
    return json({ message }, status);
  }
};
