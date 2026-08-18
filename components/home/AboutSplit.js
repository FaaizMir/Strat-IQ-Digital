"use client";

import { useEffect, useRef } from "react";
import { useGsapPlugins, ScrollTrigger } from "@/lib/gsap";

const STORY_TEXT = [
  "Nouman Rao spent 15 years watching brands fall short, not from lack of product, but because of a lack of the right strategy. So he built Strat IQ Digital, an agency that leads with data, speaks in results, and treats your brand like its own. Strat IQ Digital was founded in 2026, with a global mindset and a very simple mission: help the right brands reach their full potential.",
  "Most agencies sell you a service. We sell you outcomes. With 15 years of collective experience across Amazon, Shopify, Meta, and Google, we know what moves the needle. We build growth engines for brands ready to scale, not just ads that burn budgets.",
  "If your marketing feels scattered, it probably is. We connect your ads, creatives, and data into a single, high-performance system that delivers real results. With Strat IQ Digital, you get clarity, visibility, and actionable insights that drive long-term growth. No fluff. Just results.",
];

const STORY_HEADINGS = ["Our Story", "We Don’t Just Run Ads. We Build Markets.", "Growth That Actually Lasts."];

const STORY_IMAGES = [
  "/images/uploads/Our-Story-3-scaled.jpg",
  "/images/uploads/Our-2nd-scaled.jpg",
  "/images/uploads/Our-3rd-scaled.jpg",
];

function GetInTouchButton() {
  return (
    <a href="/contact" className="button-arrow w-inline-block">
      <img width="9" loading="lazy" alt="" src="/images/webflow/699f89c49271389efbdafdbc_arrows.png" className="arrow-gray" />
      <div className="button-title-flex">
        <div className="button-small-name">Get in touch</div>
        <div className="button-small-name">Get in touch</div>
      </div>
    </a>
  );
}

export default function AboutSplit() {
  const sectionRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    const gsap = useGsapPlugins();

    const ctx = gsap.context(() => {
      const imgs = [1, 2, 3].map((n) => sectionRef.current.querySelector(`.image-animation._0${n}`));
      const heads = [1, 2, 3].map((n) => sectionRef.current.querySelector(`.text-animation-card._0${n}`));
      const texts = [1, 2, 3].map((n) => sectionRef.current.querySelector(`.card-text._0${n}`));
      const groups = [0, 1, 2].map((i) => [imgs[i], heads[i], texts[i]].filter(Boolean));

      groups.forEach((group, i) => {
        gsap.set(group, { opacity: i === 0 ? 1 : 0 });
      });

      /* Panels switch cleanly (no double-exposed text) -- only the image
         crossfades continuously; heading/paragraph snap to the active
         panel with a quick fade so they never overlap mid-scroll. */
      let active = 0;
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate(self) {
          const p = self.progress * 2; // maps 0..1 -> 0..2 across the 3 stages
          imgs.forEach((img, i) => {
            if (!img) return;
            gsap.set(img, { opacity: Math.max(0, 1 - Math.abs(p - i)) });
          });

          const next = Math.min(2, Math.round(p));
          if (next !== active) {
            active = next;
            heads.forEach((el, i) => el && gsap.to(el, { opacity: i === active ? 1 : 0, duration: 0.25, overwrite: true }));
            texts.forEach((el, i) => el && gsap.to(el, { opacity: i === active ? 1 : 0, duration: 0.25, overwrite: true }));
          }
        },
      });

      /* Mobile stacked panels: simple reveal-on-scroll, one time each */
      if (mobileRef.current) {
        const panels = gsap.utils.toArray(".about-mobile-panel", mobileRef.current);
        if (panels.length) {
          ScrollTrigger.batch(panels, {
            start: "top 90%",
            once: true,
            onEnter: (batch) => batch.forEach((el) => el.classList.add("is-visible")),
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-about" ref={sectionRef}>
      <div className="section-sticky">
        <div className="about-split">
          <div className="photo-split">
            <div className="photo-main _01">
              <img src={STORY_IMAGES[0]} loading="lazy" alt="" className="image-animation _01" />
            </div>
            <div className="photo-main _02">
              <img src={STORY_IMAGES[1]} loading="lazy" alt="" className="image-animation _02" />
            </div>
            <div className="photo-main _03">
              <img src={STORY_IMAGES[2]} loading="lazy" alt="" className="image-animation _03" />
            </div>
          </div>
          <div className="content-split">
            <div className="title-small-main _01 rvs">
              <div id="w-node-_108a3946-5b2c-6649-bd1b-8b4e81c9ebfb-86e38a65" className="flex-small-title">
                <div className="plus-icon">
                  <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
                </div>
                <div className="top-text">About Strat IQ Digital</div>
              </div>
            </div>
            <div className="content-wrapper">
              <h2 className="text-animation-card _01">{STORY_HEADINGS[0]}</h2>
              <h2 className="text-animation-card _02">{STORY_HEADINGS[1]}</h2>
              <h2 className="text-animation-card _03">{STORY_HEADINGS[2]}</h2>
            </div>
            <div className="flex-bottom">
              <div className="content-wrapper second">
                <div className="text-wrapper-card second">
                  <div className="card-text _01">{STORY_TEXT[0]}</div>
                  <div className="card-text _02">{STORY_TEXT[1]}</div>
                  <div className="card-text _03">{STORY_TEXT[2]}</div>
                </div>
              </div>
              <div className="flex-lft">
                <GetInTouchButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only: 3 stacked image + text panels replacing the desktop pinned layout */}
      <div className="about-mobile-wrapper" ref={mobileRef}>
        <div className="about-mobile-header">
          <div className="flex-small-title">
            <div className="plus-icon">
              <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
            </div>
            <div className="top-text">About Strat IQ Digital</div>
          </div>
        </div>

        {[0, 1, 2].map((i) => (
          <div className="about-mobile-panel" key={i}>
            <div className="about-mobile-img-wrap">
              <img src={STORY_IMAGES[i]} loading="lazy" alt="" />
            </div>
            <div className="about-mobile-text">
              <h2>{STORY_HEADINGS[i]}</h2>
              <p className="card-text">{STORY_TEXT[i]}</p>
            </div>
          </div>
        ))}

        <div className="about-mobile-btn">
          <GetInTouchButton />
        </div>
      </div>
    </section>
  );
}
