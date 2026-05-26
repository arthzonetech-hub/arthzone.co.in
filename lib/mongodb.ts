import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
const dbName = process.env.MONGODB_DB || "arthzone";

declare global {
  var __arthzoneMongoClientPromise: Promise<MongoClient> | undefined;
}

export async function getMongoDb(): Promise<Db> {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (!global.__arthzoneMongoClientPromise) {
    const client = new MongoClient(uri);
    global.__arthzoneMongoClientPromise = client.connect();
  }

  const client = await global.__arthzoneMongoClientPromise;
  return client.db(dbName);
}
