export type WAPillar = { title: string; body: string };
export type WADeliverable = { title: string; body: string };
export type WAFAQ = { q: string; a: string };
export type WAMindNode = { label: string };
export type WAGalleryImage = { src: string; alt: string };

export type WebApplicationServiceContent = {
  slug: string;
  breadcrumbLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: WAGalleryImage;
  gallery: WAGalleryImage[];
  tagline: string;
  expertTitle: string;
  expertBody: string;
  pillars: WAPillar[];
  pillars2: WAPillar[];
  mindMap: { center: string; nodes: WAMindNode[] };
  deliverables: WADeliverable[];
  faqs: WAFAQ[];
};

export const WA_SLUGS = [
  "saas-applications",
  "custom-portals-dashboards",
  "business-websites",
  "nextjs-react-performance",
  "api-integrations",
  "progressive-web-apps",
  "landing-pages-cro",
] as const;

export type WASlug = (typeof WA_SLUGS)[number];

const U = (id: string, alt: string): WAGalleryImage => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`,
  alt,
});

export const WEB_APPLICATION_PAGES: Record<string, WebApplicationServiceContent> = {
  "saas-applications": {
    slug: "saas-applications",
    breadcrumbLabel: "SaaS Applications",
    metaTitle: "SaaS Application Development | Arthzone",
    metaDescription:
      "Multi-tenant SaaS products, subscription billing, role-based access, and scalable cloud architecture — built for growth.",
    heroTitle: "SaaS application development",
    heroSubtitle:
      "From idea to recurring revenue: we engineer secure, multi-tenant web apps with billing, onboarding, and admin tooling your team can run.",
    heroImage: U(
      "photo-1551288049-bebda4e38f71",
      "Analytics dashboard on a laptop screen"
    ),
    gallery: [
      U("photo-1551288049-bebda4e38f71", "Product analytics dashboard"),
      U("photo-1553877522-43269d4ea984", "Team collaborating on strategy"),
      U("photo-1551434678-e076c223a692", "Developers at work"),
      U("photo-1558494949-ef010cbdcc31", "Server room technology"),
    ],
    tagline: "BUILD · BILL · SCALE",
    expertTitle: "SaaS that your customers trust",
    expertBody:
      "We design tenancy models, permission systems, and upgrade paths so your product stays fast as you add users. Stripe/Razorpay-ready checkout flows, usage metering hooks, and observability baked in — so you focus on the roadmap, not firefighting.",
    pillars: [
      {
        title: "Multi-tenant architecture",
        body:
          "Isolated data per customer, configurable plans, and safe migrations — whether you need row-level tenancy or schema-per-tenant for compliance-heavy industries.",
      },
      {
        title: "Subscriptions & monetization",
        body:
          "Trials, coupons, proration, and dunning-friendly flows. We wire payments to your product logic so finance and engineering stay aligned.",
      },
      {
        title: "Admin & internal consoles",
        body:
          "Operator dashboards for support, impersonation (with audit logs), feature flags, and health metrics — everything your team needs to run the service.",
      },
    ],
    pillars2: [
      {
        title: "Security-first delivery",
        body:
          "Auth (SSO-ready), RBAC, audit trails, rate limits, and OWASP-minded API design — reviewed before every release.",
      },
      {
        title: "Performance at scale",
        body:
          "Caching, background jobs, and CDN-friendly assets so latency stays low as MAU grows.",
      },
      {
        title: "Roadmap partnership",
        body:
          "We work in iterations with clear milestones: MVP, GA, and scale phases — documentation and handover included.",
      },
    ],
    mindMap: {
      center: "SaaS",
      nodes: [
        { label: "Tenancy" },
        { label: "Billing" },
        { label: "Auth" },
        { label: "APIs" },
        { label: "Observability" },
      ],
    },
    deliverables: [
      {
        title: "Product & technical discovery",
        body: "User journeys, domain model, and risk register before a single sprint starts.",
      },
      {
        title: "Design system & UI kit",
        body: "Reusable components for marketing site, app, and emails — consistent and accessible.",
      },
      {
        title: "Core app & APIs",
        body: "Typed APIs, background workers, and integration hooks for CRMs and analytics.",
      },
      {
        title: "Customer onboarding flows",
        body: "Guided setup, sample data, and progress tracking to improve activation.",
      },
      {
        title: "Billing integration",
        body: "Stripe/Razorpay/Paddle patterns with webhooks you can reason about.",
      },
      {
        title: "Launch & monitoring",
        body: "Staging, production checklist, alerts, and runbooks for on-call.",
      },
    ],
    faqs: [
      {
        q: "How long does an MVP SaaS take?",
        a:
          "Typically 8–14 weeks for a focused MVP, depending on integrations and compliance. We scope tightly and ship in milestones.",
      },
      {
        q: "Can you work with our existing design?",
        a: "Yes — we can implement from Figma or evolve your current UI into a maintainable system.",
      },
      {
        q: "Which stack do you prefer?",
        a:
          "We often use Next.js, React, Node, and Postgres — cloud-native and easy to hire for. We adapt if you have constraints.",
      },
      {
        q: "Do you help with DevOps?",
        a:
          "CI/CD, environments, secrets, and basic SRE practices are part of delivery; deeper 24/7 ops can be scoped separately.",
      },
      {
        q: "What about GDPR / data residency?",
        a:
          "We can architect regions, encryption, and retention policies — legal review should involve your counsel for your jurisdiction.",
      },
      {
        q: "Who owns the code?",
        a: "You do — repositories are transferred to your org with documentation.",
      },
    ],
  },

  "custom-portals-dashboards": {
    slug: "custom-portals-dashboards",
    breadcrumbLabel: "Portals & Dashboards",
    metaTitle: "Custom Portals & Admin Dashboards | Arthzone",
    metaDescription:
      "Customer portals, partner extranets, and operations dashboards — role-based, fast, and integrated with your backends.",
    heroTitle: "Custom portals & dashboards",
    heroSubtitle:
      "Give customers and teams one place to log in: orders, tickets, documents, and KPIs — tailored to your workflows, not a generic template.",
    heroImage: U(
      "photo-1460925895917-afdab827c52f",
      "Business analytics and charts on screen"
    ),
    gallery: [
      U("photo-1460925895917-afdab827c52f", "Charts and KPI widgets"),
      U("photo-1551288049-bebda4e38f71", "Dashboard metrics"),
      U("photo-1553877522-43269d4ea984", "Team reviewing dashboard"),
      U("photo-1522071820081-009f0129c71c", "Team meeting with data"),
    ],
    tagline: "ONE LOGIN · REAL WORKFLOWS",
    expertTitle: "Panels that match how you operate",
    expertBody:
      "We map roles (customer, partner, staff, admin), design information hierarchy for each, and connect to your ERP, CRM, or custom APIs — so people spend less time chasing status and more time delivering.",
    pillars: [
      {
        title: "Role-based experiences",
        body:
          "Different layouts and permissions per persona — customers see only their data; staff get operational tools behind the same brand.",
      },
      {
        title: "Deep integrations",
        body:
          "REST/GraphQL, webhooks, CSV imports, and batch jobs — we meet your systems where they are.",
      },
      {
        title: "Operational clarity",
        body:
          "Queues, SLAs, and audit trails baked into the UI so support and ops can explain what happened, when.",
      },
    ],
    pillars2: [
      {
        title: "Speed you can feel",
        body:
          "Optimistic updates, skeleton states, and pagination patterns so large datasets stay usable.",
      },
      {
        title: "Accessible by default",
        body:
          "Keyboard paths, contrast, and form errors that help every user complete tasks.",
      },
      {
        title: "Extensible for phase 2",
        body:
          "Modular navigation and feature flags so you can add modules without rewriting the shell.",
      },
    ],
    mindMap: {
      center: "Portal",
      nodes: [
        { label: "Roles" },
        { label: "Data" },
        { label: "Workflows" },
        { label: "Reports" },
        { label: "Integrations" },
      ],
    },
    deliverables: [
      {
        title: "Workflow & IA workshops",
        body: "We document who does what, and what each screen must prove.",
      },
      {
        title: "Design system for internal tools",
        body: "Dense-data friendly tables, filters, and export patterns.",
      },
      {
        title: "Auth & session model",
        body: "SSO, MFA hooks, and session policies aligned to your risk profile.",
      },
      {
        title: "Core modules",
        body: "Tickets, orders, documents — scoped to your priority backlog.",
      },
      {
        title: "Reporting layer",
        body: "Saved views, CSV/PDF exports, and chart primitives.",
      },
      {
        title: "Training & handover",
        body: "Admin guides and Loom-style walkthroughs for your team.",
      },
    ],
    faqs: [
      {
        q: "Can this replace our spreadsheet chaos?",
        a:
          "Often yes — we start with the highest-friction workflow and digitize it first, then expand.",
      },
      {
        q: "Do you build mobile apps too?",
        a:
          "For many portals a responsive PWA is enough; native apps are a separate track if you need store distribution.",
      },
      {
        q: "What if our API is messy?",
        a:
          "We add a normalization layer or adapters so the UI stays clean even when backends are legacy.",
      },
      {
        q: "How do you handle permissions?",
        a:
          "We model roles and policies explicitly and test edge cases — no hidden magic.",
      },
      {
        q: "Can users self-serve signup?",
        a: "Yes, with email verification, invites, or admin-only provisioning — your choice.",
      },
      {
        q: "What’s the typical timeline?",
        a:
          "Small portals: 6–10 weeks. Complex multi-department: 12+ weeks — discovery defines the plan.",
      },
    ],
  },

  "business-websites": {
    slug: "business-websites",
    breadcrumbLabel: "Business Websites",
    metaTitle: "Business & Corporate Website Development | Arthzone",
    metaDescription:
      "Corporate sites, service pages, and lead-generation websites — fast, SEO-ready, and aligned with your brand.",
    heroTitle: "Business & corporate websites",
    heroSubtitle:
      "Clear story, credible proof, and frictionless contact paths — engineered in Next.js for speed and structured content your marketing team can extend.",
    heroImage: U(
      "photo-1497366216548-37526070297c",
      "Modern office interior with natural light"
    ),
    gallery: [
      U("photo-1497366216548-37526070297c", "Corporate workspace"),
      U("photo-1497215842964-222b430dc094", "Laptop on desk with coffee"),
      U("photo-1522071820081-009f0129c71c", "Team collaboration"),
      U("photo-1504384308090-c894fdcc538d", "Creative workspace"),
    ],
    tagline: "CLARITY · CREDIBILITY · CONVERSION",
    expertTitle: "Websites that sell your expertise",
    expertBody:
      "Beyond pretty visuals: information architecture for services, industries, case studies, and FAQs — so visitors understand why you, why now, and how to reach you. Analytics and form events wired from day one.",
    pillars: [
      {
        title: "Messaging & structure",
        body:
          "Headlines, proof points, and page flows tuned for busy decision-makers — not wallpaper copy.",
      },
      {
        title: "SEO & performance",
        body:
          "Core Web Vitals, semantic HTML, and metadata patterns that help you show up locally and nationally.",
      },
      {
        title: "CMS-friendly builds",
        body:
          "Optional headless CMS hooks so your team can update blogs, careers, and banners safely.",
      },
    ],
    pillars2: [
      {
        title: "Lead capture that works",
        body:
          "Forms, Cal.com embeds, WhatsApp CTAs — tracked so you know what drives inquiries.",
      },
      {
        title: "Trust & compliance",
        body:
          "Privacy, cookie notices, and accessibility considerations for professional services.",
      },
      {
        title: "Ongoing evolution",
        body:
          "Component libraries make new landing pages cheap to add for campaigns.",
      },
    ],
    mindMap: {
      center: "Web",
      nodes: [
        { label: "Story" },
        { label: "Proof" },
        { label: "SEO" },
        { label: "Speed" },
        { label: "Leads" },
      ],
    },
    deliverables: [
      {
        title: "Sitemap & wireframes",
        body: "Agreed structure before visual design — fewer surprises later.",
      },
      {
        title: "UI design & design system",
        body: "Typography, color, and components that scale to new pages.",
      },
      {
        title: "Next.js implementation",
        body: "Static/ISR where it helps; dynamic where it must.",
      },
      {
        title: "Content migration",
        body: "From old WordPress or static HTML with URL redirects.",
      },
      {
        title: "Analytics & events",
        body: "GA4/GTM patterns and conversion events documented.",
      },
      {
        title: "Launch checklist",
        body: "DNS, SSL, Search Console, and performance verification.",
      },
    ],
    faqs: [
      {
        q: "How fast can we launch?",
        a:
          "Marketing sites often go live in 3–6 weeks depending on content readiness and approvals.",
      },
      {
        q: "Do you write copy?",
        a:
          "We can collaborate with your team or recommend copy partners; we always structure pages for conversion.",
      },
      {
        q: "Will we rank #1 immediately?",
        a:
          "Technical SEO helps, but rankings depend on competition and content — we set realistic expectations.",
      },
      {
        q: "Can we update pages ourselves?",
        a: "Yes with a CMS layer or markdown/Git workflows — we train your team.",
      },
      {
        q: "Multi-language support?",
        a:
          "We can architect i18n routes and hreflang when you’re ready to expand.",
      },
      {
        q: "Hosting?",
        a:
          "We usually deploy to Vercel or your cloud; we document the runbook.",
      },
    ],
  },

  "nextjs-react-performance": {
    slug: "nextjs-react-performance",
    breadcrumbLabel: "Next.js & React",
    metaTitle: "Next.js & React Web Development | Arthzone",
    metaDescription:
      "Modern React and Next.js apps — App Router, streaming, edge-ready, and tuned for Core Web Vitals.",
    heroTitle: "Next.js & React performance",
    heroSubtitle:
      "We build maintainable frontends with server components where they shine, client interactivity where needed, and caching strategies that keep TTFB and LCP in check.",
    heroImage: U(
      "photo-1633356122544-f134324a6cee",
      "React logo environment abstract"
    ),
    gallery: [
      U("photo-1633356122544-f134324a6cee", "React development"),
      U("photo-1555066931-4365d14bab8c", "Code on screen"),
      U("photo-1551434678-e076c223a692", "Developer workspace"),
      U("photo-1544197150-b99a580bb7a8", "Server room cables"),
    ],
    tagline: "MODERN STACK · REAL SPEED",
    expertTitle: "Engineering that stays fast in production",
    expertBody:
      "Bundle analysis, image pipelines, font loading, and suspense boundaries — we sweat the details so your users feel instant loads and your team ships without fearing regressions.",
    pillars: [
      {
        title: "Architecture that fits",
        body:
          "App Router layouts, route groups, and colocation patterns — readable for the next developer who joins.",
      },
      {
        title: "Data loading done right",
        body:
          "Server actions, caching tags, and revalidation policies aligned to freshness vs cost.",
      },
      {
        title: "Quality gates",
        body:
          "TypeScript, ESLint, and preview deployments so bugs surface before users do.",
      },
    ],
    pillars2: [
      {
        title: "Observability",
        body:
          "Error boundaries, logging, and RUM hooks to catch slow routes in the wild.",
      },
      {
        title: "Design handoff",
        body:
          "We align with Figma tokens and keep CSS maintainable with Tailwind or CSS modules.",
      },
      {
        title: "Future upgrades",
        body:
          "Dependency hygiene and migration notes when Next/React ship breaking changes.",
      },
    ],
    mindMap: {
      center: "Next",
      nodes: [
        { label: "RSC" },
        { label: "Cache" },
        { label: "Edge" },
        { label: "UX" },
        { label: "DX" },
      ],
    },
    deliverables: [
      {
        title: "Technical blueprint",
        body: "Routing, data boundaries, and env strategy documented.",
      },
      {
        title: "Component library",
        body: "Accessible primitives and page templates.",
      },
      {
        title: "Performance budget",
        body: "Lighthouse targets and CI checks where feasible.",
      },
      {
        title: "Integration tests",
        body: "Critical paths covered for checkout or signup flows.",
      },
      {
        title: "Deployment pipeline",
        body: "Preview URLs per PR and production promotions.",
      },
      {
        title: "Runbook",
        body: "Rollback, feature flags, and on-call basics.",
      },
    ],
    faqs: [
      {
        q: "App Router or Pages Router?",
        a:
          "We default to App Router for new work unless you have a strong reason to stay on Pages.",
      },
      {
        q: "Do you use Tailwind?",
        a:
          "Often yes for speed; we can match your existing CSS approach if needed.",
      },
      {
        q: "Can you improve our existing Next app?",
        a:
          "Yes — audits with prioritized refactors and performance wins.",
      },
      {
        q: "Monorepo?",
        a:
          "Turborepo/pnpm setups when you have multiple apps sharing packages.",
      },
      {
        q: "Testing stack?",
        a:
          "Playwright/RTL depending on risk — we pick pragmatic coverage.",
      },
      {
        q: "Accessibility?",
        a:
          "We test keyboard flows and common WCAG issues; formal audits can be added.",
      },
    ],
  },

  "api-integrations": {
    slug: "api-integrations",
    breadcrumbLabel: "APIs & Integrations",
    metaTitle: "API Development & Integrations | Arthzone",
    metaDescription:
      "REST/GraphQL APIs, webhooks, payment gateways, CRMs, and ERP connectors — reliable, documented, and observable.",
    heroTitle: "APIs & integrations",
    heroSubtitle:
      "Connect your web app to the rest of your stack: payments, logistics, marketing automation, and internal tools — with idempotent webhooks and clear error handling.",
    heroImage: U(
      "photo-1558494949-ef010cbdcc31",
      "Technology servers and networking"
    ),
    gallery: [
      U("photo-1558494949-ef010cbdcc31", "Server infrastructure"),
      U("photo-1551434678-e076c223a692", "Developers coding integrations"),
      U("photo-1544197150-b99a580bb7a8", "Network hardware"),
      U("photo-1518770660439-4636190af475", "Circuit board macro"),
    ],
    tagline: "CONNECT · SYNC · TRUST",
    expertTitle: "Integrations that don’t wake you at 3am",
    expertBody:
      "We design contracts, retries, dead-letter handling, and monitoring so transient failures recover and permanent ones surface clearly — with OpenAPI docs your partners can actually use.",
    pillars: [
      {
        title: "API design",
        body:
          "Versioning, pagination, filtering, and consistent error shapes — fewer surprises for consumers.",
      },
      {
        title: "Webhook hardening",
        body:
          "Signatures, replay protection, and reconciliation jobs when providers are flaky.",
      },
      {
        title: "Partner playbooks",
        body:
          "Sandbox keys, test scenarios, and go-live checklists for Razorpay, Shiprocket, Zoho, and more.",
      },
    ],
    pillars2: [
      {
        title: "Security",
        body:
          "Secrets in vaults, least-privilege tokens, and scoped OAuth where applicable.",
      },
      {
        title: "Observability",
        body:
          "Structured logs, trace IDs across services, and alerts on error rates.",
      },
      {
        title: "Documentation",
        body:
          "Postman collections or OpenAPI so your mobile and partner teams move fast.",
      },
    ],
    mindMap: {
      center: "API",
      nodes: [
        { label: "REST" },
        { label: "Hooks" },
        { label: "Auth" },
        { label: "Queues" },
        { label: "Docs" },
      ],
    },
    deliverables: [
      {
        title: "Integration map",
        body: "Systems, owners, SLAs, and failure modes on one page.",
      },
      {
        title: "Contract tests",
        body: "Against provider sandboxes before production traffic.",
      },
      {
        title: "Worker/queue setup",
        body: "For long-running or retriable tasks.",
      },
      {
        title: "Admin tooling",
        body: "Replay, inspect payload, and manual overrides for support.",
      },
      {
        title: "Runbooks",
        body: "What to check when sync jobs fail.",
      },
      {
        title: "Handover",
        body: "Diagrams and key rotation procedures.",
      },
    ],
    faqs: [
      {
        q: "GraphQL or REST?",
        a:
          "We pick based on consumers and caching needs — both are fine when used intentionally.",
      },
      {
        q: "Can you fix our flaky webhooks?",
        a:
          "Yes — we add idempotency keys, dedupe tables, and alerting.",
      },
      {
        q: "Legacy SOAP/XML?",
        a:
          "We’ve wrapped older systems behind modern JSON APIs for apps.",
      },
      {
        q: "Rate limits?",
        a:
          "We backoff responsibly and surface provider limits in logs.",
      },
      {
        q: "Do you document for non-devs?",
        a:
          "We can produce operator-friendly runbooks separate from API docs.",
      },
      {
        q: "India-specific gateways?",
        a:
          "Razorpay, PayU, etc. — we follow their latest webhook guidance.",
      },
    ],
  },

  "progressive-web-apps": {
    slug: "progressive-web-apps",
    breadcrumbLabel: "Progressive Web Apps",
    metaTitle: "Progressive Web App (PWA) Development | Arthzone",
    metaDescription:
      "Installable PWAs, offline-friendly shells, and push-ready web apps — one codebase for mobile and desktop.",
    heroTitle: "Progressive web apps",
    heroSubtitle:
      "Reach users without app-store friction: install prompts, service workers for resilience, and responsive layouts that feel native where it matters.",
    heroImage: U(
      "photo-1512941937669-90a1b58e7e9c",
      "Mobile phone in hand"
    ),
    gallery: [
      U("photo-1512941937669-90a1b58e7e9c", "Mobile experience"),
      U("photo-1551650975-87deedd944c3", "Phone showing app UI"),
      U("photo-1555774698-0b77e0d5fac4", "App icons on screen"),
      U("photo-1526498460520-4c246339dccb", "Hands holding smartphone"),
    ],
    tagline: "INSTALL · OFFLINE · ONE CODEBASE",
    expertTitle: "Web that behaves like an app",
    expertBody:
      "We balance offline caches with freshness — stale-while-revalidate patterns, background sync for forms, and safe update flows so users aren’t stuck on broken shells.",
    pillars: [
      {
        title: "Manifest & install UX",
        body:
          "Icons, theme colors, and prompts timed so they help rather than annoy.",
      },
      {
        title: "Service worker strategy",
        body:
          "Precache shell, runtime cache for APIs, and fallbacks when the network disappears.",
      },
      {
        title: "Performance on mid devices",
        body:
          "Lazy routes, image sizing, and JS budgets tuned for real-world phones.",
      },
    ],
    pillars2: [
      {
        title: "Push readiness",
        body:
          "We wire the plumbing; your notification strategy stays in your control.",
      },
      {
        title: "Security",
        body:
          "HTTPS-only, CSP headers, and safe caching rules for user data.",
      },
      {
        title: "Analytics parity",
        body:
          "Events that still make sense in standalone mode vs browser tab.",
      },
    ],
    mindMap: {
      center: "PWA",
      nodes: [
        { label: "SW" },
        { label: "Cache" },
        { label: "UX" },
        { label: "Push" },
        { label: "Perf" },
      ],
    },
    deliverables: [
      {
        title: "UX audit for mobile",
        body: "Tap targets, scroll, and forms tested on real devices.",
      },
      {
        title: "Manifest & icons",
        body: "Full set for add-to-home-screen.",
      },
      {
        title: "Service worker rollout",
        body: "Staged activation and rollback plan.",
      },
      {
        title: "Offline flows",
        body: "Queued actions and user messaging when offline.",
      },
      {
        title: "Lighthouse PWA checks",
        body: "Targets reviewed in CI where possible.",
      },
      {
        title: "Play store optional",
        body: "TWA packaging advice if you want Play listing later.",
      },
    ],
    faqs: [
      {
        q: "PWA vs React Native?",
        a:
          "PWAs ship faster for many B2B tools; native shines for heavy device APIs — we help you choose.",
      },
      {
        q: "iOS limitations?",
        a:
          "We set expectations on iOS PWA capabilities and workarounds.",
      },
      {
        q: "Can users receive push notifications?",
        a:
          "On supported browsers yes; iOS support evolves — we’ll map what’s possible today.",
      },
      {
        q: "Offline data safety?",
        a:
          "We avoid caching sensitive data longer than needed and use secure storage patterns.",
      },
      {
        q: "Updates?",
        a:
          "We implement skipWaiting patterns with user-friendly refresh prompts.",
      },
      {
        q: "SEO impact?",
        a:
          "PWAs can rank well when SSR/SSG is preserved — we don’t hide content behind client-only shells.",
      },
    ],
  },

  "landing-pages-cro": {
    slug: "landing-pages-cro",
    breadcrumbLabel: "Landing Pages & CRO",
    metaTitle: "Landing Pages & Conversion Optimization | Arthzone",
    metaDescription:
      "High-converting landing pages, A/B-ready components, and speed-focused builds for paid and organic campaigns.",
    heroTitle: "Landing pages & CRO",
    heroSubtitle:
      "Campaign pages that load fast, speak to one audience, and make the next step obvious — with instrumentation ready for experiments.",
    heroImage: U(
      "photo-1467232004584-a241de8bcf5d",
      "Design workspace with laptop"
    ),
    gallery: [
      U("photo-1467232004584-a241de8bcf5d", "Creative desk setup"),
      U("photo-1552664730-d307ca884978", "Team high-five collaboration"),
      U("photo-1553877522-43269d4ea984", "Growth meeting"),
      U("photo-1504384308090-c894fdcc538d", "Office brainstorming"),
    ],
    tagline: "TEST · LEARN · CONVERT",
    expertTitle: "Pages built for experiments",
    expertBody:
      "We structure sections as components you can duplicate for variants, wire events for GA4/Meta, and keep CLS near zero so paid traffic isn’t wasted on janky layouts.",
    pillars: [
      {
        title: "Message match",
        body:
          "Headlines echo ad intent; forms ask only what you need for the next step.",
      },
      {
        title: "Speed as a feature",
        body:
          "Hero media optimized, fonts subset, third-party scripts lazy or deferred.",
      },
      {
        title: "Trust & proof",
        body:
          "Logos, metrics, and testimonials placed where skepticism peaks.",
      },
    ],
    pillars2: [
      {
        title: "Experiment-ready",
        body:
          "Stable selectors and feature flags for A/B tools.",
      },
      {
        title: "Global performance",
        body:
          "Edge-friendly assets for campaigns targeting multiple regions.",
      },
      {
        title: "Handoff to marketing",
        body:
          "CMS or markdown paths so you can spin variants without engineering every time.",
      },
    ],
    mindMap: {
      center: "CRO",
      nodes: [
        { label: "Ads" },
        { label: "Copy" },
        { label: "Speed" },
        { label: "Forms" },
        { label: "Tests" },
      ],
    },
    deliverables: [
      {
        title: "Brief & hypothesis",
        body: "Audience, offer, and success metrics agreed upfront.",
      },
      {
        title: "Wireframe + copy structure",
        body: "Section order optimized for attention and objections.",
      },
      {
        title: "High-fidelity UI",
        body: "Brand-aligned, responsive, and accessible.",
      },
      {
        title: "Implementation",
        body: "Next.js static/ISR for instant loads.",
      },
      {
        title: "Tracking plan",
        body: "Events for scroll, clicks, and form milestones.",
      },
      {
        title: "Launch & iterate",
        body: "Heatmaps and experiment backlog suggestions.",
      },
    ],
    faqs: [
      {
        q: "One page or many?",
        a:
          "We can template a system so each campaign gets a fast clone with unique copy.",
      },
      {
        q: "Do you run ads?",
        a:
          "Media buying is separate; we make pages that don’t waste ad spend.",
      },
      {
        q: "How fast to ship?",
        a:
          "Simple landers: 1–3 weeks; complex interactive pages longer.",
      },
      {
        q: "Multilingual campaigns?",
        a:
          "We can duplicate routes or use i18n keys — scoped in planning.",
      },
      {
        q: "CRM integration?",
        a:
          "Zoho, HubSpot, Webhooks — we connect forms to your stack.",
      },
      {
        q: "What metrics matter?",
        a:
          "Qualified leads, cost per lead, and bounce on hero — not vanity clicks alone.",
      },
    ],
  },
};

export function getWAContent(slug: string): WebApplicationServiceContent | undefined {
  return WEB_APPLICATION_PAGES[slug];
}
