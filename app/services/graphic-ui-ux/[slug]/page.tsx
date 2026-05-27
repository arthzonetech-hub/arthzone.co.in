import { notFound } from "next/navigation";
import ProfessionalInfoPage from "@/components/professional-info-page";
import { graphicUiUxServices } from "@/lib/graphic-ui-ux-services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return graphicUiUxServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = graphicUiUxServices.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Arthzone Technologies`,
    description: service.description,
  };
}

export default async function GraphicUiUxServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = graphicUiUxServices.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <ProfessionalInfoPage
      eyebrow="Graphic & UI/UX"
      title={service.title}
      description={service.description}
      introTitle={service.introTitle}
      intro={service.intro}
      cardsTitle={service.cardsTitle}
      cards={service.cards}
      process={[
        { title: "Discover", text: "Understand brand, users, goals, constraints, and required deliverables." },
        { title: "Structure", text: "Plan flows, content hierarchy, screen sections, and visual direction." },
        { title: "Design", text: "Create polished, responsive, implementation-ready design assets." },
        { title: "Refine", text: "Improve based on feedback, edge cases, and business priorities." },
      ]}
      outcomes={service.outcomes}
      primaryCta={{ label: "Start Design Project", href: "/contact" }}
      secondaryCta={{ label: "View All Design Services", href: "/services/graphic-ui-ux" }}
    />
  );
}
