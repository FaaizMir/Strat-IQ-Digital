import styles from "./BeforeAfter.module.css";

const items = [
  { src: "/images/uploads/amazon-landing/before-after-1.svg", label: "Click-through rate" },
  { src: "/images/uploads/amazon-landing/before-after-2.svg", label: "Conversion rate" },
  { src: "/images/uploads/amazon-landing/before-after-3.svg", label: "Ad spend efficiency" },
];

export default function BeforeAfter() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className="eyebrow">The difference creative makes</span>
        <h2>Before and after: what changes when creative and PPC work together</h2>
        <div className={styles.grid}>
          {items.map((item) => (
            <figure key={item.src} className={styles.item}>
              <img
                src={item.src}
                alt={`${item.label} before and after comparison`}
                width={700}
                height={340}
                className={styles.image}
              />
              <figcaption className={styles.caption}>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
