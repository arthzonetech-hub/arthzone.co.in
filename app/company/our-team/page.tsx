import ComingSoonPage from "@/components/coming-soon-page";

export const metadata = {
  title: "Our Team | Arthzone Technologies",
  description:
    "Meet the Arthzone Technologies team behind our software, AI, web application, design, and digital growth work.",
};

export default function OurTeamPage() {
  return (
    <ComingSoonPage
      eyebrow="Our Team"
      title="The People Behind Arthzone's Software and AI Work"
      description="We are preparing a sharper team page that introduces the people, skills, and delivery culture behind our AI-powered software solutions."
      highlights={["Engineering", "Design", "Growth"]}
    />
  );
}
