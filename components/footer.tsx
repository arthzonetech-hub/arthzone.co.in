"use client";
import React, { useState } from "react";
import Link from "next/link";
import { arthzoneSocial } from "@/lib/social-links";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const socialLinks = [
    {
      label: "Instagram",
      href: arthzoneSocial.instagram,
      color: "#11d7fa",
    },
    {
      label: "Facebook",
      href: arthzoneSocial.facebook,
      color: "#7614EF",
    },
    {
      label: "Dribbble",
      href: arthzoneSocial.dribbble,
      color: "#ff531a",
    },
    {
      label: "Behance",
      href: arthzoneSocial.behance,
      color: "#933ceb",
    },
    {
      label: "LinkedIn",
      href: arthzoneSocial.linkedin,
      color: "#ff9f1c",
    },
  ];

  return (
    <footer className="bg-[#101010] pt-15 px-4 sm:px-6 md:px-10 pb-0">
      <div className="relative">
        {/* Decorative icon - hidden on mobile */}
        <div
          className="hidden lg:block absolute top-0 text-[#101010] max-w-[25%]"
          style={{ left: "23.5%" }}
        >
          {/* <div>
            <a href="/" className="flex items-center">
              <img
                src="/assets/images/logo.png"
                alt="Arthzone Tech Logo"
                className="w-14 h-14 md:w-20 md:h-20"
              />
            </a>
          </div> */}
        </div>

        <div className="bg-[#181A1B] text-white pt-8 md:pt-12 px-5 sm:px-8 md:px-12 pb-5 md:pb-7 rounded-t-[20px] md:rounded-t-[30px]">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center">
              <img
                src="/assets/images/footer-logo.png"
                alt="Arthzone Tech Logo"
                className="w-14 h-auto md:w-40 md:h-auto"
              />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-8 md:pt-14 pb-8 md:pb-14 gap-10 lg:gap-[8vw]">
            {/* Newsletter */}
            <div className="max-w-full lg:max-w-[26rem]">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium leading-tight mb-2.5">
                  Stay Ahead in the Digital World
                </h3>
                <p className="text-sm md:text-base font-normal leading-snug mb-5 opacity-60">
                  Get the latest insights on web apps, marketing strategies,
                  and industry trends directly to your inbox. Be the first to
                  know!
                </p>
              </div>
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  suppressHydrationWarning
                >
                  <input
                    type="text"
                    placeholder="Your Name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="min-h-[40px] bg-[#1F2122] border border-[#1F2122] text-white text-base md:text-lg font-medium rounded-lg px-5 md:px-7 py-2.5 outline-none focus:border-[#11d7fa] transition-colors"
                    suppressHydrationWarning
                  />

                  <input
                    type="email"
                    placeholder="Your Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="min-h-[40px] bg-[#1F2122] border border-[#1F2122] text-white text-base md:text-lg font-medium rounded-lg px-5 md:px-7 py-2.5 outline-none focus:border-[#11d7fa] transition-colors"
                    suppressHydrationWarning
                  />

                  <label className="flex items-center gap-2.5 cursor-pointer w-fit">
                    <div
                      className="w-5 h-5 min-w-[20px] min-h-[20px] rounded-full border border-[#dddddd] flex items-center justify-center cursor-pointer"
                      style={{
                        background: agreed ? "#11d7fa" : "#1F2122",
                        border: agreed
                          ? "1px solid #11d7fa"
                          : "1px solid #dddddd",
                      }}
                      onClick={() => setAgreed(!agreed)}
                    >
                      {agreed && (
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                        >
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <p className="text-white font-medium text-sm">
                      I agree with the{" "}
                      <Link href="/privacy-policy" className="text-[#11d7fa] underline">
                        privacy policy
                      </Link>
                      .
                    </p>
                  </label>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 h-[52px] md:h-[60px] bg-white text-[#101010] border-2 border-white rounded-xl text-base md:text-xl font-semibold transition-all duration-300 hover:bg-[#1F2122] hover:text-white hover:border-[#1F2122]"
                    suppressHydrationWarning
                  >
                    Get the latest update
                  </button>
                </form>
              ) : (
                <div className="p-5 bg-[#11d7fa] text-white rounded-xl text-base leading-relaxed font-medium">
                  Thank you for subscribing to our newsletter! You&apos;re now
                  part of our community and will be the first to hear about our
                  latest updates, tips, and special offers.
                </div>
              )}
            </div>

            {/* Links + Social */}
            <div className="flex flex-col justify-between gap-8 md:gap-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-7">
                <div>
                  <h3 className="text-base md:text-lg font-medium opacity-60 mb-4 md:mb-5">
                    Services
                  </h3>
                  <ul className="flex flex-col">
                    {[
                      {
                        label: "AI-Powered Web Apps",
                        href: "/services/web-application",
                      },
                      {
                        label: "Digital Marketing",
                        href: "/services/digital-marketing",
                      },
                      {
                        label: "Graphic & UI/UX Designing",
                        href: "/services/graphic-ui-ux",
                      },
                      {
                        label: "App Development",
                        href: "/services/app-development",
                      },
                      {
                        label: "Business Websites",
                        href: "/website-development-indore",
                      },
                    ].map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="inline-block py-1.5 md:py-2.5 text-white text-base md:text-lg font-medium hover:text-[#11d7fa] transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-medium opacity-60 mb-4 md:mb-5">
                    Company
                  </h3>
                  <ul className="flex flex-col">
                    {[
                      { label: "About Us", href: "/company/about-us" },
                      { label: "Our Works", href: "/#work" },
                      { label: "Careers", href: "/career" },
                      { label: "Client Reviews", href: "/resources/client-reviews" },
                      { label: "Contact Us", href: "/contact" },
                    ].map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="inline-block py-1.5 md:py-2.5 text-white text-base md:text-lg font-medium hover:text-[#11d7fa] transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-medium opacity-60 mb-4 md:mb-5">
                    Quick Links
                  </h3>
                  <ul className="flex flex-col">
                    {[
                      { label: "Our Team", href: "/company/our-team" },
                      { label: "Industries", href: "/company/industry-services" },
                      { label: "Our Blogs", href: "/resources/our-blogs" },
                      { label: "The Arthzone Vibe", href: "/resources/the-arthzone-vibe" },
                      { label: "Certified Partners", href: "/company/certified-partners" },
                    ].map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="inline-block py-1.5 md:py-2.5 text-white text-base md:text-lg font-medium hover:text-[#11d7fa] transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social media */}
              <div className="flex flex-wrap sm:flex-nowrap items-center w-full gap-1.5 sm:gap-0">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center justify-center text-sm md:text-lg font-semibold py-3 md:py-4 px-3 text-white rounded-xl flex-1 min-w-[80px] transition-all duration-300 hover:flex-grow-[2]"
                    style={{ background: social.color }}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="pt-5 md:pt-7 border-t border-[#1F2122] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-7">
            <div>
              <ul className="flex flex-wrap items-center gap-3 md:gap-7">
                <li>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-[#1F2122] text-white rounded-lg"
                  >
                    <svg
                      height="18"
                      width="18"
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transform: "rotate(-90deg)" }}
                    >
                      <path
                        d="M0.306828 8.34796L18.1265 8.32769C18.4155 8.32737 18.6495 8.09298 18.6494 7.80402V7.80402C18.6493 7.54607 18.4606 7.32932 18.2098 7.26876C17.1956 7.02383 16.2699 6.49123 15.5465 5.73061L12.1904 2.37452L13.5835 0.981431L21.9421 9.34008L13.6046 17.6776L12.2115 16.2844L15.4621 13.0338C16.1897 12.2239 17.1494 11.6646 18.2042 11.4279C18.4686 11.3686 18.6704 11.1426 18.6704 10.8717V10.8717C18.6704 10.5737 18.4289 10.3321 18.1308 10.3321L0.307074 10.3323L0.306828 8.34796Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    className="text-sm md:text-lg font-normal text-white hover:text-[#11d7fa] transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="text-sm md:text-lg font-normal text-white hover:text-[#11d7fa] transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm md:text-lg font-normal text-white hover:text-[#11d7fa] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-sm md:text-lg font-normal">
              ©Copyrights 2026 - Arthzone technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
