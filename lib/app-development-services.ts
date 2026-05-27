import type { SimpleServiceContent } from "@/lib/graphic-ui-ux-services";

export const appDevelopmentServices: SimpleServiceContent[] = [
  {
    slug: "ios-app-development",
    title: "iOS App Development",
    description:
      "iPhone and iPad app development for customer experiences, staff workflows, booking systems, dashboards, and connected business tools.",
    introTitle: "iOS apps should feel polished, fast, and reliable.",
    intro: [
      "We plan and build iOS app experiences around user journeys, business workflows, data flow, notifications, and long-term maintainability.",
      "The goal is a product that looks professional, works smoothly, and connects with your backend systems when needed.",
    ],
    cardsTitle: "iOS App Capabilities",
    cards: [
      { title: "Native-Quality UX", text: "Screens, flows, and interactions planned for iPhone and iPad users." },
      { title: "Backend Connectivity", text: "APIs, authentication, dashboards, databases, and admin systems." },
      { title: "Launch Support", text: "Testing, deployment planning, updates, and post-launch improvements." },
    ],
    outcomes: ["Professional iOS experience", "Connected business data", "Better customer convenience", "Scalable app foundation"],
  },
  {
    slug: "android-app-development",
    title: "Android App Development",
    description:
      "Android app development for businesses that need mobile access, customer engagement, internal workflows, and operational control.",
    introTitle: "Android apps can bring your workflow closer to customers and staff.",
    intro: [
      "We create Android app solutions for service booking, customer accounts, order flows, internal teams, notifications, and business dashboards.",
      "Our focus is practical usability, performance, backend connectivity, and maintainable app structure.",
    ],
    cardsTitle: "Android App Features",
    cards: [
      { title: "Customer Workflows", text: "Bookings, orders, profiles, updates, support, and service requests." },
      { title: "Internal Tools", text: "Staff task flows, data entry, approvals, reporting, and field operations." },
      { title: "Integrations", text: "APIs, payments, analytics, notifications, databases, and admin panels." },
    ],
    outcomes: ["Mobile-first business access", "Improved staff productivity", "Better customer communication", "Reliable Android experience"],
  },
  {
    slug: "react-native-app-development",
    title: "React Native App Development",
    description:
      "Cross-platform app development using React Native for businesses that want one codebase across iOS and Android.",
    introTitle: "React Native is useful when speed and shared development matter.",
    intro: [
      "We use React Native for apps where a shared codebase can reduce effort while still delivering strong mobile experiences.",
      "It is well-suited for MVPs, business apps, customer portals, booking flows, dashboards, and connected workflows.",
    ],
    cardsTitle: "React Native Advantages",
    cards: [
      { title: "Shared Codebase", text: "Build iOS and Android experiences with a unified development approach." },
      { title: "Fast Iteration", text: "Useful for MVPs, startups, and businesses validating new mobile workflows." },
      { title: "Backend Ready", text: "Connect to APIs, admin panels, databases, auth, payments, and notifications." },
    ],
    outcomes: ["Faster cross-platform launch", "Lower duplicate effort", "Consistent app experience", "Room for future scaling"],
  },
  {
    slug: "ionic-app-development",
    title: "Ionic App Development",
    description:
      "Hybrid app development with Ionic for businesses that want web-powered mobile apps across platforms.",
    introTitle: "Ionic can be a practical fit for web-first mobile products.",
    intro: [
      "Ionic is useful for apps that need broad platform reach, faster delivery, and a web-technology foundation.",
      "We help decide when Ionic is the right fit compared with native, React Native, Flutter, or a progressive web app.",
    ],
    cardsTitle: "Ionic Use Cases",
    cards: [
      { title: "Business Utility Apps", text: "Internal tools, dashboards, forms, approvals, and field workflows." },
      { title: "Customer Portals", text: "Account access, service requests, booking, updates, and content access." },
      { title: "Web-Based Delivery", text: "Shared web skills and faster iteration for suitable app requirements." },
    ],
    outcomes: ["Faster hybrid delivery", "Cross-platform reach", "Web-friendly maintenance", "Practical app foundation"],
  },
  {
    slug: "xamarin-app-development",
    title: "Xamarin App Development",
    description:
      "Xamarin app development and modernization support for businesses maintaining Microsoft-based mobile ecosystems.",
    introTitle: "Some businesses need support for existing Xamarin ecosystems.",
    intro: [
      "We can help assess, maintain, improve, or plan migration for Xamarin-based applications depending on your current system and long-term goals.",
      "For new builds, we also help evaluate whether Xamarin, native, Flutter, React Native, or another approach is the right fit.",
    ],
    cardsTitle: "Xamarin Support Areas",
    cards: [
      { title: "Existing App Review", text: "Audit current architecture, usability, performance, and maintainability." },
      { title: "Feature Support", text: "Improve workflows, fix issues, connect APIs, and refine user experience." },
      { title: "Migration Planning", text: "Plan next steps if the app should move to a newer cross-platform stack." },
    ],
    outcomes: ["Clearer app roadmap", "Better maintainability", "Reduced legacy risk", "Practical migration direction"],
  },
  {
    slug: "flutter-app-development",
    title: "Flutter App Development",
    description:
      "Cross-platform Flutter app development for polished mobile experiences across Android, iOS, and beyond.",
    introTitle: "Flutter is strong for expressive, consistent cross-platform apps.",
    intro: [
      "We use Flutter when the product needs a polished UI, shared codebase, smooth interactions, and consistent behavior across platforms.",
      "It fits customer apps, internal tools, dashboards, booking apps, commerce apps, and startup MVPs.",
    ],
    cardsTitle: "Flutter Capabilities",
    cards: [
      { title: "Polished Interfaces", text: "Flexible UI components and consistent visual experience across devices." },
      { title: "Cross-Platform Build", text: "A shared development approach for Android and iOS app delivery." },
      { title: "API Integration", text: "Backend connectivity, authentication, payments, notifications, and admin tools." },
    ],
    outcomes: ["Consistent cross-platform UI", "Strong MVP foundation", "Smooth app experience", "Scalable mobile architecture"],
  },
  {
    slug: "shopify-app-development",
    title: "Shopify App Development",
    description:
      "Shopify app and integration development for stores that need custom workflows, automation, admin tools, and commerce extensions.",
    introTitle: "Shopify stores often need custom functionality beyond a theme.",
    intro: [
      "We help with Shopify apps, custom store workflows, admin tools, integrations, automations, and commerce features that support operations and growth.",
      "This can include custom dashboards, product workflows, order handling, API integrations, reporting, and store-specific automation.",
    ],
    cardsTitle: "Shopify App Use Cases",
    cards: [
      { title: "Store Automation", text: "Order workflows, product rules, customer handling, and operational triggers." },
      { title: "Admin Extensions", text: "Custom tools for managing data, products, requests, or reports." },
      { title: "Third-Party Integrations", text: "Connect Shopify with CRMs, ERPs, analytics, fulfilment, or marketing tools." },
    ],
    outcomes: ["More efficient store operations", "Custom commerce workflows", "Better admin control", "Connected sales systems"],
  },
];
