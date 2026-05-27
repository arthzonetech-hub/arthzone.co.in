import Footer from "@/components/footer";
import Header from "@/components/headers";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <Header />
      <main className="flex min-h-[80vh] items-center justify-center px-4 pt-28 sm:px-6 md:px-10">
        <section className="mx-auto max-w-3xl text-center">
          <p className="mx-auto mb-5 inline-flex rounded-lg bg-[#11d7fa] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#101010]">
            404
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            This page is not available.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
            The link may be outdated, moved, or typed incorrectly. You can head
            back home or talk to our team about your software, AI, automation,
            website, or growth project.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#11d7fa] px-6 text-sm font-bold text-[#101010] transition hover:bg-white"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/18 px-6 text-sm font-bold text-white transition hover:border-[#11d7fa] hover:text-[#11d7fa]"
            >
              Contact Arthzone
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
