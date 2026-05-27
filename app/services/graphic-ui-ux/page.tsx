import ProfessionalInfoPage from "@/components/professional-info-page";

export const metadata = {
  title: "Graphic, UI & UX Design | Arthzone Technologies",
  description:
    "UI/UX and graphic design services for software products, dashboards, websites, apps, brands, and digital campaigns.",
};

export default function GraphicUiUxPage() {
  return (
    <ProfessionalInfoPage
      eyebrow="Design"
      title="Design That Makes Software, Websites, and Brands Easier to Understand"
      description="Arthzone designs interfaces and visual systems that support clarity, usability, trust, and conversion across digital products and marketing touchpoints."
      introTitle="Design is not decoration; it is how people understand and use your business."
      intro={[
        "Good UI/UX reduces confusion, shortens decision time, improves adoption, and makes complex workflows feel manageable. Good graphic design gives the brand consistency across every customer touchpoint.",
        "We design for websites, dashboards, customer portals, mobile apps, landing pages, social creatives, campaign assets, and business presentations.",
      ]}
      cardsTitle="Design Services"
      cards={[
        { title: "UI Design", text: "Clean screens for apps, dashboards, admin panels, portals, forms, landing pages, and SaaS-style products." },
        { title: "UX Flows", text: "User journeys, wireframes, navigation planning, form logic, onboarding, and task completion flows." },
        { title: "Dashboard Design", text: "Information hierarchy, cards, tables, filters, statuses, analytics, and role-based views." },
        { title: "Website Design", text: "Hero sections, service pages, conversion sections, responsive layouts, and content-driven page structure." },
        { title: "Graphic Design", text: "Brand creatives, social posts, ad visuals, pitch assets, icons, and campaign material." },
        { title: "Design Systems", text: "Reusable components, typography, color rules, spacing, buttons, forms, and UI consistency guidelines." },
      ]}
      process={[
        { title: "Understand Users", text: "Clarify who uses the interface and what they need to complete." },
        { title: "Structure Content", text: "Organize information, actions, and hierarchy before visual polish." },
        { title: "Design Screens", text: "Create responsive, usable, brand-aligned screens and creative assets." },
        { title: "Refine", text: "Improve based on feedback, edge cases, and implementation needs." },
      ]}
      outcomes={[
        "Cleaner user journeys",
        "More professional brand presence",
        "Better dashboard usability",
        "Higher conversion clarity",
        "Consistent visual language",
      ]}
    />
  );
}
