import ComingSoonPage from "@/components/coming-soon-page";

export const metadata = {
  title: "Certified Partners | Arthzone Technologies",
  description:
    "Partner ecosystem and certifications for Arthzone Technologies software, web, automation, and digital growth services.",
};

export default function CertifiedPartnersPage() {
  return (
    <ComingSoonPage
      eyebrow="Partners"
      title="Our Partner and Platform Ecosystem"
      description="We are preparing a dedicated page for the platforms, tools, and partnerships that support Arthzone's software, automation, and growth delivery."
      highlights={["Platform expertise", "Integration partners", "Trusted tools"]}
    />
  );
}
