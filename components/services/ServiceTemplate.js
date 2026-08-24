"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import useFadeUpReveal from "@/components/home/useFadeUpReveal";
import "./service-template.css";

/* Small inline icon set, cycled by index. Purely decorative -- these pages
   have no unique imagery, so every "Who Is This For" / "Why Strat IQ" card
   gets one of these simple stroke icons rather than an invented photo. */
const ICONS = [
  // target
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="target">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  // bolt
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="bolt">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinejoin="round" />
    </svg>
  ),
  // shield
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="shield">
      <path d="M12 3 4 6v6c0 4.6 3.2 7.9 8 9 4.8-1.1 8-4.4 8-9V6l-8-3Z" strokeLinejoin="round" />
    </svg>
  ),
  // chart
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="chart">
      <path d="M4 20V10M12 20V4M20 20v-7" strokeLinecap="round" />
    </svg>
  ),
  // gear
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="gear">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.4M12 18.6V21M4.2 7.5l2.1 1.2M17.7 15.3l2.1 1.2M4.2 16.5l2.1-1.2M17.7 8.7l2.1-1.2M3 12h2.4M18.6 12H21" strokeLinecap="round" />
    </svg>
  ),
];

/** Renders copy that may reference other service pages inline. `body` is
 *  either a plain string, or an array of segments mixing plain strings with
 *  `{ text, href }` link objects -- lets a single paragraph carry several
 *  internal links, matching the verbatim copy's "(→ X page)" references. */
function Rich({ body }) {
  if (typeof body === "string") return <>{body}</>;
  return (
    <>
      {body.map((seg, i) =>
        typeof seg === "string" ? (
          seg
        ) : (
          <Link key={i} href={seg.href} className="svc-inline-link">
            {seg.text}
          </Link>
        )
      )}
    </>
  );
}

function FaqItem({ item, index, isOpen, onToggle }) {
  return (
    <div className={`svc-faq-item${isOpen ? " is-open" : ""}`}>
      <button
        type="button"
        className="svc-faq-question"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
      >
        <span className="svc-faq-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="svc-faq-q-text">{item.q}</span>
        <span className="svc-faq-toggle" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {/* Fixed generous max-height (rather than measuring scrollHeight) keeps
         this a simple CSS transition -- comfortably larger than any FAQ
         answer in servicesContent.js, so nothing ever gets clipped. */}
      <div className="svc-faq-answer" style={{ maxHeight: isOpen ? "600px" : "0px" }}>
        <p className="svc-faq-a-text">
          <Rich body={item.a} />
        </p>
      </div>
    </div>
  );
}

