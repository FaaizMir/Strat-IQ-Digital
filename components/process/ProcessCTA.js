import Link from "next/link";

export default function ProcessCTA() {
  return (
    <section className="iqp-section iqp-final-cta">
      <div className="iqp-container">
        <p className="iqp-final-label iqp-reveal">
          Let&apos;s get your brand where it belongs
        </p>
        <h2
          className="iqp-h2 funnel-bold iqp-reveal d1"
          dangerouslySetInnerHTML={{
            __html: "Ready When<br/>You Are.",
          }}
        />
        <div className="iqp-final-actions iqp-reveal d2">
          <Link href="/contact" className="iqp-btn iqp-btn-filled">
            Let&apos;s Talk →
          </Link>
          <Link href="/services" className="iqp-btn iqp-btn-outline">
            All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
