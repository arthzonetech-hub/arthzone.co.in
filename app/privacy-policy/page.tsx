import ComingSoonPage from "@/components/coming-soon-page";

export const metadata = {
  title: "Privacy Policy | Arthzone Technologies",
  description:
    "Privacy policy information for Arthzone Technologies clients, visitors, and digital solution users.",
};

export default function PrivacyPolicyPage() {
  return (
    <ComingSoonPage
      eyebrow="Privacy"
      title="Privacy Policy"
      description="We are preparing a clear, professional privacy policy that explains how Arthzone handles enquiries, project communication, analytics, and service-related information."
      highlights={[
        "Data responsibility",
        "Client confidentiality",
        "Secure communication",
      ]}
    />
  );
}
