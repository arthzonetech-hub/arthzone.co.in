export type SimpleServiceContent = {
  slug: string;
  title: string;
  description: string;
  introTitle: string;
  intro: string[];
  cardsTitle: string;
  cards: { title: string; text: string }[];
  outcomes: string[];
};

export const graphicUiUxServices: SimpleServiceContent[] = [
  {
    slug: "website-ui-ux-design",
    title: "Website UI/UX Design",
    description:
      "Professional website interfaces planned around clarity, trust, mobile usability, and enquiry conversion.",
    introTitle: "A website should guide visitors, not make them think harder.",
    intro: [
      "We design website experiences that help users understand your business quickly, compare services easily, and take action without friction.",
      "The work covers page structure, user flow, responsive layout, CTA placement, content hierarchy, visual polish, and conversion-focused sections.",
    ],
    cardsTitle: "What We Design",
    cards: [
      { title: "Page Architecture", text: "Hero, services, proof, process, FAQ, pricing, case study, and contact sections planned for decision-making." },
      { title: "Responsive Layouts", text: "Mobile-first designs that stay readable, polished, and easy to navigate across screen sizes." },
      { title: "Conversion Flow", text: "CTA placement, enquiry paths, trust signals, and form journeys shaped around lead generation." },
    ],
    outcomes: ["Clearer website communication", "Better mobile experience", "Stronger enquiry flow", "More credible brand presence"],
  },
  {
    slug: "mobile-app-ui-ux-design",
    title: "Mobile App UI/UX Design",
    description:
      "Mobile app screens and flows designed for speed, usability, onboarding, retention, and business workflow clarity.",
    introTitle: "Mobile users need fast decisions and simple flows.",
    intro: [
      "We design app experiences that reduce taps, organize actions clearly, and make the product feel natural on iOS and Android devices.",
      "This includes onboarding, navigation, role-based screens, forms, dashboards, empty states, notifications, and key user journeys.",
    ],
    cardsTitle: "Design Focus",
    cards: [
      { title: "User Journeys", text: "Flows for onboarding, login, booking, ordering, tracking, support, and profile management." },
      { title: "App Screens", text: "Clean mobile screens with clear hierarchy, spacing, controls, and touch-friendly interactions." },
      { title: "Design Handoff", text: "Structured screen states and UI direction that developers can implement with less confusion." },
    ],
    outcomes: ["Smoother app onboarding", "Lower user confusion", "Better feature adoption", "Developer-ready UI direction"],
  },
  {
    slug: "web-app-dashboard-design",
    title: "Web App & Dashboard Design",
    description:
      "Dashboard and web application interfaces for admin panels, portals, SaaS tools, reporting views, and business operations.",
    introTitle: "Dashboards should make decisions easier.",
    intro: [
      "We design web app interfaces that help teams view status, manage records, filter data, take actions, and understand performance.",
      "The focus is usability, information hierarchy, role-based flows, table behavior, forms, empty states, and repeat-use efficiency.",
    ],
    cardsTitle: "Dashboard Elements",
    cards: [
      { title: "Data Views", text: "Tables, filters, status chips, cards, charts, summaries, and drill-down patterns." },
      { title: "Operational Flows", text: "Create, review, approve, assign, update, export, and manage workflows." },
      { title: "Role-Based UX", text: "Interfaces tailored for admins, staff, managers, customers, vendors, or partners." },
    ],
    outcomes: ["Faster internal workflows", "Clearer reporting", "Reduced training time", "Better operational visibility"],
  },
  {
    slug: "landing-page-design",
    title: "Landing Page Design",
    description:
      "Campaign and product landing pages designed to communicate one offer clearly and convert visitors into enquiries or customers.",
    introTitle: "A landing page should stay focused on one action.",
    intro: [
      "We design landing pages for ads, campaigns, services, launches, lead magnets, local SEO, and product promotions.",
      "Each page is structured around message clarity, proof, objection handling, speed, mobile behavior, and conversion tracking readiness.",
    ],
    cardsTitle: "Landing Page Sections",
    cards: [
      { title: "Offer Clarity", text: "Sharp hero messaging, benefit-led sections, and visible primary calls to action." },
      { title: "Trust Builders", text: "Testimonials, guarantees, FAQs, stats, process, portfolio, or credibility signals." },
      { title: "Conversion Path", text: "Forms, WhatsApp actions, booking links, tracking events, and thank-you flow planning." },
    ],
    outcomes: ["Higher campaign relevance", "Better lead quality", "Clearer offer communication", "Stronger ad-to-page consistency"],
  },
  {
    slug: "logo-brand-identity-design",
    title: "Logo & Brand Identity Design",
    description:
      "Brand identity systems that make your business look consistent, credible, and easier to recognize across digital and offline touchpoints.",
    introTitle: "A brand identity should be simple to use everywhere.",
    intro: [
      "We create logo and identity directions that work across websites, apps, social media, documents, packaging, signage, and campaigns.",
      "The focus is not only a logo file, but a practical visual system your team can use consistently.",
    ],
    cardsTitle: "Identity Deliverables",
    cards: [
      { title: "Logo System", text: "Primary logo, alternate versions, spacing guidance, and usage recommendations." },
      { title: "Visual Direction", text: "Colors, typography, icon style, visual tone, and digital brand application." },
      { title: "Brand Assets", text: "Social templates, profile assets, presentation direction, and website-ready visuals." },
    ],
    outcomes: ["More recognizable brand", "Consistent visual presence", "Professional first impression", "Reusable brand assets"],
  },
  {
    slug: "packaging-label-design",
    title: "Packaging & Label Design",
    description:
      "Packaging and label design for products that need shelf appeal, clear information, brand consistency, and production-aware layout.",
    introTitle: "Packaging has to sell and explain at the same time.",
    intro: [
      "We design product packaging and labels that balance visual appeal, compliance-friendly information structure, readability, and brand recognition.",
      "The work can support food, wellness, retail, cosmetics, local products, and D2C brands preparing for online or offline sales.",
    ],
    cardsTitle: "Packaging Focus",
    cards: [
      { title: "Front Label Impact", text: "Product name, category, benefits, visual hierarchy, and shelf-friendly brand presence." },
      { title: "Information Layout", text: "Ingredients, usage, barcode zones, manufacturing details, warnings, and content organization." },
      { title: "Production Readiness", text: "Print-aware spacing, file preparation direction, color consistency, and variant planning." },
    ],
    outcomes: ["Better product shelf appeal", "Clearer buyer information", "Consistent product family", "Print-ready design direction"],
  },
  {
    slug: "usability-audit-optimization",
    title: "Usability Audit & Optimization",
    description:
      "UX audits that identify friction in websites, dashboards, apps, landing pages, forms, and customer journeys.",
    introTitle: "Small usability issues quietly reduce trust and conversion.",
    intro: [
      "We review the experience from a user and business perspective to identify confusing navigation, weak CTAs, slow flows, unclear content, mobile issues, and form friction.",
      "The output is a prioritized improvement roadmap, not just a list of opinions.",
    ],
    cardsTitle: "Audit Areas",
    cards: [
      { title: "User Flow Review", text: "Navigation, page journeys, form steps, decision points, and task completion friction." },
      { title: "Interface Quality", text: "Readability, spacing, contrast, visual hierarchy, mobile responsiveness, and state clarity." },
      { title: "Conversion Barriers", text: "CTA visibility, trust signals, copy gaps, loading issues, and enquiry blockers." },
    ],
    outcomes: ["Clear UX improvement roadmap", "Better conversion clarity", "Reduced user friction", "More polished product experience"],
  },
];
