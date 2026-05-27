import React from "react";
import Link from "next/link";
import Header from "@/components/headers";
import Footer from "@/components/footer";
import MeetingSchedule from "@/components/meeting-schedule";
import { contactHeroBackground } from "@/lib/contact-backdrop";

export const metadata = {
  title: "Become a Partner | Arthzone Technologies",
  description:
    "Partner with Arthzone — referrals, co-delivery, and white-label collaboration for agencies and consultants in India.",
};

const trustStats = [
  { val: "Full-stack", label: "Web · eCommerce · Apps" },
  { val: "Transparent", label: "Scopes & timelines" },
  { val: "India-first", label: "Local + remote delivery" },
  { val: "Long-term", label: "Repeat partner projects" },
];

const partnerTypes = [
  {
    accent: "#7614EF",
    title: "Agencies & studios",
    body: "You keep the client relationship; we plug in as an execution layer for web, Shopify, design, or campaigns — with clear SLAs and comms.",
  },
  {
    accent: "#ff531a",
    title: "Freelancers & consultants",
    body: "Bring strategy or creative; we handle build, QA, and launch — or the other way around when you need our intro and we need your niche.",
  },
  {
    accent: "#11d7fa",
    title: "Referrers & advisors",
    body: "Introduce businesses that need a new site, store, or growth stack. We deliver professionally so your referral reflects well on you.",
  },
];

const benefits = [
  {
    title: "Referral & revenue share",
    body: "Fair structures for intros that convert — discussed upfront so everyone knows what success looks like.",
  },
  {
    title: "White-label friendly",
    body: "Optional delivery under your brand with documentation and handover that match how you work with clients.",
  },
  {
    title: "Aligned on quality",
    body: "Fast proposals, realistic timelines, and no surprises — your reputation stays protected.",
  },
  {
    title: "Single point of contact",
    body: "A dedicated partner lead for scoping, updates, and escalations across the project lifecycle.",
  },
  {
    title: "NDA & confidentiality",
    body: "Standard mutual protection for client data, scopes, and commercial terms when required.",
  },
  {
    title: "Co-marketing (when it fits)",
    body: "Case studies, joint announcements, or portfolio credits — only when both sides are comfortable.",
  },
];

const models = [
  {
    title: "Referral",
    desc: "You introduce; we scope, deliver, and support. Commercials agreed before kickoff.",
    color: "#7614EF",
  },
  {
    title: "Co-delivery",
    desc: "Shared roadmap — your team owns part of the stack, ours owns the rest with integrated standups.",
    color: "#ff531a",
  },
  {
    title: "White-label",
    desc: "End-to-end build under your brand with structured handover and optional ongoing maintenance via you.",
    color: "#933ceb",
  },
];

const processSteps = [
  {
    title: "Discovery call",
    detail: "15–30 minutes to see fit, typical deal sizes, and how we’d collaborate.",
  },
  {
    title: "Pilot scope",
    detail: "One small project or shared proposal to prove workflow before larger commitments.",
  },
  {
    title: "Agreement",
    detail: "Clear commercials, support windows, and escalation paths — usually lightweight for ongoing partners.",
  },
  {
    title: "Deliver & iterate",
    detail: "Launch, measure, and refine together so clients stay happy and partnerships repeat.",
  },
];

