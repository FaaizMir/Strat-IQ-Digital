import styles from "./FAQ.module.css";

const groups = [
  {
    heading: "Strategy & process",
    items: [
      {
        q: "Do you only do creative, or PPC too?",
        a: "Both, and that's the point. Our PPC team reads real CTR and CVR performance and feeds it back to the creative team, so your ads and visuals are built on the same data instead of working in isolation.",
      },
      {
        q: "How long does the process take?",
        a: "Most engagements take three to four weeks from strategy call to first delivery — fast enough to see movement, slow enough to protect quality.",
      },
      {
        q: "Can I start with just one ASIN?",
        a: "Yes. Most clients start with a single ASIN, prove the lift, and then scale the approach across the rest of the catalog.",
      },
    ],
  },
  {
    heading: "Pricing & logistics",
    items: [
      {
        q: "How much does this cost?",
        a: "Pricing depends on ASIN count, the scope of visuals needed, and PPC management scope. We quote after the strategy call, once we know what's actually needed.",
      },
      {
        q: "Do I have to ship you my product?",
        a: "Only for lifestyle or model photography. AI-assisted and render-based visuals don't require a physical unit.",
      },
      {
        q: "What if I'm not ready to commit yet?",
        a: "Start with a free audit. You'll see exactly where sales are being left on the table and what to fix first, with no obligation to continue.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <span className="eyebrow">Questions</span>
        <h2>Answers to what most sellers ask us first</h2>
        <div className={styles.groups}>
          {groups.map((group) => (
            <div key={group.heading} className={styles.group}>
              <h3 className={styles.groupHeading}>{group.heading}</h3>
              {group.items.map((item) => (
                <details key={item.q} className={styles.item}>
                  <summary className={styles.question}>{item.q}</summary>
                  <p className={styles.answer}>{item.a}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
