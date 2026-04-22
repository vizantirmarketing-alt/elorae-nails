"use client";

import { useEffect } from "react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let cancelled = false;
    let teardown: (() => void) | undefined;

    void Promise.all([import("lenis"), import("@/app/lib/gsap")]).then(
      ([lenisMod, gsapMod]) => {
        if (cancelled) return;

        const Lenis = lenisMod.default;
        const { gsap } = gsapMod;

        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
        });

        const tickerCb = (time: number) => {
          lenis.raf(time * 1000);
        };

        gsap.ticker.add(tickerCb);
        gsap.ticker.lagSmoothing(0);

        teardown = () => {
          gsap.ticker.remove(tickerCb);
          lenis.destroy();
        };
      }
    );

    return () => {
      cancelled = true;
      teardown?.();
    };
  }, []);

  return <>{children}</>;
}
