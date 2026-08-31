import styles from "./FounderNote.module.css";

export default function FounderNote() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.visual}>
            <img
              src="/images/uploads/amazon-landing/founder-mark.svg"
              alt="Strat IQ Digital's data-first approach to Amazon growth"
              width={700}
              height={560}
              className={styles.image}
            />
          </div>
          <div className={styles.copy}>
            <span className="eyebrow">Why brands switch to us</span>
            <h2 className={styles.headline}>
              Traffic isn&rsquo;t the problem. What happens after the click is.
            </h2>
            <p className={styles.paragraph}>
              Most Amazon sellers do everything right — optimize listings,
              tweak bids, test keywords — and the numbers still don&rsquo;t
              move the way they used to. Click costs climb, sessions rise, and
              conversions quietly slip.
            </p>
            <p className={styles.paragraph}>
              We built our approach around the two things that actually
              decide whether a click becomes a sale: the creative someone
              sees, and the campaign that put them there. When those two work
              from the same data, growth stops being a guessing game.
            </p>
            <a href="#book-a-call" className={styles.cta}>
              Talk to our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
