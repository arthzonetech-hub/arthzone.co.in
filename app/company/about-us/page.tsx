import ProfessionalInfoPage from "@/components/professional-info-page";

export const metadata = {
  title: "About Arthzone Technologies | AI-Powered Software Solutions",
  description:
    "Arthzone Technologies builds AI-powered software, automation, websites, apps, and digital growth systems for businesses in Indore and beyond.",
};

export default function AboutUsPage() {
  return (
    <ProfessionalInfoPage
      eyebrow="About Arthzone"
      title="We Build AI-Powered Software Solutions That Help Businesses Operate Better"
      description="Arthzone Technologies is an Indore-based software and digital solutions company focused on practical systems: web applications, automation, AI workflows, websites, apps, dashboards, and growth infrastructure."
      introTitle="Technology should remove friction, not create more of it."
      intro={[
        "Many businesses do not need another generic website. They need clearer operations, faster communication, better lead handling, reliable reporting, and digital systems that make daily work easier.",
        "Arthzone works at that intersection: design, engineering, AI, automation, and digital growth. We help teams turn manual processes into structured workflows and transform online presence into measurable business value.",
        "Our approach is consultative and execution-focused. We understand the business first, then build the right solution with clean interfaces, stable technology, and room to scale.",
      ]}
      cardsTitle="What Defines Our Work"
      cards={[
        {
          title: "Business-First Thinking",
          text: "We map goals, users, workflows, and bottlenecks before recommending technology. The solution must make business sense before it becomes code.",
        },
        {
          title: "AI Where It Adds Value",
          text: "We use AI for useful outcomes such as smart replies, lead qualification, summaries, reporting, search, and automation, not as decoration.",
        },
        {
          title: "Modern Engineering",
          text: "Our work uses modern web stacks, clean data models, responsive interfaces, secure APIs, and maintainable deployment patterns.",
        },
        {
          title: "Clear Communication",
          text: "You get practical scope, phased delivery, realistic timelines, and support that stays connected after launch.",
        },
        {
          title: "Growth Awareness",
          text: "We connect software with marketing, SEO, forms, analytics, and conversion flow so the product supports business growth.",
        },
        {
          title: "Long-Term Partnership",
          text: "We build systems that can evolve with new features, integrations, automation, and operational improvements over time.",
        },
      ]}
      process={[
        {
          title: "Discover",
          text: "We understand your business, current workflow, users, goals, and constraints.",
        },
        {
          title: "Design",
          text: "We plan information architecture, user journeys, screens, data flow, and the delivery roadmap.",
        },
        {
          title: "Build",
          text: "We develop, test, integrate, and refine the solution with clear checkpoints.",
        },
        {
          title: "Support",
          text: "We help with launch, maintenance, analytics, fixes, and future improvements.",
        },
      ]}
      outcomes={[
        "Better operational visibility",
        "Faster lead and customer handling",
        "Reduced repetitive manual work",
        "Professional digital presence",
        "Scalable software foundations",
        "Ongoing improvement after launch",
      ]}
    />
  );
}
