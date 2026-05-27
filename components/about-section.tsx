"use client";

import Link from "next/link";

const checkIcon = (
  <svg
    width="34"
    height="35"
    viewBox="0 0 34 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="0.948242" width="34" height="34" rx="10" fill="currentColor" />
    <path
      d="M27 12.4373L13.4367 25.9919L7 19.5552L9.48907 17.0662L13.4367 21.0137L24.5109 9.94824L27 12.4373Z"
      fill="#ffffff"
    />
  </svg>
);

const aboutItems = [
  {
    title: "Client-Centric.",
    description:
      "We prioritize your vision, working collaboratively to deliver bespoke digital solutions that align with your unique business goals.",
  },
  {
    title: "Expert Team.",
    description:
      "Our seasoned professionals, including certified developers and strategic marketers, bring deep expertise to every single project we undertake.",
  },
  {
    title: "On-Time Delivery.",
    description:
      "We pride ourselves on our streamlined project management, ensuring your project is delivered on schedule without compromising on quality.",
  },
  {
    title: "Enduring Support.",
    description:
      "Our relationship doesn't end at launch; we provide continuous support and maintenance to ensure your platform's long-term success.",
  },
];

const itemPadding = [
  {
    paddingTop: "0",
    paddingRight: "50px",
    paddingBottom: "50px",
    paddingLeft: "0",
  },
  {
    paddingTop: "0",
    paddingRight: "0",
    paddingBottom: "50px",
    paddingLeft: "50px",
  },
  {
    paddingTop: "50px",
    paddingRight: "50px",
    paddingBottom: "0",
    paddingLeft: "0",
  },
  {
    paddingTop: "50px",
    paddingRight: "0",
    paddingBottom: "0",
    paddingLeft: "50px",
  },
];

export default function AboutSection() {
  return (
    <section className="py-15 bg-[#1F2122] text-white">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-10 lg:gap-0">
          <div className="lg:col-span-2 lg:pr-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize mb-4">
              The Arthzone Technologies Difference
            </h2>
            <p className="text-base md:text-xl font-normal leading-relaxed">
              We are a passionate, driven team of digital experts committed to
              delivering creative and impactful solutions that guarantee your
              brand&apos;s success.
            </p>
            <Link
              href="/company/about-us"
              className="mt-6 inline-flex items-center gap-2.5 px-6 h-[52px] md:h-[60px] bg-[#7614EF] border-2 border-[#7614EF] text-white rounded-xl text-base md:text-xl font-semibold transition-all duration-300 hover:bg-white hover:text-[#7614EF]"
            >
              Read More
            </Link>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2">
            {aboutItems?.map((item, index) => (
              <div
                key={item?.title}
                className="relative z-10 p-5 sm:p-0"
                style={{
                  borderRight:
                    index % 2 === 0
                      ? "1px solid rgba(255,255,255,0.125)"
                      : "none",
                  borderBottom:
                    index < 2 ? "1px solid rgba(255,255,255,0.125)" : "none",
                }}
              >
                <div className="text-white" style={itemPadding?.[index]}>
                  {checkIcon}
                  <div className="mt-5">
                    <h3 className="text-2xl md:text-3xl font-semibold leading-tight mb-2.5">
                      {item?.title}
                    </h3>
                    <p className="text-base md:text-lg font-normal leading-relaxed">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
