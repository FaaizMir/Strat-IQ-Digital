"use client";

import { useRef } from "react";
import Link from "next/link";
import "./project-template.css";
import { getProjectBySlug } from "@/data/projects";
import useFadeUpReveal from "@/components/home/useFadeUpReveal";

/**
 * Groups a project's gallery images into render rows:
 * - `full: true` images each get their own full-width row.
 * - consecutive `full: false` images are paired up into a 2-col grid row.
 * This matches the real per-project layouts (full, full, half, half).
 */
function buildGalleryRows(gallery) {
  const rows = [];
  let i = 0;
  while (i < gallery.length) {
    if (gallery[i].full) {
      rows.push({ type: "full", items: [gallery[i]] });
      i++;
    } else {
      const pair = [gallery[i]];
      i++;
      if (i < gallery.length && !gallery[i].full) {
        pair.push(gallery[i]);
        i++;
      }
      rows.push({ type: "row", items: pair });
    }
  }
  return rows;
}

function BodySection({ section }) {
  if (!section) return null;
  const heading = section.heading || section.label;

  return (
    <section className="pt-section">
      <div className="pt-section-inner">
        <div className="pt-eyebrow">{section.label}</div>
        <h2 className="pt-section-heading funnel-bold">{heading}</h2>

        {section.paragraphs?.map((p, i) => (
          <p className="pt-section-paragraph" key={i}>
            {p}
          </p>
        ))}

        {section.bullets?.length ? (
          <ul className="pt-bullet-list">
            {section.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        ) : null}

        {section.closing ? <p className="pt-closing">{section.closing}</p> : null}
      </div>
    </section>
  );
}

function ChangeSection({ section }) {
  if (!section) return null;

  return (
    <section className="pt-section">
      <div className="pt-section-inner">
        <div className="pt-eyebrow">{section.label}</div>
        <h2 className="pt-section-heading funnel-bold">{section.label}</h2>

        {section.before ? (
          <div className="pt-change-grid">
            <div>
              <div className="pt-change-col-label is-before">Before</div>
              <ul className="pt-change-list">
                {section.before.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="pt-change-col-label is-after">After</div>
              <ul className="pt-change-list">
                {section.after.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="pt-change-single">
            <div className="pt-change-col-label is-after">After</div>
            <ul className="pt-change-list">
              {section.after.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ProjectTemplate({ project }) {
  const galleryRef = useRef(null);
  const otherRef = useRef(null);
  useFadeUpReveal(galleryRef, ".pt-reveal", { stagger: 0.1 });
  useFadeUpReveal(otherRef, ".pt-other-card", { stagger: 0.12 });

  const rows = buildGalleryRows(project.gallery);
  const otherWorks = project.otherWorks.map((slug) => getProjectBySlug(slug)).filter(Boolean);

  return (
    <div className="project-template">
      <div className="pt-hero">
        <img src={project.heroImage} alt={project.title} />
        <div className="pt-hero-caption pt-container">
          <div className="pt-eyebrow">Case Study</div>
          <h1 className="pt-title funnel-bold">{project.title}</h1>
          <p className="pt-subtitle">{project.subtitle}</p>
        </div>
      </div>

      <div className="pt-container">
        <div className="pt-meta">
          <div>
            <div className="pt-meta-item-label">Client</div>
            <div className="pt-meta-item-value">{project.client}</div>
          </div>
          <div>
            <div className="pt-meta-item-label">Category</div>
            <div className="pt-meta-item-value">{project.category}</div>
          </div>
          <div>
            <div className="pt-meta-item-label">Services</div>
            <div className="pt-service-chips">
              {project.services.map((s) => (
                <span key={s} className="pt-service-chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-gallery" ref={galleryRef}>
          {rows.map((row, idx) =>
            row.type === "full" ? (
              <div className="pt-gallery-full pt-reveal" key={idx}>
                <img src={row.items[0].src} alt={`${project.title} — project visual`} loading="lazy" />
              </div>
            ) : (
              <div className="pt-gallery-row" key={idx}>
                {row.items.map((img) => (
                  <div className="pt-reveal" key={img.src}>
                    <img src={img.src} alt={`${project.title} — project visual`} loading="lazy" />
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        <BodySection section={project.challenge} />
        <BodySection section={project.approach} />
        <BodySection section={project.design} />
        <ChangeSection section={project.change} />

        <div className="pt-other-works" ref={otherRef}>
          <h2 className="pt-other-works-heading funnel-bold">Other Works</h2>
          <div className="pt-other-grid">
            {otherWorks.map((p) => (
              <Link key={p.slug} href={p.route} className="pt-other-card">
                <div className="pt-other-card-image">
                  <img src={p.cardImage} alt={p.title} loading="lazy" />
                </div>
                <div className="pt-other-card-meta">
                  <div className="pt-other-card-year">{p.year}</div>
                  <h3 className="pt-other-card-title">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
