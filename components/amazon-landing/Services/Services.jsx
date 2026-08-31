import styles from "./Services.module.css";

const services = [
  {
    title: "Product Photography",
    description:
      "Main images, lifestyle shots, and infographics built to stop the scroll and win the click.",
  },
  {
    title: "Product Videography",
    description:
      "Short-form video content that shows the product in use and lifts conversion on mobile.",
  },
  {
    title: "Listing Optimization",
    description:
      "Keyword-mapped titles, bullets, and backend terms so your listing is found and understood.",
  },
  {
    title: "PPC Management",
    description:
      "Campaign structure, bid strategy, and budget allocation tied directly to ACoS and TACoS targets.",
  },
  {
    title: "A+ Content & EBC",
    description:
      "Enhanced brand content that turns a browsing session into a add-to-cart decision.",
  },
  {
    title: "Account Management",
    description:
      "Health monitoring, case handling, and catalog hygiene so nothing quietly costs you sales.",
  },
  {
    title: "3D Rendering",
    description:
      "Photoreal renders for products that are hard, expensive, or slow to photograph traditionally.",
  },
  {
    title: "Keyword Ranking",
    description:
      "Organic rank strategy that reduces how much of your growth has to be bought with ad spend.",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <span className="eyebrow">What we do</span>
        <h2>One team across every lever that moves an Amazon listing</h2>
        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
