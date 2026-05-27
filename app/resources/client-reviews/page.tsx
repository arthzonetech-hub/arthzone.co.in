import ProfessionalInfoPage from "@/components/professional-info-page";

export const metadata = {
  title: "Client Reviews | Arthzone Technologies",
  description:
    "Client feedback themes and project outcome areas for Arthzone Technologies software, website, app, automation, and digital growth projects.",
};

export default function ClientReviewsPage() {
  return (
    <ProfessionalInfoPage
      eyebrow="Client Reviews"
      title="Feedback Themes We Aim to Earn on Every Project"
      description="This page is structured for testimonials and project outcomes. Replace the sample categories with verified client quotes when you are ready."
      introTitle="Until verified testimonials are added, the page should not invent client claims."
      intro={[
        "Professional review pages should be credible. Instead of publishing fake testimonials, this page sets up the right structure for real client feedback, case highlights, and measurable outcomes.",
        "When you collect real reviews, add the client name, business type, project scope, result, and permission status. That keeps the page trustworthy and useful for future buyers.",
      ]}
      cardsTitle="Review Categories to Collect"
      cards={[
        { title: "Software Outcomes", text: "Feedback about dashboards, portals, automation, admin tools, and internal productivity improvements." },
        { title: "Website Results", text: "Feedback about design quality, mobile experience, speed, SEO readiness, and enquiry improvement." },
        { title: "Communication", text: "Feedback about clarity, updates, timelines, requirement handling, and support experience." },
        { title: "Digital Growth", text: "Feedback about campaigns, landing pages, SEO, content, analytics, and lead quality." },
        { title: "App Experience", text: "Feedback about usability, staff adoption, customer convenience, and feature usefulness." },
        { title: "Support Quality", text: "Feedback about maintenance, fixes, improvements, and post-launch availability." },
      ]}
      processTitle="How to Build a Strong Review Page"
      process={[
        { title: "Ask Clearly", text: "Request specific feedback after launch or a measurable milestone." },
        { title: "Verify Permission", text: "Confirm whether the client name, logo, and quote can be published." },
        { title: "Add Context", text: "Mention service type, business type, and the problem solved." },
        { title: "Show Outcomes", text: "Include metrics or qualitative improvements wherever possible." },
      ]}
      outcomes={[
        "More credible social proof",
        "Better sales confidence",
        "Clearer project impact",
        "A page ready for real testimonials",
      ]}
    />
  );
}
