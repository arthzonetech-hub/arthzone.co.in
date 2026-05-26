import React from "react";
import Header from "@/components/headers";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import MeetingSchedule from "@/components/meeting-schedule";
import { contactHeroBackground } from "@/lib/contact-backdrop";

export const metadata = {
  title: "Contact Us - Arthzone",
  description:
    "Get in touch with our team — schedule a meeting or send a message.",
};

export default function ContactUsPage() {
  return (
    <div
      className="relative min-w-0 overflow-x-hidden text-white"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#101010",
      }}
    >
      <div className="relative">
        <Header />

        <section
          className="relative overflow-hidden px-4 pb-14 pt-28 text-white sm:px-6 sm:pb-16 sm:pt-32 md:px-10 md:pb-20 md:pt-40 lg:px-16 lg:pb-24 lg:pt-44 xl:pb-28 xl:pt-48"
          style={contactHeroBackground}
        >
          <div className="relative z-[1] mx-auto max-w-[1280px] text-center">
            <h5 className="mb-3 inline-block rounded-full bg-[#11d7fa] px-5 py-2.5 text-sm font-semibold text-white sm:text-base">
              Contact Us
            </h5>
            <h1 className="mx-auto mb-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.15] xl:text-7xl">
              Let&apos;s Start Something Great
            </h1>
            <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-white/90 sm:text-lg md:text-xl md:leading-[1.6]">
              Have a project in mind or a question to ask? Fill out the form
              and we&apos;ll get back to you as soon as possible.
            </p>
            <div
              className="mt-6 flex items-center justify-center gap-2 sm:mt-8"
              aria-hidden
            >
              <span className="h-3 w-3 rounded-full bg-[#7614EF] sm:h-3.5 sm:w-3.5" />
              <span className="h-3 w-3 rounded-full bg-[#ff531a] sm:h-3.5 sm:w-3.5" />
              <span className="h-3 w-3 rounded-full bg-[#933ceb] sm:h-3.5 sm:w-3.5" />
              <span className="h-3 w-3 rounded-full bg-[#ff9f1c] sm:h-3.5 sm:w-3.5" />
            </div>
          </div>
        </section>
      </div>

      <ContactForm />
      <MeetingSchedule />
      <Footer />
    </div>
  );
}
