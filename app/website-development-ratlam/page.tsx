import Header from "@/components/headers";
import Footer from "@/components/footer";

export const metadata = {
  title: "Website Development Company in Ratlam | Arthzone Technologies",
  description:
    "Arthzone Technologies builds affordable, modern websites for businesses in Ratlam. Custom web design, landing pages & maintenance. Get a free consultation today.",
};

const faqItems = [
  {
    q: "How much does website development cost in Ratlam?",
    a: "Our website packages for Ratlam businesses start from ₹4,999 for a basic business website. Custom projects are priced based on requirements. Contact us for a free quote.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A standard business website is delivered in 5–7 working days. Custom or larger projects may take 2–4 weeks depending on complexity.",
  },
  {
    q: "Do you provide website maintenance in Ratlam?",
    a: "Yes, we offer ongoing website maintenance and support plans to keep your site fast, secure, and up to date.",
  },
  {
    q: "Can you build a website for a small business in Ratlam?",
    a: "Absolutely. We specialize in building websites for small and local businesses in Ratlam — shops, restaurants, coaching institutes, clinics, and more.",
  },
  {
    q: "What is the best website development company in Ratlam?",
    a: "Arthzone Technologies is a trusted website development company based in Madhya Pradesh, known for delivering modern, fast, and affordable websites with personal support.",
  },
];

const steps = [
  { num: "01", title: "Free Consultation", desc: "We understand your business goals and requirements." },
  { num: "02", title: "Design & Prototype", desc: "We design a modern, mobile-friendly layout for approval." },
  { num: "03", title: "Development", desc: "We build your website with clean, fast, SEO-ready code." },
  { num: "04", title: "Launch & Support", desc: "We go live and provide ongoing maintenance and support." },
];

const packages = [
  {
    name: "Basic",
    price: "₹4,999",
    features: ["3–5 pages", "Mobile-friendly", "Contact form", "1 revision", "Delivery in 5 days"],
    highlight: false,
  },
  {
    name: "Business",
    price: "₹9,999",
    features: ["Up to 10 pages", "SEO optimized", "WhatsApp integration", "3 revisions", "Delivery in 7 days"],
    highlight: true,
  },
  {
    name: "Custom",
    price: "Let's Talk",
    features: ["Unlimited pages", "Custom features", "E-commerce / booking", "Priority support", "Flexible timeline"],
    highlight: false,
  },
];

