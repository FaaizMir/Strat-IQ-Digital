"use client";

import { useRef } from "react";
import useFadeUpReveal from "./useFadeUpReveal";

export default function TrustLogos() {
  const containerRef = useRef(null);
  useFadeUpReveal(containerRef, ".logo-content", { y: 24, stagger: 0.08 });

  return (
    <div className="section-content">
      <div className="section _01">
        <div className="container" ref={containerRef}>
          <div className="title-small-main">
            <div id="w-node-_7c7bb716-c6b1-f2b2-347b-7517524f9516-86e38a65" className="flex-small-title">
              <div className="plus-icon">
                <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
              </div>
              <div className="top-text">Built for Ambitious Brands</div>
            </div>
            <div id="w-node-eb581b58-add5-38fa-311c-162d8d71a2d9-86e38a65" className="flex-small-title"></div>
            <div id="w-node-_3aa197ab-6f65-acf0-0306-80dce9d5c69c-86e38a65">
              <img
                width="11"
                loading="lazy"
                alt=""
                src="/images/webflow/69a023ed38982c825d59ca03_arrows-2.webp"
                className="arrow-gray hide-mobile"
              />
            </div>
          </div>
          <div className="divider-m"></div>
          <div className="logo-grid">
          
            <div className="logo-content">
              <div className="logo-wrapper-card">
                <img
                  src="/images/uploads/advanage-white.png"
                  loading="lazy"
                  width="120"
                  alt="advanage"
                  className="logo-image"
                />
              </div>
            </div>
            <div className="logo-content">
              <div className="logo-wrapper-card">
                <img
                  src="/images/uploads/lanes-white.png"
                  loading="lazy"
                  width="80"
                  alt="lanescarproducts"
                  className="logo-image _01"
                />
              </div>
            </div>
            <div className="logo-content">
              <div className="logo-wrapper-card">
                <img
                  src="/images/uploads/walk-fragrances-white.png"
                  loading="lazy"
                  width="85"
                  alt="walkfragrances"
                  className="logo-image _01"
                />
              </div>
            </div>
            <div className="logo-content">
              <div className="logo-wrapper-card">
                <div className="testimonials-card hide-mobile">
                  <div className="testimonials-top">
                    <div className="top-text small-tessti">
                      &quot;What impressed us most was their structured thinking. Every design decision had purpose,
                      every interaction had intention. Strat IQ Digital.&quot;
                    </div>
                  </div>
                  <div className="testimonials-bottom">
                    <div className="div-block">
                      <img
                        src="/images/webflow/69a80ee36b73c91feefc54ed_Blurred-Futuristic-Portrait-(1).webp"
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
                <div className="absolute-bottom">
                  <div className="clients-small-blog">Success Stories</div>
                </div>
                <img
                  src="/images/uploads/perf-moto-white.png"
                  loading="lazy"
                  width="130"
                  alt="perfmoto"
                  className="logo-image"
                />
              </div>
            </div>
            <div className="logo-content">
              <div className="logo-wrapper-card">
                <div className="testimonials-card hide-mobile">
                  <div className="testimonials-top">
                    <div className="top-text small-tessti">
                      &quot;Working with Strat IQ Digital felt like partnering with an in-house strategic team. They
                      challenged our ideas, strengthened our positioning, and delivered a platform built to
                      scale.&quot;
                    </div>
                  </div>
                  <div className="testimonials-bottom">
                    <div className="div-block">
                      <img
                        src="/images/webflow/69a80ee328f3e8d639efe5e3_Abstract-Red-Portrait-(2).webp"
                        loading="lazy"
                        width="40"
                        alt=""
                        className="portrait"
                      />
                      <div className="small-flex">
                        <div>Sofia Reinhardt</div>
                        <div className="smaller-text">Elevate Technologies CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="/images/uploads/stellar-chemical-white.png"
                  loading="lazy"
                  width="84"
                  alt="stellarchemicalcorp"
                  className="logo-image _01"
                />
                <div className="absolute-bottom">
                  <div className="clients-small-blog">Success Stories</div>
                </div>
              </div>
            </div>
            <div className="logo-content">
              <div className="logo-wrapper-card">
                <img
                  src="/images/uploads/woofleys-white.png"
                  loading="lazy"
                  width="110"
                  alt="woofleys"
                  className="logo-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
