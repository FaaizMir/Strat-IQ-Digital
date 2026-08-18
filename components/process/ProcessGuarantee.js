function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 10.5L8 14l7.5-8.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const GUARANTEES = [
  {
    num: "01",
    title: "Senior Eyes Only",
    body: "No junior hand-offs. Every step of the logic is overseen by Nouman Rao and our senior leads — people who've spent years in the market, not weeks reading about it.",
  },
  {
    num: "02",
    title: "Radical Transparency",
    body: "You get a dashboard that tells the truth. No black boxes. No sugar-coating. You see exactly where every dollar went and exactly what it produced — every week, without asking.",
  },
  {
    num: "03",
    title: "Frictionless Scale",
    body: "Our systems are built to handle your growth. When you double your spend, our logic stays solid. We architect for scale from day one so you never outgrow the infrastructure.",
  },
];

export default function ProcessGuarantee() {
  return (
    <section className="iqp-section">
      <div className="iqp-container">
        <div className="iqp-guarantee-header">
          <p className="iqp-eyebrow iqp-reveal">The Strat IQ Guarantee</p>
          <h2
            className="iqp-h2 funnel-bold iqp-reveal d1"
            dangerouslySetInnerHTML={{
              __html: "Three things you<br/>can hold us to.",
            }}
          />
        </div>

        <div className="iqp-guarantee-list">
          {GUARANTEES.map((item, i) => (
            <div
              className={`iqp-guarantee-item iqp-reveal d${(i % 3) + 1}`}
              key={item.num}
            >
              <div className="iqp-guarantee-marker">
                <span className="iqp-guarantee-icon">
                  <CheckIcon />
                </span>
                <span className="iqp-guarantee-num">{item.num}</span>
              </div>
              <div>
                <h3 className="iqp-guarantee-title funnel-bold">
                  {item.title}
                </h3>
                <p className="iqp-guarantee-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
