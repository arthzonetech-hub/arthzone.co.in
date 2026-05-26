"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CalendarIcon, AtSymbolIcon } from "@heroicons/react/24/outline";
import type { WAFAQ } from "@/lib/web-application-content";

export default function WaStickyFaq({ faqs, badge }: { faqs: WAFAQ[]; badge: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-white/10 bg-[#101010] px-4 py-16 sm:px-6 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:max-w-lg">
            <span className="mb-4 inline-block rounded-lg bg-[#11d7fa] px-4 py-1.5 text-sm font-semibold text-[#101010]">
              {badge}
            </span>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
              Quick answers about web apps, timelines, and how we work. Reach out if you need
              something specific.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://cal.com/arthzone-tech"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-xl border-2 border-[#7614EF] bg-[#7614EF] px-6 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#7614EF]"
              >
                <CalendarIcon className="h-5 w-5 shrink-0" aria-hidden />
                Book a Call
              </a>
              <Link
                href="/contact"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-xl border-2 border-[#ff531a] bg-[#ff531a] px-6 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#ff531a]"
              >
                <AtSymbolIcon className="h-5 w-5 shrink-0" aria-hidden />
                Contact Us
              </Link>
            </div>
          </div>

          <div className="min-w-0 space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.q}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-[#11d7fa] bg-[#11d7fa]/5"
                      : "border-gray-800 bg-[#181818] hover:border-gray-600"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                    aria-expanded={isOpen}
                    suppressHydrationWarning
                  >
                    <span
                      className={`text-base font-semibold md:text-lg ${
                        isOpen ? "text-[#11d7fa]" : "text-white"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg font-bold transition-colors ${
                        isOpen
                          ? "border-[#11d7fa] bg-[#11d7fa] text-[#101010]"
                          : "border-gray-600 text-white"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-gray-400 md:px-6 md:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
