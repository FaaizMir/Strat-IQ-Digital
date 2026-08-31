import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "They rebuilt our main image and A+ content in three weeks, and our conversion rate finally caught up to our traffic.",
    name: "Priya Shah",
    role: "Founder, Verve Nutrition",
    avatar: "/images/uploads/amazon-landing/avatar-1.svg",
  },
  {
    quote:
      "The PPC team and the creative team actually talk to each other. That alone put us ahead of every agency we'd tried before.",
    name: "Marcus Webb",
    role: "Brand Director, TrailForge",
    avatar: "/images/uploads/amazon-landing/avatar-2.svg",
  },
  {
    quote:
      "We started with one ASIN to test the process. Ninety days later, three more were in the pipeline.",
    name: "Alina Torres",
    role: "Ecommerce Lead, CoastalHome",
    avatar: "/images/uploads/amazon-landing/avatar-3.svg",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className="eyebrow">In their words</span>
        <h2>What brands say after working with us</h2>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <figure key={t.name} className={styles.card}>
              <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className={styles.attribution}>
                <img
                  src={t.avatar}
                  alt=""
                  width={44}
                  height={44}
                  className={styles.avatar}
                  aria-hidden="true"
                />
                <div>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
