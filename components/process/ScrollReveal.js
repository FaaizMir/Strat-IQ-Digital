"use client";

import { useEffect } from "react";
import { getGsapWithPlugins, ScrollTrigger } from "@/lib/gsap";

// Recreates the original page's IntersectionObserver-driven ".iqp-reveal"
// fade-up-on-scroll pattern (with stagger delays via .d1/.d2/.d3) using
// GSAP + ScrollTrigger instead. Renders nothing -- just wires up the
// animation for every ".iqp-reveal" element already on the page.
export default function ScrollReveal() {
  useEffect(() => {
    const gsap = getGsapWithPlugins();
    const els = gsap.utils.toArray(".iqp-reveal");
    const triggers = [];

    els.forEach((el) => {
      let delay = 0;
      if (el.classList.contains("d1")) delay = 0.12;
      else if (el.classList.contains("d2")) delay = 0.24;
      else if (el.classList.contains("d3")) delay = 0.36;

      gsap.set(el, { opacity: 0, y: 36 });

      const tween = gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: "iq-ease",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });

      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return null;
}
