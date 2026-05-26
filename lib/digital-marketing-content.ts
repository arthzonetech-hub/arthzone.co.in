export type DMPillar = { title: string; body: string };
export type DMDeliverable = { title: string; body: string };
export type DMFAQ = { q: string; a: string };
export type DMMindNode = { label: string };

export type DigitalMarketingServiceContent = {
  slug: string;
  breadcrumbLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  tagline: string;
  expertTitle: string;
  expertBody: string;
  pillars: DMPillar[];
  pillars2: DMPillar[];
  mindMap: { center: string; nodes: DMMindNode[] };
  deliverables: DMDeliverable[];
  faqs: DMFAQ[];
};

export const DM_SLUGS = [
  "seo",
  "social-media",
  "ppc-advertising",
  "content-marketing",
  "email-marketing",
] as const;

export type DMSlug = (typeof DM_SLUGS)[number];

export const DIGITAL_MARKETING_PAGES: Record<string, DigitalMarketingServiceContent> = {
  seo: {
    slug: "seo",
    breadcrumbLabel: "SEO",
    metaTitle: "SEO Services | Arthzone — Search Engine Optimization",
    metaDescription:
      "Achieve top rankings, drive organic traffic, and grow your business with expert SEO — on-page, off-page, technical audits, and local SEO for Indian businesses.",
    heroTitle: "SEO",
    heroSubtitle:
      "Achieve top rankings, drive organic traffic, and grow your business with our expert SEO services.",
    tagline: "RANK HIGHER, GROW FASTER",
    expertTitle: "Expert SEO Solutions",
    expertBody:
      "Our comprehensive SEO services are designed to propel your business to the top of search engine results. We go beyond basic optimization, crafting a custom strategy that combines technical expertise with creative content, ensuring you attract high-quality traffic and convert visitors into loyal customers. Let us help you dominate your industry online.",
    pillars: [
      {
        title: "Precision On-Page Optimization",
        body:
          "We don't just optimize; we perfect. Our on-page SEO involves a deep dive into your website's architecture, content quality, page speed, and user experience. We meticulously refine every element to satisfy search engines and deliver a seamless, engaging experience for your visitors.",
      },
      {
        title: "Strategic Off-Page Authority Building",
        body:
          "Beyond your website, we build your brand's digital authority. Our off-page strategy focuses on a strong backlink profile from high-authority sources, social signals, and brand mentions so your business is seen as a credible voice in your industry.",
      },
      {
        title: "Intelligent Keyword & Competitor Research",
        body:
          "Our SEO strategy starts with understanding your audience and competitive landscape. We conduct in-depth keyword research for high-intent and long-tail terms, and analyze competitors' strategies to find gaps and opportunities you can win.",
      },
    ],
    pillars2: [
      {
        title: "Targeted Organic Traffic for High Conversions",
        body:
          "We focus on qualified organic traffic—visitors actively looking for your products or services. By aligning optimization with your business goals, we improve the chance that traffic converts into leads and sales and delivers strong ROI.",
      },
      {
        title: "Transparent Reporting & Proactive Communication",
        body:
          "You receive clear reports on rankings, organic traffic, and conversions. Our team communicates proactively with insights and recommendations so your SEO strategy adapts as search and your market evolve.",
      },
      {
        title: "Holistic, Full-Funnel SEO Strategy",
        body:
          "We integrate SEO with your broader digital marketing—from content and social to UX and CRO—so visibility and revenue grow together across the full funnel.",
      },
    ],
    mindMap: {
      center: "SEO",
      nodes: [
        { label: "Analysis" },
        { label: "Traffic" },
        { label: "Content" },
        { label: "Website" },
        { label: "Ranking" },
      ],
    },
    deliverables: [
      {
        title: "Technical SEO Audit",
        body:
          "We analyze your site's technical health, find and fix crawl and indexing issues, and help search engines access your pages efficiently.",
      },
      {
        title: "Comprehensive Keyword Research",
        body:
          "We uncover the most valuable keywords your audience uses and build a roadmap to attract qualified, high-intent traffic.",
      },
      {
        title: "Strategic On-Page Optimization",
        body:
          "We refine content, meta tags, and internal linking to improve relevance, UX, and rankings for target keywords.",
      },
      {
        title: "Effective Off-Page Link Building",
        body:
          "We earn high-quality backlinks that strengthen your reputation and position your brand as a leader in your space.",
      },
      {
        title: "Localized SEO Solutions",
        body:
          "For geo-focused businesses, we optimize Google Business Profile, local citations, and content so you show up where it matters.",
      },
      {
        title: "In-depth Competitor Analysis",
        body:
          "We study competitors' SEO to spot strengths and weaknesses and build a plan to outperform them in search.",
      },
    ],
    faqs: [
      {
        q: "What is SEO and why is it important for my business?",
        a:
          "SEO helps your website appear when people search for what you offer. Better visibility means more qualified traffic without paying for every click—building long-term growth and trust.",
      },
      {
        q: "How long does it take to see results from SEO?",
        a:
          "Most sites see meaningful movement in 3–6 months, depending on competition, site health, and content. SEO is a marathon; we set expectations and track progress monthly.",
      },
      {
        q: "What is the difference between on-page and off-page SEO?",
        a:
          "On-page SEO is everything on your site—content, titles, speed, structure. Off-page SEO is reputation and authority built through links, mentions, and brand signals elsewhere on the web.",
      },
      {
        q: "Will SEO services guarantee me the #1 spot on Google?",
        a:
          "No ethical agency guarantees #1—rankings depend on many factors. We focus on sustainable visibility, relevant traffic, and conversions, not empty promises.",
      },
      {
        q: "How much do your SEO services cost?",
        a:
          "Pricing depends on your market, site size, and goals. Contact us for a tailored quote after a quick discovery call.",
      },
      {
        q: "Do you offer local SEO for businesses targeting a specific area?",
        a:
          "Yes. We optimize for local search, maps, and location-specific queries—ideal for shops, clinics, and service businesses in cities like Ratlam, Indore, and beyond.",
      },
    ],
  },

  "social-media": {
    slug: "social-media",
    breadcrumbLabel: "Social Media",
    metaTitle: "Social Media Marketing | Arthzone",
    metaDescription:
      "Grow your brand on Instagram, Facebook, LinkedIn and more with content, creatives, and paid campaigns tailored to your audience.",
    heroTitle: "Social Media Marketing",
    heroSubtitle:
      "Build audiences, engagement, and conversions with channel-right content and performance ads.",
    tagline: "ENGAGE. GROW. CONVERT.",
    expertTitle: "Social Media That Works",
    expertBody:
      "We plan content calendars, produce creatives, and run paid campaigns that match your brand voice and business goals—whether you need awareness, leads, or sales.",
    pillars: [
      {
        title: "Content & Creative Strategy",
        body:
          "Posts, reels, and stories aligned with your offers and seasonality—designed to stop the scroll and start conversations.",
      },
      {
        title: "Paid Social & Retargeting",
        body:
          "Meta, LinkedIn, and more—structured campaigns, A/B tests, and retargeting to squeeze more from your ad spend.",
      },
      {
        title: "Community & Reputation",
        body:
          "Reply frameworks, review prompts, and monitoring so your brand feels responsive and trustworthy.",
      },
    ],
    pillars2: [
      {
        title: "Audience-First Targeting",
        body:
          "We define personas and use platform data to reach people most likely to care about your product or service.",
      },
      {
        title: "Clear Reporting",
        body:
          "Dashboards you can understand—reach, engagement, leads, and ROAS—so decisions are data-backed.",
      },
      {
        title: "Integrated With Your Funnel",
        body:
          "Social plugs into landing pages, WhatsApp, and CRM flows so traffic turns into measurable outcomes.",
      },
    ],
    mindMap: {
      center: "Social",
      nodes: [
        { label: "Content" },
        { label: "Ads" },
        { label: "Analytics" },
        { label: "Community" },
        { label: "Brand" },
      ],
    },
    deliverables: [
      {
        title: "Channel Strategy",
        body: "Pick the right mix of Instagram, Facebook, LinkedIn, YouTube Shorts, and more for your ICP.",
      },
      {
        title: "Creative Production",
        body: "Static, carousel, and short-form assets consistent with your guidelines.",
      },
      {
        title: "Campaign Setup & Optimization",
        body: "Pixels, events, audiences, and ongoing bid/budget tuning.",
      },
      {
        title: "Influencer Coordination",
        body: "Shortlist, briefs, and performance tracking for creator collaborations.",
      },
      {
        title: "Monthly Playbooks",
        body: "Themes, hooks, and CTAs planned around launches and offers.",
      },
      {
        title: "Crisis & Comment Guidelines",
        body: "Tone-safe responses and escalation paths for sensitive threads.",
      },
    ],
    faqs: [
      {
        q: "Which platforms should my business use?",
        a:
          "It depends on where your customers spend time and what you sell. B2B often leans LinkedIn; D2C often Instagram and Meta. We recommend after a short discovery.",
      },
      {
        q: "How often should we post?",
        a:
          "Consistency beats volume. We usually start with a sustainable weekly rhythm and scale once workflows are smooth.",
      },
      {
        q: "Do you handle paid ads?",
        a: "Yes—budget allocation, creative testing, and reporting are part of our engagement when you need paid social.",
      },
      {
        q: "Can you work with our in-house designer?",
        a:
          "Absolutely. We can supply briefs and specs, or take end-to-end creative depending on your team capacity.",
      },
      {
        q: "How do you measure success?",
        a:
          "We align KPIs upfront—awareness, engagement, leads, or purchases—and report against those, not vanity metrics alone.",
      },
      {
        q: "What if we need Hindi + English content?",
        a:
          "We create bilingual calendars and adapt tone for each audience segment.",
      },
    ],
  },

  "ppc-advertising": {
    slug: "ppc-advertising",
    breadcrumbLabel: "PPC & Ads",
    metaTitle: "PPC & Google Ads | Arthzone",
    metaDescription:
      "Performance paid search and display campaigns focused on ROAS, lead quality, and transparent reporting.",
    heroTitle: "PPC & Paid Advertising",
    heroSubtitle:
      "Turn search intent into leads and sales with structured Google Ads and paid campaigns.",
    tagline: "PAY PER RESULTS",
    expertTitle: "Performance Paid Media",
    expertBody:
      "We structure Search, Display, and Performance Max campaigns with clean conversion tracking, negative keywords, and landing page alignment so your budget works harder.",
    pillars: [
      {
        title: "Search & Intent Targeting",
        body:
          "Keyword themes, match types, and ad copy tuned to high-intent queries—not just cheap clicks.",
      },
      {
        title: "Conversion Tracking",
        body:
          "GA4, tags, and CRM events wired so we optimize toward real business outcomes.",
      },
      {
        title: "Landing Page Alignment",
        body:
          "Message match between ads and pages to lift Quality Score and conversion rate.",
      },
    ],
    pillars2: [
      {
        title: "Budget Guardrails",
        body:
          "Caps, schedules, and geo rules to prevent waste while scaling winners.",
      },
      {
        title: "Creative Testing",
        body:
          "RSA variations, extensions, and audience experiments with clear readouts.",
      },
      {
        title: "Competitor & Auction Insights",
        body:
          "We monitor auction pressure and adjust bids and positioning strategically.",
      },
    ],
    mindMap: {
      center: "PPC",
      nodes: [
        { label: "Search" },
        { label: "Display" },
        { label: "ROAS" },
        { label: "Keywords" },
        { label: "Landing" },
      ],
    },
    deliverables: [
      {
        title: "Account Audit",
        body: "Structure, tracking, and wasted spend review before we scale.",
      },
      {
        title: "Campaign Build",
        body: "Search/PMax/Display setups aligned to your funnel.",
      },
      {
        title: "Negative Keyword Hygiene",
        body: "Continuous pruning to protect budget quality.",
      },
      {
        title: "Bid & Budget Strategy",
        body: "Rules-based and smart bidding where appropriate.",
      },
      {
        title: "Reporting",
        body: "Weekly or monthly dashboards with actions tied to numbers.",
      },
      {
        title: "Landing Recommendations",
        body: "UX and copy tweaks to improve CVR from paid traffic.",
      },
    ],
    faqs: [
      {
        q: "How fast can PPC show results?",
        a:
          "Ads can run within days, but stable CPA/ROAS often needs 2–4 weeks of learning and testing.",
      },
      {
        q: "What budget do you recommend?",
        a:
          "We suggest a minimum that allows meaningful data per campaign; exact numbers depend on your market.",
      },
      {
        q: "Do you manage Google Ads only?",
        a:
          "Google is common for search intent; we also support Meta ads and can coordinate multi-channel.",
      },
      {
        q: "Who owns the ad account?",
        a: "You retain ownership—we work inside your account for transparency.",
      },
      {
        q: "How do you report ROI?",
        a:
          "We track conversions and revenue where possible and report cost per lead or ROAS clearly.",
      },
      {
        q: "Can you fix our tracking?",
        a: "Yes—tagging and GA4 issues are often where we start.",
      },
    ],
  },

  "content-marketing": {
    slug: "content-marketing",
    breadcrumbLabel: "Content Marketing",
    metaTitle: "Content Marketing | Arthzone",
    metaDescription:
      "Blogs, case studies, landing copy, and SEO content that educates, builds trust, and converts.",
    heroTitle: "Content Marketing",
    heroSubtitle:
      "Stories and resources that attract the right audience and move them to action.",
    tagline: "WRITE. RANK. CONVERT.",
    expertTitle: "Content That Compounds",
    expertBody:
      "We map topics to funnel stages, search intent, and your brand voice—then produce long-form, landing pages, and downloadable assets that support SEO and sales.",
    pillars: [
      {
        title: "Editorial Calendar",
        body:
          "Themes tied to launches, SEO clusters, and seasonal demand.",
      },
      {
        title: "SEO-Aligned Writing",
        body:
          "Briefs with keywords, headings, and internal links baked in.",
      },
      {
        title: "Conversion Copy",
        body:
          "Landing and email copy tested for clarity and CTA strength.",
      },
    ],
    pillars2: [
      {
        title: "Thought Leadership",
        body:
          "Articles and guides that position your team as experts.",
      },
      {
        title: "Repurposing",
        body:
          "One pillar piece becomes multiple social snippets and newsletters.",
      },
      {
        title: "Governance",
        body:
          "Style guides and review workflows so quality stays consistent.",
      },
    ],
    mindMap: {
      center: "Content",
      nodes: [
        { label: "Blog" },
        { label: "SEO" },
        { label: "Case Study" },
        { label: "Landing" },
        { label: "Email" },
      ],
    },
    deliverables: [
      {
        title: "Content Strategy Workshop",
        body: "Goals, personas, and funnel map in one session.",
      },
      {
        title: "Blog & Article Production",
        body: "Research, draft, edit, and on-page SEO pass.",
      },
      {
        title: "Case Studies",
        body: "Customer stories with metrics and quotes.",
      },
      {
        title: "Landing Page Copy",
        body: "Headlines, bullets, and CTA hierarchy.",
      },
      {
        title: "Content Refresh",
        body: "Update old posts for freshness and rankings.",
      },
      {
        title: "Newsletter Drafts",
        body: "Optional cadence to nurture your list.",
      },
    ],
    faqs: [
      {
        q: "How do you handle our brand voice?",
        a:
          "We start with examples you love, build a mini style guide, and iterate with your feedback.",
      },
      {
        q: "Who writes the content?",
        a:
          "Our strategists and writers; subject-matter reviews come from your team when needed.",
      },
      {
        q: "Can content help SEO and ads together?",
        a:
          "Yes—pillar pages support organic rankings and can fuel remarketing and email.",
      },
      {
        q: "How fast is turnaround?",
        a:
          "Depends on length and research; we agree SLAs per content type.",
      },
      {
        q: "Do you publish on our CMS?",
        a:
          "We can hand off Markdown/Docs or publish directly with access.",
      },
      {
        q: "What about Hindi/regional languages?",
        a:
          "We can coordinate bilingual content with native reviewers.",
      },
    ],
  },

  "email-marketing": {
    slug: "email-marketing",
    breadcrumbLabel: "Email Marketing",
    metaTitle: "Email Marketing & Automation | Arthzone",
    metaDescription:
      "Newsletters, drip sequences, and automation that improve opens, clicks, and repeat purchases.",
    heroTitle: "Email Marketing",
    heroSubtitle:
      "Nurture leads and customers with timely, relevant messages in the inbox.",
    tagline: "INBOX THAT SELLS",
    expertTitle: "Lifecycle Email",
    expertBody:
      "From welcome flows to abandoned carts and win-backs, we design automations and broadcasts that respect consent and drive measurable revenue.",
    pillars: [
      {
        title: "List Health & Deliverability",
        body:
          "Authentication, segmentation, and hygiene to keep you out of spam.",
      },
      {
        title: "Automation Journeys",
        body:
          "Triggers based on behavior—not just dates.",
      },
      {
        title: "Creative & Copy",
        body:
          "Subject lines, preview text, and mobile-first layouts.",
      },
    ],
    pillars2: [
      {
        title: "A/B Testing",
        body:
          "Iterate subjects, CTAs, and send times with clear winners.",
      },
      {
        title: "Reporting",
        body:
          "Opens, clicks, revenue attribution where integrations allow.",
      },
      {
        title: "Compliance",
        body:
          "Unsubscribe, consent, and regional norms respected.",
      },
    ],
    mindMap: {
      center: "Email",
      nodes: [
        { label: "Flows" },
        { label: "Segments" },
        { label: "Offers" },
        { label: "Design" },
        { label: "Metrics" },
      ],
    },
    deliverables: [
      {
        title: "Platform Setup",
        body: "Integrations with Shopify, Woo, or your stack.",
      },
      {
        title: "Welcome Series",
        body: "Onboarding that educates and converts new subscribers.",
      },
      {
        title: "Promotional Calendar",
        body: "Aligned with launches and seasonal pushes.",
      },
      {
        title: "Abandonment Flows",
        body: "Cart/browse recovery with smart frequency caps.",
      },
      {
        title: "Newsletter Production",
        body: "Monthly or weekly sends with consistent layout.",
      },
      {
        title: "Sunset & Re-engagement",
        body: "Clean lists and revive cold subscribers safely.",
      },
    ],
    faqs: [
      {
        q: "Which email tools do you support?",
        a:
          "Klaviyo, Mailchimp, Brevo, and others—platform-agnostic strategy.",
      },
      {
        q: "How often should we email?",
        a:
          "Depends on audience tolerance and value; we test cadence without burning the list.",
      },
      {
        q: "Can you migrate our list?",
        a:
          "Yes with proper consent records and double opt-in where required.",
      },
      {
        q: "Do you design templates?",
        a:
          "We provide responsive HTML or drag-and-drop-friendly modules.",
      },
      {
        q: "How do you measure success?",
        a:
          "Revenue per recipient, conversion rate, and list growth—not opens alone.",
      },
      {
        q: "What about SMS?",
        a:
          "We can coordinate SMS where it fits your funnel and compliance rules.",
      },
    ],
  },
};

export function getDMContent(slug: string): DigitalMarketingServiceContent | undefined {
  return DIGITAL_MARKETING_PAGES[slug];
}
