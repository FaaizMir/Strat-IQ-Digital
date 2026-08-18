"use client";

import { useRef } from "react";
import Link from "next/link";
import useFadeUpReveal from "@/components/home/useFadeUpReveal";

export default function ProjectsGrid({ items }) {
  const gridRef = useRef(null);
  useFadeUpReveal(gridRef, ".project-card", { stagger: 0.12 });

  return (
    <div className="projects-grid" ref={gridRef}>
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="project-card">
          <div className="project-card-image">
            <img src={item.image} alt={item.title} width={640} height={400} loading="lazy" />
          </div>
          <div className="project-card-meta">
            <div className="project-card-year">{item.year}</div>
            <h2 className="project-card-title">{item.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
