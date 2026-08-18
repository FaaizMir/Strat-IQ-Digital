"use client";

import { useRef } from "react";
import useFadeUpReveal from "../home/useFadeUpReveal";
import SectionEyebrow from "./SectionEyebrow";

const TEAM = [
  { name: "Adrian Keller", role: "Founder", img: "/images/webflow/699ed6f18aceafc086e38e32_team-3.webp" },
  { name: "Luca Moretti", role: "Lead Product Designer", img: "/images/webflow/699ed6f18aceafc086e38e34_team-2.webp" },
  { name: "Elena Novak", role: "UI/UX Designer", img: "/images/webflow/699ed6f18aceafc086e38e31_team-4.webp" },
  { name: "Daniel Hartmann", role: "Webflow Developer", img: "/images/webflow/699ed6f18aceafc086e38e33_team-1.webp" },
  { name: "Maya Laurent", role: "Framer Specialist", img: "/images/webflow/699ed6f18aceafc086e38e36_team-5.webp" },
];

export default function TeamSection() {
  const containerRef = useRef(null);
  useFadeUpReveal(containerRef, ".team-wrapper", { y: 26, stagger: 0.08 });

  return (
    <div className="section-content">
      <div className="section _01">
        <div className="container" ref={containerRef}>
          <SectionEyebrow label="Team" edition="Edition 04" />
          <div className="divider-m"></div>
          <h2 className="h2">Brains over Billboards</h2>
          <div className="divider-m"></div>
          <div className="team-grid">
            {TEAM.map((member) => (
              <div className="team-wrapper" key={member.name}>
                <div className="team-image">
                  <img src={member.img} loading="lazy" alt={member.name} width="360" height="440" />
                </div>
                <div>{member.name}</div>
                <div className="smaller-text">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
