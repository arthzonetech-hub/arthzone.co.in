"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { DMSlug } from "@/lib/digital-marketing-content";
import { DIGITAL_MARKETING_PAGES } from "@/lib/digital-marketing-content";

gsap.registerPlugin(ScrollTrigger);

const hubCards: { slug: DMSlug; title: string; blurb: string }[] = [
  {
    slug: "seo",
    title: "SEO",
    blurb: "Rank higher, earn organic traffic, and convert searchers into customers.",
  },
  {
    slug: "social-media",
    title: "Social Media Marketing",
    blurb: "Content, creatives, and paid social that build real audiences.",
  },
  {
    slug: "ppc-advertising",
    title: "PPC & Paid Ads",
    blurb: "Google Ads and performance campaigns focused on ROAS and leads.",
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    blurb: "Blogs, case studies, and copy that educate, trust, and convert.",
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    blurb: "Automation, newsletters, and lifecycle flows that drive repeat revenue.",
  },
];

export default function DmHubCards() {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll<HTMLElement>(".dm-hub-card");
    gsap.set(cards, { opacity: 0, y: 28 });
    const tween = gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.07,
      ease: "power3.out",
      delay: 0.1,
      scrollTrigger: {
        trigger: grid,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div ref={gridRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {hubCards.map((card) => {
        const page = DIGITAL_MARKETING_PAGES[card.slug];
        return (
          <Link
            key={card.slug}
            href={`/services/digital-marketing/${card.slug}`}
            className="dm-hub-card group rounded-2xl border border-gray-800 bg-[#181818] p-6 transition-all duration-300 hover:border-[#11d7fa]/50 hover:shadow-[0_0_0_1px_rgba(17,215,250,0.2)] md:p-8"
          >
            <h3 className="mb-2 text-xl font-semibold text-[#11d7fa] transition-colors group-hover:text-white">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 md:text-base">
              {page?.heroSubtitle ?? card.blurb}
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-white/80 group-hover:text-[#11d7fa]">
              View details →
            </span>
          </Link>
        );
      })}
    </div>
  );
}