export default function BecomeAPartnerPage() {
  return (
    <div
      className="relative min-w-0 overflow-x-hidden text-white"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#101010",
      }}
    >
      <div className="relative">
        <Header />

        <section
          className="relative overflow-hidden px-4 pb-14 pt-28 text-white sm:px-6 sm:pb-16 sm:pt-32 md:px-10 md:pb-20 md:pt-40 lg:px-16 lg:pb-24 lg:pt-44 xl:pb-28 xl:pt-48"
          style={contactHeroBackground}
        >
          <div className="relative z-[1] mx-auto max-w-[1280px] text-center">
            <h5 className="mb-3 inline-block rounded-full bg-[#11d7fa] px-5 py-2.5 text-sm font-semibold text-black sm:text-base">
              Partnerships
            </h5>
            <h1 className="mx-auto mb-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.15] xl:text-7xl">
              Grow with us as a partner
            </h1>
            <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-white/90 sm:text-lg md:text-xl md:leading-[1.6]">
              Arthzone builds high-converting websites, Shopify & eCommerce experiences, apps,
              and digital marketing for businesses across India. Partner with us when you need
              reliable delivery — or send clients who need a team that ships.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <a
                href="https://cal.com/arthzone-tech"
                className="inline-flex h-[52px] min-h-[52px] w-full max-w-sm items-center justify-center rounded-xl border-2 border-[#7614EF] bg-[#7614EF] px-6 text-base font-semibold text-white transition-[transform,colors] duration-300 hover:bg-white hover:text-[#7614EF] sm:w-auto sm:px-8 sm:text-lg"
              >
                Book a partnership call
              </a>
              <Link
                href="/contact"
                className="inline-flex h-[52px] min-h-[52px] w-full max-w-sm items-center justify-center rounded-xl border-2 border-[#ff531a] bg-[#ff531a] px-6 text-base font-semibold text-white transition-[transform,colors] duration-300 hover:bg-white hover:text-[#ff531a] sm:w-auto sm:px-8 sm:text-lg"
              >
                Write to us
              </Link>
            </div>
            <div
              className="mt-6 flex items-center justify-center gap-2 sm:mt-8"
              aria-hidden
            >
              <span className="h-3 w-3 rounded-full bg-[#7614EF] sm:h-3.5 sm:w-3.5" />
              <span className="h-3 w-3 rounded-full bg-[#ff531a] sm:h-3.5 sm:w-3.5" />
              <span className="h-3 w-3 rounded-full bg-[#933ceb] sm:h-3.5 sm:w-3.5" />
              <span className="h-3 w-3 rounded-full bg-[#ff9f1c] sm:h-3.5 sm:w-3.5" />
            </div>
          </div>
        </section>
      </div>

      <section className="border-y border-gray-800 bg-[#0d0d0d] px-4 py-12 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-6">
          {trustStats.map((s) => (
            <div key={s.label}>
              <p className="text-lg font-bold text-[#11d7fa] md:text-xl">{s.val}</p>
              <p className="mt-1 text-xs text-gray-400 md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#101010] px-4 py-16 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block rounded-lg bg-[#7614EF]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#c4a3ff]">
              Who it’s for
            </span>
            <h2 className="text-2xl font-bold md:text-4xl">Partners we work best with</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 md:text-base">
              Different models for different strengths — we’ll suggest the cleanest fit after
              one conversation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {partnerTypes.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-gray-800 bg-[#181818] p-6 md:p-8"
                style={{ boxShadow: `inset 0 0 0 1px ${p.accent}33` }}
              >
                <h3 className="mb-3 text-lg font-semibold md:text-xl" style={{ color: p.accent }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 md:text-base">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0d0d0d] px-4 py-16 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-4xl">
            Partnership models
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {models.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-gray-800 bg-[#181818] p-6 text-center md:p-7"
              >
                <div
                  className="mx-auto mb-4 h-1 w-12 rounded-full"
                  style={{ background: m.color }}
                />
                <h3 className="mb-3 text-xl font-bold text-white">{m.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 md:text-base">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#101010] px-4 py-16 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-4xl">
            How we work with partners
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-800 bg-[#181818] p-6 md:p-7"
              >
                <h3 className="mb-3 text-base font-semibold text-[#11d7fa] md:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 md:text-base">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0d0d0d] px-4 py-16 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold md:text-4xl">From intro to delivery</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 md:text-base">
              Lightweight process — heavy on clarity.
            </p>
          </div>
          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className="flex flex-col gap-3 rounded-2xl border border-gray-800 bg-[#181818] p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1F2122] text-sm font-bold text-[#ff531a]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400 md:text-base">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Serving businesses in Indore and clients across India
            — partnerships work the same whether your clients are local or remote.
          </p>
        </div>
      </section>

      <MeetingSchedule />
      <Footer />
    </div>
  );
}
