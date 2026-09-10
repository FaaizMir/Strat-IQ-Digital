import AboutHero from "@/components/about/AboutHero";
import BrandStatement from "@/components/about/BrandStatement";
import StatsRow from "@/components/about/StatsRow";
import PhilosophySection from "@/components/about/PhilosophySection";
import WhyUs from "@/components/about/WhyUs";
import TeamSection from "@/components/about/TeamSection";
import ClientTestimonials from "@/components/about/ClientTestimonials";
import TrustLogos from "@/components/home/TrustLogos";

export const metadata = {
  title: "About — Strat IQ Digital",
  description:
    "Strat IQ Digital is a performance collective founded by Nouman Rao in 2026 to help underutilized brands finally meet their full market potential.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandStatement />
      <StatsRow />
      <PhilosophySection />
      <WhyUs />
      <TeamSection />
      {/* <ClientTestimonials /> */}
      <TrustLogos />
    </>
  );
}
