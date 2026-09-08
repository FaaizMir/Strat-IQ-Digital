import Link from "next/link";
import Image from "next/image";
import { services } from "../../data/services";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Capabilities</span>
          <h2 id="services-heading" className={styles.heading}>
            Services
          </h2>
          <p className={styles.subheading}>
            Performance marketing and digital systems, built for brands that
            want more than a vendor.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={service.href}
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={service.image}
                  alt={service.label}
                  fill
                  className={styles.image}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <span className={styles.index}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.arrow} aria-hidden="true">
                    <svg viewBox="0 0 18 18" fill="none" width="18" height="18">
                      <path
                        d="M4 14L14 4M14 4H6M14 4V12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{service.label}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}