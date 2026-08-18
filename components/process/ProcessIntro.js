import Link from "next/link";

const STATS = [
  { value: "$10M+", label: "Revenue Generated" },
  { value: "200+", label: "Brands Scaled" },
  { value: "15 yrs", label: "Market Experience" },
  { value: "4-Step", label: "Proprietary Framework" },
];

export default function ProcessIntro() {
  return (
    <section className="iqp-section iqp-tight-top">
      <div className="iqp-container">
        <div className="iqp-intro-grid">
          <div>
            <p className="iqp-eyebrow iqp-reveal">15 Years Distilled</p>
            <h2
              className="iqp-h2 funnel-bold iqp-reveal d1"
              dangerouslySetInnerHTML={{
                __html: "The Engineering<br/>Behind Growth.",
              }}
            />
          </div>
          <div className="iqp-intro-right iqp-reveal d2">
            <p className="iqp-body">
              Most agencies guess. We calculate. The IQ Process is a 15-year
              distillation of market intelligence — engineered to find the
              shortest path between your brand&apos;s current state and its
              peak potential.
            </p>
            <Link href="/services" className="iqp-btn iqp-btn-outline">
              See All Services →
            </Link>
          </div>
        </div>

        <div className="iqp-stats iqp-reveal d3">
          {STATS.map((stat) => (
            <div className="iqp-stat" key={stat.label}>
              <span className="iqp-stat-num funnel-bold">{stat.value}</span>
              <span className="iqp-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
