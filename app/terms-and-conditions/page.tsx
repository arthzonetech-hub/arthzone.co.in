import Footer from "@/components/footer";
import Header from "@/components/headers";

export const metadata = {
  title: "Terms & Conditions | Arthzone Technologies",
  description:
    "Terms and conditions for Arthzone Technologies software, AI, website, app, design, automation, and digital growth services.",
};

const sections = [
  {
    title: "Scope of Services",
    items: [
      "Arthzone provides software development, web applications, websites, AI-assisted workflows, automation, app development, UI/UX design, e-commerce, and digital marketing services.",
      "The exact scope, deliverables, timelines, and fees are defined in the proposal, quotation, invoice, or written project agreement.",
    ],
  },
  {
    title: "Client Responsibilities",
    items: [
      "Clients are responsible for providing accurate requirements, content, approvals, access credentials, brand assets, and timely feedback.",
      "Delays in content, approvals, third-party access, or payment may affect project timelines.",
    ],
  },
  {
    title: "Payments and Timelines",
    items: [
      "Payment schedules are shared before work begins and may include advance, milestone, or final payment terms.",
      "Timelines are estimated based on agreed scope and may change if requirements expand or approvals are delayed.",
    ],
  },
  {
    title: "Revisions and Change Requests",
    items: [
      "Included revisions are defined in the project scope. Additional changes, features, pages, integrations, or redesign requests may be quoted separately.",
      "Major scope changes may require revised timelines and pricing.",
    ],
  },
  {
    title: "Ownership and Third-Party Tools",
    items: [
      "Final deliverable ownership is transferred according to the agreed payment and project terms.",
      "Third-party services such as hosting, domains, email, APIs, plugins, payment gateways, AI tools, or SaaS platforms remain subject to their own terms and fees.",
    ],
  },
  {
    title: "Support and Maintenance",
    items: [
      "Post-launch support, maintenance, updates, backups, monitoring, and feature improvements are available through separate plans or written agreements.",
      "Arthzone is not responsible for issues caused by unauthorized changes, expired third-party services, incorrect credentials, or external platform outages.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <Header />
      <main className="px-4 pb-20 pt-32 sm:px-6 md:px-10 md:pt-40 lg:px-16">
        <section className="mx-auto max-w-4xl">
          <p className="mb-5 inline-flex rounded-lg bg-[#11d7fa] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#101010]">
            Terms & Conditions
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Service Terms for Working with Arthzone
          </h1>
          <p className="mt-5 text-base leading-7 text-white/68">
            These terms provide a general framework for working with Arthzone
            Technologies. Project-specific terms, pricing, timelines, and
            deliverables should always be confirmed in writing before work
            begins.
          </p>
          <p className="mt-3 text-sm font-bold text-white/45">
            Last updated: May 27, 2026
          </p>
        </section>

        <section className="mx-auto mt-10 grid max-w-4xl gap-4">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-xl border border-white/10 bg-white/[0.035] p-5"
            >
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
                {section.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
