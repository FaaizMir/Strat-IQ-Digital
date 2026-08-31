import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className={styles.badge}>Amazon Creatives &amp; PPC</span>
            <h1 className={styles.headline}>
              Grow Amazon revenue with creative and PPC that work as one system
            </h1>
            <p className={styles.sub}>
              We pair data-led product photography, A+ content, and PPC
              management so every click your ads earn actually converts.
              No guesswork, no disconnected vendors — one team accountable
              for the whole funnel.
            </p>
            <div className={styles.actions}>
              <a href="#book-a-call" className={styles.primaryCta}>
                Book a Strategy Call
              </a>
              <a href="#services" className={styles.secondaryCta}>
                See what we do
              </a>
            </div>
            <div className={styles.quote}>
              <p className={styles.quoteText}>
                &ldquo;Our click-through rate doubled in two weeks. They focus
                on results, not just pretty graphics.&rdquo;
              </p>
              <span className={styles.quoteAttr}>— Amazon FBA seller, Home &amp; Kitchen</span>
            </div>
          </div>
          <div className={styles.visual}>
            <img
              src="/images/uploads/amazon-landing/hero-graph.svg"
              alt="Amazon listing session growth after a creative and PPC overhaul"
              width={620}
              height={620}
              className={styles.visualImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
