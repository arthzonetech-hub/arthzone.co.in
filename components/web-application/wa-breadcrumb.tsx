import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function WaBreadcrumb({ currentLabel }: { currentLabel: string }) {
  return (
    <nav
      className="flex flex-wrap items-center gap-2 text-sm text-white/70 md:text-base"
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
      >
        <HomeIcon className="h-4 w-4 text-white/90 md:h-5 md:w-5" aria-hidden />
        <span className="sr-only">Home</span>
      </Link>
      <span className="text-white/40" aria-hidden>
        /
      </span>
      <Link
        href="/services/web-application"
        className="font-medium text-white/90 transition-colors hover:text-[#11d7fa]"
      >
        Services
      </Link>
      <span className="text-white/40" aria-hidden>
        /
      </span>
      <span className="font-semibold text-[#11d7fa]">{currentLabel}</span>
    </nav>
  );
}
