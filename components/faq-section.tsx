"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "How much does website development cost?",
    a: "Our packages start from ₹4,999 for a basic business website. The final price depends on the number of pages, features, and customization required. We offer transparent, no-hidden-charge pricing — contact us for a free quote tailored to your business.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A standard business website is delivered in 5–7 working days. Custom projects, e-commerce platforms, or web applications may take 2–4 weeks. We always provide a clear timeline before starting work.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Absolutely. Every website we build is fully responsive and mobile-optimized. With over 70% of users browsing on mobile, this is non-negotiable for us — your site will look great on all screen sizes.",
  },
  {
    q: "Do you provide SEO with the website?",
    a: "Yes. All our websites are built with on-page SEO best practices — fast loading speed, proper heading structure, meta tags, and clean code. We also offer ongoing SEO services to help you rank higher on Google.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes, we specialize in website redesigns. Whether your site looks outdated, loads slowly, or isn't generating leads, we can rebuild it with a modern design while preserving your content and SEO rankings.",
  },
  {
    q: "What happens after my website is launched?",
    a: "We offer ongoing maintenance and support plans to keep your site secure, updated, and running smoothly. You're never left on your own — our team is always reachable for updates, fixes, or new features.",
  },
  {
    q: "Do you work with businesses outside Madhya Pradesh?",
    a: "Yes. While we have a strong local presence in cities like Ratlam, Mandsaur, Neemuch, and Pratapgarh, we work with clients across India and globally. All our communication and delivery happens seamlessly online.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className="bg-[#101010] text-white py-24 px-4">
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
