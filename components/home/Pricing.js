"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getGsapWithPlugins } from "@/lib/gsap";
import useFadeUpReveal from "./useFadeUpReveal";

const carouselLogos = [
  { src: "/images/webflow/699ed6f18aceafc086e38d86_logo-2.webp", width: 80, cls: "" },
  { src: "/images/webflow/699ed6f18aceafc086e38d89_logo-1.webp", width: 70, cls: " _01" },
  { src: "/images/webflow/699ed6f18aceafc086e38d29_logo-4.webp", width: 80, cls: "" },
  { src: "/images/webflow/699ed6f18aceafc086e38da9_logo-5.webp", width: 60, cls: " _01" },
  { src: "/images/webflow/699ed6f18aceafc086e38db2_logo-10.webp", width: 90, cls: " _02" },
  { src: "/images/webflow/699ed6f18aceafc086e38d28_logo-3.webp", width: 60, cls: " _01" },
  { src: "/images/webflow/699ed6f18aceafc086e38daa_logo-3.webp", width: 80, cls: "" },
  { src: "/images/webflow/699ed6f18aceafc086e38d35_logo-2.webp", width: 60, cls: " _01" },
  { src: "/images/webflow/699ed6f18aceafc086e38dad_logo-2.webp", width: 80, cls: "" },
  { src: "/images/webflow/699ed6f18aceafc086e38daf_logo-7.webp", width: 50, cls: " _01" },
];

const faqs = [
  {
    q: "How Long Before I See Results?",
    a: "Paid campaigns typically show movement within the first 30 days. SEO and organic strategies take 3–6 months to compound. We'll set honest expectations from day one.",
  },
  {
    q: "What Platforms Do You Work On?",
    a: "Amazon, Shopify, Meta (Facebook & Instagram), Google, and TikTok. We go where your customers are.",
  },
  {
    q: "Do You Work With New Brands Or Only Established Ones?",
    a: "Both. We've helped brands launch from scratch and helped established ones break through plateaus. What matters is that you're serious about growth.",
  },
  {
    q: "What Does Onboarding Look Like?",
    a: "It starts with a strategy call. Then we run a full audit before anything goes live. No guessing — we build the foundation first.",
  },
  {
    q: "Is There A Minimum Commitment?",
    a: "We typically work on a 3-month minimum to give strategies the runway they need. We'll walk you through package options on your strategy call.",
  },
];

function PlusIcon() {
  return (
    <div className="plus-icon">
      <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
    </div>
  );
}

