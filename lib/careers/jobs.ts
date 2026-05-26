export type JobType = "Full-time" | "Internship" | "Contract";
export type JobMode = "On-site" | "Hybrid" | "Remote";

export interface CareerJob {
  slug: string;
  title: string;
  department: string;
  type: JobType;
  mode: JobMode;
  location: string;
  experience: string;
  salary: string;
  summary: string;
  impact: string;
  tags: string[];
  responsibilities: string[];
  requiredSkills: string[];
  preferredSkills: string[];
  hiringProcess: string[];
  featured?: boolean;
}

const standardHiringProcess = [
  "Application and resume screening by the hiring team.",
  "Technical or portfolio discussion focused on real project experience.",
  "Role-specific practical task or work-sample review when required.",
  "Final alignment on compensation, joining date, and onboarding plan.",
];

export const careerJobs: CareerJob[] = [
  {
    slug: "full-stack-developer-fresher",
    title: "Full Stack Developer (Fresher)",
    department: "Engineering",
    type: "Full-time",
    mode: "Hybrid",
    location: "Ratlam / Remote IST",
    experience: "0-1 year",
    salary: "₹2.4L - ₹4.2L CTC",
    summary:
      "A structured entry-level engineering role for candidates who want to build production websites, dashboards, APIs, and business tools with mentorship from experienced developers.",
    impact:
      "You will learn how professional software is planned, built, reviewed, deployed, and improved while contributing to real client projects from the first month.",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
    responsibilities: [
      "Develop responsive web pages and reusable UI components using React, Next.js, TypeScript, and Tailwind CSS.",
      "Assist in building API integrations, form workflows, dashboards, CMS-driven pages, and internal automation tools.",
      "Write clean, readable code and actively participate in code reviews, testing, deployment checks, and bug fixes.",
      "Collaborate with designers, senior engineers, and project coordinators to understand requirements and deliver assigned tasks on time.",
      "Improve technical fundamentals in performance, accessibility, SEO, Git workflow, and production debugging.",
    ],
    requiredSkills: [
      "Strong fundamentals in HTML, CSS, JavaScript, React basics, and responsive web design.",
      "At least one meaningful academic, internship, freelance, or personal web project that can be discussed in detail.",
      "Basic understanding of APIs, databases, Git, npm, browser developer tools, and deployment concepts.",
      "Ability to learn quickly, ask clear questions, accept feedback, and complete work with ownership.",
      "Good communication skills and willingness to document work clearly.",
    ],
    preferredSkills: [
      "Basic TypeScript or Next.js app router experience.",
      "MongoDB, Firebase, Express, or REST API project exposure.",
      "Portfolio website, GitHub profile, or live demo links.",
      "Understanding of SEO, Lighthouse, and Core Web Vitals basics.",
    ],
    hiringProcess: standardHiringProcess,
    featured: true,
  },
  {
    slug: "full-stack-developer-2-plus-years",
    title: "Full Stack Developer (2+ Years)",
    department: "Engineering",
    type: "Full-time",
    mode: "Hybrid",
    location: "Ratlam / Remote IST",
    experience: "2+ years",
    salary: "₹5L - ₹10L CTC",
    summary:
      "A hands-on product engineering role for developers who can independently deliver secure, scalable, and polished web applications across frontend, backend, database, and deployment.",
    impact:
      "You will own full modules for client platforms, SaaS interfaces, admin systems, commerce workflows, and automation products that directly support business operations.",
    tags: ["Next.js", "Node.js", "MongoDB", "System Design"],
    responsibilities: [
      "Design and build full-stack features using React, Next.js, Node.js APIs, MongoDB, and third-party integrations.",
      "Translate business requirements into technical architecture, database models, API contracts, and maintainable UI flows.",
      "Implement authentication, authorization, validation, file handling, email workflows, analytics events, and admin dashboards.",
      "Improve application performance, reliability, SEO, accessibility, security, and observability before production release.",
      "Review code, mentor junior developers, estimate work realistically, and communicate risks early.",
    ],
    requiredSkills: [
      "2+ years of professional experience building production web applications with React or Next.js.",
      "Strong JavaScript/TypeScript, API design, database modeling, and asynchronous programming skills.",
      "Experience with MongoDB, PostgreSQL, or similar databases, including schema design and query optimization basics.",
      "Practical understanding of security, environment variables, error handling, deployment, and production debugging.",
      "Ability to take ownership of features from requirements through launch and post-launch improvements.",
    ],
    preferredSkills: [
      "Experience with Vercel, AWS, Docker, CI/CD, or cloud deployment workflows.",
      "Payment gateways, CRM, WhatsApp, email, analytics, or eCommerce integrations.",
      "Experience leading small technical decisions or mentoring freshers.",
      "Understanding of testing, monitoring, and performance budgets.",
    ],
    hiringProcess: standardHiringProcess,
    featured: true,
  },
  {
    slug: "react-developer",
    title: "React Developer",
    department: "Frontend",
    type: "Full-time",
    mode: "Remote",
    location: "India, IST-friendly",
    experience: "1-3 years",
    salary: "₹3.6L - ₹7.2L CTC",
    summary:
      "A frontend-focused role for engineers who care about polished UI, smooth interactions, maintainable components, accessibility, and high-converting web experiences.",
    impact:
      "You will shape the quality of Arthzone's customer-facing websites, SaaS dashboards, landing pages, and eCommerce interfaces.",
    tags: ["React", "TypeScript", "Tailwind", "Frontend Architecture"],
    responsibilities: [
      "Build responsive, accessible, and reusable React components from Figma designs and product requirements.",
      "Implement loading states, empty states, error states, forms, filters, dashboards, navigation, and interactive UI patterns.",
      "Collaborate with backend developers on API contracts, data rendering, validation messages, and edge cases.",
      "Optimize frontend performance, image usage, responsiveness, keyboard accessibility, and browser compatibility.",
      "Maintain component consistency across typography, spacing, colors, motion, and design-system conventions.",
    ],
    requiredSkills: [
      "1+ year of React experience with strong understanding of hooks, component composition, props, state, and effects.",
      "Excellent HTML, CSS, responsive layout, Tailwind CSS, and browser debugging skills.",
      "Ability to consume REST APIs and manage async states, errors, forms, and client-side interactions.",
      "Attention to UI details including spacing, hierarchy, hover states, focus states, and mobile behavior.",
      "Comfort using Git, package managers, and basic development workflows.",
    ],
    preferredSkills: [
      "Next.js, TypeScript, GSAP, or animation implementation experience.",
      "Accessibility testing, Lighthouse, and performance optimization experience.",
      "Design-system or component-library experience.",
      "Experience with dashboards, SaaS products, or eCommerce storefronts.",
    ],
    hiringProcess: standardHiringProcess,
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    department: "Engineering",
    type: "Full-time",
    mode: "Hybrid",
    location: "Ratlam / Remote IST",
    experience: "2-4 years",
    salary: "₹5L - ₹11L CTC",
    summary:
      "A backend engineering role focused on secure APIs, database design, automation workflows, integrations, and reliable business systems.",
    impact:
      "You will build the backend foundations that power client applications, dashboards, hiring systems, CRMs, eCommerce workflows, and operational automation.",
    tags: ["Node.js", "MongoDB", "REST APIs", "Security"],
    responsibilities: [
      "Design, build, and maintain secure backend APIs, route handlers, data models, and business workflows.",
      "Implement validation, authentication, authorization, file uploads, email notifications, webhooks, and third-party integrations.",
      "Model MongoDB collections, indexes, aggregation queries, tracking schemas, and admin-ready reporting data.",
      "Improve API reliability with structured error handling, logging, rate-limit considerations, and predictable response formats.",
      "Work with frontend engineers to define API contracts, edge cases, and production debugging processes.",
    ],
    requiredSkills: [
      "2+ years of backend development experience with Node.js, Express, Next.js route handlers, or similar stacks.",
      "Strong knowledge of REST API design, validation, authentication, database modeling, and async programming.",
      "Hands-on MongoDB or relational database experience, including query performance and data integrity practices.",
      "Understanding of secure secret handling, uploads, CORS, environment configuration, and production error handling.",
      "Ability to write maintainable backend code with clear naming, documentation, and operational thinking.",
    ],
    preferredSkills: [
      "Webhook integrations, queue systems, background jobs, or serverless deployment experience.",
      "Cloud storage, GridFS, S3, payment gateways, CRM, email, or WhatsApp API integrations.",
      "Testing APIs with Postman, Playwright, Jest, or similar tools.",
      "Experience building admin dashboards or analytics-ready data models.",
    ],
    hiringProcess: standardHiringProcess,
  },
  {
    slug: "ai-ml-engineer",
    title: "AI/ML Engineer",
    department: "AI Solutions",
    type: "Full-time",
    mode: "Remote",
    location: "India, IST-friendly",
    experience: "1-4 years",
    salary: "₹6L - ₹14L CTC",
    summary:
      "A practical AI engineering role for building LLM-powered automation, retrieval workflows, intelligent assistants, content systems, and decision-support tools.",
    impact:
      "You will convert AI ideas into reliable business features that reduce manual work, improve customer support, and help teams make faster decisions.",
    tags: ["LLMs", "Python", "RAG", "Automation"],
    responsibilities: [
      "Prototype and ship AI workflows using LLM APIs, prompt design, retrieval-augmented generation, and structured outputs.",
      "Prepare datasets, clean source documents, design evaluation criteria, and improve output reliability over iterations.",
      "Integrate AI features into web applications with backend engineers, including APIs, logs, feedback loops, and fallback states.",
      "Build automation for content generation, lead qualification, support replies, knowledge search, and internal productivity.",
      "Document model limitations, privacy considerations, cost tradeoffs, and monitoring requirements for production use.",
    ],
    requiredSkills: [
      "Strong Python fundamentals and experience building at least one AI, ML, automation, or LLM-based project.",
      "Understanding of prompts, embeddings, vector search, RAG concepts, JSON outputs, and API-based AI products.",
      "Ability to evaluate AI output quality, reduce hallucination risk, and design useful human-review workflows.",
      "Comfort working with documents, APIs, data preprocessing, experiments, and measurable acceptance criteria.",
      "Clear communication about tradeoffs, limitations, and technical decisions.",
    ],
    preferredSkills: [
      "LangChain-style orchestration, vector databases, OpenAI/Gemini/Groq APIs, or local model experimentation.",
      "Experience with OCR, document parsing, semantic search, agents, or workflow automation.",
      "Basic Next.js or Node.js integration experience.",
      "Knowledge of privacy, security, and responsible AI practices.",
    ],
    hiringProcess: standardHiringProcess,
    featured: true,
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    department: "Infrastructure",
    type: "Contract",
    mode: "Remote",
    location: "Remote",
    experience: "2-5 years",
    salary: "₹6L - ₹13L CTC",
    summary:
      "A DevOps and infrastructure role focused on deployment reliability, CI/CD pipelines, cloud configuration, monitoring, backups, and production readiness.",
    impact:
      "You will make Arthzone's project launches smoother, environments safer, releases more predictable, and production systems easier to maintain.",
    tags: ["CI/CD", "Docker", "Cloud", "Monitoring"],
    responsibilities: [
      "Design and maintain CI/CD workflows for web applications, APIs, environment promotion, and production deployments.",
      "Configure hosting, domains, SSL, environment variables, secrets, backups, logging, uptime checks, and alerting.",
      "Containerize applications where required and support cloud deployment architecture for client systems.",
      "Create deployment runbooks, rollback plans, incident notes, and infrastructure documentation.",
      "Partner with developers to improve build speed, release confidence, security posture, and operational visibility.",
    ],
    requiredSkills: [
      "2+ years of DevOps, cloud, infrastructure, or deployment engineering experience.",
      "Hands-on experience with GitHub Actions or similar CI/CD tools, Docker fundamentals, DNS, SSL, and server logs.",
      "Working knowledge of cloud hosting platforms, Linux basics, environment management, backups, and monitoring.",
      "Security-first approach to secrets, access control, production credentials, and release permissions.",
      "Ability to troubleshoot deployment failures and production incidents calmly and systematically.",
    ],
    preferredSkills: [
      "AWS, Vercel, DigitalOcean, Render, MongoDB Atlas, or similar platform experience.",
      "Terraform or infrastructure-as-code basics.",
      "Experience with Node.js/Next.js deployments and serverless constraints.",
      "Cost optimization and performance monitoring experience.",
    ],
    hiringProcess: standardHiringProcess,
  },
  {
    slug: "qa-automation-engineer",
    title: "QA Automation Engineer",
    department: "Quality",
    type: "Full-time",
    mode: "Hybrid",
    location: "Ratlam / Remote IST",
    experience: "1-3 years",
    salary: "₹3.6L - ₹7.5L CTC",
    summary:
      "A quality engineering role for someone who can protect user experience through structured test planning, automation, regression testing, and clear defect reporting.",
    impact:
      "You will help the team ship websites, dashboards, forms, APIs, and eCommerce flows with fewer regressions and stronger client confidence.",
    tags: ["Playwright", "QA", "Regression", "Accessibility"],
    responsibilities: [
      "Create test plans, acceptance criteria, regression suites, and release checklists for web applications and business workflows.",
      "Build and maintain automated end-to-end tests using Playwright, Cypress, or similar tools.",
      "Test forms, uploads, APIs, authentication, responsive layouts, accessibility basics, analytics events, and browser compatibility.",
      "Report issues with clear reproduction steps, screenshots or recordings, expected results, actual results, and severity.",
      "Collaborate with developers and project coordinators to verify fixes and improve quality gates before launch.",
    ],
    requiredSkills: [
      "1+ year of QA experience testing modern web applications, dashboards, forms, or eCommerce journeys.",
      "Basic JavaScript or TypeScript knowledge for writing and maintaining automated tests.",
      "Strong understanding of test cases, bug lifecycle, regression testing, smoke testing, and edge-case analysis.",
      "Ability to test across desktop, tablet, and mobile viewports with careful attention to user experience.",
      "Clear written communication and disciplined issue tracking.",
    ],
    preferredSkills: [
      "Playwright, Cypress, Postman, Lighthouse, Axe, or CI test workflow experience.",
      "API testing and database validation basics.",
      "Accessibility and performance testing awareness.",
      "Experience testing Next.js, SaaS, CRM, booking, or eCommerce products.",
    ],
    hiringProcess: standardHiringProcess,
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    mode: "Hybrid",
    location: "Ratlam / Remote IST",
    experience: "1-4 years",
    salary: "₹3.6L - ₹8L CTC",
    summary:
      "A product and web design role for creating premium, conversion-focused, responsive interfaces for websites, SaaS products, dashboards, apps, and brand experiences.",
    impact:
      "You will define how Arthzone's digital products look, feel, convert, and guide users through business-critical journeys.",
    tags: ["Figma", "UX", "Design Systems", "SaaS"],
    responsibilities: [
      "Create wireframes, user flows, responsive UI designs, clickable prototypes, and developer-ready handoff files.",
      "Design landing pages, dashboards, app screens, eCommerce flows, forms, navigation systems, and reusable components.",
      "Use hierarchy, typography, spacing, color, accessibility, and interaction patterns to produce polished product experiences.",
      "Collaborate with developers during implementation to maintain design quality and resolve responsive edge cases.",
      "Review analytics, feedback, and competitor references to improve conversion, usability, and visual consistency.",
    ],
    requiredSkills: [
      "Strong Figma skills with a portfolio showing web, product, dashboard, or app UI work.",
      "Solid understanding of UX fundamentals, responsive design, typography, layout, visual hierarchy, and design systems.",
      "Ability to explain design decisions with user goals, business goals, and implementation constraints in mind.",
      "Experience preparing organized design files, components, variants, assets, and handoff notes for developers.",
      "Good communication skills and openness to feedback, iteration, and collaborative review.",
    ],
    preferredSkills: [
      "Experience designing SaaS dashboards, B2B websites, eCommerce flows, or mobile apps.",
      "Brand identity, illustration direction, motion concepts, or microinteraction design.",
      "Basic HTML/CSS awareness to design realistic interfaces.",
      "CRO, accessibility, and usability testing exposure.",
    ],
    hiringProcess: standardHiringProcess,
    featured: true,
  },
  {
    slug: "mobile-app-developer",
    title: "Mobile App Developer",
    department: "App Development",
    type: "Full-time",
    mode: "Remote",
    location: "India, IST-friendly",
    experience: "1-4 years",
    salary: "₹4.8L - ₹10L CTC",
    summary:
      "A mobile engineering role for building reliable Android and iOS experiences for business apps, booking flows, customer portals, and internal operations.",
    impact:
      "You will bring Arthzone's product quality to mobile users with clean architecture, strong API integration, and smooth day-to-day app experiences.",
    tags: ["React Native", "Flutter", "APIs", "Mobile UX"],
    responsibilities: [
      "Build cross-platform mobile app features using React Native, Flutter, or similar frameworks.",
      "Integrate APIs for authentication, profiles, bookings, payments, notifications, dashboards, and business workflows.",
      "Handle loading states, offline-friendly behavior, form validation, push notifications, deep links, and device-specific issues.",
      "Collaborate with designers to implement mobile-first interaction patterns and polished responsive screens.",
      "Support app testing, performance optimization, crash debugging, release preparation, and store submission workflows.",
    ],
    requiredSkills: [
      "1+ year of React Native, Flutter, Android, iOS, or cross-platform mobile development experience.",
      "Strong JavaScript/TypeScript or Dart fundamentals with practical API integration experience.",
      "Understanding of navigation, state management, forms, secure storage, mobile debugging, and release builds.",
      "Ability to test across devices and handle platform-specific behavior professionally.",
      "Clear ownership of feature delivery, bug fixing, and post-release improvements.",
    ],
    preferredSkills: [
      "Expo, Firebase, push notifications, maps, payments, camera, file upload, or native module experience.",
      "Play Store or App Store release experience.",
      "Experience with mobile analytics, crash reporting, or performance monitoring.",
      "Backend collaboration experience with REST APIs and auth flows.",
    ],
    hiringProcess: standardHiringProcess,
  },
  {
    slug: "technical-writer",
    title: "Technical Writer",
    department: "Content",
    type: "Full-time",
    mode: "Remote",
    location: "India, IST-friendly",
    experience: "0-3 years",
    salary: "₹2.4L - ₹6L CTC",
    summary:
      "A technical content role for writing clear documentation, product explainers, case studies, SEO articles, landing page copy, and developer-friendly knowledge resources.",
    impact:
      "You will make Arthzone's technical work easier to understand, easier to trust, and easier for customers to discover through search and sales conversations.",
    tags: ["Documentation", "SEO", "SaaS", "Case Studies"],
    responsibilities: [
      "Write technical blogs, product documentation, case studies, website copy, service pages, FAQs, and knowledge-base content.",
      "Interview developers, designers, and project leads to turn project details into clear business and technical narratives.",
      "Research topics, search intent, competitor content, keywords, and customer questions before drafting.",
      "Edit content for clarity, structure, accuracy, tone, grammar, SEO, and readability across technical and non-technical audiences.",
      "Maintain content calendars, publishing checklists, metadata, internal links, and reusable content templates.",
    ],
    requiredSkills: [
      "Excellent written English with the ability to simplify complex technical ideas without making them inaccurate.",
      "Basic understanding of websites, software development, SaaS, digital marketing, SEO, or business technology.",
      "Strong research discipline and ability to ask precise questions from subject-matter experts.",
      "Ability to write structured, scannable, original content with clear headings and useful examples.",
      "Comfort accepting editorial feedback and improving drafts through multiple iterations.",
    ],
    preferredSkills: [
      "Markdown, CMS publishing, WordPress, Notion, Google Docs, or content management experience.",
      "Keyword research, on-page SEO, schema, metadata, or content brief experience.",
      "Developer documentation, API docs, tutorials, or technical blogging portfolio.",
      "Experience writing case studies for software, websites, apps, or digital campaigns.",
    ],
    hiringProcess: standardHiringProcess,
  },
  {
    slug: "seo-performance-specialist",
    title: "SEO Performance Specialist",
    department: "Growth",
    type: "Full-time",
    mode: "Hybrid",
    location: "Ratlam / Remote IST",
    experience: "1-4 years",
    salary: "₹3L - ₹7L CTC",
    summary:
      "A growth role focused on technical SEO, local SEO, content optimization, analytics tracking, performance reporting, and measurable organic lead generation.",
    impact:
      "You will connect website quality with search visibility, qualified traffic, stronger conversions, and clearer reporting for Arthzone and client brands.",
    tags: ["SEO", "GA4", "Search Console", "CRO"],
    responsibilities: [
      "Run technical SEO audits covering crawlability, indexing, metadata, schema, redirects, page speed, internal linking, and content quality.",
      "Create keyword maps, content briefs, on-page optimization plans, local SEO actions, and monthly growth recommendations.",
      "Coordinate with developers on Core Web Vitals, structured data, sitemap, robots, canonical, tracking, and analytics implementation.",
      "Monitor Google Search Console, GA4, rank movement, traffic quality, conversion events, and reporting dashboards.",
      "Explain SEO performance, priorities, and next steps to internal teams and clients in clear business language.",
    ],
    requiredSkills: [
      "1+ year of hands-on SEO experience with live websites and measurable results.",
      "Working knowledge of Google Search Console, GA4, keyword research tools, on-page SEO, and technical SEO basics.",
      "Understanding of metadata, schema markup, redirects, canonical URLs, page speed, local SEO, and content optimization.",
      "Ability to analyze data, identify priorities, and turn findings into practical action plans.",
      "Strong communication and reporting skills for non-technical stakeholders.",
    ],
    preferredSkills: [
      "Looker Studio, Tag Manager, event tracking, heatmaps, or CRO experimentation experience.",
      "Experience with local business SEO, service-area pages, and lead-generation websites.",
      "Basic HTML/CSS understanding for SEO implementation reviews.",
      "Experience creating SEO briefs for writers and developers.",
    ],
    hiringProcess: standardHiringProcess,
  },
  {
    slug: "project-coordinator-technical",
    title: "Technical Project Coordinator",
    department: "Delivery",
    type: "Full-time",
    mode: "Hybrid",
    location: "Ratlam",
    experience: "1-3 years",
    salary: "₹3L - ₹6.5L CTC",
    summary:
      "A delivery coordination role for managing requirements, timelines, communication, QA handoffs, launch readiness, and client updates across technology projects.",
    impact:
      "You will keep projects moving with clarity so developers, designers, marketers, and clients always understand priorities, blockers, and next actions.",
    tags: ["Delivery", "Client Communication", "Agile", "QA"],
    responsibilities: [
      "Convert client requirements into clear tasks, milestones, acceptance criteria, timelines, and delivery checklists.",
      "Coordinate daily progress, blockers, design handoffs, development updates, QA feedback, approvals, and launch readiness.",
      "Prepare meeting notes, project status updates, client summaries, scope clarifications, and internal follow-up actions.",
      "Track work across tools such as Notion, Trello, Jira, ClickUp, or similar systems with strong ownership.",
      "Support QA verification, content collection, asset management, deployment coordination, and post-launch feedback loops.",
    ],
    requiredSkills: [
      "1+ year of experience coordinating web, software, digital marketing, or technology projects.",
      "Strong written and verbal communication with the ability to translate between client language and technical tasks.",
      "Good understanding of websites, apps, design handoffs, QA, timelines, scope, and delivery dependencies.",
      "Highly organized working style with attention to follow-ups, deadlines, documentation, and accountability.",
      "Calm problem-solving mindset when requirements change or blockers appear.",
    ],
    preferredSkills: [
      "Experience with Notion, Trello, Jira, ClickUp, Slack, Google Workspace, or project documentation tools.",
      "Basic QA testing ability and understanding of website launch checklists.",
      "Experience working with designers, developers, SEO teams, or client stakeholders.",
      "Knowledge of Agile ceremonies, sprint planning, or delivery reporting.",
    ],
    hiringProcess: standardHiringProcess,
  },
];

export const careerDepartments = Array.from(
  new Set(careerJobs.map((job) => job.department))
).sort();

export function getCareerJob(slug: string): CareerJob | undefined {
  return careerJobs.find((job) => job.slug === slug);
}
