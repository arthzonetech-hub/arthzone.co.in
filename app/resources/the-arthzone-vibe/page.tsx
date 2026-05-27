import ProfessionalInfoPage from "@/components/professional-info-page";

export const metadata = {
  title: "The Arthzone Vibe | Culture & Work Style",
  description:
    "Explore Arthzone Technologies' culture, work style, delivery mindset, and approach to software and AI-powered solutions.",
};

export default function ArthzoneVibePage() {
  return (
    <ProfessionalInfoPage
      eyebrow="Culture"
      title="A Builder Culture Focused on Clarity, Craft, and Business Impact"
      description="The Arthzone vibe is practical: understand deeply, build carefully, communicate clearly, and keep improving after launch."
      introTitle="Good software work is part engineering and part operating rhythm."
      intro={[
        "We value direct communication, thoughtful execution, fast learning, and honest recommendations. The aim is to create work that clients can trust and teams can maintain.",
        "Our culture is shaped around product thinking: what problem are we solving, who uses this, what happens after launch, and how does it help the business move forward?",
      ]}
      cardsTitle="How We Work"
      cards={[
        { title: "Clarity Before Code", text: "We invest time in understanding workflows, users, and business constraints before building." },
        { title: "Craft in Details", text: "Interface polish, form states, mobile behavior, data flow, and edge cases matter." },
        { title: "Useful AI", text: "We explore AI where it reduces work, improves insight, or speeds up decision-making." },
        { title: "Ownership Mindset", text: "We treat projects as living systems that need care, support, and future improvements." },
        { title: "Calm Communication", text: "Progress, blockers, scope, and decisions should stay visible to everyone involved." },
        { title: "Business Outcomes", text: "A solution should improve leads, operations, reporting, customer experience, or team productivity." },
      ]}
      processTitle="Our Working Rhythm"
      process={[
        { title: "Listen", text: "Understand the business context and the people who will use the system." },
        { title: "Shape", text: "Turn fuzzy requirements into clear screens, workflows, and milestones." },
        { title: "Ship", text: "Build in focused phases with review points and practical testing." },
        { title: "Improve", text: "Use feedback, data, and support needs to strengthen the product." },
      ]}
      outcomes={[
        "More thoughtful execution",
        "Better client collaboration",
        "Systems that feel easier to use",
        "A team relationship beyond one-time delivery",
      ]}
    />
  );
}
