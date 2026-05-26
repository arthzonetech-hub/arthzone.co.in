"use client";
import React from "react";
import { meetingMobileCtaBackground } from "@/lib/contact-backdrop";

function CtaCopy({ className = "" }: { className?: string }) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="px-2 text-2xl font-bold capitalize leading-snug tracking-tight text-white sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight lg:text-5xl xl:text-[54px] xl:leading-[1.1]">
        Connect. Collaborate. Create.
      </h2>
      <p className="mx-auto mt-3 max-w-[700px] px-2 text-base font-normal leading-relaxed text-white/90 sm:mt-4 sm:text-lg md:text-xl md:leading-[1.6]">
        Ready to elevate your brand and drive growth? Schedule a call with our
        experts to discuss your vision and turn it into a reality.
      </p>
      <div className="mt-5 flex flex-col items-stretch justify-center gap-3 sm:mt-6 sm:flex-row sm:items-center sm:gap-5">
        <a
          href="https://cal.com/arthzone-tech"
          className="inline-flex h-[52px] min-h-[52px] w-full max-w-full items-center justify-center gap-2.5 rounded-xl border-2 border-[#7614EF] bg-[#7614EF] px-5 text-base font-semibold text-white no-underline transition-[transform,colors] duration-300 hover:bg-white hover:text-[#7614EF] sm:h-[60px] sm:min-w-[200px] sm:w-auto sm:px-[26px] sm:text-lg md:text-xl"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            className="shrink-0 sm:h-6 sm:w-6"
            stroke="currentColor"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Book a Call
        </a>
        <a
          href="/contact"
          className="inline-flex h-[52px] min-h-[52px] w-full max-w-full items-center justify-center gap-2.5 rounded-xl border-2 border-[#ff531a] bg-[#ff531a] px-5 text-base font-semibold text-white no-underline transition-[transform,colors] duration-300 hover:bg-white hover:text-[#ff531a] sm:h-[60px] sm:min-w-[200px] sm:w-auto sm:px-[26px] sm:text-lg md:text-xl"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            className="shrink-0 sm:h-6 sm:w-6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
          </svg>
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default function MeetingSchedule() {
  const iconBlocks = Array.from({ length: 22 });
  const mobileBlocks = Array.from({ length: 42 });

  return (
    <>
      {/* Mobile / small screens: readable type + stacked CTAs */}
      <section
        className="relative overflow-hidden py-12 text-white sm:py-16 md:hidden"
        style={{
          ...meetingMobileCtaBackground,
          paddingLeft: "max(1rem, env(safe-area-inset-left))",
          paddingRight: "max(1rem, env(safe-area-inset-right))",
        }}
      >
        <CtaCopy />
      </section>

      {/* md+: original icon grid */}
      <section className="hidden py-12 text-white md:block md:py-20 lg:py-[100px]">
        <div
          style={{
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0), rgb(0,0,0) 20%, rgb(0,0,0) 80%, rgba(0,0,0,0))",
          }}
        >
          <div
            className="min-w-0 justify-center px-3 sm:px-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(16, minmax(0, 1fr))",
              gap: "6px",
            }}
          >
            <div
              style={{
                gridArea: "2 / 5 / span 4 / span 8",
                background: "#101010",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="w-full min-w-0 py-3 sm:py-4">
                <CtaCopy className="px-2 sm:px-3 md:px-4" />
              </div>
            </div>

            {iconBlocks?.map((_, i) => (
              <div
                key={i}
                style={{
                  background: "#181A1B",
                  borderRadius: "8px",
                  aspectRatio: "1 / 1",
                }}
              />
            ))}
            {mobileBlocks?.map((_, i) => (
              <div
                key={`m-${i}`}
                style={{
                  background: "#181A1B",
                  borderRadius: "8px",
                  aspectRatio: "1 / 1",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
