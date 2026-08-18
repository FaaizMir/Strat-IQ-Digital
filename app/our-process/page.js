import "./process.css";

import ScrollReveal from "@/components/process/ScrollReveal";
import ProcessHero from "@/components/process/ProcessHero";
import ProcessIntro from "@/components/process/ProcessIntro";
import ProcessStages from "@/components/process/ProcessStages";
import ProcessGuarantee from "@/components/process/ProcessGuarantee";
import ProcessCTA from "@/components/process/ProcessCTA";

export const metadata = {
  title: "Strat IQ Digital — Our Performance Process",
  description:
    "Performance isn't luck; it's engineering. Discover the 4-step logic Strat IQ Digital uses to scale brands with 15 years of market-tested expertise.",
};

export default function OurProcessPage() {
  return (
    <div className="iqp-page">
      <ScrollReveal />
      <ProcessHero />
      <ProcessIntro />
      <ProcessStages />
      <ProcessGuarantee />
      <ProcessCTA />
    </div>
  );
}
