"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpTrayIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import type { CareerJob } from "@/lib/careers/jobs";

interface JobApplicationFormProps {
  jobs: Pick<CareerJob, "slug" | "title" | "department">[];
  defaultJobSlug?: string;
  compact?: boolean;
}

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function JobApplicationForm({
  jobs,
  defaultJobSlug,
  compact = false,
}: JobApplicationFormProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [resumeName, setResumeName] = useState("");

  const defaultJob = useMemo(
    () => jobs.find((job) => job.slug === defaultJobSlug) || jobs[0],
    [defaultJobSlug, jobs]
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/careers/applications", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Application could not be submitted.");
      }

      setState("success");
      setMessage("Application submitted. Our hiring team will review it and reply soon.");
      form.reset();
      setResumeName("");
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-[24px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-6 ${
        compact ? "" : "lg:p-8"
      }`}
    >
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#11d7fa]">
          Apply now
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Send your profile
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-white/62">
          Share your resume and links. The application is stored securely for HR review.
        </p>
      </div>

      <input
        className="hidden"
        name="_honeypot"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-white/80">Full name</span>
          <input
            name="fullName"
            required
            minLength={2}
            className="h-12 w-full rounded-xl border border-white/10 bg-[#101010]/70 px-4 text-sm text-white outline-none transition focus:border-[#11d7fa]"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-white/80">Email</span>
          <input
            name="email"
            type="email"
            required
            className="h-12 w-full rounded-xl border border-white/10 bg-[#101010]/70 px-4 text-sm text-white outline-none transition focus:border-[#11d7fa]"
            placeholder="you@example.com"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-white/80">Phone</span>
          <input
            name="phone"
            required
            minLength={8}
            className="h-12 w-full rounded-xl border border-white/10 bg-[#101010]/70 px-4 text-sm text-white outline-none transition focus:border-[#11d7fa]"
            placeholder="+91 98765 43210"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-white/80">Role</span>
          <select
            name="jobSlug"
            required
            defaultValue={defaultJob?.slug}
            className="h-12 w-full rounded-xl border border-white/10 bg-[#101010]/70 px-4 text-sm text-white outline-none transition focus:border-[#11d7fa]"
          >
            {jobs.map((job) => (
              <option key={job.slug} value={job.slug}>
                {job.title}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-white/80">Experience</span>
          <input
            name="experience"
            required
            className="h-12 w-full rounded-xl border border-white/10 bg-[#101010]/70 px-4 text-sm text-white outline-none transition focus:border-[#11d7fa]"
            placeholder="Fresher, 2 years, etc."
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-white/80">Portfolio / LinkedIn</span>
          <input
            name="portfolioUrl"
            type="url"
            className="h-12 w-full rounded-xl border border-white/10 bg-[#101010]/70 px-4 text-sm text-white outline-none transition focus:border-[#11d7fa]"
            placeholder="https://"
          />
        </label>
      </div>

      <label className="mt-4 block space-y-2">
        <span className="text-sm font-semibold text-white/80">Resume</span>
        <span className="flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#11d7fa]/40 bg-[#11d7fa]/[0.06] px-4 py-5 text-center transition hover:border-[#11d7fa]">
          <ArrowUpTrayIcon className="h-6 w-6 text-[#11d7fa]" />
          <span className="mt-2 text-sm font-semibold text-white">
            {resumeName || "Upload PDF, DOC, or DOCX"}
          </span>
          <span className="mt-1 text-xs text-white/50">Maximum file size: 5 MB</span>
          <input
            name="resume"
            type="file"
            required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="sr-only"
            onChange={(event) => setResumeName(event.target.files?.[0]?.name || "")}
          />
        </span>
      </label>

      <label className="mt-4 block space-y-2">
        <span className="text-sm font-semibold text-white/80">Why are you a fit?</span>
        <textarea
          name="coverNote"
          required
          minLength={20}
          rows={5}
          className="w-full rounded-2xl border border-white/10 bg-[#101010]/70 px-4 py-3 text-sm text-white outline-none transition focus:border-[#11d7fa]"
          placeholder="Tell us about your strongest work, availability, and what you want to build at Arthzone."
        />
      </label>

      {message ? (
        <div
          className={`mt-4 flex gap-2 rounded-2xl border px-4 py-3 text-sm ${
            state === "success"
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
              : "border-red-400/30 bg-red-400/10 text-red-100"
          }`}
        >
          {state === "success" ? (
            <CheckCircleIcon className="h-5 w-5 shrink-0" />
          ) : (
            <ExclamationCircleIcon className="h-5 w-5 shrink-0" />
          )}
          <span>{message}</span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-[#11d7fa] bg-[#11d7fa] px-5 text-sm font-bold text-[#101010] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        <PaperAirplaneIcon className="h-5 w-5" />
        {state === "submitting" ? "Submitting..." : "Submit application"}
      </button>
    </form>
  );
}
