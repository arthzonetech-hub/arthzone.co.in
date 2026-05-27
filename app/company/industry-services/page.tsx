import ComingSoonPage from "@/components/coming-soon-page";

export const metadata = {
  title: "Industries We Serve | Arthzone Technologies",
  description:
    "Explore industries served by Arthzone Technologies, from local businesses to SaaS, retail, education, healthcare, and service operations.",
};

export default function IndustryServicesPage() {
  return (
    <ComingSoonPage
      eyebrow="Industries"
      title="Software and Automation Systems for Different Business Models"
      description="This page is being shaped into a clear industry guide for how Arthzone supports retail, education, healthcare, services, startups, and operational teams."
      highlights={["Retail systems", "Education portals", "Service automation"]}
    />
  );
}
