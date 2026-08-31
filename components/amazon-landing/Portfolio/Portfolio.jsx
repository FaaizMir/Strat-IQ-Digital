import styles from "./Portfolio.module.css";

const items = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/uploads/amazon-landing/portfolio-${i + 1}.svg`,
  alt: `Amazon listing and storefront creative sample ${i + 1}`,
}));

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.section}>
      <div className="container">
        <span className="eyebrow">Selected work</span>
        <h2>Storefronts, listing images, and A+ content we&rsquo;ve shipped</h2>
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.src} className={styles.tile}>
              <img
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
