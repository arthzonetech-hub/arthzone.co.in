import ProfessionalInfoPage from "@/components/professional-info-page";

export const metadata = {
  title: "Our Team | Arthzone Technologies",
  description:
    "Meet the thinking behind Arthzone Technologies across software engineering, AI workflows, UI/UX, automation, and digital growth.",
};

export default function OurTeamPage() {
  return (
    <ProfessionalInfoPage
      eyebrow="Our Team"
      title="A Multi-Disciplinary Team for Software, AI, Design, and Growth"
      description="Arthzone brings together product thinking, engineering, automation, UI/UX, content, and digital growth skills so businesses can get more than a single service."
      introTitle="Modern digital work needs more than one skill."
      intro={[
        "A strong software solution needs strategic planning, clean engineering, usable design, secure data handling, content clarity, and post-launch support. Our team structure is shaped around that reality.",
        "We work collaboratively across discovery, design, development, testing, launch, and improvement. This keeps the final solution aligned with business goals instead of becoming a collection of disconnected screens.",
      ]}
      cardsTitle="Core Team Capabilities"
      cards={[
        {
          title: "Software Engineering",
          text: "Web applications, APIs, dashboards, portals, integrations, data models, authentication, and deployment.",
        },
        {
          title: "AI & Automation",
          text: "Smart workflows, data summaries, lead routing, response assistance, internal tools, and process automation.",
        },
        {
          title: "UI/UX Design",
          text: "User journeys, wireframes, responsive interfaces, design systems, dashboards, and conversion-focused layouts.",
        },
        {
          title: "Digital Growth",
          text: "SEO foundations, landing pages, analytics, campaign support, content structure, and lead generation systems.",
        },
        {
          title: "Quality & Testing",
          text: "Device checks, form validation, performance review, workflow testing, and launch-readiness checks.",
        },
        {
          title: "Client Success",
          text: "Project communication, timeline updates, requirement clarity, maintenance support, and future planning.",
        },
      ]}
      processTitle="How We Work Together"
      process={[
        { title: "Shared Context", text: "Everyone works from the same business goals, user needs, and project scope." },
        { title: "Practical Reviews", text: "We review flows, screens, and features against actual business use." },
        { title: "Iterative Delivery", text: "We ship in clear stages so feedback can improve the final result." },
        { title: "Continuous Support", text: "We stay available for updates, training, fixes, and future growth." },
      ]}
      outcomes={[
        "Cleaner project communication",
        "Better alignment between design and development",
        "More reliable launch process",
        "Stronger long-term maintainability",
      ]}
    />
  );
}
