import ComingSoonPage from "@/components/coming-soon-page";

export const metadata = {
  title: "About Arthzone Technologies | AI-Powered Software Solutions",
  description:
    "Learn about Arthzone Technologies, an Indore-based team building AI-powered software, automation, websites, apps, and digital growth systems.",
};

export default function AboutUsPage() {
  return (
    <ComingSoonPage
      eyebrow="About Arthzone"
      title="We Build AI-Powered Software Solutions for Growing Businesses"
      description="Our company story page is being refined to reflect how Arthzone combines strategy, design, engineering, AI workflows, and digital growth into practical systems for real businesses."
      highlights={[
        "Software strategy",
        "AI-ready engineering",
        "Long-term product support",
      ]}
    />
  );
}
