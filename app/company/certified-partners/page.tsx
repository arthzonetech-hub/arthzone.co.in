import ProfessionalInfoPage from "@/components/professional-info-page";

export const metadata = {
  title: "Technology & Platform Ecosystem | Arthzone Technologies",
  description:
    "Explore the platforms, tools, and technology ecosystem Arthzone works with for software, automation, AI, websites, and digital growth.",
};

export default function CertifiedPartnersPage() {
  return (
    <ProfessionalInfoPage
      eyebrow="Technology Ecosystem"
      title="Tools, Platforms, and Integrations We Build Around"
      description="This page presents Arthzone's platform familiarity and technology ecosystem without making unverified certification claims."
      introTitle="A useful digital system often depends on how well tools connect."
      intro={[
        "Modern businesses use websites, CRMs, forms, payment systems, analytics, email tools, WhatsApp, ad platforms, databases, and internal spreadsheets. Our role is to make these pieces work together more clearly.",
        "We choose tools based on reliability, maintainability, business fit, and long-term support. When a custom build is better than a plug-in stack, we recommend that honestly.",
      ]}
      cardsTitle="Platform Areas"
      cards={[
        { title: "Web & App Frameworks", text: "Modern frontend and backend frameworks for fast, responsive, maintainable digital products." },
        { title: "Databases & APIs", text: "Structured data models, API integrations, secure access patterns, and reporting-ready storage." },
        { title: "AI Tooling", text: "AI-assisted workflows, content support, summaries, smart search, chat interfaces, and internal productivity tools." },
        { title: "Commerce Platforms", text: "E-commerce setup, product flows, payments, checkout experience, and operational integrations." },
        { title: "Marketing Tools", text: "Analytics, tracking, landing pages, SEO foundations, campaign integrations, and conversion systems." },
        { title: "Communication Systems", text: "Email, forms, notifications, WhatsApp links, lead routing, and customer response workflows." },
      ]}
      process={[
        { title: "Audit Stack", text: "We understand the tools you already use and what is missing." },
        { title: "Recommend Fit", text: "We choose platforms based on cost, scale, workflow, and maintenance needs." },
        { title: "Integrate", text: "We connect systems through APIs, forms, webhooks, dashboards, and automation." },
        { title: "Maintain", text: "We document and support the stack so it remains usable after launch." },
      ]}
      outcomes={[
        "Fewer disconnected tools",
        "Cleaner customer and lead data",
        "Better reporting visibility",
        "More reliable business workflows",
      ]}
    />
  );
}
