import ComingSoonPage from "@/components/coming-soon-page";

export const metadata = {
  title: "Blogs | Arthzone Technologies",
  description:
    "Insights from Arthzone Technologies on AI, software development, automation, web applications, and digital growth.",
};

export default function BlogsPage() {
  return (
    <ComingSoonPage
      eyebrow="Insights"
      title="Ideas on AI, Software, Automation, and Digital Growth"
      description="Our blog is being prepared as a practical resource for founders, operators, and teams who want clearer digital systems and smarter business workflows."
      highlights={["AI in business", "Software guides", "Growth insights"]}
    />
  );
}
