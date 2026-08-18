"use client";

import { useEffect, useRef } from "react";
import { useGsapPlugins, SplitText } from "@/lib/gsap";

export default function AboutHero() {
  const headingRef = useRef(null);

  useEffect(() => {
    const gsap = useGsapPlugins();
    let split;

    const ctx = gsap.context(() => {
      split = new SplitText(headingRef.current, { type: "chars", charsClass: "char" });
      gsap.set(split.chars, { opacity: 0, yPercent: 120 });
      gsap.to(split.chars, {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "iq-ease",
        stagger: 0.03,
        delay: 0.2,
      });
    });

    return () => {
      ctx.revert();
      split && split.revert();
    };
  }, []);

  return (
    <div className="hero for-inner">
      <div className="hero-image">
        <img
          src="/images/uploads/About-Us-Banner-New-size-scaled.jpg"
          loading="eager"
          alt="Strat IQ Digital team"
          width="1920"
          height="1080"
          className="bg-video"
        />
        <div className="radius-gradient-shadow"></div>
      </div>
      <div className="hero-content">
        <div className="container">
          <h1 ref={headingRef} className="h1 for-h2">
            About
          </h1>
        </div>
      </div>
    </div>
  );
}
