"use client";

import { useEffect } from "react";
import { useGsapPlugins, ScrollTrigger } from "@/lib/gsap";

/**
 * Reusable "fade up on scroll" reveal.
 * Targets `selector` inside `containerRef` and batch-reveals each match
 * (fade + slide up) the first time it scrolls into view.
 *
 * Kept generic so every section that repeats the same Webflow "cards fade
 * in on scroll" pattern can reuse this instead of writing its own
 * ScrollTrigger boilerplate.
 */
export default function useFadeUpReveal(containerRef, selector, opts = {}) {
  useEffect(() => {
    const gsap = useGsapPlugins();
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray(selector);
      if (!els.length) return;

      gsap.set(els, { opacity: 0, y: opts.y ?? 32 });

      ScrollTrigger.batch(els, {
        start: opts.start || "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "iq-ease",
            stagger: opts.stagger ?? 0.1,
            overwrite: true,
          }),
      });
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
