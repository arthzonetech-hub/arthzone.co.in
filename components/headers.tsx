"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  CalendarIcon,
  PhoneIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { arthzoneSocial } from "@/lib/social-links";

interface NavItem {
  title: string;
  links: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    title: "Services",
    links: [
      {
        label: "Web Application Development",
        href: "/services/web-application",
      },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Graphic & UI/UX", href: "/services/graphic-ui-ux" },
      { label: "App Development", href: "/services/app-development" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/about-us" },
      { label: "Our Team", href: "/company/our-team" },
      { label: "Industries", href: "/company/industry-services" },
      { label: "Certified Partners", href: "/company/certified-partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Our Blogs", href: "/resources/our-blogs" },
      { label: "Client Reviews", href: "/resources/client-reviews" },
      { label: "The Arthzone Vibe", href: "/resources/the-arthzone-vibe" },
    ],
  },
  {
    title: "Contacts",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Career", href: "/career" },
      { label: "Become a Partner", href: "/become-a-partner" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { label: "Instagram", href: arthzoneSocial.instagram },
      { label: "Facebook", href: arthzoneSocial.facebook },
      { label: "Dribbble", href: arthzoneSocial.dribbble },
      { label: "Behance", href: arthzoneSocial.behance },
      { label: "LinkedIn", href: arthzoneSocial.linkedin },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuScrolled, setMenuScrolled] = useState(false);
  const navScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      if (navScrollRef.current) {
        navScrollRef.current.scrollTop = 0;
      }
    }
  }, [menuOpen]);

  const onNavScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setMenuScrolled(e.currentTarget.scrollTop > 6);
  };

  return (
    <>
      {/* Available for work banner */}
      <div className="hidden md:block absolute top-0 left-0 right-0 z-50 w-fit mx-auto">
        <div className="relative ">
          <div className="flex items-center justify-center gap-2.5 px-8 py-1  relative z-10">
            <span className="w-2.5 h-2.5 bg-[#11d7fa] rounded-full"></span>
            <p className="text-base font-medium text-[#101010]">
              Available for New Projects
            </p>
          </div>
          <div className="absolute top-0 left-0 right-0 w-full h-full z-0 flex">
            <svg
              width="204"
              height="24"
              viewBox="0 0 204 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                d="M0 0H204C204 0 193 0 191 12C191 12 189 24 179 24C151 24 50.5 24 25 24C15 24 13 12 13 12C11 0 0 0 0 0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Logo + menu: one row; absolute so it scrolls with the page (not fixed/sticky) */}
      <header className="absolute top-0 left-0 right-0 z-[999999] flex w-full flex-nowrap items-center justify-between gap-3 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-[max(0.75rem,env(safe-area-inset-top,0px))] pb-3 md:pb-4 md:pt-5 pointer-events-none">
        <Link
          href="/"
          className="pointer-events-auto flex min-w-0 shrink items-center"
          onClick={() => {
            setMenuOpen(false);
            setMenuScrolled(false);
          }}
        >
          <img
            src="/assets/images/logo.png"
            alt="Arthzone Tech Logo"
            className="h-auto w-36 min-[400px]:w-44 sm:w-48 md:w-52 lg:w-60 xl:w-64 object-contain object-left max-w-[min(16rem,calc(100vw-6.5rem))]"
          />
        </Link>
        <button
          type="button"
          onClick={() => {
            if (menuOpen) setMenuScrolled(false);
            setMenuOpen(!menuOpen);
          }}
          className={`pointer-events-auto shrink-0 bg-white text-[#101010] rounded-xl min-h-[52px] min-w-[52px] md:min-h-[70px] md:min-w-[70px] flex items-center justify-center border-2 border-[#f5f6f9] transition-all duration-300 hover:shadow-lg`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          suppressHydrationWarning
        >
          {menuOpen ? (
            <XMarkIcon className="w-5 md:w-6 h-5 md:h-6" />
          ) : (
            <Bars3Icon className="w-5 md:w-6 h-5 md:h-6" />
          )}
        </button>
      </header>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-white overflow-hidden ${
          menuOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
        style={{
          clipPath: menuOpen
            ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          transition: "clip-path 0.8s cubic-bezier(0.85, 0, 0.15, 1)",
        }}
        aria-hidden={!menuOpen}
      >
        {/* Blur strip under fixed logo + hamburger when menu content scrolls */}
        <div
          className={`pointer-events-none fixed top-0 left-0 right-0 z-[1000] h-[5.75rem] sm:h-24 md:h-[6.5rem] lg:h-28 transition-[backdrop-filter,background-color,box-shadow] duration-300 ease-out ${
            menuOpen && menuScrolled
              ? "backdrop-blur-xl bg-white/65 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
              : ""
          }`}
          aria-hidden
        />

        {/* Responsive Layout: Mobile single-column, Desktop two-column */}
        <div
          className="flex flex-col lg:grid w-full max-h-[100dvh] min-h-0 gap-0 h-[100dvh] lg:h-screen"
          style={{
            gridTemplateColumns: "60% 40%",
          }}
        >
          {/* Left side - Navigation Links */}
          <div
            ref={navScrollRef}
            onScroll={onNavScroll}
            className="menu-nav-scroll w-full flex-1 min-h-0 px-4 sm:px-6 md:px-8 lg:px-[60px] pt-[5.75rem] sm:pt-24 md:pt-[6.5rem] pb-6 sm:pb-8 md:pb-10 lg:pt-20 lg:pb-[60px] flex flex-col justify-start lg:justify-between gap-6 sm:gap-8 lg:gap-0 overflow-y-auto overscroll-contain"
          >
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-2">
              {navItems.map((item) => (
                <div key={item.title} className="py-2 lg:py-4">
                  <div className="mb-3 lg:mb-5">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#101010]">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 lg:gap-3 lg:gap-x-8">
                    {item.links.map((link) => (
                      <li key={link.label} className="w-full sm:w-auto">
                        <a
                          href={link.href}
                          className="text-sm sm:text-base md:text-lg lg:text-lg font-medium text-[#101010] opacity-60 hover:opacity-100 transition-opacity block"
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Contact Info */}
          <div className="w-full flex-shrink-0 bg-[#101010] text-white p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-end gap-3 sm:gap-2.5 min-h-0 lg:min-h-screen lg:sticky lg:top-0">
            <a
              href="https://app.cal.com/arthzone-tech"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 h-[52px] md:h-[60px] bg-[#7614EF] border-2 border-[#7614EF] text-white rounded-xl text-base md:text-xl font-semibold transition-all duration-300 hover:bg-white hover:text-[#7614EF]"
            >
              <CalendarIcon className="w-5 h-5 flex-shrink-0" />
              Schedule a Meeting
            </a>
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2.5 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-0 border-2 border-[#ff531a] bg-[#ff531a] text-white rounded-xl h-10 sm:h-12 lg:h-[60px] text-xs sm:text-base lg:text-xl font-semibold w-full sm:w-auto transition-all duration-300 hover:bg-white hover:text-[#ff531a]"
            >
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
              <span>Contact Us</span>
            </a>
            <div className="p-5 lg:p-7 bg-[#1F2122] rounded-xl mt-2">
              <h4 className="text-sm font-semibold text-[#11d7fa] mb-2.5">
                Canada
              </h4>
              <ul className="flex flex-col gap-1.5 lg:gap-2">
                <li>
                  <a
                    href="mailto:info@arthzone.co.in"
                    className="text-base lg:text-lg font-semibold text-white"
                  >
                    info@arthzone.co.in
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/9685816724"
                    className="text-base lg:text-lg font-semibold text-white"
                  >
                    +91 9685816724
                  </a>
                </li>
                <li>
                  <span className="text-sm lg:text-lg font-semibold text-white">
                    Indore 452001, Madhya Pradesh, India
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-3 sm:p-4 md:p-5 lg:p-7 bg-[#1F2122] rounded-xl">
              <h4 className="text-xs sm:text-sm font-semibold text-[#11d7fa] mb-2">
                India
              </h4>
              <ul className="flex flex-col gap-1 sm:gap-1.5 lg:gap-2">
                <li>
                  <a
                    href="mailto:info@arthzone.co.in"
                    className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white break-all"
                  >
                    info@arthzone.co.in
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/9685816724"
                    className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white"
                  >
                    +91 8839354160
                  </a>
                </li>
                <li>
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white leading-tight">
                    Indore 452001, Madhya Pradesh, India
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