export default function ServiceTemplate({ content }) {
  const rootRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);

  useFadeUpReveal(rootRef, ".svc-stat", { stagger: 0.08 });
  useFadeUpReveal(rootRef, ".svc-who-card", { stagger: 0.08 });
  useFadeUpReveal(rootRef, ".svc-why-card", { stagger: 0.08 });
  useFadeUpReveal(rootRef, ".svc-process-step", { stagger: 0.1 });
  useFadeUpReveal(rootRef, ".svc-faq-item", { stagger: 0.05 });

  const toggleFaq = (i) => setOpenFaq((current) => (current === i ? -1 : i));

  return (
    <div className="svc-page" ref={rootRef}>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="svc-hero">
        <img
          className="svc-hero-bg"
          src={content.heroImage || "/images/uploads/Services-Banner-scaled.jpg"}
          alt=""
          loading="eager"
        />
        <div className="svc-hero-overlay" aria-hidden="true" />
        <div className="svc-container">
          <h1 className="svc-hero-h1 funnel-bold">{content.heroHeadline}</h1>
          <p className="svc-hero-subhead">
            <Rich body={content.heroSubhead} />
          </p>

          <div className="svc-cta-row">
            <Link href="/contact" className="svc-btn svc-btn-primary">
              {content.ctaPrimary}
            </Link>
            <Link href="/contact" className="svc-btn svc-btn-secondary">
              {content.ctaSecondary}
            </Link>
          </div>

          <div className="svc-stats-grid">
            {content.stats.map((s, i) => (
              <div className="svc-stat" key={i}>
                <div className="svc-stat-value funnel-bold">{s.value}</div>
                <div className="svc-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Is This Service For? ─────────────────────────────────── */}
      <section className="svc-section svc-who">
        <div className="svc-container">
          <div className="svc-eyebrow">Who It&apos;s For</div>
          <h2 className="svc-h2 funnel-bold">Who Is This Service For?</h2>

          <div className="svc-who-grid">
            {content.whoItsFor.map((item, i) => (
              <div className="svc-who-card" key={i}>
                <div className="svc-card-icon">{ICONS[i % ICONS.length]}</div>
                <div className="svc-card-index">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="svc-card-title">{item.title}</h3>
                <p className="svc-card-body">
                  <Rich body={item.body} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ────────────────────────────────────────────── */}
      {content.whatsIncluded && (
        <section className="svc-section svc-included">
          <div className="svc-container">
            <div className="svc-eyebrow">What&apos;s Included</div>
            <h2 className="svc-h2 funnel-bold">{content.whatsIncludedHeading}</h2>
            {content.whatsIncludedIntro && (
              <p className="svc-included-intro">
                <Rich body={content.whatsIncludedIntro} />
              </p>
            )}

            <div className="svc-included-grid">
              {content.whatsIncluded.map((item, i) => (
                <div className="svc-included-card" key={i}>
                  <div className="svc-card-icon">{ICONS[(i + 1) % ICONS.length]}</div>
                  <h3 className="svc-card-title">{item.title}</h3>
                  <p className="svc-card-body">
                    <Rich body={item.body} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Why Strat IQ ─────────────────────────────────────────────── */}
      <section className="svc-section svc-why">
        <div className="svc-container">
          <div className="svc-eyebrow">Why Strat IQ</div>
          <h2 className="svc-h2 funnel-bold">{content.whySectionHeading}</h2>

          <div className="svc-why-grid">
            {content.whyStratIQ.map((item, i) => (
              <div className="svc-why-card" key={i}>
                <div className="svc-card-icon">{ICONS[(i + 2) % ICONS.length]}</div>
                <h3 className="svc-card-title">{item.title}</h3>
                <p className="svc-card-body">
                  <Rich body={item.body} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="svc-section svc-process">
        <div className="svc-container">
          <div className="svc-eyebrow">How We Work</div>
          <h2 className="svc-h2 funnel-bold">Our Process</h2>

          <div className="svc-process-list">
            {content.process.map((step, i) => (
              <div className="svc-process-step" key={i}>
                <div className="svc-process-number funnel-bold">{String(i + 1).padStart(2, "0")}</div>
                <div className="svc-process-content">
                  <h3 className="svc-card-title">{step.title}</h3>
                  <p className="svc-card-body">
                    <Rich body={step.body} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="svc-section svc-faq">
        <div className="svc-container">
          <div className="svc-eyebrow">FAQ</div>
          <h2 className="svc-h2 funnel-bold">Questions, Answered</h2>

          <div className="svc-faq-list">
            {content.faq.map((item, i) => (
              <FaqItem key={i} item={item} index={i} isOpen={openFaq === i} onToggle={toggleFaq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA band ─────────────────────────────────────────── */}
      <section className="svc-section svc-closing">
        <div className="svc-container svc-closing-inner">
          <div className="svc-eyebrow">{content.closingTag}</div>
          <h2 className="svc-closing-h2 funnel-bold">{content.closingHeading}</h2>
          <p className="svc-closing-body">{content.closingBody}</p>
          <div className="svc-cta-row">
            <Link href="/contact" className="svc-btn svc-btn-primary">
              {content.ctaPrimary}
            </Link>
            <Link href="/contact" className="svc-btn svc-btn-secondary">
              {content.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
