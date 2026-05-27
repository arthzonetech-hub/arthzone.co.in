import ProfessionalInfoPage from "@/components/professional-info-page";

export const metadata = {
  title: "App Development Services | Arthzone Technologies",
  description:
    "Mobile and web app development services for customer apps, internal tools, dashboards, booking flows, and AI-powered workflows.",
};

export default function AppDevelopmentPage() {
  return (
    <ProfessionalInfoPage
      eyebrow="App Development"
      title="Business Apps Built Around Real Workflows"
      description="Arthzone designs and develops apps that help teams, customers, and operations work better: portals, booking systems, dashboards, mobile experiences, and connected workflows."
      introTitle="A useful app is not just a screen on a phone."
      intro={[
        "The best apps solve a clear problem: customer convenience, staff productivity, order management, booking, reporting, communication, or internal workflow control.",
        "We plan app projects around users, roles, data, notifications, integrations, and support needs. That creates applications that are easier to launch, maintain, and improve.",
      ]}
      cardsTitle="App Solutions We Can Build"
      cards={[
        { title: "Customer Apps", text: "Service booking, account access, order updates, content access, loyalty flows, and self-service experiences." },
        { title: "Internal Apps", text: "Staff workflows, task tracking, approvals, reporting, data capture, and operational dashboards." },
        { title: "Progressive Web Apps", text: "Installable web experiences that work across devices without the overhead of app store distribution." },
        { title: "Admin Panels", text: "Role-based management screens for users, content, orders, enquiries, reports, and business settings." },
        { title: "AI Features", text: "Smart suggestions, summaries, assisted responses, search, lead scoring, and workflow automation." },
        { title: "Integrations", text: "Payments, email, WhatsApp links, CRMs, analytics, APIs, databases, and existing business tools." },
      ]}
      process={[
        { title: "Product Scope", text: "Define users, core actions, must-have features, and launch priorities." },
        { title: "UX Planning", text: "Map screens, flows, permissions, data entry, and mobile behavior." },
        { title: "Development", text: "Build the frontend, backend, APIs, database, and integrations in phases." },
        { title: "Launch & Improve", text: "Test, deploy, monitor, support, and add features based on real usage." },
      ]}
      outcomes={[
        "Cleaner customer experience",
        "Better staff productivity",
        "Centralized business data",
        "Room for future AI and automation",
        "Scalable app foundation",
      ]}
    />
  );
}
