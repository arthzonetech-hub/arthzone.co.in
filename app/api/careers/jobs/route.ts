import { NextResponse } from "next/server";
import { careerDepartments, careerJobs } from "@/lib/careers/jobs";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({
    success: true,
    jobs: careerJobs,
    departments: careerDepartments,
    total: careerJobs.length,
  });
}
