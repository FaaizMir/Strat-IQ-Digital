import styles from "./AgencyIntro.module.css";

const stats = [
  { value: "$10M+", label: "Revenue generated" },
  { value: "200+", label: "Projects delivered" },
  { value: "15 yrs", label: "Collective team experience" },
  { value: "17K+", label: "Leads captured" },
];

export default function AgencyIntro() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <h2 className={styles.headline}>
            We don&rsquo;t just make things look good. We make them convert.
          </h2>
          <p className={styles.sub}>
            Work with a global team of strategists, designers, and PPC
            managers on a project basis or an ongoing retainer — built around
            what your ASINs actually need.
          </p>
          <a href="#book-a-call" className={styles.cta}>
            Get a Quote
          </a>
        </div>
        <div className={styles.statRow}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