export default function RatlamPage() {
  return (
    <div className="relative bg-[#101010] text-white">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Arthzone Technologies and Soft. Solutions",
            description: "Website development company in Ratlam.",
            url: "https://www.arthzonetech.com",
            areaServed: "Ratlam",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ratlam",
              addressRegion: "Madhya Pradesh",
              addressCountry: "IN",
            },
            serviceType: "Website Development",
          }),
        }}
      />

      {/* HERO */}
      <section
        className="relative text-white"
        style={{
          padding: "120px 0 60px",
          backgroundImage: [
            "linear-gradient(270deg, rgb(16, 16, 16), rgba(0, 0, 0, 0) 13%)",
            "linear-gradient(90deg, rgb(16, 16, 16), rgba(0, 0, 0, 0) 5%)",
            "linear-gradient(rgba(16, 16, 16, 0.584) 65%, rgb(15, 17, 20))",
            'url("https://cdn.prod.website-files.com/67cc6e960496c50a6f716e6f/67dd8b51428826ae00811c7d_Group%20(1).svg")',
            "linear-gradient(rgb(16, 16, 16), rgb(16, 16, 16))",
          ].join(", "),
          backgroundPosition: "0px 0px, 0px 0px, 0px 0px, 50% center, 0px 0px",
          backgroundRepeat: "repeat, repeat, repeat, no-repeat, repeat",
          backgroundSize: "auto, auto, auto, cover, auto",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#11d7fa] px-4 py-1 rounded-lg text-sm font-semibold text-black">
            Arthzone Technologies
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4">
            Website Development Company in Ratlam
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            We build modern, high-converting websites for businesses in Ratlam
            that attract customers and grow your business online.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://app.cal.com/arthzone-tech"
              className="px-6 py-3 bg-[#7614EF] rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Get Free Consultation
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-[#ff531a] rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6 max-w-4xl mx-auto space-y-16">

        {/* INTRO */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Website Development Company in Ratlam
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Arthzone Technologies is a trusted website development company serving businesses in Ratlam,
            Madhya Pradesh. We help local shops, startups, coaching institutes, clinics, and service
            businesses build a strong online presence with modern, fast, and mobile-friendly websites.
            Whether you are looking for an affordable website in Ratlam or a fully custom web application,
            our team delivers quality solutions on time and within budget. With clients across Ratlam and
            beyond, we are the go-to web design partner for businesses that want to grow online.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Our Website Development Services in Ratlam
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-gray-300">
            {[
              "Business Website Development",
              "Custom Website Design",
              "Responsive & Mobile-Friendly Websites",
              "Landing Page Design",
              "E-Commerce Website Development",
              "Website Redesign",
              "SEO-Optimized Websites",
              "Website Maintenance & Support",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#11d7fa] rounded-full flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* PROCESS */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            How We Build Your Website
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="border border-gray-700 rounded-xl p-5">
                <span className="text-[#11d7fa] font-bold text-lg">{s.num}</span>
                <h3 className="text-white font-semibold mt-1 mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PRICING */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Website Development Packages & Pricing
          </h2>
          <p className="text-gray-400 mb-6">
            Affordable website development packages for businesses in Ratlam. No hidden charges.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-xl p-6 border ${
                  pkg.highlight
                    ? "border-[#11d7fa] bg-[#11d7fa]/5"
                    : "border-gray-700"
                }`}
              >
                {pkg.highlight && (
                  <span className="text-xs bg-[#11d7fa] text-black font-semibold px-2 py-1 rounded-md mb-3 inline-block">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                <p className="text-2xl font-bold text-[#11d7fa] mt-1 mb-4">{pkg.price}</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#11d7fa] rounded-full flex-shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="mt-5 block text-center px-4 py-2 rounded-xl border border-[#11d7fa] text-[#11d7fa] text-sm hover:bg-[#11d7fa] hover:text-black transition"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* WHY WEBSITE */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Why Your Ratlam Business Needs a Website
          </h2>
          <ul className="space-y-2 text-gray-400">
            <li>• Reach more customers online — most people search Google before visiting a business</li>
            <li>• Build trust and credibility with a professional online presence</li>
            <li>• Showcase your products and services 24/7</li>
            <li>• Get leads and enquiries even when your shop is closed</li>
            <li>• Stay ahead of competitors who don't have a website yet</li>
            <li>• Rank on Google for searches like "best [your business] in Ratlam"</li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Industries We Serve in Ratlam
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-400">
            <li>• Restaurants & Cafes</li>
            <li>• Retail Shops & Showrooms</li>
            <li>• Coaching Classes & Institutes</li>
            <li>• Gyms & Fitness Centers</li>
            <li>• Clinics & Healthcare</li>
            <li>• Real Estate & Builders</li>
            <li>• Local Service Businesses</li>
            <li>• Startups & Entrepreneurs</li>
          </ul>
        </div>

        {/* WHY CHOOSE */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Why Choose Arthzone Technologies in Ratlam
          </h2>
          <ul className="space-y-2 text-gray-400">
            <li>• Affordable pricing starting at ₹4,999</li>
            <li>• Fast delivery in 5–7 working days</li>
            <li>• Modern, professional design</li>
            <li>• 100% mobile-friendly and SEO-ready websites</li>
            <li>• Personal support — we're always reachable</li>
            <li>• Serving clients across Ratlam and Madhya Pradesh</li>
          </ul>
        </div>

        {/* TESTIMONIALS */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            What Our Clients Say
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Ramesh Patidar",
                business: "Retail Shop, Ratlam",
                text: "Arthzone built our website in just 6 days. We started getting customer enquiries within the first week. Very professional team.",
              },
              {
                name: "Sunita Sharma",
                business: "Coaching Institute, Ratlam",
                text: "Our institute now gets online admissions through the website. The design is clean and works perfectly on mobile. Highly recommend.",
              },
            ].map((t, i) => (
              <div key={i} className="border border-gray-700 rounded-xl p-5">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.business}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MID-PAGE CTA */}
        <div className="bg-[#7614EF]/10 border border-[#7614EF] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to get your website built?</h2>
          <p className="text-gray-400 mb-5">
            Get a free consultation and quote for your Ratlam business today.
          </p>
          <a
            href="https://app.cal.com/arthzone-tech"
            className="inline-block px-8 py-3 bg-[#7614EF] rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            Book Free Consultation
          </a>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-gray-700 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}