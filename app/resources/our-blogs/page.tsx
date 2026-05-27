import ProfessionalInfoPage from "@/components/professional-info-page";

export const metadata = {
  title: "Blogs & Insights | Arthzone Technologies",
  description:
    "Professional insights from Arthzone Technologies on AI, software development, automation, web applications, SEO, and digital growth.",
};

export default function BlogsPage() {
  return (
    <ProfessionalInfoPage
      eyebrow="Insights"
      title="Practical Thinking on AI, Software, Automation, and Growth"
      description="Our blog direction is built around useful business technology education, not generic trend posts."
      introTitle="The best content helps business owners make clearer technology decisions."
      intro={[
        "Arthzone's content will focus on practical guides, workflows, implementation thinking, and lessons from building software and digital systems for real businesses.",
        "Topics will include AI in operations, web application planning, dashboard design, lead management, SEO foundations, automation ideas, e-commerce workflows, and product strategy for growing teams.",
      ]}
      cardsTitle="Content Categories"
      cards={[
        { title: "AI for Business", text: "How AI can support lead handling, summaries, support workflows, internal search, reporting, and productivity." },
        { title: "Software Planning", text: "How to plan portals, dashboards, admin systems, MVPs, integrations, roles, and data structures." },
        { title: "Automation Ideas", text: "Where businesses can reduce repetitive work with forms, notifications, workflows, and connected tools." },
        { title: "Digital Growth", text: "SEO, landing pages, analytics, conversion flows, paid campaigns, and content systems." },
        { title: "UX & Interface Design", text: "How better layouts, dashboards, forms, and navigation improve user experience and team speed." },
        { title: "E-Commerce Operations", text: "Product pages, checkout flows, inventory handling, campaign landing pages, and customer journeys." },
      ]}
      processTitle="Editorial Approach"
      process={[
        { title: "Useful", text: "Every article should answer a practical business or implementation question." },
        { title: "Clear", text: "We avoid vague buzzwords and explain tradeoffs in simple language." },
        { title: "Actionable", text: "Readers should leave with next steps, checklists, or clearer decisions." },
        { title: "Current", text: "Topics are shaped by modern software, AI, SEO, and digital product practices." },
      ]}
      outcomes={[
        "Better client education",
        "Clearer service positioning",
        "More useful organic content",
        "Stronger authority around AI-powered software solutions",
      ]}
    />
  );
}
