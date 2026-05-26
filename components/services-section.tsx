"use client";
import React from "react";
import Link from "next/link";

interface ServiceItem {
  tag: string;
  tagHref: string;
  color: string;
  title: string[];
  description: string;
  links: { label: string; href: string }[];
}

const services: ServiceItem[] = [
  {
    tag: "Build",
    tagHref: "/services/web-application",
    color: "#7614EF",
    title: ["Web", "Application"],
    description:
      "SaaS products, custom customer & admin panels, APIs, and high-performance marketing sites — built with modern stacks for security, speed, and growth.",
    links: [
      { label: "SaaS Applications", href: "/services/web-application/saas-applications" },
      {
        label: "Custom Portals & Dashboards",
        href: "/services/web-application/custom-portals-dashboards",
      },
      { label: "Business Websites", href: "/services/web-application/business-websites" },
      {
        label: "Next.js & React",
        href: "/services/web-application/nextjs-react-performance",
      },
      { label: "APIs & Integrations", href: "/services/web-application/api-integrations" },
      {
        label: "Progressive Web Apps",
        href: "/services/web-application/progressive-web-apps",
      },
      {
        label: "Landing Pages & CRO",
        href: "/services/web-application/landing-pages-cro",
      },
      { label: "View All Services", href: "/services/web-application" },
    ],
  },
  {
    tag: "Grow",
    tagHref: "/services/digital-marketing",
    color: "#ff531a",
    title: ["Digital", "Marketing"],
    description:
      "Our data-driven strategies in SEO, PPC, and social media boost your brand's online presence and drive targeted traffic.",
    links: [
      { label: "SEO", href: "/services/digital-marketing/seo" },
      { label: "Local SEO Services", href: "/services/digital-marketing/seo" },
      {
        label: "Social Media Marketing",
        href: "/services/digital-marketing/social-media",
      },
      { label: "Pay Per Click", href: "/services/digital-marketing/ppc-advertising" },
      {
        label: "Amazon Advertising",
        href: "/services/digital-marketing/ppc-advertising",
      },
      {
        label: "Email Marketing",
        href: "/services/digital-marketing/email-marketing",
      },
      {
        label: "Conversion Rate Optimizations",
        href: "/services/digital-marketing",
      },
      { label: "View All Services", href: "/services/digital-marketing" },
    ],
  },
  {
    tag: "Design",
    tagHref: "#",
    color: "#933ceb",
    title: ["Graphic &", "UI/UX Design"],
    description:
      "We create stunning, user-friendly designs that captivate your audience and ensure a seamless, engaging brand experience.",
    links: [
      { label: "Website UI/UX Design", href: "#" },
      { label: "Mobile App UI/UX Design", href: "#" },
      { label: "Web App & Dashboard Design", href: "#" },
      { label: "Landing Page Design", href: "#" },
      { label: "Logo & Brand Identity Design", href: "#" },
      { label: "Packaging & Label Design", href: "#" },
      { label: "Usability Audit & Optimization", href: "#" },
      { label: "View All Services", href: "#" },
    ],
  },
  {
    tag: "Develop",
    tagHref: "#",
    color: "#ff9f1c",
    title: ["App", "Development"],
    description:
      "Our expert developers create high-performance, custom mobile and web applications to engage users and expand your digital reach.",
    links: [
      { label: "IOS App Development", href: "#" },
      { label: "Android App Development", href: "#" },
      { label: "React Native App Development", href: "#" },
      { label: "Ionic App Development", href: "#" },
      { label: "Xamarin App Development", href: "#" },
      { label: "Flutter App Development", href: "#" },
      { label: "Shopify App Development", href: "#" },
      { label: "View All Services", href: "#" },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-15 bg-[#101010] text-white">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-10 md:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-2.5">
            Our Expertise. Your Growth.
          </h2>
          <p className="text-base md:text-xl font-normal leading-relaxed text-white max-w-[700px] mx-auto">
            We are a team of passionate professionals dedicated to building
            exceptional digital experiences and driving real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.tag}
              className="pt-14 px-5 md:px-7 pb-2.5 bg-[#1F2122] text-white rounded-2xl relative flex flex-col"
            >
              <span
                className="absolute -top-6 left-5 md:left-7"
                style={{ transform: "rotate(-4deg)" }}
              >
                {service.tagHref !== "#" ? (
                  <Link
                    href={service.tagHref}
                    className="inline-block text-2xl md:text-3xl font-bold uppercase text-white px-4 md:px-5 py-2 md:py-2.5 rounded-xl"
                    style={{ background: service.color }}
                  >
                    {service.tag}
                  </Link>
                ) : (
                  <a
                    href={service.tagHref}
                    className="inline-block text-2xl md:text-3xl font-bold uppercase text-white px-4 md:px-5 py-2 md:py-2.5 rounded-xl"
                    style={{ background: service.color }}
                  >
                    {service.tag}
                  </a>
                )}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-2.5">
                {service.title[0]}
                <br />
                {service.title[1]}
              </h3>
              <p className="text-sm md:text-base font-medium leading-relaxed opacity-60 flex-1">
                {service.description}
              </p>
              <ul className="mt-7">
                {service.links.map((link) => (
                  <li key={link.label}>
                    {link.href !== "#" ? (
                      <Link
                        href={link.href}
                        className="block text-base md:text-lg font-medium leading-snug py-3 md:py-3.5 border-t border-dashed border-[#4d4d4d] text-white transition-colors duration-300"
                        style={
                          {
                            "--hover-color": service.color,
                          } as React.CSSProperties
                        }
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = service.color)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#ffffff")
                        }
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="block text-base md:text-lg font-medium leading-snug py-3 md:py-3.5 border-t border-dashed border-[#4d4d4d] text-white transition-colors duration-300"
                        style={
                          {
                            "--hover-color": service.color,
                          } as React.CSSProperties
                        }
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = service.color)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#ffffff")
                        }
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
