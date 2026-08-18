"use client";

import { useRef } from "react";
import useFadeUpReveal from "../home/useFadeUpReveal";
import SectionEyebrow from "./SectionEyebrow";

export default function BrandStatement() {
  const containerRef = useRef(null);
  useFadeUpReveal(containerRef, ".reveal-fade", { y: 28, stagger: 0.12 });

  return (
    <div className="section-content">
      <div className="section _01">
        <div className="container" ref={containerRef}>
          <SectionEyebrow label="StratIQ Digital" edition="Edition 01" />
          <div className="divider-m"></div>
          <div className="about-grid">
            <div className="spc-btw reveal-fade">
              <div>
                <h2 className="h2">
                  In a world full of digital noise, the loudest brand isn&apos;t the winner, the smartest one is. We
                  bridge the gap between where you are and where the market expects you to be.
                </h2>
                <div className="divider-s"></div>
                <div>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: "1.8rem", lineHeight: 1 }}>
                    — Nouman Rao
                  </div>
                  <div className="smaller-text">CEO</div>
                </div>
              </div>
              <p className="card-max">
                After 15 years in the digital trenches, Nouman Rao founded Strat IQ in 2026 for a singular reason: he
                was tired of seeing ambitious brands get held back by mediocre strategy. We aren&apos;t a traditional
                agency; we&apos;re a performance collective built to help underutilized brands finally meet their
                full market potential through our digital marketing services.
              </p>
            </div>
            <div className="reveal-fade" style={{ borderRadius: 10, overflow: "hidden" }}>
              <img
                src="/images/webflow/69aad2d99134c95b42d2a3bc_about-2.webp"
                loading="lazy"
                alt="Nouman Rao, CEO of Strat IQ Digital"
                width="640"
                height="760"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
