"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  AdjustmentsHorizontalIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  CurrencyRupeeIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import type { CareerJob } from "@/lib/careers/jobs";
import JobApplicationForm from "./job-application-form";

interface CareersPortalProps {
  jobs: CareerJob[];
  departments: string[];
}

const modes = ["All", "Hybrid", "Remote", "On-site"];

export default function CareersPortal({ jobs, departments }: CareersPortalProps) {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All");
  const [mode, setMode] = useState("All");

  const filteredJobs = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return jobs.filter((job) => {
      const haystack = [
        job.title,
        job.department,
        job.location,
        job.experience,
        job.summary,
        ...job.tags,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!normalized || haystack.includes(normalized)) &&
        (department === "All" || job.department === department) &&
        (mode === "All" || job.mode === mode)
      );
    });
  }, [department, jobs, mode, query]);

  const featured = jobs.filter((job) => job.featured).slice(0, 4);

  return (
    <>
      <section className="border-y border-white/10 bg-[#0d0d0d] px-4 py-8 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["12", "Open technical roles"],
            ["4", "Hiring stages"],
            ["5 MB", "Secure resume upload"],
            ["48 hrs", "Target HR response"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
            >
              <p className="text-3xl font-bold text-[#11d7fa]">{value}</p>
              <p className="mt-1 text-sm text-white/56">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#101010] px-4 py-16 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff9f1c]">
                Featured openings
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-5xl">
                High-impact roles
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/58 md:text-base">
              Work on production websites, SaaS interfaces, AI workflows, automation,
              and growth systems for real businesses.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {featured.map((job) => (
              <Link
                key={job.slug}
                href={`/career/${job.slug}`}
                className="group rounded-[24px] border border-white/10 bg-white/[0.055] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#11d7fa]/50"
              >
                <SparklesIcon className="h-7 w-7 text-[#11d7fa]" />
                <h3 className="mt-5 text-xl font-bold leading-tight text-white">
                  {job.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/58">
                  {job.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#11d7fa]">
                  View role
                  <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="bg-[#0d0d0d] px-4 py-16 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#11d7fa]/25 bg-[#11d7fa]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#11d7fa]">
                <AdjustmentsHorizontalIcon className="h-4 w-4" />
                Live roles
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                Explore openings
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[640px]">
              <label className="relative block sm:col-span-3 lg:col-span-1">
                <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#181818] pl-11 pr-4 text-sm text-white outline-none focus:border-[#11d7fa]"
                  placeholder="Search roles or skills"
                />
              </label>
              <select
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
                className="h-12 rounded-xl border border-white/10 bg-[#181818] px-4 text-sm text-white outline-none focus:border-[#11d7fa]"
              >
                <option>All</option>
                {departments.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <select
                value={mode}
                onChange={(event) => setMode(event.target.value)}
                className="h-12 rounded-xl border border-white/10 bg-[#181818] px-4 text-sm text-white outline-none focus:border-[#11d7fa]"
              >
                {modes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-5">
            {filteredJobs.map((job) => (
              <article
                key={job.slug}
                className="rounded-[24px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:border-[#11d7fa]/45 sm:p-6"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#7614EF]/20 px-3 py-1 text-xs font-bold text-[#c9a6ff]">
                        {job.department}
                      </span>
                      <span className="rounded-full bg-[#ff531a]/15 px-3 py-1 text-xs font-bold text-[#ffb199]">
                        {job.type}
                      </span>
                      <span className="rounded-full bg-[#11d7fa]/15 px-3 py-1 text-xs font-bold text-[#11d7fa]">
                        {job.mode}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-white">{job.title}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/58">
                      {job.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/62">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPinIcon className="h-4 w-4 text-[#11d7fa]" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <BriefcaseIcon className="h-4 w-4 text-[#11d7fa]" />
                        {job.experience}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CurrencyRupeeIcon className="h-4 w-4 text-[#11d7fa]" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/career/${job.slug}`}
                    className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-[#11d7fa] bg-[#11d7fa] px-5 text-sm font-bold text-[#101010] transition hover:bg-white"
                  >
                    Details
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredJobs.length === 0 ? (
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-8 text-center text-white/62">
              No roles matched your filters. Try a broader skill or department.
            </div>
          ) : null}
        </div>
      </section>

      <section id="apply" className="bg-[#101010] px-4 py-16 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff9f1c]">
              Applicant tracking
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
              Apply once. Track-ready from day one.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/58">
              Every submission creates a MongoDB application record with role,
              candidate details, source metadata, status, resume metadata, and HR notes
              fields ready for an internal dashboard.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/70">
              {["Validated form fields", "Resume upload storage", "HR and applicant emails", "Admin analytics API"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#11d7fa]" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
          <JobApplicationForm jobs={jobs} />
        </div>
      </section>
    </>
  );
}
