"use client";
import React from "react";

const quoteIcon = (
  <svg
    width="48"
    height="30"
    viewBox="0 0 48 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 30V13.764L5.73034 0H17.5843L13.8764 13.2584H21.0112V30H0ZM26.3483 30V13.764L32.0787 0H43.9326L40.2247 13.2584H47.3596V30H26.3483Z"
      fill="currentColor"
    />
  </svg>
);

interface Review {
  initials: string;
  name: string;
  role: string;
  title: string;
  content: string;
}

const reviews: Review[] = [
  {
    initials: "ST",
    name: "Sarah Thompson",
    role: "Shopify Store Re-design",
    title: "Transformed Our Online Store!",
    content:
      "Arthzone Technologies completely revitalized our Shopify store. The new design is not only visually stunning but also incredibly intuitive, leading to a significant increase in conversions. Their team was professional and the project was delivered perfectly on time.",
  },
  {
    initials: "MJ",
    name: "Mark Jensen",
    role: "Branding",
    title: "Exceptional Branding That Elevated Our Identity.",
    content:
      "Their strategic approach completely transformed our brand. We've seen a huge increase in recognition and client engagement since launching the new branding. A truly collaborative and talented team to work with!",
  },
  {
    initials: "EC",
    name: "Emily Carter",
    role: "Shopify Migration",
    title: "Seamless & Stress-Free Migration.",
    content:
      "The process of migrating our store was seamless thanks to Arthzone Technologies. They handled all the complexities, ensuring zero downtime and a flawless transition. We couldn't be happier with the result.",
  },
  {
    initials: "JW",
    name: "James Wilson",
    role: "Logo Design",
    title: "A Logo That Tells Our Story.",
    content:
      "We were looking for a logo that truly represented our brand values, and Arthzone Technologies delivered. The design is clean, memorable, and has become a key part of our brand identity.",
  },
  {
    initials: "CE",
    name: "Chloe Evans",
    role: "Landing Page Design",
    title: "High-Converting Landing Page.",
    content:
      "The landing page they designed for our latest campaign exceeded all expectations. The design is sleek, and the user experience is flawless. It has significantly improved our lead generation.",
  },
  {
    initials: "DR",
    name: "David Robertson",
    role: "Dropshipping Store",
    title: "Launched a High-Performing Store.",
    content:
      "We had a tight deadline to get our dropshipping business off the ground, and Arthzone Technologies delivered a beautiful and highly functional Shopify store ahead of schedule. The support was incredible.",
  },
  {
    initials: "OG",
    name: "Olivia Green",
    role: "WordPress Store Re-design",
    title: "A Fresh Look for Our WordPress Site.",
    content:
      "Our old WordPress store needed a major refresh, and the team did an amazing job. The new design is modern, fast, and much more user-friendly. Our customers love the new experience!",
  },
  {
    initials: "MB",
    name: "Michael Brown",
    role: "Custom Website Development",
    title: "Custom Website, Perfect Results.",
    content:
      "For our complex custom website, Arthzone Technologies was the perfect partner. They understood our unique needs and built a robust, scalable, and highly functional platform that works flawlessly.",
  },
];

export default function ClientReviews() {
  return (
    <section className="pt-15 pb-0 text-white">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize mb-4">
            What clients say about us
          </h2>
          <p className="text-base md:text-xl font-normal leading-relaxed max-w-[800px] mx-auto">
            Hear from our satisfied clients about how our digital solutions have
            helped their businesses achieve new levels of success and growth.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review, index) => {
          const isLight = [1, 3, 4, 6].includes(index);
          return (
            <div
              key={index}
              className="p-6 md:p-10 flex flex-col gap-5"
              style={{ background: isLight ? "#1F2122" : "#181A1B" }}
            >
              <div className="text-white opacity-30">{quoteIcon}</div>
              <div>
                <h4 className="text-xl md:text-2xl font-semibold leading-snug mb-3">
                  {review.title}
                </h4>
                <p
                  className="text-sm md:text-base font-normal leading-snug opacity-60"
                  style={
                    {
                      display: "-webkit-box",
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    } as React.CSSProperties
                  }
                >
                  {review.content}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-[48px] h-[48px] md:w-[54px] md:h-[54px] rounded-full bg-white text-[#101010] flex-shrink-0">
                  <p className="text-xl md:text-2xl font-bold">
                    {review.initials}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold leading-snug mb-1">
                    {review.name}
                  </h4>
                  <p className="text-sm md:text-base font-normal opacity-60">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
