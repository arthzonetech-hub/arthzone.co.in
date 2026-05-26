"use client";
import React, { useEffect, useRef } from "react";

const topItems = [
  "Web Application Development",
  "Digital Marketing",
  "Graphic & UI/UX Designing",
  "App Development",
];

const bottomItems = [
  "2+ Years of Experience",
  "100% Client Satisfaction",
  "Driving 300% ROI",
  "Globally Recognized Partners",
  "Projects Delivered On Time",
  "Trusted by Growing SaaS & Web Teams",
  "Award Winning UI/UX Design",
];

const starSvg = (
  <img
    src="https://framerusercontent.com/images/InxDM6L8xjRn2ZsMquQwkLQ0VLA.svg"
    alt=""
    className="w-6 h-6 flex-shrink-0"
  />
);

export default function MarqueeSection() {
  const duplicated = (arr: string[]) => [...arr, ...arr, ...arr, ...arr];

  return (
    <section className="pt-10 pb-0 overflow-hidden">
      {/* Top marquee - RTL */}
      <div
        className="py-5 overflow-hidden relative w-full bg-[#1F2122] text-white rotate-0 lg:rotate-[3deg]"
        style={{
          // Keep marquee fade at edges while rotating only on large screens
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgb(0,0,0) 10%, rgb(0,0,0) 90%, rgba(0,0,0,0))",
        }}
      >
        <div className="marquee-track-rtl flex items-center gap-12">
          {duplicated(topItems).map((item, i) => (
            <React.Fragment key={i}>
              <span className="text-2xl font-semibold whitespace-nowrap">
                {item}
              </span>
              {starSvg}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom marquee - LTR */}
      <div
        className="py-5 overflow-hidden relative w-full bg-[#11d7fa] text-white rotate-0 lg:rotate-[-3deg] lg:-translate-y-[60px]"
        style={{
          // Keep marquee fade at edges while rotating only on large screens
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgb(0,0,0) 10%, rgb(0,0,0) 90%, rgba(0,0,0,0))",
        }}
      >
        <div className="marquee-track-ltr flex items-center gap-12">
          {duplicated(bottomItems).map((item, i) => (
            <React.Fragment key={i}>
              <span className="text-2xl font-semibold whitespace-nowrap">
                {item}
              </span>
              {starSvg}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
