import { NextRequest, NextResponse } from "next/server";
import { ObjectId, type Document } from "mongodb";
import { getMongoDb } from "@/lib/mongodb";

export const runtime = "nodejs";

const allowedStatuses = new Set([
  "new",
  "screening",
  "shortlisted",
  "interview",
  "task",
  "offer",
  "hired",
  "rejected",
]);

function isAuthorized(request: NextRequest): boolean {
  const token = process.env.CAREERS_ADMIN_TOKEN;
  if (!token) return false;

  const auth = request.headers.get("authorization") || "";
  return auth === `Bearer ${token}`;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const jobSlug = searchParams.get("jobSlug");
  const limit = Math.min(Number(searchParams.get("limit") || 50), 100);

  const filter: Record<string, string> = {};
  if (status) filter["tracking.status"] = status;
  if (jobSlug) filter["job.slug"] = jobSlug;

  const db = await getMongoDb();
  const collection = db.collection("career_applications");

  const [applications, statusPipeline, rolePipeline, total] = await Promise.all([
    collection
      .find(filter, { projection: { "resume.data": 0 } })
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray(),
    collection
      .aggregate([
        { $group: { _id: "$tracking.status", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ])
      .toArray(),
    collection
      .aggregate([
        { $group: { _id: "$job.slug", title: { $first: "$job.title" }, count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ])
      .toArray(),
    collection.countDocuments(filter),
  ]);

  return NextResponse.json({
    success: true,
    total,
    applications: applications.map((application) => ({
      ...application,
      _id: application._id.toString(),
    })),
    analytics: {
      byStatus: statusPipeline,
      byRole: rolePipeline,
    },
  });
}

export async function PATCH(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const body = (await request.json()) as {
    applicationId?: string;
    status?: string;
    stage?: string;
    hrNotes?: string;
    rating?: number;
  };

  if (!body.applicationId || !ObjectId.isValid(body.applicationId)) {
    return NextResponse.json({ error: "Valid applicationId is required." }, { status: 400 });
  }
  if (!body.status || !allowedStatuses.has(body.status)) {
    return NextResponse.json({ error: "Valid status is required." }, { status: 400 });
  }

  const db = await getMongoDb();
  const now = new Date();
  const update: Document = {
    $set: {
      "tracking.status": body.status,
      "tracking.stage": body.stage || body.status,
      "tracking.hrNotes": body.hrNotes || "",
      "tracking.rating": typeof body.rating === "number" ? body.rating : null,
      updatedAt: now,
    },
    $push: {
      "tracking.timeline": {
        status: body.status,
        note: body.hrNotes || `Moved to ${body.status}.`,
        at: now,
      },
    },
  };

  const result = await db.collection("career_applications").updateOne(
    { _id: new ObjectId(body.applicationId) },
    update
  );

  if (!result.matchedCount) {
    return NextResponse.json({ error: "Application not found." }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
