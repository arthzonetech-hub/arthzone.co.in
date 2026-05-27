import ComingSoonPage from "@/components/coming-soon-page";

export const metadata = {
  title: "Terms & Conditions | Arthzone Technologies",
  description:
    "Terms and conditions for working with Arthzone Technologies on software, AI, website, and digital growth projects.",
};

export default function TermsAndConditionsPage() {
  return (
    <ComingSoonPage
      eyebrow="Terms"
      title="Terms & Conditions"
      description="We are preparing clear service terms for project scope, communication, delivery, payments, support, and ongoing maintenance."
      highlights={[
        "Project scope clarity",
        "Delivery milestones",
        "Support expectations",
      ]}
    />
  );
}
