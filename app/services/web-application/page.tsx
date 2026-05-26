import React from "react";
import Header from "@/components/headers";
import Footer from "@/components/footer";
import MeetingSchedule from "@/components/meeting-schedule";
import WaHubCards from "@/components/web-application/wa-hub-cards";
import { contactHeroBackground } from "@/lib/contact-backdrop";

export const metadata = {
  title: "Web Application Development | Arthzone",
  description:
    "SaaS products, custom portals, Next.js apps, APIs, PWAs, and high-converting websites — built for performance and growth.",
};

export default function WebApplicationHubPage() {
  return (
    <div
      className="relative min-w-0 overflow-x-hidden text-white"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#101010",
      }}
    >
      <Header />

      <section
        className="relative overflow-hidden px-4 pb-14 pt-28 text-white sm:px-6 sm:pb-16 sm:pt-32 md:px-10 md:pb-20 md:pt-40 lg:px-16 lg:pb-24 lg:pt-44"
        style={contactHeroBackground}
      >
        <div className="relative z-[1] mx-auto max-w-[1280px] text-center">
          <h5 className="mb-3 inline-block rounded-full bg-[#11d7fa] px-5 py-2.5 text-sm font-semibold text-[#101010] sm:text-base">
            Web application development
          </h5>
          <h1 className="mx-auto mb-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            SaaS, portals, and websites engineered for scale
          </h1>
          <p className="mx-auto max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
            From subscription products to customer dashboards and marketing sites — explore each
            capability and pick what matches your roadmap.
          </p>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Explore web services
          </h2>
          <WaHubCards />
        </div>
      </section>

      <MeetingSchedule />
      <Footer />
    </div>
  );
}
