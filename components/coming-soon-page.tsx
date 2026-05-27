import Footer from "@/components/footer";
import Header from "@/components/headers";
import Link from "next/link";

type ComingSoonPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights?: string[];
};

export default function ComingSoonPage({
  eyebrow,
  title,
  description,
  highlights = [
    "AI-powered workflows",
    "Custom software systems",
    "Business automation",
  ],
}: ComingSoonPageProps) {
  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <Header />
      <main className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 md:px-10 md:pt-40 lg:px-16">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: [
              "radial-gradient(circle at 18% 20%, rgba(17,215,250,0.18), transparent 28%)",
              "radial-gradient(circle at 82% 12%, rgba(255,83,26,0.16), transparent 30%)",
              "linear-gradient(180deg, rgba(16,16,16,0) 0%, #101010 78%)",
            ].join(", "),
          }}
        />
        <section className="relative z-[1] mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-lg bg-[#11d7fa] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#101010]">
              {eyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#11d7fa] px-6 text-sm font-bold text-[#101010] transition hover:bg-white"
              >
                Discuss a Project
              </Link>
              <Link
                href="/services/web-application"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/18 px-6 text-sm font-bold text-white transition hover:border-[#11d7fa] hover:text-[#11d7fa]"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="rounded-xl border border-white/10 bg-[#141617] p-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff531a]" />
                <span className="h-3 w-3 rounded-full bg-[#ff9f1c]" />
                <span className="h-3 w-3 rounded-full bg-[#11d7fa]" />
              </div>
              <div className="mt-8 space-y-3">
                {highlights.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.035] px-4 py-3"
                  >
                    <span className="text-sm font-bold text-white/82">{item}</span>
                    <span className="text-xs font-bold text-[#11d7fa]">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-[#11d7fa]/10 p-4 text-sm leading-6 text-white/68">
                This page is being shaped into a focused Arthzone experience.
                Until then, our team can help you plan the right software,
                automation, AI, or growth system directly.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
