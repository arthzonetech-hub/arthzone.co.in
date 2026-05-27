import Footer from "@/components/footer";
import Header from "@/components/headers";

export const metadata = {
  title: "Privacy Policy | Arthzone Technologies",
  description:
    "Privacy policy for Arthzone Technologies covering enquiries, project communication, service delivery, analytics, and data handling.",
};

const sections = [
  {
    title: "Information We Collect",
    items: [
      "Contact details you submit through forms, email, WhatsApp, calls, or project discussions.",
      "Business and project information shared for estimates, proposals, service delivery, hiring, or support.",
      "Career application details such as name, email, phone, experience, portfolio links, cover notes, and resume files.",
      "Basic technical information such as browser, device, referral source, IP address, and analytics events used to improve the website and services.",
    ],
  },
  {
    title: "How We Use Information",
    items: [
      "To respond to enquiries, prepare proposals, schedule calls, and provide services.",
      "To deliver websites, software, automation, AI workflows, app development, design, marketing, and maintenance work.",
      "To review job applications and communicate with candidates.",
      "To improve website performance, service quality, security, and user experience.",
    ],
  },
  {
    title: "Sharing and Service Providers",
    items: [
      "We may use trusted third-party tools for hosting, email, analytics, databases, forms, scheduling, payments, and communication.",
      "We do not sell personal information. Information is shared only when needed for operations, legal compliance, service delivery, or user-requested communication.",
    ],
  },
  {
    title: "Security and Retention",
    items: [
      "We use reasonable technical and operational safeguards to protect information from unauthorized access, misuse, or loss.",
      "We keep information only as long as needed for business, legal, support, hiring, or service purposes, unless a longer period is required by law.",
    ],
  },
  {
    title: "Your Choices",
    items: [
      "You can request correction, update, or deletion of your personal information where applicable.",
      "You can contact us to opt out of non-essential marketing communication.",
      "For privacy requests, contact info@arthzone.co.in with the subject line Privacy Request.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <Header />
      <main className="px-4 pb-20 pt-32 sm:px-6 md:px-10 md:pt-40 lg:px-16">
        <section className="mx-auto max-w-4xl">
          <p className="mb-5 inline-flex rounded-lg bg-[#11d7fa] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#101010]">
            Privacy Policy
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            How Arthzone Handles Information
          </h1>
          <p className="mt-5 text-base leading-7 text-white/68">
            This policy explains how Arthzone Technologies collects, uses, and
            protects information when you visit our website, contact us, apply
            for a role, or work with us on software, AI, automation, website,
            design, app, or digital growth projects.
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
