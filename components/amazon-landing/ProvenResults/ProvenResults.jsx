import styles from "./ProvenResults.module.css";

const results = [
  {
    category: "Home & Kitchen",
    timeframe: "14 days",
    headline: "+114% sessions after a full listing overhaul",
    stats: [
      { value: "114%", label: "Sessions" },
      { value: "90.5%", label: "Sales uplift" },
      { value: "$2,436", label: "Added revenue" },
    ],
  },
  {
    category: "Fitness",
    timeframe: "19 days",
    headline: "+61.5% additional sales in three weeks",
    stats: [
      { value: "62%", label: "Sales uplift" },
      { value: "31%", label: "CVR uplift" },
      { value: "$12,326", label: "Added revenue" },
    ],
  },
  {
    category: "Apparel",
    timeframe: "18 days",
    headline: "+103% sales after new A+ content and creative",
    stats: [
      { value: "63.3%", label: "CVR uplift" },
      { value: "108%", label: "CTR uplift" },
      { value: "$1,794", label: "Per month" },
    ],
  },
  {
    category: "Supplements",
    timeframe: "31 days",
    headline: "+69% sales alongside a PPC restructure",
    stats: [
      { value: "69.4%", label: "Sales uplift" },
      { value: "37.5%", label: "CVR uplift" },
      { value: "68.3%", label: "Sessions uplift" },
    ],
  },
];

export default function ProvenResults() {
  return (
    <section id="results" className={styles.section}>
      <div className="container">
        <span className="eyebrow">Track record</span>
        <h2>Real Amazon accounts, real movement in weeks — not quarters</h2>
        <div className={styles.grid}>
          {results.map((r) => (
            <article key={r.headline} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.category}>{r.category}</span>
                <span className={styles.timeframe}>{r.timeframe}</span>
              </div>
              <h3 className={styles.headline}>{r.headline}</h3>
              <div className={styles.stats}>
                {r.stats.map((s) => (
                  <div key={s.label} className={styles.stat}>
                    <span className={styles.statValue}>{s.value}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
