import { notFound } from "next/navigation";
import ProfessionalInfoPage from "@/components/professional-info-page";
import { appDevelopmentServices } from "@/lib/app-development-services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return appDevelopmentServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = appDevelopmentServices.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Arthzone Technologies`,
    description: service.description,
  };
}

export default async function AppDevelopmentServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = appDevelopmentServices.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <ProfessionalInfoPage
      eyebrow="App Development"
      title={service.title}
      description={service.description}
      introTitle={service.introTitle}
      intro={service.intro}
      cardsTitle={service.cardsTitle}
      cards={service.cards}
      process={[
        { title: "Plan", text: "Define users, workflows, features, platforms, and launch priorities." },
        { title: "Design", text: "Create app flows, screens, states, and backend data requirements." },
        { title: "Develop", text: "Build the app, APIs, database, integrations, and admin controls." },
        { title: "Launch", text: "Test, deploy, monitor, support, and improve after real use." },
      ]}
      outcomes={service.outcomes}
      primaryCta={{ label: "Start App Project", href: "/contact" }}
      secondaryCta={{ label: "View All App Services", href: "/services/app-development" }}
    />
  );
}
