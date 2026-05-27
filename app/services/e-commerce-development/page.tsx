import ComingSoonPage from "@/components/coming-soon-page";

export const metadata = {
  title: "E-Commerce Development | Arthzone Technologies",
  description:
    "E-commerce development services for online stores, payments, inventory workflows, automation, and growth systems.",
};

export default function EcommerceDevelopmentPage() {
  return (
    <ComingSoonPage
      eyebrow="E-Commerce"
      title="Commerce Systems Designed to Sell and Scale"
      description="We are preparing a dedicated e-commerce page for online stores, product catalogs, payment workflows, customer journeys, automation, analytics, and growth support."
      highlights={["Online stores", "Payment workflows", "Sales automation"]}
    />
  );
}
