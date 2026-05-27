import ProfessionalInfoPage from "@/components/professional-info-page";

export const metadata = {
  title: "Business Website Development | Arthzone Technologies",
  description:
    "Professional business website development by Arthzone Technologies for companies that need credibility, enquiries, SEO foundations, speed, and future software integration.",
};

export default function BusinessWebsitesPage() {
  return (
    <ProfessionalInfoPage
      eyebrow="Business Websites"
      title="Professional Business Websites Built for Trust, Leads, and Growth"
      description="Arthzone builds modern business websites that do more than look good. We create fast, mobile-first, SEO-ready websites that explain your offer clearly, build credibility, capture enquiries, and prepare your business for future software and automation."
      introTitle="A business website should work like a digital sales and trust system."
      intro={[
        "Your website is often the first serious interaction a customer has with your company. It should quickly answer what you do, who you serve, why you are credible, and how someone can take the next step.",
        "We design business websites with clear messaging, service structure, conversion sections, contact flows, analytics readiness, and performance foundations. The result is a website that supports marketing, sales, hiring, and long-term brand trust.",
        "Because Arthzone also builds software, dashboards, AI workflows, and automation, your website can later connect with CRM-style tools, lead routing, booking flows, admin panels, and reporting systems when your business is ready.",
      ]}
      cardsTitle="What We Include"
      cards={[
        {
          title: "Strategic Page Structure",
          text: "Home, about, services, industries, contact, landing pages, FAQs, proof sections, and CTAs planned around how customers make decisions.",
        },
        {
          title: "Mobile-First Design",
          text: "Responsive layouts that look polished and remain easy to scan on mobile, tablet, laptop, and desktop screens.",
        },
        {
          title: "SEO Foundations",
          text: "Clean headings, metadata, page speed awareness, internal linking, search-friendly copy structure, and local/service keyword readiness.",
        },
        {
          title: "Lead Capture Flows",
          text: "Contact forms, WhatsApp actions, quote requests, booking links, service CTAs, and enquiry routing that make it easy for visitors to respond.",
        },
        {
          title: "Performance & Reliability",
          text: "Modern frontend build practices, optimized assets, stable deployment, and maintainable code foundations.",
        },
        {
          title: "Future Integration Ready",
          text: "Websites can be prepared for analytics, CRM, email, automation, dashboards, AI-assisted replies, and custom business workflows.",
        },
      ]}
      processTitle="Our Website Build Process"
      process={[
        {
          title: "Discovery",
          text: "We understand your business, target customers, services, competitors, and primary enquiry goals.",
        },
        {
          title: "Content & Structure",
          text: "We plan pages, sections, messaging, proof points, FAQs, CTAs, and conversion paths.",
        },
        {
          title: "Design & Development",
          text: "We create a modern interface, build responsive pages, connect forms, and prepare technical SEO basics.",
        },
        {
          title: "Launch & Improve",
          text: "We test across devices, deploy, review performance, and support updates after launch.",
        },
      ]}
      outcomesTitle="Business Outcomes We Design For"
      outcomes={[
        "More professional first impression",
        "Clearer service communication",
        "Better enquiry conversion",
        "SEO-ready content structure",
        "Mobile-friendly browsing",
        "Foundation for future software and automation",
      ]}
      primaryCta={{ label: "Start Website Project", href: "/contact" }}
      secondaryCta={{ label: "Explore Web Apps", href: "/services/web-application" }}
    />
  );
}
