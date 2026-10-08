import { MongoClient } from "mongodb";

const uri = import.meta.env.MONGODB_URI || "mongodb://127.0.0.1:27017/auriculoterapia";

let client: MongoClient | null = null;
let indexesReady: Promise<void> | null = null;

async function ensureAuriculoterapiaIndexes(db: Awaited<ReturnType<MongoClient["db"]>>) {
  if (!indexesReady) {
    indexesReady = Promise.all([
      db.collection("users").createIndex(
        { email: 1 },
        {
          unique: true,
          sparse: true,
          name: "users_email_unique",
          //collation: { locale: "en", strength: 2 },
        },
      ),
      db
        .collection("auriculoterapia_patients")
        .createIndex(
          { ownerUserId: 1, normalizedName: 1 },
          { unique: true, name: "patients_owner_name_unique" },
        ),
      db
        .collection("auriculoterapia_patients")
        .createIndex({ ownerUserId: 1, name: 1 }, { name: "patients_owner_name" }),
      db
        .collection("auriculoterapia_sessions")
        .createIndex(
          { ownerUserId: 1, localId: 1 },
          { unique: true, name: "sessions_owner_local_id_unique" },
        ),
      db
        .collection("auriculoterapia_sessions")
        .createIndex({ ownerUserId: 1, updatedAt: -1 }, { name: "sessions_owner_updated" }),
      db
        .collection("auriculoterapia_sessions")
        .createIndex({ patientId: 1, updatedAt: -1 }, { name: "sessions_patient_updated" }),
      db
        .collection("auriculoterapia_audit")
        .createIndex({ actorUserId: 1, createdAt: -1 }, { name: "audit_actor_created" }),
      db
        .collection("auriculoterapia_audit")
        .createIndex({ targetOwnerUserId: 1, createdAt: -1 }, { name: "audit_owner_created" }),
      db
        .collection("auriculoterapia_audit")
        .createIndex({ action: 1, createdAt: -1 }, { name: "audit_action_created" }),
      db
        .collection("blog_posts")
        .createIndex({ slug: 1 }, { unique: true, name: "blog_slug_unique" }),
      db
        .collection("blog_posts")
        .createIndex({ published: 1, publishedAt: -1 }, { name: "blog_published_date" }),
      db.collection("blog_posts").createIndex({ updatedAt: -1 }, { name: "blog_updated_date" }),
      db
        .collection("blog_likes")
        .createIndex({ postSlug: 1, userId: 1 }, { unique: true, name: "blog_like_user_post_unique" }),
      db
        .collection("blog_comments")
        .createIndex({ postSlug: 1, createdAt: -1 }, { name: "blog_comments_post_created" }),
      db
        .collection("blog_comments")
        .createIndex({ userId: 1, createdAt: -1 }, { name: "blog_comments_user_created" }),
      db
        .collection("auriculoterapia_images.files")
        .createIndex(
          { "metadata.ownerUserId": 1, "metadata.sessionId": 1, "metadata.side": 1 },
          { name: "images_owner_session_side" },
        ),
    ])
      .then(() => undefined)
      .catch((error) => {
        indexesReady = null;
        throw new Error(`No se pudieron crear los índices de Auriculoterapia: ${String(error)}`);
      });
  }
  await indexesReady;
}

export async function getMongoClient(): Promise<MongoClient | null> {
  if (!client) {
    try {
      client = new MongoClient(uri);
      await client.connect();
    } catch (error) {
      console.warn("MongoDB no disponible; continuando sin base de datos:", error);
      return null;
    }
  }

  return client;
}

export async function getDb() {
  const mongo = await getMongoClient();
  if (!mongo) {
    throw new Error("MongoDB no está disponible en este momento.");
  }

  const db = mongo.db("auriculoterapia");
  await ensureAuriculoterapiaIndexes(db);
  return db;
}
