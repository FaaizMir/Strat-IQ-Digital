import styles from "./HowItWorks.module.css";

const steps = [
  {
    title: "Book a strategy session",
    description:
      "A free 1-on-1 call where we review your brand, listings, and goals to find where the biggest growth is sitting.",
  },
  {
    title: "Audit & gameplan",
    description:
      "A deep audit of your visuals, content, traffic, and conversions, turned into a roadmap of what to fix first.",
  },
  {
    title: "Onboarding & setup",
    description:
      "You meet your dedicated account manager, approve the plan, and we align on timelines for delivery.",
  },
  {
    title: "Delivery & optimization",
    description:
      "First creative or campaign batch goes live. We gather feedback and keep optimizing against CTR, CVR, and ROI.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className={styles.section}>
      <div className="container">
        <span className="eyebrow">How it works</span>
        <h2>From first call to results, in four steps</h2>
        <ol className={styles.list}>
          {steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
