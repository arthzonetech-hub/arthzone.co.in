"use client";

import { useLenis } from "lenis/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const lenis = useLenis();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;

    const scrollTop = () => {
      lenis?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollTop();
    const frame = requestAnimationFrame(scrollTop);
    const timeout = window.setTimeout(scrollTop, 80);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [lenis, pathname, search]);

  return null;
}
