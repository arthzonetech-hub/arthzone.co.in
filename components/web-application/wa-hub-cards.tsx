"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { WASlug } from "@/lib/web-application-content";
import { WEB_APPLICATION_PAGES } from "@/lib/web-application-content";

gsap.registerPlugin(ScrollTrigger);

const hubCards: { slug: WASlug; title: string; blurb: string }[] = [
  {
    slug: "saas-applications",
    title: "SaaS applications",
    blurb: "Multi-tenant products, billing, and admin tooling.",
  },
  {
    slug: "custom-portals-dashboards",
    title: "Portals & dashboards",
    blurb: "Customer panels, partner extranets, and ops consoles.",
  },
  {
    slug: "business-websites",
    title: "Business websites",
    blurb: "Corporate sites and lead-gen experiences that convert.",
  },
  {
    slug: "nextjs-react-performance",
    title: "Next.js & React",
    blurb: "App Router, performance, and maintainable frontends.",
  },
  {
    slug: "api-integrations",
    title: "APIs & integrations",
    blurb: "REST/GraphQL, webhooks, and third-party connectors.",
  },
  {
    slug: "progressive-web-apps",
    title: "Progressive web apps",
    blurb: "Installable, offline-friendly web experiences.",
  },
  {
    slug: "landing-pages-cro",
    title: "Landing pages & CRO",
    blurb: "Campaign pages built for speed and experiments.",
  },
];

export default function WaHubCards() {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll<HTMLElement>(".wa-hub-card");
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
        const page = WEB_APPLICATION_PAGES[card.slug];
        return (
          <Link
            key={card.slug}
            href={`/services/web-application/${card.slug}`}
            className="wa-hub-card group rounded-2xl border border-gray-800 bg-[#181818] p-6 transition-all duration-300 hover:border-[#11d7fa]/50 hover:shadow-[0_0_0_1px_rgba(17,215,250,0.2)] md:p-8"
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
