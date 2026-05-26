"use client";
import React from "react";

export default function ImageWithText() {
  return (
    <section className="bg-[#1F2122] text-white py-15">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 lg:gap-24">
          <div className="flex">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Arthzone team collaboration"
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Quality, On-Time,
              <br />
              Lifelong Support.
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-loose mb-8">
              We deliver exceptional digital solutions on schedule, backed by a
              commitment to quality and a promise of dedicated, long-term
              partnership.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-6 h-[52px] md:h-[60px] bg-[#7614EF] border-2 border-[#7614EF] text-white rounded-xl text-base md:text-xl font-semibold transition-all duration-300 hover:bg-white hover:text-[#7614EF]"
            >
              Explore Our Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
