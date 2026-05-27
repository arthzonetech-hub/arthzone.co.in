import ComingSoonPage from "@/components/coming-soon-page";

export const metadata = {
  title: "Client Reviews | Arthzone Technologies",
  description:
    "Client reviews and outcomes for Arthzone Technologies software, AI, website, app, and digital growth projects.",
};

export default function ClientReviewsPage() {
  return (
    <ComingSoonPage
      eyebrow="Client Reviews"
      title="Real Feedback from Businesses We Support"
      description="We are preparing a stronger reviews page with testimonials, outcomes, and examples from software, automation, website, app, and marketing projects."
      highlights={["Client outcomes", "Project stories", "Business impact"]}
    />
  );
}
