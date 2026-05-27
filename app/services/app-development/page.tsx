import ComingSoonPage from "@/components/coming-soon-page";

export const metadata = {
  title: "App Development Services | Arthzone Technologies",
  description:
    "Mobile and web app development services by Arthzone Technologies for business operations, customer experiences, and AI-powered workflows.",
};

export default function AppDevelopmentPage() {
  return (
    <ComingSoonPage
      eyebrow="App Development"
      title="Mobile and Web Apps Built Around Business Workflows"
      description="Our app development page is being rebuilt to present how Arthzone designs and engineers customer apps, internal tools, booking flows, dashboards, and connected business systems."
      highlights={["Mobile apps", "Web apps", "Workflow tools"]}
    />
  );
}
