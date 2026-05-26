import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeftIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  CurrencyRupeeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Header from "@/components/headers";
import Footer from "@/components/footer";
import JobApplicationForm from "@/components/careers/job-application-form";
import { contactHeroBackground } from "@/lib/contact-backdrop";
import { careerJobs, getCareerJob } from "@/lib/careers/jobs";

interface JobPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return careerJobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getCareerJob(slug);

  if (!job) {
    return {
      title: "Job Not Found | Arthzone Technologies",
    };
  }

  return {
    title: `${job.title} | Careers at Arthzone Technologies`,
    description: `${job.summary} Experience: ${job.experience}. Salary: ${job.salary}.`,
    alternates: {
      canonical: `/career/${job.slug}`,
    },
    openGraph: {
      title: `${job.title} at Arthzone Technologies`,
      description: job.summary,
      url: `/career/${job.slug}`,
      type: "website",
    },
  };
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = getCareerJob(slug);

  if (!job) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `${job.summary} ${job.impact}`,
    hiringOrganization: {
      "@type": "Organization",
      name: "Arthzone Technologies",
      sameAs: "https://arthzone.co.in",
    },
    employmentType: job.type.toUpperCase().replace("-", "_"),
    jobLocationType: job.mode === "Remote" ? "TELECOMMUTE" : undefined,
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        value: job.salary,
        unitText: "YEAR",
      },
    },
  };

  return (
    <div
      className="relative min-w-0 overflow-x-hidden text-white"
      style={{ fontFamily: "'DM Sans', sans-serif", background: "#101010" }}
    >
      <Header />

      <main>
        <section
          className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pt-32 md:px-10 md:pt-40 lg:px-16 lg:pt-44"
          style={contactHeroBackground}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(17,215,250,0.16),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,83,26,0.16),transparent_30%),linear-gradient(180deg,rgba(16,16,16,0)_0%,#101010_100%)]" />
          <div className="relative z-[1] mx-auto max-w-6xl">
            <Link
              href="/career#openings"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#11d7fa] transition hover:text-white"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to openings
            </Link>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#7614EF]/25 px-3 py-1 text-xs font-bold text-[#d7c0ff]">
                    {job.department}
                  </span>
                  <span className="rounded-full bg-[#11d7fa]/15 px-3 py-1 text-xs font-bold text-[#11d7fa]">
                    {job.mode}
                  </span>
                </div>
                <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                  {job.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/76 sm:text-lg">
                  {job.summary}
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <div className="grid gap-4 text-sm text-white/72">
                  <span className="inline-flex items-center gap-2">
                    <MapPinIcon className="h-5 w-5 text-[#11d7fa]" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <BriefcaseIcon className="h-5 w-5 text-[#11d7fa]" />
                    {job.experience} · {job.type}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CurrencyRupeeIcon className="h-5 w-5 text-[#11d7fa]" />
                    {job.salary}
                  </span>
                </div>
                <a
                  href="#apply"
                  className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl border-2 border-[#11d7fa] bg-[#11d7fa] px-5 text-sm font-bold text-[#101010] transition hover:bg-white"
                >
                  Apply for this role
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#101010] px-4 py-16 sm:px-6 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-6">
              <InfoBlock title="Role impact" items={[job.impact]} />
              <InfoBlock title="Responsibilities" items={job.responsibilities} />
              <InfoBlock title="Required skills" items={job.requiredSkills} />
              <InfoBlock title="Good to have" items={job.preferredSkills} />
              <InfoBlock title="Hiring process" items={job.hiringProcess} ordered />
            </div>
            <aside id="apply" className="lg:sticky lg:top-8 lg:self-start">
              <JobApplicationForm
                jobs={careerJobs}
                defaultJobSlug={job.slug}
                compact
              />
            </aside>
          </div>
        </section>
      </main>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

function InfoBlock({
  title,
  items,
  ordered = false,
}: {
  title: string;
  items: string[];
  ordered?: boolean;
}) {
  const List = ordered ? "ol" : "ul";

  return (
    <section className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl md:p-8">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <List className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/66 md:text-base">
            {ordered ? (
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#11d7fa] text-xs font-bold text-[#101010]">
                {index + 1}
              </span>
            ) : (
              <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#11d7fa]" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </List>
    </section>
  );
}
