"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowDownTrayIcon,
  ArrowPathIcon,
  ArrowRightOnRectangleIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  EyeIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

type Status =
  | "new"
  | "screening"
  | "shortlisted"
  | "interview"
  | "task"
  | "offer"
  | "hired"
  | "rejected";

interface CareerApplication {
  _id: string;
  candidate: {
    fullName: string;
    email: string;
    phone: string;
    experience: string;
    portfolioUrl?: string | null;
  };
  job: {
    slug: string;
    title: string;
    department: string;
    type: string;
    mode: string;
    location: string;
    salary: string;
  };
  coverNote: string;
  resume?: {
    fileName: string;
    contentType: string;
    size: number;
  };
  tracking: {
    status: Status;
    stage: string;
    rating?: number | null;
    hrNotes?: string;
  };
  analytics?: {
    userAgent?: string | null;
    referer?: string | null;
    ip?: string | null;
  };
  createdAt: string;
  updatedAt: string;
}

interface AnalyticsBucket {
  _id: string | null;
  title?: string;
  count: number;
}

interface ApplicationsResponse {
  success: boolean;
  total: number;
  applications: CareerApplication[];
  analytics: {
    byStatus: AnalyticsBucket[];
    byRole: AnalyticsBucket[];
  };
  error?: string;
}

