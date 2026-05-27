"use client";
import React from "react";

interface WorkItem {
  category: string;
  title: string;
  tags: string[];
  image: string;
  href: string;
  span?: string;
  mobileSpan?: string;
}

const works: WorkItem[] = [
  {
    category: "Concept Project",
    title: "Premium Photography Portfolio Website",
    tags: [
      "Concept project for a professional photography brand",
      "Image gallery",
      "Category-based display",
      "Contact & booking",
      "Next.js",
      "Tailwind CSS",
    ],
    image: "/assets/images/photography-demo-by-arthzone.png",
    href: "https://shivaayphotography.vercel.app/",
    span: "lg:col-span-3",
    mobileSpan: "col-span-1 sm:col-span-2",
  },
  {
    category: "Concept Project",
    title: "High-Converting Gym & Fitness Website",
    tags: [
      "Concept project for a local gym business",
      "Membership plans",
      "Transformation highlights",
      "Strong CTAs",
      "Next.js",
      "Tailwind CSS",
    ],
    image: "/assets/images/gym-demo-by-arthzoe.png",
    href: "https://gym-demo-arthzonetech.vercel.app/",
    span: "lg:col-span-3",
    mobileSpan: "col-span-1 sm:col-span-2",
  },
  {
    category: "Concept Project",
    title: "Modern Salon & Beauty Service Website",
    tags: [
      "Concept project for a beauty and wellness brand",
      "Service listing with pricing",
      "Appointment-focused layout",
      "Testimonials",
      "Next.js",
      "Tailwind CSS",
    ],
    image: "/assets/images/salon-demo-by-arthzone.png",
    href: "https://arthzonetech-salon-demo.vercel.app/",
    span: "lg:col-span-2",
    mobileSpan: "col-span-1 sm:col-span-2",
  },
];

export default function OurWorks() {
  return (
    <section id="work" className="py-15 text-white bg-[#101010]">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize mb-4">
            Our Work
          </h2>
          <p className="text-base md:text-xl font-normal leading-relaxed max-w-[800px] mx-auto">
            Selected case studies and concept work showcasing real
            business-focused solutions and measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {works.map((work, index) => (
            <div
              key={index}
              className={`${work.mobileSpan} ${work.span} relative bg-[#181A1B] border border-[#1F2122] rounded-2xl overflow-hidden transition-all duration-300 works-item group`}
            >
              <a
                href={work.href}
                className="p-6 md:p-10 text-white flex flex-col justify-between h-full block"
              >
                <div>
                  <h4 className="text-base md:text-lg font-medium leading-snug opacity-60">
                    {work.category}
                  </h4>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mt-1.5 mb-4">
                    {work.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2 md:gap-2.5">
                    {work.tags.map((tag) => (
                      <li
                        key={tag}
                        className="inline-block px-3 md:px-5 py-1.5 md:py-2.5 bg-[#1F2122] text-white border border-white/10 rounded-full text-xs md:text-sm"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 md:mt-10 overflow-hidden rounded-xl">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-auto works-img"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <p className="text-sm md:text-base opacity-60">
            Selected projects & concept work demonstrating our capabilities.
          </p>
        </div>
      </div>
    </section>
  );
}
