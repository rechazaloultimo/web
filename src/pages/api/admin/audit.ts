import type { APIRoute } from "astro";
import { getEditorUser } from "../../../lib/auriculoterapia-auth";
import { getDb } from "../../../lib/db";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export const GET: APIRoute = async ({ request, url }) => {
  const admin = await getEditorUser(request);
  if (!admin) return json({ message: "Inicia sesión." }, 401);
  if (admin.role !== "admin") return json({ message: "Solo administradores." }, 403);

  const requestedLimit = Number(url.searchParams.get("limit") || 100);
  const limit = Math.min(250, Math.max(1, Number.isInteger(requestedLimit) ? requestedLimit : 100));
  const query: Record<string, unknown> = {};
  const ownerUserId = url.searchParams.get("ownerUserId");
  const action = url.searchParams.get("action");
  if (ownerUserId) query.targetOwnerUserId = ownerUserId;
  if (action) query.action = action;

  const events = await (await getDb())
    .collection("auriculoterapia_audit")
    .find(query)
    .sort({ createdAt: -1, _id: -1 })
    .limit(limit)
    .toArray();
  return json({
    events: events.map((event) => ({
      id: String(event._id),
      actorUserId: event.actorUserId,
      actorEmail: event.actorEmail,
      actorRole: event.actorRole,
      action: event.action,
      targetType: event.targetType,
      targetId: event.targetId,
      targetOwnerUserId: event.targetOwnerUserId,
      details: event.details || {},
      createdAt: event.createdAt,
    })),
  });
};
