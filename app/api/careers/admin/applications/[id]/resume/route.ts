import { NextRequest, NextResponse } from "next/server";
import { Binary, ObjectId } from "mongodb";
import { getMongoDb } from "@/lib/mongodb";

export const runtime = "nodejs";

interface ResumeRouteProps {
  params: Promise<{ id: string }>;
}

function isAuthorized(request: NextRequest): boolean {
  const token = process.env.CAREERS_ADMIN_TOKEN;
  if (!token) return false;

  const auth = request.headers.get("authorization") || "";
  return auth === `Bearer ${token}`;
}

export async function GET(request: NextRequest, { params }: ResumeRouteProps) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid application id." }, { status: 400 });
  }

  const db = await getMongoDb();
  const application = await db.collection("career_applications").findOne(
    { _id: new ObjectId(id) },
    {
      projection: {
        "resume.fileName": 1,
        "resume.contentType": 1,
        "resume.data": 1,
      },
    }
  );

  if (!application?.resume?.data) {
    return NextResponse.json({ error: "Resume not found." }, { status: 404 });
  }

  const data =
    application.resume.data instanceof Binary
      ? application.resume.data.buffer
      : application.resume.data;
  const fileName = String(application.resume.fileName || "resume.pdf").replace(
    /["\r\n]/g,
    ""
  );

  return new NextResponse(data, {
    headers: {
      "Content-Type": application.resume.contentType || "application/octet-stream",
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
