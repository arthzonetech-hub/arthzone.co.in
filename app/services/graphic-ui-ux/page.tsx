import ComingSoonPage from "@/components/coming-soon-page";

export const metadata = {
  title: "Graphic, UI & UX Design | Arthzone Technologies",
  description:
    "Graphic design, UI design, and UX services for software products, websites, apps, dashboards, and digital brands.",
};

export default function GraphicUiUxPage() {
  return (
    <ComingSoonPage
      eyebrow="Design"
      title="Interfaces and Brand Assets Built for Clarity"
      description="This page is being refined to show how Arthzone designs product interfaces, dashboards, web experiences, visual systems, and marketing creatives that support real user journeys."
      highlights={["UI design", "UX flows", "Brand creatives"]}
    />
  );
}
