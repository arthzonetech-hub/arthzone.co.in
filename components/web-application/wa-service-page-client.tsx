"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarIcon } from "@heroicons/react/24/outline";
import WaBreadcrumb from "@/components/web-application/wa-breadcrumb";
import WaStickyFaq from "@/components/web-application/wa-sticky-faq";
import { contactHeroBackground } from "@/lib/contact-backdrop";
import type { WebApplicationServiceContent } from "@/lib/web-application-content";

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

export default function WaServicePageClient({
  content,
}: {
  content: WebApplicationServiceContent;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroImgWrapRef = useRef<HTMLDivElement>(null);
  const gallerySectionRef = useRef<HTMLElement>(null);
  const galleryTrackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const parts = hero.querySelectorAll<HTMLElement>(".wa-hero-in");
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
      const items = el.querySelectorAll<HTMLElement>(".wa-reveal");
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

  useEffect(() => {
    const wrap = heroImgWrapRef.current;
    const hero = heroRef.current;
    if (!wrap || !hero) return;

    const img = wrap.querySelector<HTMLElement>(".wa-hero-parallax-img");
    if (!img) return;

    const tween = gsap.fromTo(
      img,
      { yPercent: -6 },
      {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [content.slug]);

  useEffect(() => {
    const section = gallerySectionRef.current;
    const track = galleryTrackRef.current;
    if (!section || !track) return;

    const getMaxX = () => Math.max(0, track.scrollWidth - section.offsetWidth);

    const tween = gsap.to(track, {
      x: () => -getMaxX(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getMaxX() + window.innerHeight * 0.35}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    const onRefresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onRefresh);

    return () => {
      window.removeEventListener("resize", onRefresh);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [content.slug]);

  return (
    <div ref={rootRef} className="bg-[#101010] text-white">
      <section
        ref={heroRef}
        className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-10 md:pt-40 lg:px-16 lg:pt-44"
        style={contactHeroBackground}
      >
        <div className="relative z-[1] mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="wa-hero-in mb-6">
              <WaBreadcrumb currentLabel={content.breadcrumbLabel} />
            </div>
            <h1 className="wa-hero-in mb-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {content.heroTitle}
            </h1>
            <p className="wa-hero-in mb-10 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              {content.heroSubtitle}
            </p>
            <div className="wa-hero-in flex flex-col gap-4 sm:flex-row sm:gap-5">
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

          <div className="relative lg:col-span-5">
            <div
              ref={heroImgWrapRef}
              className="wa-hero-in relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#11d7fa]/20 shadow-[0_0_60px_rgba(17,215,250,0.12)]"
            >
              <div className="wa-hero-parallax-img absolute inset-[-8%] h-[116%] w-full">
                <Image
                  src={content.heroImage.src}
                  alt={content.heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p
            className="wa-reveal mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#11d7fa] md:text-sm"
            data-reveal="left"
          >
            {content.tagline}
          </p>
          <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <h2
              className="wa-reveal text-3xl font-bold leading-tight md:text-4xl lg:max-w-md lg:text-5xl"
              data-reveal="left"
            >
              {content.expertTitle}
            </h2>
            <p
              className="wa-reveal max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg"
              data-reveal="right"
            >
              {content.expertBody}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {content.pillars.map((p, i) => (
              <div
                key={p.title}
                className="wa-reveal rounded-2xl border border-gray-800 bg-[#181818] p-6 md:p-8"
                data-reveal={i % 2 === 0 ? "left" : "right"}
              >
                <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 md:text-base">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={gallerySectionRef}
        className="relative min-h-screen overflow-hidden border-t border-white/5 bg-[#080808]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(17,215,250,0.4), transparent 45%), radial-gradient(circle at 80% 70%, rgba(118,20,239,0.35), transparent 50%)",
            }}
          />
        </div>
        <div className="relative z-[1] flex h-screen max-h-[920px] min-h-[480px] flex-col justify-center px-4 pt-10 sm:px-6 md:px-10 lg:px-16">
          <div className="mb-8 max-w-3xl">
            <p
              className="wa-reveal mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#11d7fa]"
              data-reveal="left"
            >
              Visual craft
            </p>
            <h2 className="wa-reveal text-3xl font-bold md:text-4xl" data-reveal="left">
              Scroll through real-world UI inspiration
            </h2>
            <p className="wa-reveal mt-3 text-gray-400 md:text-lg" data-reveal="right">
              Horizontal scroll locks while you move — built with GSAP for a premium, gallery-like
              feel on every service page.
            </p>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center overflow-hidden">
            <div
              ref={galleryTrackRef}
              className="flex w-max gap-5 pb-6 will-change-transform md:gap-7"
            >
              {content.gallery.map((g, idx) => (
                <div
                  key={`${g.src}-${idx}`}
                  className="relative h-[min(52vh,420px)] w-[min(88vw,340px)] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#141414] shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:h-[min(56vh,480px)] md:w-[min(42vw,420px)]"
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 88vw, 420px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0d0d0d] px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {content.pillars2.map((p, i) => (
              <div
                key={p.title}
                className="wa-reveal rounded-2xl border border-gray-800 bg-[#181818] p-6 md:p-8"
                data-reveal={i % 2 === 0 ? "right" : "left"}
              >
                <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 md:text-base">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="wa-reveal" data-reveal="left">
            <MindMapBlock center={content.mindMap.center} nodes={content.mindMap.nodes} />
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14">
            <span
              className="wa-reveal mb-4 inline-block rounded-lg bg-[#11d7fa] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#101010] md:text-sm"
              data-reveal="left"
            >
              {content.breadcrumbLabel}
            </span>
            <h2 className="wa-reveal text-3xl font-bold md:text-4xl lg:text-5xl" data-reveal="left">
              What we deliver
            </h2>
            <p
              className="wa-reveal mt-4 max-w-2xl text-gray-400 md:text-lg"
              data-reveal="right"
            >
              End-to-end execution with documentation, performance, and UI polish — so your product
              feels as good as it functions.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.deliverables.map((d, i) => (
              <div
                key={d.title}
                className="wa-reveal rounded-2xl border border-gray-800 bg-[#181818] p-6 transition-colors hover:border-[#11d7fa]/40 md:p-7"
                data-reveal={i % 2 === 0 ? "left" : "right"}
              >
                <h3 className="mb-2 text-lg font-semibold text-[#11d7fa]">{d.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 md:text-base">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaStickyFaq faqs={content.faqs} badge="FAQ's" />
    </div>
  );
}
