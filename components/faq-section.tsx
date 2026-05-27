"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "What kind of solutions does Arthzone build?",
    a: "Arthzone builds AI-powered software solutions for modern businesses, including business websites, web applications, admin dashboards, customer portals, automation workflows, e-commerce systems, CRM-style tools, API integrations, and digital growth systems. We focus on technology that improves operations, saves time, and creates measurable business value.",
  },
  {
    q: "Do you only make websites?",
    a: "No. Websites are one part of what we do. We also design and develop custom software, SaaS-style platforms, business automation systems, AI-assisted workflows, booking systems, lead management tools, internal dashboards, and integrations that connect different parts of a business.",
  },
  {
    q: "How do you use AI in business solutions?",
    a: "We use AI where it genuinely improves the product or workflow, such as smart forms, content assistance, automated replies, data summaries, lead qualification, reporting, search, recommendations, and process automation. The goal is not to add AI as a buzzword, but to make work faster, clearer, and easier to manage.",
  },
  {
    q: "Can you build custom software for my business process?",
    a: "Yes. We can study your current workflow, identify repetitive tasks or gaps, and build a custom system around your operations. This can include role-based dashboards, data collection, approval flows, notifications, reports, payment workflows, document handling, and third-party integrations.",
  },
  {
    q: "How do you plan and price a project?",
    a: "We begin with a requirement discussion to understand your goals, users, workflows, features, timeline, and budget. After that, we share a clear scope, recommended technology approach, delivery phases, and transparent pricing. Simple websites can start small, while custom software and AI-enabled systems are quoted based on complexity.",
  },
  {
    q: "Can you improve an existing website or software system?",
    a: "Yes. We can audit existing websites, dashboards, apps, or workflows and improve performance, design, usability, security, SEO, integrations, and maintainability. If the existing system is limiting your business, we can either upgrade it or rebuild it with a cleaner architecture.",
  },
  {
    q: "What happens after the solution is launched?",
    a: "We provide ongoing support for maintenance, updates, bug fixes, performance checks, backups, analytics, feature improvements, and scaling. Our aim is to keep your solution reliable and useful as your business grows.",
  },
  {
    q: "Do you work only with Indore-based businesses?",
    a: "No. Arthzone is rooted in Indore, but we work with businesses across India and international markets. Discovery, planning, reviews, delivery, and support can all be handled smoothly online.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="bg-[#101010] text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#11d7fa] text-black px-4 py-1 rounded-lg text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Everything you need to know about working with Arthzone
            Technologies.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#11d7fa] bg-[#11d7fa]/5"
                    : "border-gray-800 bg-[#181818] hover:border-gray-600"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  suppressHydrationWarning
                >
                  <span
                    className={`text-base md:text-lg font-semibold transition-colors duration-200 ${
                      isOpen ? "text-[#11d7fa]" : "text-white"
                    }`}
                  >
                    {faq.q}
                  </span>

                  {/* Icon */}
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "border-[#11d7fa] bg-[#11d7fa] rotate-45"
                        : "border-gray-600 bg-transparent rotate-0"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      stroke={isOpen ? "#101010" : "#9ca3af"}
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="px-6 pb-6 text-gray-400 leading-relaxed text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
