import ProfessionalInfoPage from "@/components/professional-info-page";

export const metadata = {
  title: "E-Commerce Development | Arthzone Technologies",
  description:
    "E-commerce development services for online stores, checkout flows, product catalogs, inventory workflows, automation, and growth systems.",
};

export default function EcommerceDevelopmentPage() {
  return (
    <ProfessionalInfoPage
      eyebrow="E-Commerce"
      title="Commerce Systems Designed to Sell, Manage, and Scale"
      description="Arthzone builds e-commerce experiences that connect product presentation, checkout flow, operational workflows, analytics, and growth campaigns."
      introTitle="A store needs more than product cards and a payment button."
      intro={[
        "Good e-commerce systems make discovery, trust, checkout, fulfilment, communication, and repeat purchase easier. The customer journey and backend workflow both matter.",
        "We help businesses plan product structure, category navigation, landing pages, payment flow, order handling, analytics, SEO foundations, and automation around the store.",
      ]}
      cardsTitle="E-Commerce Capabilities"
      cards={[
        { title: "Storefront Design", text: "Conversion-focused product pages, category pages, home sections, trust signals, and mobile-first browsing." },
        { title: "Checkout Flow", text: "Payment-friendly journeys, form clarity, cart behavior, order confirmation, and customer communication." },
        { title: "Product Systems", text: "Catalog structure, variants, pricing, images, collections, inventory-friendly workflows, and search." },
        { title: "Automation", text: "Order notifications, enquiry routing, abandoned interest flows, reporting, and operational follow-ups." },
        { title: "Marketing Readiness", text: "SEO pages, campaign landing pages, analytics events, tracking setup, and conversion measurement." },
        { title: "Custom Commerce", text: "When off-the-shelf stores are not enough, we can build custom dashboards, APIs, and business workflows." },
      ]}
      process={[
        { title: "Plan Catalog", text: "Define product structure, categories, variants, pricing, content, and business rules." },
        { title: "Design Journey", text: "Shape browsing, product detail, cart, checkout, and post-purchase experience." },
        { title: "Build & Connect", text: "Develop store pages, payments, forms, analytics, and operational integrations." },
        { title: "Optimize", text: "Review speed, conversion points, SEO, campaigns, and customer behavior." },
      ]}
      outcomes={[
        "Higher trust during purchase",
        "Smoother checkout experience",
        "Better product organization",
        "Marketing-ready store structure",
        "More manageable operations",
      ]}
    />
  );
}
