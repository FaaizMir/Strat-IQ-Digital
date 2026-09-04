import Link from "next/link";

export default function ProcessStages() {
  return (
    <section className="iqp-section">
      <div className="iqp-container">
        <div className="iqp-stages-header">
          <p className="iqp-eyebrow iqp-reveal">The Architecture of ROI</p>
          <h2
            className="iqp-h2 funnel-bold iqp-reveal d1"
            dangerouslySetInnerHTML={{
              __html: "Four stages.<br/>Zero guesswork.",
            }}
          />
          <p className="iqp-body iqp-reveal d2">
            The market doesn&apos;t reward effort — it rewards intelligence.
            We&apos;ve spent years refining a proprietary four-stage framework
            designed to eliminate guesswork and maximize market capture.
          </p>
        </div>

        {/* 01/04 — Discovery & Recon */}
        <div className="iqp-stage">
          <div className="iqp-stage-media iqp-reveal">
            <img
              src="/images/uploads/Discovery-Recon-Process.jpg"
              alt="Discovery and Recon Process Stage"
            />
          </div>
          <div className="iqp-stage-content iqp-reveal d1">
            <span className="iqp-stage-kicker">01 // RECONNAISSANCE</span>
            <h3 className="iqp-stage-title funnel-bold">
              01/04 — Discovery &amp; Recon
            </h3>
            <p className="iqp-stage-body">
              We don&apos;t move until we have the data. We perform a
              &quot;potential audit&quot; to find exactly where your brand is
              leaking revenue and where your competitors are vulnerable. This
              is where we define the target — with precision, not assumption.
            </p>
          </div>
        </div>

        {/* 02/04 — Funnel Engineering (reversed) */}
        <div className="iqp-stage iqp-stage--reverse">
          <div className="iqp-stage-media iqp-reveal">
            <img
              src="/images/uploads/Funnel-Eng.-Process.jpg"
              alt="Funnel Engineering Process Stage"
            />
          </div>
          <div className="iqp-stage-content iqp-reveal d1">
            <span className="iqp-stage-kicker">02 // ARCHITECTURE</span>
            <h3 className="iqp-stage-title funnel-bold">
              02/04 — Funnel Engineering
            </h3>
            <p className="iqp-stage-body">
              We build high-intent conversion architectures. Every pixel is
              placed with a singular goal: to turn a casual click into a
              profitable customer. We don&apos;t design for &quot;likes&quot;
              — we engineer for transactions.
            </p>
            <Link
              href="/service/conversion-optimization-services"
              className="iqp-stage-link"
            >
              See Conversion Optimization →
            </Link>
          </div>
        </div>

        {/* 03/04 — Tactical Deployment */}
        <div className="iqp-stage">
          <div className="iqp-stage-media iqp-reveal">
            <img
              src="/images/uploads/Tactical-Deployment-Process.jpg"
              alt="Tactical Deployment Process Stage"
            />
          </div>
          <div className="iqp-stage-content iqp-reveal d1">
            <span className="iqp-stage-kicker">03 // DEPLOYMENT</span>
            <h3 className="iqp-stage-title funnel-bold">
              03/04 — Tactical Deployment
            </h3>
            <p className="iqp-stage-body">
              We hit the market with radical objectivity. Using
              battle-tested math, we manage your capital across the
              highest-performing channels.
            </p>
            <Link
              href="/service/creative-strategy-services"
              className="iqp-stage-link"
            >
              See Creative Strategy →
            </Link>
            <p className="iqp-stage-body">
              If a strategy doesn&apos;t move the needle, we kill it
              immediately.
            </p>
          </div>
        </div>

        {/* 04/04 — Iterative Optimization (reversed) */}
        <div className="iqp-stage iqp-stage--reverse">
          <div className="iqp-stage-media iqp-reveal">
            <img
              src="/images/uploads/Iterative-Optimazation-Process.jpg"
              alt="Iterative Optimization Process Stage"
            />
          </div>
          <div className="iqp-stage-content iqp-reveal d1">
            <span className="iqp-stage-kicker">04 // OPTIMIZATION</span>
            <h3 className="iqp-stage-title funnel-bold">
              04/04 — Iterative Optimization
            </h3>
            <p className="iqp-stage-body">
              The IQ Process never stops. We analyze post-click behavior and
              market shifts in real-time, refining the logic until your
              growth becomes{" "}
              <Link
                href="/service/conversion-optimization-services"
                className="iqp-inline-link"
              >
                an automated, scalable machine
              </Link>
              . See you at the market.
            </p>
          </div>
        </div>

        <div className="iqp-stages-cta iqp-reveal">
          <Link href="/contact" className="iqp-btn iqp-btn-filled">
            Call Now →
          </Link>
        </div>
      </div>
    </section>
  );
}