const storageKey = "arthzone-careers-admin-token";
const statuses: Status[] = [
  "new",
  "screening",
  "shortlisted",
  "interview",
  "task",
  "offer",
  "hired",
  "rejected",
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatFileSize(bytes?: number) {
  if (!bytes) return "Unknown size";
  const kb = bytes / 1024;
  if (kb < 1024) return `${Math.round(kb)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

function statusClasses(status: string) {
  const styles: Record<string, string> = {
    new: "bg-[#11d7fa]/15 text-[#075465] border-[#11d7fa]/35",
    screening: "bg-[#8b5cf6]/12 text-[#5b2fc6] border-[#8b5cf6]/25",
    shortlisted: "bg-[#22c55e]/12 text-[#126b35] border-[#22c55e]/25",
    interview: "bg-[#f59e0b]/14 text-[#8a5300] border-[#f59e0b]/30",
    task: "bg-[#0ea5e9]/12 text-[#075985] border-[#0ea5e9]/25",
    offer: "bg-[#14b8a6]/12 text-[#0f766e] border-[#14b8a6]/25",
    hired: "bg-[#16a34a]/14 text-[#166534] border-[#16a34a]/25",
    rejected: "bg-[#ef4444]/12 text-[#991b1b] border-[#ef4444]/25",
  };
  return styles[status] || "bg-black/5 text-black/70 border-black/10";
}

function statusActionClasses(status: string, isActive: boolean) {
  if (isActive) return statusClasses(status);
  return "border-black/10 bg-white text-black/62 hover:border-[#11d7fa] hover:text-[#101010]";
}

export default function CareersAdminDashboard() {
  const [token, setToken] = useState("");
  const [loginToken, setLoginToken] = useState("");
  const [applications, setApplications] = useState<CareerApplication[]>([]);
  const [analytics, setAnalytics] = useState<ApplicationsResponse["analytics"]>({
    byStatus: [],
    byRole: [],
  });
  const [total, setTotal] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");
  const [jobFilter, setJobFilter] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [savingId, setSavingId] = useState("");
  const [downloadingId, setDownloadingId] = useState("");
  const [viewingId, setViewingId] = useState("");
  const [notes, setNotes] = useState<Record<string, string>>({});

  const isLoggedIn = Boolean(token);

  const jobOptions = useMemo(() => {
    const jobs = new Map<string, string>();
    analytics.byRole.forEach((role) => {
      if (role._id) jobs.set(role._id, role.title || role._id);
    });
    applications.forEach((application) => {
      jobs.set(application.job.slug, application.job.title);
    });
    return Array.from(jobs.entries());
  }, [analytics.byRole, applications]);

  const visibleApplications = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return applications;
    return applications.filter((application) => {
      const content = [
        application.candidate.fullName,
        application.candidate.email,
        application.candidate.phone,
        application.candidate.experience,
        application.job.title,
        application.coverNote,
      ]
        .join(" ")
        .toLowerCase();
      return content.includes(term);
    });
  }, [applications, search]);

  const fetchApplications = useCallback(async () => {
    if (!token) return;

    setLoading(true);
    setError("");
    const params = new URLSearchParams({ limit: "100" });
    if (statusFilter) params.set("status", statusFilter);
    if (jobFilter) params.set("jobSlug", jobFilter);

    try {
      const response = await fetch(`/api/careers/admin/applications?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = (await response.json()) as ApplicationsResponse;

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem(storageKey);
          setToken("");
        }
        throw new Error(data.error || "Could not load applications.");
      }

      setApplications(data.applications || []);
      setAnalytics(data.analytics || { byStatus: [], byRole: [] });
      setTotal(data.total || 0);
      setNotes(
        Object.fromEntries(
          (data.applications || []).map((application) => [
            application._id,
            application.tracking.hrNotes || "",
          ])
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load applications.");
    } finally {
      setLoading(false);
    }
  }, [jobFilter, statusFilter, token]);

  useEffect(() => {
    const savedToken = localStorage.getItem(storageKey);
    if (savedToken) {
      setToken(savedToken);
      setLoginToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (token) fetchApplications();
  }, [fetchApplications, token]);

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextToken = loginToken.trim();
    if (!nextToken) {
      setError("Enter the admin token.");
      return;
    }

    localStorage.setItem(storageKey, nextToken);
    setToken(nextToken);
  }

  function handleLogout() {
    localStorage.removeItem(storageKey);
    setToken("");
    setLoginToken("");
    setApplications([]);
    setAnalytics({ byStatus: [], byRole: [] });
    setTotal(0);
  }

  async function updateStatus(application: CareerApplication, status: Status) {
    setSavingId(application._id);
    setError("");

    try {
      const response = await fetch("/api/careers/admin/applications", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applicationId: application._id,
          status,
          stage: status,
          hrNotes: notes[application._id] || "",
          rating: application.tracking.rating ?? null,
        }),
      });
      const data = (await response.json()) as { success?: boolean; error?: string };
      if (!response.ok) throw new Error(data.error || "Could not update status.");
      await fetchApplications();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not update status.");
    } finally {
      setSavingId("");
    }
  }

  async function handleResume(application: CareerApplication, action: "view" | "download") {
    const previewWindow = action === "view" ? window.open("", "_blank") : null;

    if (action === "view") {
      if (!previewWindow) {
        setError("Browser blocked the resume preview. Use Download instead.");
        return;
      }
      setViewingId(application._id);
    } else {
      setDownloadingId(application._id);
    }
    setError("");

    try {
      const response = await fetch(
        `/api/careers/admin/applications/${application._id}/resume`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error || "Could not download resume.");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      if (action === "view") {
        if (!previewWindow) {
          URL.revokeObjectURL(url);
          throw new Error("Browser blocked the resume preview. Use Download instead.");
        }
        previewWindow.location.href = url;
        window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
      } else {
        const link = document.createElement("a");
        link.href = url;
        link.download = application.resume?.fileName || "resume.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      if (action === "view") previewWindow?.close();
      setError(err instanceof Error ? err.message : "Could not open resume.");
    } finally {
      setViewingId("");
      setDownloadingId("");
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-[#101010]">
      <section className="border-b border-black/10 bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0a8fa8]">
              Arthzone Careers
            </p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Admin applications
            </h1>
          </div>
          {isLoggedIn ? (
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={fetchApplications}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-black/10 bg-white px-4 text-sm font-bold text-[#101010] shadow-sm transition hover:border-[#11d7fa]"
                disabled={loading}
              >
                <ArrowPathIcon className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#101010] px-4 text-sm font-bold text-white transition hover:bg-[#2a2a2a]"
              >
                <ArrowRightOnRectangleIcon className="h-4 w-4" />
                Logout
              </button>
            </div>
          ) : null}
        </div>
      </section>

      {!isLoggedIn ? (
        <section className="mx-auto flex min-h-[calc(100vh-92px)] max-w-md items-center px-4 py-12">
          <form
            onSubmit={handleLogin}
            className="w-full rounded-lg border border-black/10 bg-white p-6 shadow-sm"
          >
            <UserCircleIcon className="h-10 w-10 text-[#0a8fa8]" />
            <h2 className="mt-5 text-2xl font-bold">Admin login</h2>
            <p className="mt-2 text-sm leading-6 text-black/60">
              Enter your `CAREERS_ADMIN_TOKEN` from `.env.local`.
            </p>
            <label className="mt-6 block text-sm font-bold text-black/75" htmlFor="admin-token">
              Admin token
            </label>
            <input
              id="admin-token"
              type="password"
              value={loginToken}
              onChange={(event) => setLoginToken(event.target.value)}
              className="mt-2 h-12 w-full rounded-lg border border-black/15 bg-white px-4 text-base outline-none transition focus:border-[#11d7fa] focus:ring-4 focus:ring-[#11d7fa]/15"
              placeholder="arthzonetechnologiesindore"
            />
            {error ? <p className="mt-4 text-sm font-bold text-red-600">{error}</p> : null}
            <button
              type="submit"
              className="mt-6 h-12 w-full rounded-lg bg-[#11d7fa] px-5 text-sm font-bold text-[#101010] transition hover:bg-[#69e8ff]"
            >
              Open dashboard
            </button>
          </form>
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-black/55">Total applications</p>
              <p className="mt-3 text-3xl font-bold">{total}</p>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-black/55">Newest status</p>
              <p className="mt-3 text-3xl font-bold capitalize">
                {analytics.byStatus[0]?._id || "None"}
              </p>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-black/55">Top role</p>
              <p className="mt-3 line-clamp-1 text-2xl font-bold">
                {analytics.byRole[0]?.title || "None"}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {statuses.map((status) => {
              const count =
                analytics.byStatus.find((bucket) => bucket._id === status)?.count || 0;
              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => setStatusFilter(statusFilter === status ? "" : status)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-bold capitalize transition ${
                    statusFilter === status
                      ? statusClasses(status)
                      : "border-black/10 bg-white text-black/58 hover:border-[#11d7fa]"
                  }`}
                >
                  {status} · {count}
                </button>
              );
            })}
          </div>

          <div className="mt-5 grid gap-3 rounded-lg border border-black/10 bg-white p-4 shadow-sm lg:grid-cols-[1fr_220px_260px_auto]">
            <div className="relative">
              <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-black/35" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="h-11 w-full rounded-lg border border-black/10 bg-[#f7f9fc] pl-10 pr-4 text-sm outline-none transition focus:border-[#11d7fa]"
                placeholder="Search name, email, phone, role"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="h-11 rounded-lg border border-black/10 bg-[#f7f9fc] px-3 text-sm font-medium outline-none transition focus:border-[#11d7fa]"
            >
              <option value="">All statuses</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <select
              value={jobFilter}
              onChange={(event) => setJobFilter(event.target.value)}
              className="h-11 rounded-lg border border-black/10 bg-[#f7f9fc] px-3 text-sm font-medium outline-none transition focus:border-[#11d7fa]"
            >
              <option value="">All roles</option>
              {jobOptions.map(([slug, title]) => (
                <option key={slug} value={slug}>
                  {title}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setStatusFilter("");
                setJobFilter("");
              }}
              className="h-11 rounded-lg border border-black/10 px-4 text-sm font-bold transition hover:border-[#11d7fa]"
            >
              Clear
            </button>
          </div>

          {error ? (
            <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
              {error}
            </div>
          ) : null}

          <div className="mt-5 grid gap-4">
            {!loading && applications.length > 0 ? (
              <p className="text-sm font-bold text-black/48">
                Showing {visibleApplications.length} of {total} applications
              </p>
            ) : null}

            {loading ? (
              <div className="rounded-lg border border-black/10 bg-white p-8 text-center text-sm font-bold text-black/55">
                Loading applications...
              </div>
            ) : null}

            {!loading && visibleApplications.length === 0 ? (
              <div className="rounded-lg border border-black/10 bg-white p-8 text-center text-sm font-bold text-black/55">
                No applications found.
              </div>
            ) : null}

            {visibleApplications.map((application) => (
              <article
                key={application._id}
                className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm"
              >
                <div className="border-b border-black/10 bg-[linear-gradient(135deg,#ffffff_0%,#eefbff_48%,#fff7ed_100%)] p-4 sm:p-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/42">
                        Application ID: {application._id}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <h2 className="text-2xl font-bold tracking-tight">
                          {application.candidate.fullName}
                        </h2>
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-bold capitalize ${statusClasses(
                            application.tracking.status
                          )}`}
                        >
                          {application.tracking.status}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-black/62">
                        <a
                          href={`mailto:${application.candidate.email}`}
                          className="inline-flex items-center gap-2 hover:text-[#087f96]"
                        >
                          <EnvelopeIcon className="h-4 w-4" />
                          {application.candidate.email}
                        </a>
                        <a
                          href={`tel:${application.candidate.phone}`}
                          className="inline-flex items-center gap-2 hover:text-[#087f96]"
                        >
                          <PhoneIcon className="h-4 w-4" />
                          {application.candidate.phone}
                        </a>
                        <span className="inline-flex items-center gap-2">
                          <CalendarDaysIcon className="h-4 w-4" />
                          Applied {formatDate(application.createdAt)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => handleResume(application, "view")}
                        disabled={viewingId === application._id}
                        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-4 text-sm font-bold text-[#101010] transition hover:border-[#11d7fa] disabled:opacity-60"
                      >
                        <EyeIcon className="h-4 w-4" />
                        {viewingId === application._id ? "Opening" : "View"}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleResume(application, "download")}
                        disabled={downloadingId === application._id}
                        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#101010] px-4 text-sm font-bold text-white transition hover:bg-[#2a2a2a] disabled:opacity-60"
                      >
                        <ArrowDownTrayIcon className="h-4 w-4" />
                        {downloadingId === application._id ? "Downloading" : "Download"}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
                  <div className="p-4 sm:p-5">
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      <div className="rounded-lg bg-[#f7f9fc] p-3">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-black/40">
                          Role
                        </p>
                        <p className="mt-1 text-sm font-bold text-black/78">
                          {application.job.title}
                        </p>
                      </div>
                      <div className="rounded-lg bg-[#f7f9fc] p-3">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-black/40">
                          Experience
                        </p>
                        <p className="mt-1 text-sm font-bold text-black/78">
                          {application.candidate.experience}
                        </p>
                      </div>
                      <div className="rounded-lg bg-[#f7f9fc] p-3">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-black/40">
                          Salary
                        </p>
                        <p className="mt-1 text-sm font-bold text-black/78">
                          {application.job.salary}
                        </p>
                      </div>
                      <div className="rounded-lg bg-[#f7f9fc] p-3">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-black/40">
                          Resume
                        </p>
                        <p className="mt-1 line-clamp-1 text-sm font-bold text-black/78">
                          {application.resume?.fileName || "No file"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg border border-black/10 p-4">
                      <p className="inline-flex items-center gap-2 text-sm font-bold text-black/70">
                        <BriefcaseIcon className="h-4 w-4" />
                        Job details
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-black/58">
                        <span className="rounded-full bg-black/[0.04] px-3 py-1.5">
                          {application.job.department}
                        </span>
                        <span className="rounded-full bg-black/[0.04] px-3 py-1.5">
                          {application.job.type}
                        </span>
                        <span className="rounded-full bg-black/[0.04] px-3 py-1.5">
                          {application.job.mode}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/[0.04] px-3 py-1.5">
                          <MapPinIcon className="h-3.5 w-3.5" />
                          {application.job.location}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg bg-[#f7f9fc] p-4">
                      <p className="text-sm font-bold text-black/70">Cover note</p>
                      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-black/68">
                        {application.coverNote}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {application.candidate.portfolioUrl ? (
                        <a
                          href={application.candidate.portfolioUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex h-10 items-center gap-2 rounded-lg border border-black/10 bg-white px-4 text-sm font-bold text-[#087f96] transition hover:border-[#11d7fa]"
                        >
                          <LinkIcon className="h-4 w-4" />
                          Portfolio
                        </a>
                      ) : null}
                      <button
                        type="button"
                        onClick={() => handleResume(application, "view")}
                        className="mt-4 inline-flex h-10 items-center gap-2 rounded-lg border border-black/10 bg-white px-4 text-sm font-bold text-[#101010] transition hover:border-[#11d7fa]"
                      >
                        <DocumentTextIcon className="h-4 w-4" />
                        {formatFileSize(application.resume?.size)}
                      </button>
                    </div>

                    <div className="mt-4 grid gap-2 text-xs font-bold text-black/42 sm:grid-cols-2">
                      <p>Updated: {formatDate(application.updatedAt)}</p>
                      <p>IP: {application.analytics?.ip || "Not captured"}</p>
                      <p className="sm:col-span-2">
                        Source: {application.analytics?.referer || "Not captured"}
                      </p>
                      <p className="line-clamp-2 sm:col-span-2">
                        Device: {application.analytics?.userAgent || "Not captured"}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-black/10 bg-[#fbfcfe] p-4 sm:p-5 lg:border-l lg:border-t-0">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-bold text-black/70">Assign status</p>
                        <span className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-bold capitalize text-black/52">
                          {application.tracking.stage || application.tracking.status}
                        </span>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {statuses.map((status) => {
                          const isActive = application.tracking.status === status;
                          return (
                            <button
                              key={status}
                              type="button"
                              onClick={() => updateStatus(application, status)}
                              disabled={savingId === application._id || isActive}
                              className={`min-h-10 rounded-lg border px-3 py-2 text-left text-xs font-bold capitalize transition disabled:cursor-default disabled:opacity-80 ${statusActionClasses(
                                status,
                                isActive
                              )}`}
                              title={`Move ${application.candidate.fullName} to ${status}`}
                            >
                              {savingId === application._id && !isActive
                                ? "Saving..."
                                : status}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <label className="mt-4 block text-sm font-bold text-black/70">
                      HR notes
                      <textarea
                        value={notes[application._id] || ""}
                        onChange={(event) =>
                          setNotes((current) => ({
                            ...current,
                            [application._id]: event.target.value,
                          }))
                        }
                        className="mt-2 min-h-24 w-full resize-y rounded-lg border border-black/10 bg-white px-3 py-3 text-sm font-medium outline-none transition focus:border-[#11d7fa]"
                        placeholder="Add internal note"
                      />
                    </label>
                    <button
                      type="button"
                      onClick={() => updateStatus(application, application.tracking.status)}
                      disabled={savingId === application._id}
                      className="mt-3 h-10 w-full rounded-lg bg-[#11d7fa] px-4 text-sm font-bold text-[#101010] transition hover:bg-[#69e8ff] disabled:opacity-60"
                    >
                      {savingId === application._id ? "Saving" : "Save note"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
