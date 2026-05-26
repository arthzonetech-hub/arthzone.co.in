import type { Metadata } from "next";
import Header from "@/components/headers";
import Footer from "@/components/footer";
import MeetingSchedule from "@/components/meeting-schedule";
import CareersPortal from "@/components/careers/careers-portal";
import { contactHeroBackground } from "@/lib/contact-backdrop";
import { careerDepartments, careerJobs } from "@/lib/careers/jobs";

export const metadata: Metadata = {
  title: "Careers at Arthzone Technologies | Technical Jobs in India",
  description:
    "Explore full stack, React, backend, AI/ML, DevOps, QA, UI/UX, mobile, SEO, and technical writing jobs at Arthzone Technologies.",
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "Careers at Arthzone Technologies",
    description:
      "Join Arthzone Technologies and build websites, SaaS products, AI workflows, apps, and growth systems for real businesses.",
    url: "/career",
    type: "website",
  },
};

const hiringSteps = [
  {
    step: "01",
    title: "Profile screening",
    desc: "We review your resume, portfolio, role fit, and the kind of work you want to grow into.",
  },
  {
    step: "02",
    title: "Technical conversation",
    desc: "A focused discussion with the team on skills, projects, problem solving, and communication.",
  },
  {
    step: "03",
    title: "Practical assessment",
    desc: "For selected roles, a small task or work sample review helps both sides understand fit.",
  },
  {
    step: "04",
    title: "Offer and onboarding",
    desc: "Clear compensation, expectations, tools access, and a practical ramp plan from week one.",
  },
];

export default function CareerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Arthzone Technologies job openings",
    itemListElement: careerJobs.map((job, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://arthzone.co.in/career/${job.slug}`,
      name: job.title,
    })),
  };

  return (
    <div
      className="relative min-w-0 overflow-x-hidden text-white"
      style={{ fontFamily: "'DM Sans', sans-serif", background: "#101010" }}
    >
      <Header />

      <main>
        <section
          className="relative overflow-hidden px-4 pb-14 pt-28 text-white sm:px-6 sm:pb-16 sm:pt-32 md:px-10 md:pb-20 md:pt-40 lg:px-16 lg:pb-24 lg:pt-44 xl:pb-28 xl:pt-48"
          style={contactHeroBackground}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(17,215,250,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(118,20,239,0.22),transparent_30%),linear-gradient(180deg,rgba(16,16,16,0)_0%,#101010_100%)]" />
          <div className="relative z-[1] mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex rounded-full border border-[#11d7fa]/30 bg-[#11d7fa]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#11d7fa] backdrop-blur">
                Arthzone recruitment portal
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Build technology that businesses actually use.
              </h1>
              <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-white/78 sm:text-lg md:text-xl">
                Join Arthzone Technologies across engineering, AI, design, QA, DevOps,
                mobile, content, and growth. Work on production projects with modern
                stacks, direct ownership, and a team that cares about craft.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#openings"
                  className="inline-flex h-13 items-center justify-center rounded-xl border-2 border-[#11d7fa] bg-[#11d7fa] px-7 text-base font-bold text-[#101010] transition hover:bg-white"
                >
                  View openings
                </a>
                <a
                  href="#apply"
                  className="inline-flex h-13 items-center justify-center rounded-xl border-2 border-[#ff531a] bg-[#ff531a] px-7 text-base font-bold text-white transition hover:bg-white hover:text-[#ff531a]"
                >
                  Apply now
                </a>
              </div>
            </div>
          </div>
        </section>

        <CareersPortal jobs={careerJobs} departments={careerDepartments} />

        <section className="bg-[#0d0d0d] px-4 py-16 sm:px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff9f1c]">
                Hiring process
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
                Clear steps, no mystery rounds.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {hiringSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#11d7fa] text-sm font-bold text-[#101010]">
                    {item.step}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/58">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MeetingSchedule />
      </main>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
