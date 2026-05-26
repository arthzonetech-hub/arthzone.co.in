import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/headers";
import Footer from "@/components/footer";
import MeetingSchedule from "@/components/meeting-schedule";
import DmServicePageClient from "@/components/digital-marketing/dm-service-page-client";
import {
  DM_SLUGS,
  getDMContent,
} from "@/lib/digital-marketing-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return DM_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const c = getDMContent(slug);
  if (!c) return { title: "Not found" };
  return {
    title: c.metaTitle,
    description: c.metaDescription,
  };
}

export default async function DigitalMarketingServicePage({ params }: Props) {
  const { slug } = await params;
  const content = getDMContent(slug);
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
      <DmServicePageClient content={content} />
      <MeetingSchedule />
      <Footer />
    </div>
  );
}
