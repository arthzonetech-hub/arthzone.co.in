"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarIcon } from "@heroicons/react/24/outline";
import ServiceBreadcrumb from "@/components/digital-marketing/service-breadcrumb";
import DmStickyFaq from "@/components/digital-marketing/dm-sticky-faq";
import { contactHeroBackground } from "@/lib/contact-backdrop";
import type { DigitalMarketingServiceContent } from "@/lib/digital-marketing-content";

gsap.registerPlugin(ScrollTrigger);

function MindMapBlock({
  center,
  nodes,
}: {
  center: string;
  nodes: { label: string }[];
}) {
  return (
    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-[#11d7fa]/25 bg-gradient-to-b from-[#0f172a]/80 to-[#101010] px-4 py-12 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(17,215,250,0.15), transparent 70%)",
        }}
      />
      <div className="relative flex min-h-[280px] flex-col items-center justify-center md:min-h-[320px]">
        <div className="relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-[#11d7fa] bg-[#101010] text-2xl font-black text-white shadow-[0_0_40px_rgba(17,215,250,0.35)] md:h-28 md:w-28 md:text-3xl">
          {center}
        </div>
        <div className="grid w-full max-w-lg grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {nodes.map((n) => (
            <div
              key={n.label}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-[#181818]/90 px-3 py-3 text-center text-xs font-semibold text-white/90 shadow-sm md:text-sm"
            >
              {n.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DmServicePageClient({
  content,
}: {
  content: DigitalMarketingServiceContent;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const parts = hero.querySelectorAll<HTMLElement>(".dm-hero-in");
    gsap.set(parts, { opacity: 0, y: 24 });
    gsap.to(parts, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.08,
      ease: "power3.out",
      delay: 0.05,
    });
  }, [content.slug]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const items = el.querySelectorAll<HTMLElement>(".dm-reveal");
      items.forEach((node) => {
        const dir = node.dataset.reveal === "right" ? 1 : -1;
        const offset = 56 * dir;
        gsap.set(node, { opacity: 0, x: offset });
        gsap.to(node, {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: node,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    }, el);

    return () => {
      ctx.revert();
    };
  }, [content.slug]);

  return (
    <div ref={rootRef} className="bg-[#101010] text-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-10 md:pt-40 lg:px-16 lg:pt-44"
        style={contactHeroBackground}
      >
        <div ref={heroRef} className="relative z-[1] mx-auto max-w-[1280px]">
          <div className="dm-hero-in mb-6">
            <ServiceBreadcrumb currentLabel={content.breadcrumbLabel} />
          </div>
          <h1 className="dm-hero-in mb-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {content.heroTitle}
          </h1>
          <p className="dm-hero-in mb-10 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
            {content.heroSubtitle}
          </p>
          <div className="dm-hero-in flex flex-col gap-4 sm:flex-row sm:gap-5">
            <a
              href="https://cal.com/arthzone-tech"
              className="inline-flex h-[52px] min-h-[52px] items-center justify-center gap-2.5 rounded-xl border-2 border-[#7614EF] bg-[#7614EF] px-6 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#7614EF] md:h-[60px] md:text-lg"
            >
              <CalendarIcon className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
              Book a Call
            </a>
            <Link
              href="/contact"
              className="inline-flex h-[52px] min-h-[52px] items-center justify-center gap-2.5 rounded-xl border-2 border-[#ff531a] bg-[#ff531a] px-6 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#ff531a] md:h-[60px] md:text-lg"
            >
              <span className="text-lg font-bold" aria-hidden>
                @
              </span>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Expert + pillars row 1 */}
      <section className="border-t border-white/5 px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="dm-reveal mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#11d7fa] md:text-sm" data-reveal="left">
            {content.tagline}
          </p>
          <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <h2 className="dm-reveal text-3xl font-bold leading-tight md:text-4xl lg:max-w-md lg:text-5xl" data-reveal="left">
              {content.expertTitle}
            </h2>
            <p className="dm-reveal max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg" data-reveal="right">
              {content.expertBody}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {content.pillars.map((p, i) => (
              <div
                key={p.title}
                className="dm-reveal rounded-2xl border border-gray-800 bg-[#181818] p-6 md:p-8"
                data-reveal={i % 2 === 0 ? "left" : "right"}
              >
                <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 md:text-base">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars row 2 */}
      <section className="border-t border-white/5 bg-[#0d0d0d] px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {content.pillars2.map((p, i) => (
              <div
                key={p.title}
                className="dm-reveal rounded-2xl border border-gray-800 bg-[#181818] p-6 md:p-8"
                data-reveal={i % 2 === 0 ? "right" : "left"}
              >
                <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 md:text-base">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mind map */}
      <section className="border-t border-white/5 px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="dm-reveal" data-reveal="left">
            <MindMapBlock center={content.mindMap.center} nodes={content.mindMap.nodes} />
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-t border-white/5 px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14">
            <span className="dm-reveal mb-4 inline-block rounded-lg bg-[#11d7fa] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#101010] md:text-sm" data-reveal="left">
              {content.breadcrumbLabel}
            </span>
            <h2 className="dm-reveal text-3xl font-bold md:text-4xl lg:text-5xl" data-reveal="left">
              Our {content.breadcrumbLabel} Deliverables
            </h2>
            <p className="dm-reveal mt-4 max-w-2xl text-gray-400 md:text-lg" data-reveal="right">
              We provide a comprehensive suite of services designed to maximize your online
              visibility and drive sustainable growth.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.deliverables.map((d, i) => (
              <div
                key={d.title}
                className="dm-reveal rounded-2xl border border-gray-800 bg-[#181818] p-6 transition-colors hover:border-[#11d7fa]/40 md:p-7"
                data-reveal={i % 2 === 0 ? "left" : "right"}
              >
                <h3 className="mb-2 text-lg font-semibold text-[#11d7fa]">{d.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 md:text-base">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DmStickyFaq faqs={content.faqs} badge="FAQ's" />
    </div>
  );
}
