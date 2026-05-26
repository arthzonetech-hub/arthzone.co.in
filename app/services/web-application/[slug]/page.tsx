import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/headers";
import Footer from "@/components/footer";
import MeetingSchedule from "@/components/meeting-schedule";
import WaServicePageClient from "@/components/web-application/wa-service-page-client";
import { WA_SLUGS, getWAContent } from "@/lib/web-application-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return WA_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const c = getWAContent(slug);
  if (!c) return { title: "Not found" };
  return {
    title: c.metaTitle,
    description: c.metaDescription,
  };
}

export default async function WebApplicationServicePage({ params }: Props) {
  const { slug } = await params;
  const content = getWAContent(slug);
  if (!content) notFound();

  return (
    <div
      className="relative min-w-0 overflow-x-hidden text-white"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#101010",
      }}
    >
      <Header />
      <WaServicePageClient content={content} />
      <MeetingSchedule />
      <Footer />
    </div>
  );
}
