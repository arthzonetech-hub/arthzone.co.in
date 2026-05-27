import ProfessionalInfoPage from "@/components/professional-info-page";

export const metadata = {
  title: "Industries We Serve | Arthzone Technologies",
  description:
    "Arthzone Technologies builds software, automation, websites, apps, portals, and AI-powered systems for multiple business sectors.",
};

export default function IndustryServicesPage() {
  return (
    <ProfessionalInfoPage
      eyebrow="Industries"
      title="Digital Systems for Businesses That Need Speed, Clarity, and Control"
      description="From local service businesses to growing startups, Arthzone builds software and automation around the way teams actually work."
      introTitle="Every industry has its own workflow, but the same digital pain appears often."
      intro={[
        "Leads get missed. Customer information is scattered. Teams rely on spreadsheets. Reporting is slow. Websites do not connect with real operations. These are the gaps we solve with custom software, AI-assisted workflows, and practical digital systems.",
        "We adapt the structure of each solution to the industry: booking flows for services, catalog workflows for commerce, portals for education, CRM-style views for sales teams, and dashboards for management.",
      ]}
      cardsTitle="Industry-Focused Solutions"
      cards={[
        { title: "Retail & Local Business", text: "Business websites, POS-friendly workflows, catalogue systems, enquiries, WhatsApp flows, and local SEO foundations." },
        { title: "Education & Coaching", text: "Admission enquiry funnels, student portals, course pages, lead tracking, content systems, and automated communication." },
        { title: "Healthcare & Clinics", text: "Appointment journeys, service pages, patient enquiry flows, staff dashboards, and trust-focused digital presence." },
        { title: "Real Estate & Services", text: "Project listings, lead capture, CRM-style tracking, document workflows, and campaign-ready landing pages." },
        { title: "E-Commerce Brands", text: "Product catalogues, checkout journeys, inventory workflows, payment integrations, and conversion optimization." },
        { title: "Startups & SaaS", text: "MVPs, dashboards, user roles, subscriptions, APIs, analytics, onboarding, and scalable product architecture." },
      ]}
      process={[
        { title: "Map Workflow", text: "We document how your current enquiries, customers, staff, and data move." },
        { title: "Find Bottlenecks", text: "We identify where automation, software, or better UX can remove delays." },
        { title: "Build System", text: "We create the right combination of website, portal, dashboard, app, and integrations." },
        { title: "Improve Continuously", text: "We refine based on user feedback, analytics, and operational needs." },
      ]}
      outcomes={[
        "Industry-specific workflows",
        "Better lead management",
        "Clearer internal visibility",
        "Stronger customer experience",
        "Systems that can scale with the business",
      ]}
    />
  );
}
