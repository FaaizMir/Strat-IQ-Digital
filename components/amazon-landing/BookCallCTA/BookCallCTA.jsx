import styles from "./BookCallCTA.module.css";

export default function BookCallCTA() {
  return (
    <section id="book-a-call" className={styles.section}>
      <div className="container">
        <div className={styles.box}>
          <div>
            <h2 className={styles.headline}>Ready to see where your growth is leaking?</h2>
            <p className={styles.sub}>
              Book a free strategy call. We&rsquo;ll review your listings, creative, and PPC
              account, then tell you exactly where the biggest opportunity is.
            </p>
          </div>
          <a href="#" className={styles.cta}>
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
