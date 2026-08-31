import styles from "./LogoStrip.module.css";

export default function LogoStrip({ label, logos }) {
  return (
    <section className={styles.strip}>
      <div className="container">
        <p className={styles.label}>{label}</p>
        <div className={styles.row}>
          {logos.map((logo) => (
            <div key={logo.src} className={styles.logoWrap}>
              <img
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={38}
                className={styles.logoImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
