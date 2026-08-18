"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useGsapPlugins, SplitText } from "@/lib/gsap";
import { services } from "@/data/services";

const bySlug = (slug) => services.find((s) => s.slug === slug)?.href || "#";

const heroServices = [
  { num: "01", href: bySlug("amazon-ppc-management-services"), label: "Amazon PPC" },
  { num: "02", href: bySlug("meta-instagram-ads-services"), label: "Meta Ads" },
  { num: "03", href: bySlug("branding-and-design-services"), label: "Branding & Creative Design" },
  { num: "04", href: bySlug("Seo-content-strategy-services"), label: "Seo & Content" },
  { num: "05", href: bySlug("shopify-development-services"), label: "Shopify Store & Development", noBottomLine: true },
];

export default function Hero() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const slideWrapRef = useRef(null);

  useEffect(() => {
    const gsap = useGsapPlugins();
    let split;

    const ctx = gsap.context(() => {
      /* Hero heading: SplitText chars stagger fade + slide up on load */
      split = new SplitText(headingRef.current, { type: "chars", charsClass: "char" });
      gsap.set(split.chars, { opacity: 0, yPercent: 120 });
      gsap.to(split.chars, {
        opacity: 1,
        yPercent: 0,
        duration: 1.1,
        ease: "iq-ease",
        stagger: 0.018,
        delay: 0.25,
      });

      /* Rotating subhead: cycle through the four "slide" lines */
      const items = gsap.utils.toArray(".subhead.slide", slideWrapRef.current);
      if (items.length) {
        gsap.set(slideWrapRef.current, { position: "relative" });
        gsap.set(items, { position: "absolute", top: 0, left: 0, right: 0, opacity: 0, y: 14 });
        gsap.set(items[0], { opacity: 1, y: 0 });

        const tl = gsap.timeline({ repeat: -1, delay: 1.5 });
        items.forEach((el, i) => {
          const next = items[(i + 1) % items.length];
          tl.to(el, { opacity: 0, y: -14, duration: 0.5, ease: "iq-ease" }, `+=1.7`).to(
            next,
            { opacity: 1, y: 0, duration: 0.5, ease: "iq-ease" },
            "<"
          );
        });
      }
    }, heroRef);

    return () => {
      ctx.revert();
      split && split.revert();
    };
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <div className="hero-image">
        <div className="line-effect-divider">
          {Array.from({ length: 15 }).map((_, i) => (
            <div className="line-small-divider" key={i}></div>
          ))}
        </div>
        <img
          src="/images/uploads/bnnn-scaled.jpg"
          loading="eager"
          alt=""
          className="bg-video"
        />
        <div className="radius-gradient-shadow"></div>
        <div className="bg-overlay w-background-video w-background-video-atom">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/webflow/69a593bef47cd9955a19a694_rays-2_poster.0000000.jpg"
            data-object-fit="cover"
          >
            <source src="/videos/69a593bef47cd9955a19a694_rays-2_mp4.mp4" type="video/mp4" />
            <source src="/videos/69a593bef47cd9955a19a694_rays-2_webm.webm" type="video/webm" />
          </video>
        </div>
      </div>
      <div className="hero-content">
        <div className="container">
          <div>
            <div className="plus-grid flex">
              <div
                id="w-node-_8c17fd21-4ec3-c4cd-23c9-0456431934de-86e38a65"
                className="service-flex-small add-top"
              >
                {heroServices.map((s) => (
                  <div className={`flex-service-small${s.noBottomLine ? " no-bottom-line" : ""}`} key={s.label}>
                    <div className="gray-color">({s.num})</div>
                    <Link href={s.href}>{s.label}</Link>
                  </div>
                ))}
              </div>
              <h1
                id="w-node-_1ab594ed-ade0-24e2-823b-f8077e784ccd-86e38a65"
                ref={headingRef}
                className="h1 funnel-bold"
                style={{
                  fontSize: "clamp(5.5rem, 13vw, 9.5rem)",
                  lineHeight: 0.92,
                  marginTop: "1.6rem",
                  maxWidth: "min(96vw, 70rem)",
                }}
              >
                Strat IQ
                <br />
                <span
                  style={{
                    display: "block",
                    fontSize: "inherit",
                    marginTop: "0.1em",
                    fontFamily: "'Funnel Display', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Digital
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="logo-hero">
            <div id="w-node-b86aa070-378b-63ce-6c96-4a4e55445ce8-86e38a65" className="service-flex-small _01">
              <a id="w-node-cfa6b7f9-4425-9fa6-b4f3-9f335bef16b7-5bef16b7" href="/contact" className="contact-team w-inline-block">
                <div className="team-photo">
                  <img
                    loading="lazy"
                    src="/images/webflow/69a026dc6f23dbb1eca11356_team-2.png"
                    alt=""
                    className="img-team"
                  />
                </div>
                <div className="founder-flex">
                  <div className="founder-overflow">
                    <div className="smaller-text _01">Let &apos;s Talk</div>
                  </div>
                  <div className="small-flex">
                    <div>Nouman Rao</div>
                    <div className="smaller-text">StratIQ CEO</div>
                  </div>
                </div>
                <div className="arrow-wrapper">
                  <div className="arrow-mask">
                    <img
                      loading="lazy"
                      src="/images/webflow/69a02bfcdcbd8c7fbcee47de_arrows-3.webp"
                      alt=""
                      className="arrow-black"
                    />
                    <img
                      loading="lazy"
                      src="/images/webflow/69a02bfcdcbd8c7fbcee47de_arrows-3.webp"
                      alt=""
                      className="arrow-black"
                    />
                  </div>
                </div>
                <div className="slot-wrapper">
                  <div className="slot-line">
                    <div className="slot-live-overlay"></div>
                  </div>
                  <div className="slot-line">
                    <div className="slot-live-overlay"></div>
                  </div>
                  <div className="slot-line">
                    <div className="slot-live-overlay"></div>
                  </div>
                  <div className="slot-line"></div>
                  <div className="slot-line"></div>
                </div>
                <div className="blur-div"></div>
              </a>
            </div>
            <div id="w-node-feec6f1e-4bb1-d7b9-5064-61aa27e727e9-86e38a65">
              <div className="main-text-flex">
                <div className="subhead opacity">Performance Marketing Agency for Leaders</div>
                <div>See You At the Top Of The Market</div>

                <div className="slide-wrapper" ref={slideWrapRef}>
                  <div className="subhead slide _01">Smarter Ads</div>
                  <div className="subhead slide _02">Better Funnels</div>
                  <div className="subhead slide _03">Stronger Creative</div>
                  <div className="subhead slide _04">Real Growth</div>
                </div>
                <div className="divider-s"></div>
                <div>
                  <a href="/contact" className="button-arrow w-inline-block">
                    <img
                      width="9"
                      loading="lazy"
                      alt=""
                      src="/images/webflow/69a023ed38982c825d59ca03_arrows-2.webp"
                      className="arrow-gray"
                    />
                    <div className="button-title-flex">
                      <div className="button-small-name">Book a Strategy Call</div>
                      <div className="button-small-name">Book a Strategy Call</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div id="w-node-_492290f2-18eb-d76a-5136-ba0c20667f94-86e38a65" className="plus-wrapper">
              <div className="plus-icon">
                <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
              </div>
            </div>
            <div id="w-node-b520d67d-cec3-38df-49a9-53799ea98c3f-86e38a65" className="plus-wrapper">
              <div className="plus-icon">
                <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
