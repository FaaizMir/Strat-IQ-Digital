"use client";

import { useEffect, useRef } from "react";
import { useGsapPlugins, ScrollTrigger } from "@/lib/gsap";

const STORY_TEXT = [
  "We don't care about vanity metrics. We care about the \"what if.\" What if your brand actually lived up to its data?",
  "We've spent a decade and a half breaking the rules of the market. Now, we use that experience to rewrite yours.",
  "We aren't here to be your \"vendor.\" We're here to be the unfair advantage that makes your competition wish they'd started sooner.",
];

const STORY_HEADINGS = ["The Philosophy", "The Pedigree", "See you at the Market!"];

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

export default function PhilosophySection() {
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

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate(self) {
          const p = self.progress * 2; // maps 0..1 -> 0..2 across the 3 stages
          groups.forEach((group, i) => {
            const opacity = Math.max(0, 1 - Math.abs(p - i));
            gsap.set(group, { opacity });
          });
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
