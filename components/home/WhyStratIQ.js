"use client";

import { useRef } from "react";
import useFadeUpReveal from "./useFadeUpReveal";

const cards = [
  {
    key: "_01",
    image: "/images/webflow/69a84d84158d9169f5431ff9_logoipsum-267.webp",
    title: "Data Over Guesswork",
    text: "We don’t guess. Every decision is driven by real data. No trends. No hunches. Just hard numbers guiding growth strategies.",
  },
  {
    key: "_02",
    image: "/images/webflow/69a84d8414f69422755485b8_logoipsum-275.webp",
    title: "Full-Funnel Thinking",
    text: "We don’t just run ads. We analyze the entire customer journey, optimizing every step to improve conversions and scale effectively.",
  },
  {
    key: "_03",
    image: "/images/webflow/69a84d844ead8863ba2179fa_logoipsum-266.webp",
    title: "Transparent By Default",
    text: "We believe in complete transparency. You’ll always know exactly what we’re doing, why we’re doing it, and the results achieved.",
  },
  {
    key: "_04",
    image: "/images/webflow/69a84d84c4b3f22af9fd1a3b_logoipsum-276-(1).webp",
    title: "We Grow With You",
    text: "Your success = our success. We’re a performance-based partner. Our goals are aligned. When you win, we win, always.",
  },
  {
    key: "_05",
    image: "/images/webflow/69a84c2d8a1b8dc6205c93a5_logoipsum-269.webp",
    title: "Built For Brands That Want More",
    text: "We work with ambitious brands that want to disrupt markets. If you’re ready for growth, we’re the right partner.",
  },
];

export default function WhyStratIQ() {
  const containerRef = useRef(null);
  useFadeUpReveal(containerRef, ".card-design", { y: 30, stagger: 0.08 });

  return (
    <section className="section">
      <div className="container">
        <div className="container">
          <div>
            <div className="title-small-main">
              <div id="w-node-_9b162d5d-81c9-9afd-f080-fa4f76d88c73-86e38a65" className="flex-small-title">
                <div className="plus-icon">
                  <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
                </div>
                <div className="top-text">Start IQ Digital</div>
              </div>
              <div id="w-node-_9b162d5d-81c9-9afd-f080-fa4f76d88c77-86e38a65">
                <img
                  width="11"
                  loading="lazy"
                  alt=""
                  src="/images/webflow/69a023ed38982c825d59ca03_arrows-2.webp"
                  className="arrow-gray hide-mobile"
                />
              </div>
              <div id="w-node-_9b162d5d-81c9-9afd-f080-fa4f76d88c79-86e38a65" className="flex-small-title"></div>
            </div>
          </div>
          <div className="divider-xl"></div>
          <div className="grid-request">
            <div className="max-left">
              <h2 className="h1 for-h2">©Why Strat IQ?</h2>
              <div className="divider-s"></div>
              <div>
                <div className="card-text rl-2">
                  There’s no shortage of agencies. There’s a shortage of ones that actually deliver results, scale
                  with precision, and care.
                </div>
              </div>
              <div className="divider-m"></div>
              <div className="flex-small-title space-btw">
                <a href="#Pricing" className="button-arrow w-inline-block">
                  <img
                    width="9"
                    loading="lazy"
                    alt=""
                    src="/images/webflow/699f89c49271389efbdafdbc_arrows.png"
                    className="arrow-gray"
                  />
                  <div className="button-title-flex">
                    <div className="button-small-name">Get Started</div>
                    <div className="button-small-name">Get Started</div>
                  </div>
                </a>
                <div className="team-small-flex">
                  <div className="team-flex">
                    <div className="team-small-card"></div>
                    <div className="team-small-card _02"></div>
                    <div className="team-small-card _03"></div>
                    <div className="team-small-card _04"></div>
                    <div className="team-small-card no-photo">
                      <div>+81</div>
                    </div>
                  </div>
                  <div className="top-text gray">Trusted by directors of influence companies</div>
                </div>
              </div>
            </div>
            <div className="card-wrapper" ref={containerRef}>
              {cards.map((c) => (
                <div className={`card-design ${c.key}`} key={c.key}>
                  <div className="card-content">
                    <img src={c.image} loading="lazy" width="60" alt="" className="image-white" />
                    <div className="card-max">
                      <h3 className="card-title">{c.title}</h3>
                      <p>{c.text}</p>
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
