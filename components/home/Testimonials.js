"use client";

import { useRef } from "react";
import Link from "next/link";
import useFadeUpReveal from "./useFadeUpReveal";

const metrics = [
  { parts: [["$", "small-gray"], ["10", ""], ["M+", "small-gray"]], label: "Revenue Generated" },
  { parts: [["200", ""], ["+", "small-gray"]], label: "Projects Delivered" },
  { parts: [["15", ""], ["years", "small-gray"]], label: "Collective team experience" },
  { parts: [["17", ""], ["K+", "small-gray"]], label: "Leads Captured" },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  useFadeUpReveal(containerRef, ".testimonials-big-card, .testimonials-card-small, .stiq-metrics-row > div", {
    y: 30,
    stagger: 0.09,
  });

  return (
    <section className="section for-services">
      <div className="container">
        <div>
          <div className="title-small-main">
            <div id="w-node-f6e26e49-f7d9-1dba-425b-49b81020f0ca-86e38a65" className="flex-small-title">
              <div className="plus-icon">
                <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
              </div>
              <div className="top-text">Reviews</div>
            </div>
            <div id="w-node-f6e26e49-f7d9-1dba-425b-49b81020f0d1-86e38a65">
              <img
                width="11"
                loading="lazy"
                alt=""
                src="/images/webflow/69a023ed38982c825d59ca03_arrows-2.webp"
                className="arrow-gray hide-mobile"
              />
            </div>
            <div id="w-node-_918391c2-df36-11af-1409-719b884b2b2e-86e38a65" className="flex-small-title"></div>
          </div>
        </div>
        <div className="margin-30">
          <h2 className="h1 full-section">©Testimonials</h2>
        </div>
        <div className="divider-xl"></div>
        <div className="testimonials-grid" ref={containerRef}>
          <div
            className="testimonials-big-card"
            style={{ backgroundImage: "url('/images/uploads/Testimonials-1.jpg')" }}
          >
            <div className="logo-absolute-top"></div>
            <div className="testimonials-card rl">
              <div className="testimonials-top">
                <div className="top-text small-tessti">
                  &quot;The collaboration was smooth from start to finish. Strat IQ Digital combines strong visual
                  design with strategic thinking, delivering work that feels both premium and purposeful.&quot;
                </div>
              </div>
              <div className="testimonials-bottom">
                <div className="div-block">
                  <img
                    src="/images/webflow/69a80e30dd19f3a979af0950_Stylish-Portrait-(4).webp"
                    loading="lazy"
                    width="40"
                    alt=""
                    className="portrait"
                  />
                  <div className="small-flex">
                    <div>Daniel Whitmore</div>
                    <div className="smaller-text">Marketing, VK Group</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="logo-absolute-top bottom">
              <Link href="/contact" className="button-arrow w-inline-block">
                <img
                  width="9"
                  loading="lazy"
                  alt=""
                  src="/images/webflow/699f89c49271389efbdafdbc_arrows.png"
                  className="arrow-gray"
                />
              </Link>
            </div>
          </div>
          <div className="testimonials-flex">
            <div className="testimonials-card-small">
              <div className="card-1">
                <img
                  src="/images/webflow/69a8099fb938d1bb6c4bed25_logo-6.webp"
                  loading="lazy"
                  width="45"
                  alt=""
                  className="logo-testi"
                />
                <div className="divider-m"></div>
                <div>
                  <div className="top-text small-tessti">
                    &quot;Working with Strat IQ Digital felt like partnering with a team that truly understands
                    modern digital presence. Every detail was refined with precision, and the final result elevated
                    our brand beyond expectations.&quot;
                  </div>
                </div>
                <div className="plus-absolute">
                  <div className="plus-icon">
                    <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
              <div className="card-2">
                <div className="div-block">
                  <img
                    src="/images/webflow/69a80e66c49a31679ae575fe_Dramatic-Blue-Portrait.webp"
                    loading="lazy"
                    width="40"
                    alt=""
                    className="portrait"
                  />
                  <div className="small-flex">
                    <div>Lucas Bennett</div>
                    <div className="smaller-text">Product Director, Nova Systems</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-card-small">
              <div className="card-1">
                <img
                  src="/images/webflow/69a80a7802b17335b915996d_logoipsum-383-(1).webp"
                  loading="lazy"
                  width="45"
                  alt=""
                  className="logo-testi"
                />
                <div className="divider-m"></div>
                <div>
                  <div className="top-text small-tessti">
                    &quot;Strat IQ Digital brought clarity and structure to our digital strategy. Their design
                    thinking and execution transformed complex ideas into a seamless and elegant experience.&quot;
                  </div>
                </div>
                <div className="plus-absolute">
                  <div className="plus-icon">
                    <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
              <div className="card-2">
                <div className="div-block">
                  <img
                    src="/images/webflow/69a80e307103ae1f7721f97d_Futuristic-Portrait-(7).webp"
                    loading="lazy"
                    width="40"
                    alt=""
                    className="portrait"
                  />
                  <div className="small-flex">
                    <div>Emma Laurent</div>
                    <div className="smaller-text">Head of Marketing, Aure Labs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider-xl"></div>
        <style>{`
          .stiq-metrics-row {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem 1.5rem;
            width: 100%;
          }
          .stiq-metrics-row > div {
            flex: 1 1 160px;
            min-width: 140px;
          }
          @media (max-width: 479px) {
            .stiq-metrics-row > div {
              flex: 1 1 calc(50% - 0.75rem);
            }
          }
        `}</style>
        <div>
          <div className="stiq-metrics-row">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="numver-block">
                  {m.parts.map(([text, cls], i) => (
                    <div className={`metric-number${cls ? ` ${cls}` : ""}`} key={i}>
                      {text}
                    </div>
                  ))}
                </div>
                <div className="divider-xs"></div>
                <div className="card-text rl-2">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
