"use client";
import React from "react";

interface WhyItem {
  color: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const items: WhyItem[] = [
  {
    color: "#7614EF",
    icon: (
      <svg
        width="26"
        height="26"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26 26"
        fill="none"
      >
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.270966 19.6274V2.85163C0.270966 1.42625 1.39865 0.270752 2.78972 0.270752H22.9397C24.3308 0.270752 25.4585 1.42625 25.4585 2.85163V19.6274C25.4585 21.0528 24.3308 22.2083 22.9397 22.2083H2.78972C1.39865 22.2083 0.270966 21.0528 0.270966 19.6274ZM9.75461 10.5551C9.38576 10.1772 8.78772 10.1772 8.41884 10.5551C8.04999 10.9332 8.04999 11.5459 8.41884 11.9238L10.9376 14.5047C11.1147 14.6863 11.355 14.7882 11.6055 14.7882C11.856 14.7882 12.0962 14.6863 12.2733 14.5047L17.3108 9.34298C17.6797 8.96502 17.6797 8.35222 17.3108 7.97426C16.9419 7.5963 16.344 7.5963 15.9751 7.97426L11.6055 12.4516L9.75461 10.5551Z"
            fill="#25272C"
          />
          <path
            d="M5.95847 25.4583C5.95847 25.0095 6.3855 24.6458 6.91227 24.6458H19.6297C20.1564 24.6458 20.5835 25.0095 20.5835 25.4583C20.5835 25.907 20.1564 26.2708 19.6297 26.2708H6.91227C6.3855 26.2708 5.95847 25.907 5.95847 25.4583Z"
            fill="#25272C"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="26" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "We Strategize.",
    description:
      "We transform your business goals into a comprehensive digital roadmap for sustained growth and market leadership.",
  },
  {
    color: "#ff531a",
    icon: (
      <svg
        width="31"
        height="31"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 31 31"
      >
        <clipPath id="clip1">
          <path d="m0 0h31v31h-31z" />
        </clipPath>
        <g clipPath="url(#clip1)" fill="#000">
          <path d="m7.00887 25.5508c-.55229 0-1 .4477-1 1v1.6328c0 .5523-.44772 1-1 1h-.4536c-.50159 0-.90821.4066-.90821.9082 0 .5016.40662.9082.90821.9082h21.88033c.5016 0 .9082-.4066.9082-.9082 0-.5016-.4066-.9082-.9082-.9082h-.4536c-.5523 0-1-.4477-1-1v-1.6328c0-.5523-.4477-1-1-1z" />
          <path d="m16.6762 22.7344c0 .5523.4478 1 1 1h3.2033c.4642 0 .8673-.3194.9735-.7713l4.2567-18.11462c.1118-.4759-.1368-.96289-.5879-1.15141l-7.4599-3.117941c-.6589-.275357-1.3857.208607-1.3857.922651z" />
          <path d="m13.3147 23.7344c.5523 0 1-.4477 1-1v-21.23261c0-.714054-.7268-1.198017-1.3856-.92266l-7.45999 3.11794c-.45105.18852-.69969.67551-.58786 1.15141l4.25671 18.11462c.10617.4519.50932.7713.97344.7713z" />
        </g>
      </svg>
    ),
    title: "Proven Expertise.",
    description:
      "Our seasoned team of developers and marketers leverages years of experience to deliver high-performing, scalable solutions.",
  },
  {
    color: "#933ceb",
    icon: (
      <svg
        width="26"
        height="26"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26 26"
        fill="none"
      >
        <g clipPath="url(#clip2)">
          <path
            d="M22.227 0.827637H3.77305C1.69102 0.827637 0 2.51865 0 4.60068V16.3261C0 18.4081 1.69102 20.0991 3.77305 20.0991H10.1562V24.2226C10.1562 24.7456 10.5777 25.1671 11.1008 25.1671C11.3293 25.1671 11.5477 25.0858 11.7203 24.9386L17.357 20.0991H22.232C24.3141 20.0991 26 18.4081 26 16.3261V4.60068C26 2.51865 24.309 0.827637 22.227 0.827637ZM7.67305 12.0757C6.825 12.0757 6.13945 11.3901 6.13945 10.5421C6.13945 9.69404 6.825 9.0085 7.67305 9.0085C8.52109 9.0085 9.20664 9.69404 9.20664 10.5421C9.20664 11.3901 8.51602 12.0757 7.67305 12.0757ZM13 12.0757C12.152 12.0757 11.4664 11.3901 11.4664 10.5421C11.4664 9.69404 12.152 9.0085 13 9.0085C13.848 9.0085 14.5336 9.69404 14.5336 10.5421C14.5336 11.3901 13.848 12.0757 13 12.0757ZM18.327 12.0757C17.4789 12.0757 16.7934 11.3901 16.7934 10.5421C16.7934 9.69404 17.4789 9.0085 18.327 9.0085C19.175 9.0085 19.8605 9.69404 19.8605 10.5421C19.8656 11.3901 19.175 12.0757 18.327 12.0757Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip2">
            <rect width="26" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Results-Driven.",
    description:
      "We focus on measurable outcomes like increased traffic, higher conversions, and improved brand engagement to ensure your ROI.",
  },
  {
    color: "#ff9f1c",
    icon: (
      <svg
        width="26"
        height="22"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 26 22"
      >
        <g fill="#111">
          <path d="m14.8829 21.0861 6.5257-10.3864-6.3068-9.821413c-.2503-.407674 0-.878287.5335-.878287h3.6405c.2517 0 .4391.157348.5021.281796l6.0464 9.834204v.0043c.1101.166.1759.3648.1759.5794 0 .2016-.06.3876-.1573.5464v.0057l-.02.0286s0 .0014-.0015.0029l-6.4827 10.3964c-.0629.1259-.2818.2832-.5335.2832h-3.3887c-.5336 0-.7839-.4391-.5336-.8783z" />
          <path d="m7.49218 21.0861 6.52562-10.3864-6.30677-9.821413c-.25033-.407674 0-.878287.53355-.878287h3.64042c.2518 0 .4392.157348.5021.281796l6.0465 9.834204v.0043c.1101.166.1759.3648.1759.5794 0 .2016-.0601.3876-.1573.5464v.0057l-.0201.0286s0 .0014-.0014.0029l-6.4827 10.3964c-.063.1259-.2833.2832-.5336.2832h-3.38867c-.53355 0-.78388-.4391-.53355-.8783z" />
          <path d="m.100665 21.0861 6.525625-10.3864-6.306782-9.821413c-.2503256-.407674.000015-.878287.533566-.878287h3.640446c.25175 0 .43914.157348.50208.281796l6.0464 9.834204v.0043c.1102.166.1746.3648.1746.5794 0 .2016-.0601.3876-.1574.5464v.0057l-.02.0286s0 .0014-.0015.0029l-6.48266 10.3964c-.06294.1259-.28325.2832-.53357.2832h-3.39012c-.5335517 0-.783874-.4391-.5335488-.8783z" />
        </g>
      </svg>
    ),
    title: "Global Partners.",
    description:
      "Working with clients worldwide, we offer local expertise with a global perspective to help your business succeed anywhere.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-15 bg-[#101010] text-white">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize mb-4">
            Why Choose Arthzone Technologies?
          </h2>
          <p className="text-base md:text-xl font-normal leading-relaxed max-w-[800px] mx-auto">
            Driven by innovation and a client-first approach, we deliver
            exceptional digital services that fuel growth, engagement, and
            lasting success for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 md:p-7 rounded-2xl text-white"
              style={{ background: item.color }}
            >
              <div className="w-[50px] h-[50px] bg-white text-[#101010] rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <div className="mt-5">
                <h3 className="text-2xl md:text-3xl font-semibold leading-tight mb-2.5">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
