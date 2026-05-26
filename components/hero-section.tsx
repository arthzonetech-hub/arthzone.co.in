"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section relative w-full min-w-0 text-white overflow-x-clip">
      <div className="max-w-420 mx-auto w-full min-w-0 px-4 sm:px-8 md:px-12 lg:px-16 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
        <div className="flex items-center justify-center text-center">
          <div className="w-full">
            <span className="inline-block bg-[#11d7fa] text-white px-3 py-1 md:px-4 md:py-1.5 rounded-lg text-sm md:text-lg font-semibold leading-relaxed capitalize">
              Elevate Your Digital Presence with Arthzone
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight capitalize mt-3 mb-3 md:mt-4 md:mb-4">
              Your Brand's Next Chapter.
              <br />
              Digitally Mastered.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed max-w-[800px] mx-auto px-2">
              From SaaS and web apps to captivating designs, we craft
              on-time, on-budget solutions that bring your business vision to
              life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5 mt-5 md:mt-6">
              <a
                href="https://app.cal.com/arthzone-tech"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 h-[52px] md:h-[60px] bg-[#7614EF] border-2 border-[#7614EF] text-white rounded-xl text-base md:text-xl font-semibold transition-all duration-300 hover:bg-white hover:text-[#7614EF]"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Book a Call
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 h-[52px] md:h-[60px] bg-[#ff531a] border-2 border-[#ff531a] text-white rounded-xl text-base md:text-xl font-semibold transition-all duration-300 hover:bg-white hover:text-[#ff531a]"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