export default function Pricing() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const contentRefs = useRef([]);
  const [openIndex, setOpenIndex] = useState(null);

  useFadeUpReveal(containerRef, ".plan-1, .toggle-wrapper", { y: 26, stagger: 0.07 });

  // Infinite logo marquee (list is rendered twice back-to-back; loop -50%).
  useEffect(() => {
    const gsap = getGsapWithPlugins();
    if (!trackRef.current) return;
    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 22,
      ease: "none",
      repeat: -1,
    });
    return () => tween.kill();
  }, []);

  // Accordion open/close height animation.
  useEffect(() => {
    const gsap = getGsapWithPlugins();
    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      const target = i === openIndex ? el.scrollHeight : 0;
      gsap.to(el, { height: target, duration: 0.45, ease: "iq-ease", overwrite: true });
    });
  }, [openIndex]);

  return (
    <section className="section for-services">
      <div id="Pricing" className="gray-big-div">
        <div className="container" ref={containerRef}>
          <div>
            <div className="title-small-main">
              <div id="w-node-fb15fe02-1f63-791b-fb45-bd8388f81341-86e38a65" className="flex-small-title">
                <PlusIcon />
                <div className="top-text">Custom Option</div>
              </div>
              <div id="w-node-fb15fe02-1f63-791b-fb45-bd8388f81345-86e38a65">
                <img
                  width="11"
                  loading="lazy"
                  alt=""
                  src="/images/webflow/69a023ed38982c825d59ca03_arrows-2.webp"
                  className="arrow-gray hide-mobile"
                />
              </div>
              <div id="w-node-fb15fe02-1f63-791b-fb45-bd8388f81347-86e38a65" className="flex-small-title"></div>
            </div>
            <div className="margin-30">
              <div className="grid-title">
                <h2 className="full-section">
                  ©Pick your package<span className="small-one">(02)</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="divider-xl"></div>
          <div className="pricing-grid">
            <div className="plan-1">
              <div className="annual-switch">
                <div className="top-text gray">Annual</div>
                <div className="switch">
                  <div className="switch-circle"></div>
                </div>
              </div>
              <div className="card-max">
                <h3 className="card-title sec">Growth Partnership</h3>
                <p>
                  For brands ready to grow consistently, with a dedicated team in their corner every month.
                </p>
              </div>
              <div className="line-divider dts"></div>
              <div>
                <p className="add-max-w">Plan Features</p>
                <div className="margin-20">
                  <div className="item-flex">
                    <PlusIcon />
                    <p className="p-no-bottom">Full account audit & onboarding</p>
                  </div>
                  <div className="item-flex">
                    <PlusIcon />
                    <p className="p-no-bottom">Amazon PPC management & optimisation</p>
                  </div>
                  <div className="item-flex">
                    <PlusIcon />
                    <p className="p-no-bottom">Meta & Google ad campaigns</p>
                  </div>
                  <div className="item-flex">
                    <PlusIcon />
                    <p className="p-no-bottom">Monthly performance reporting</p>
                  </div>
                  <div className="item-flex no-btm">
                    <PlusIcon />
                    <p className="p-no-bottom">Dedicated strategist & account manager</p>
                  </div>
                  <br />
                  <div className="item-flex no-btm">
                    <PlusIcon />
                    <p className="p-no-bottom">Ongoing creative & copy support</p>
                  </div>
                </div>
              </div>
              <div className="pricing-title-overflow">
                <h3 className="card-title for-prc">
                  <span className="dollar">$</span>
                  From $1,500
                  <span className="month-gray">/Month</span>
                </h3>
                <h3 className="card-title for-prc">Annual plans available at a reduced rate</h3>
              </div>
              <div>
                <div className="flex-pricing">
                  <Link href="/contact" className="button-arrow w-inline-block">
                    <img
                      width="9"
                      loading="lazy"
                      alt=""
                      src="/images/webflow/699f89c49271389efbdafdbc_arrows.png"
                      className="arrow-gray"
                    />
                    <div className="button-title-flex">
                      <div className="button-small-name">Start Growing</div>
                      <div className="button-small-name">Start Growing</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="plan-1 no-bg">
              <div className="card-max">
                <h3 className="card-title sec">Fixed Project</h3>
                <p>
                  For brands that need a defined scope: a launch, a store build, or a one-time strategy overhaul.
                </p>
              </div>
              <div className="line-divider dts"></div>
              <div>
                <p className="add-max-w">Plan Features</p>
                <div className="margin-20">
                  <div className="item-flex">
                    <PlusIcon />
                    <p className="p-no-bottom">
                      Strategy & discovery workshop
                      <br />
                    </p>
                  </div>
                  <div className="item-flex">
                    <PlusIcon />
                    <p className="p-no-bottom">Full audit & competitive analysis</p>
                  </div>
                  <div className="item-flex">
                    <PlusIcon />
                    <p className="p-no-bottom">Campaign setup & launch</p>
                  </div>
                  <div className="item-flex">
                    <PlusIcon />
                    <p className="p-no-bottom">Shopify or website build </p>
                  </div>
                  <div className="item-flex no-btm">
                    <PlusIcon />
                    <p className="p-no-bottom">Post-launch support & handover</p>
                  </div>
                </div>
              </div>
              <div className="pricing-title-overflow">
                <h3 className="card-title for-prc-2">
                  <span className="month-gray">Starting at</span> $2,500
                </h3>
              </div>
              <div>
                <div className="flex-pricing">
                  <Link href="/contact" className="button-arrow w-inline-block">
                    <img
                      width="9"
                      loading="lazy"
                      alt=""
                      src="/images/webflow/699f89c49271389efbdafdbc_arrows.png"
                      className="arrow-gray"
                    />
                    <div className="button-title-flex">
                      <div className="button-small-name">Request a Proposal</div>
                      <div className="button-small-name">Request a Proposal</div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="margin-30">
                <div className="top-text gray">Scope-dependent. We&apos;ll quote after your strategy call.</div>
              </div>
            </div>
          </div>
          <div className="divider-xxl"></div>
          <div className="faq-grid">
            <div>
              <div className="max-left">
                <h2 className="h1 for-h2 third">©Answers to Everything</h2>
                <div className="divider-s"></div>
                <div className="card-text rl-2">Get know us more</div>
                <div className="divider-m"></div>
                <Link href="/contact" className="button-arrow w-inline-block">
                  <img
                    width="9"
                    loading="lazy"
                    alt=""
                    src="/images/webflow/699f89c49271389efbdafdbc_arrows.png"
                    className="arrow-gray"
                  />
                  <div className="button-title-flex">
                    <div className="button-small-name">Have more questions? Contact us.</div>
                    <div className="button-small-name">Have more questions? Contact us.</div>
                  </div>
                </Link>
                <div className="divider-s"></div>
                <div>
                  <div className="carousel-main">
                    <div className="logo-carousel-wrap">
                      <ul role="list" className="logo-carousel-main" ref={trackRef} style={{ display: "flex" }}>
                        {[...carouselLogos, ...carouselLogos].map((logo, i) => (
                          <li className="logo-carousel-item" key={i}>
                            <a href="#" className="logo-link w-inline-block">
                              <img
                                width={logo.width}
                                src={logo.src}
                                alt=""
                                className={`logo-small-image${logo.cls}`}
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="shadow-lft"></div>
                    <div className="shadow-lft rt"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <style>{`.line-2 { transition: transform 0.35s var(--ease, ease); }`}</style>
              {faqs.map((item, i) => (
                <div className="toggle-wrapper" key={item.q}>
                  <a
                    href="#"
                    className="toggle-header w-inline-block"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenIndex((prev) => (prev === i ? null : i));
                    }}
                  >
                    <div className="toggle-top">
                      <div>{item.q}</div>
                    </div>
                    <div className="toogle-icon">
                      <div className="line-1"></div>
                      <div
                        className="line-2"
                        style={{ transform: openIndex === i ? "rotate(0deg)" : "rotate(90deg)" }}
                      ></div>
                    </div>
                  </a>
                  <div
                    className="toggle-content"
                    ref={(el) => (contentRefs.current[i] = el)}
                    style={{ height: 0 }}
                  >
                    <div className="toggle-space">
                      <p className="paragraph">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
