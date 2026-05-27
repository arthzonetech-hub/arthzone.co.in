import Footer from "@/components/footer";
import Header from "@/components/headers";
import Link from "next/link";

type InfoCard = {
  title: string;
  text: string;
};

type ProfessionalInfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  introTitle: string;
  intro: string[];
  cardsTitle: string;
  cards: InfoCard[];
  processTitle?: string;
  process?: InfoCard[];
  outcomesTitle?: string;
  outcomes?: string[];
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export default function ProfessionalInfoPage({
  eyebrow,
  title,
  description,
  introTitle,
  intro,
  cardsTitle,
  cards,
  processTitle = "How We Approach It",
  process = [],
  outcomesTitle = "What You Can Expect",
  outcomes = [],
  primaryCta = { label: "Discuss a Project", href: "/contact" },
  secondaryCta = { label: "Explore Solutions", href: "/services/web-application" },
}: ProfessionalInfoPageProps) {
  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <Header />
      <main>
        <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 md:px-10 md:pt-40 lg:px-16">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: [
                "radial-gradient(circle at 20% 20%, rgba(17,215,250,0.18), transparent 30%)",
                "radial-gradient(circle at 82% 8%, rgba(255,83,26,0.15), transparent 28%)",
                "linear-gradient(180deg, rgba(16,16,16,0) 0%, #101010 82%)",
              ].join(", "),
            }}
          />
          <div className="relative z-[1] mx-auto max-w-6xl">
            <p className="mb-5 inline-flex rounded-lg bg-[#11d7fa] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#101010]">
              {eyebrow}
            </p>
            <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryCta.href}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#11d7fa] px-6 text-sm font-bold text-[#101010] transition hover:bg-white"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/18 px-6 text-sm font-bold text-white transition hover:border-[#11d7fa] hover:text-[#11d7fa]"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ff9f1c]">
                Overview
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                {introTitle}
              </h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-white/68">
              {intro.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#181A1B] px-4 py-16 sm:px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold md:text-4xl">{cardsTitle}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {process.length > 0 ? (
          <section className="px-4 py-16 sm:px-6 md:px-10 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold md:text-4xl">{processTitle}</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {process.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-xl border border-white/10 bg-white/[0.035] p-5"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#11d7fa] text-sm font-bold text-[#101010]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/62">{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {outcomes.length > 0 ? (
          <section className="bg-[#0d0d0d] px-4 py-16 sm:px-6 md:px-10 lg:px-16">
            <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/[0.035] p-6 md:p-8">
              <h2 className="text-3xl font-bold md:text-4xl">{outcomesTitle}</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="rounded-lg border border-white/10 bg-[#101010] px-4 py-3 text-sm font-bold text-white/78"
                  >
                    {outcome}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
