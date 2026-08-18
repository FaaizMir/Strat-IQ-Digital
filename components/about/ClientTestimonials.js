"use client";

import { useRef } from "react";
import useFadeUpReveal from "../home/useFadeUpReveal";
import SectionEyebrow from "./SectionEyebrow";

export default function ClientTestimonials() {
  const containerRef = useRef(null);
  useFadeUpReveal(containerRef, ".logo-content", { y: 24, stagger: 0.08 });

  return (
    <div className="section-content">
      <div className="section _01">
        <div className="container" ref={containerRef}>
          <SectionEyebrow label="Built for Ambitious Brands" edition="Edition 05" />
          <div className="divider-m"></div>
          <div className="logo-grid">
            <div className="logo-content">
              <div className="logo-wrapper-card">
                <div className="testimonials-card hide-mobile">
                  <div className="testimonials-top">
                    <div className="top-text small-tessti">
                      &quot;Strat IQ Digital transformed our vision into a refined digital system that feels both
                      strategic and effortless. Their attention to detail and clarity in execution made the entire
                      process seamless.&quot;
                    </div>
                  </div>
                  <div className="testimonials-bottom">
                    <div className="div-block">
                      <img
                        src="/images/webflow/69a80ee31936a30bcd054873_Person-with-Red-Sunglasses.webp"
                        loading="lazy"
                        width="40"
                        alt="Emma Larsen"
                        className="portrait"
                      />
                      <div className="small-flex">
                        <div>Emma Larsen</div>
                        <div className="smaller-text">Creative Director, Acme</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="/images/webflow/69a84c2d8a1b8dc6205c93a5_logoipsum-269.webp"
                  loading="lazy"
                  width="115"
                  alt=""
                  className="logo-image"
                />
                <div className="absolute-bottom">
                  <div className="clients-small-blog">Success Stories</div>
                </div>
              </div>
            </div>

            <div className="logo-content">
              <div className="logo-wrapper-card">
                <img
                  src="/images/webflow/69a84d84158d9169f5431ff9_logoipsum-267.webp"
                  loading="lazy"
                  width="90"
                  alt=""
                  className="logo-image _01"
                />
              </div>
            </div>

            <div className="logo-content">
              <div className="logo-wrapper-card">
                <img
                  src="/images/webflow/69a84d8414f69422755485b8_logoipsum-275.webp"
                  loading="lazy"
                  width="120"
                  alt=""
                  className="logo-image"
                />
              </div>
            </div>

            <div className="logo-content">
              <div className="logo-wrapper-card">
                <img
                  src="/images/webflow/69a84d844ead8863ba2179fa_logoipsum-266.webp"
                  loading="lazy"
                  width="80"
                  alt=""
                  className="logo-image _01"
                />
              </div>
            </div>

            <div className="logo-content">
              <div className="logo-wrapper-card">
                <img
                  src="/images/webflow/69a80a7802b17335b915996d_logoipsum-383-(1).webp"
                  loading="lazy"
                  width="85"
                  alt=""
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
                      every interaction had intention.&quot;
                    </div>
                  </div>
                  <div className="testimonials-bottom">
                    <div className="div-block">
                      <img
                        src="/images/webflow/69a80ee36b73c91feefc54ed_Blurred-Futuristic-Portrait-(1).webp"
                        loading="lazy"
                        width="40"
                        alt="Daniel Whitmore"
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
                  src="/images/webflow/69a84d84c4b3f22af9fd1a3b_logoipsum-276-(1).webp"
                  loading="lazy"
                  width="130"
                  alt=""
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
                        alt="Sofia Reinhardt"
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
                  src="/images/webflow/69a8099fb938d1bb6c4bed25_logo-6.webp"
                  loading="lazy"
                  width="84"
                  alt=""
                  className="logo-image _01"
                />
                <div className="absolute-bottom">
                  <div className="clients-small-blog">Success Stories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
