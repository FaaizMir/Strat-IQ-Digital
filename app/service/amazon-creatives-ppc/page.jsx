import "./styles/theme.css";
import {
  Hero,
  LogoStrip,
  ProvenResults,
  BeforeAfter,
  AgencyIntro,
  Portfolio,
  Services,
  HowItWorks,
  Testimonials,
  FounderNote,
  FAQ,
  BookCallCTA,
} from "../../components/amazon-landing";

export const metadata = {
  title: "Amazon Creatives & PPC Management | Strat IQ Digital",
  description:
    "Amazon product photography, A+ content, and PPC management built as one system — so every click converts. Book a free strategy call with Strat IQ Digital.",
};

const partnerLogos = [
  { src: "/images/uploads/amazon-landing/partner-logo-1.svg", alt: "ListingPilot" },
  { src: "/images/uploads/amazon-landing/partner-logo-2.svg", alt: "SessionIQ" },
  { src: "/images/uploads/amazon-landing/partner-logo-3.svg", alt: "RankForge" },
  { src: "/images/uploads/amazon-landing/partner-logo-4.svg", alt: "AdMetrics" },
  { src: "/images/uploads/amazon-landing/partner-logo-5.svg", alt: "BrandLoop" },
  { src: "/images/uploads/amazon-landing/partner-logo-6.svg", alt: "ScaleDeck" },
];

const clientLogos = [
  { src: "/images/uploads/amazon-landing/client-logo-1.svg", alt: "Acme" },
  { src: "/images/uploads/amazon-landing/client-logo-2.svg", alt: "VK Group" },
  { src: "/images/uploads/amazon-landing/client-logo-3.svg", alt: "Elevate Technologies" },
  { src: "/images/uploads/amazon-landing/client-logo-4.svg", alt: "Nova Systems" },
  { src: "/images/uploads/amazon-landing/client-logo-5.svg", alt: "Aure Labs" },
];

export default function AmazonCreativesPPCPage() {
  return (
    <div className="amazonLanding">
      <Hero />
      <LogoStrip label="Works with the tools you already use" logos={partnerLogos} />
      <ProvenResults />
      <BeforeAfter />
      <AgencyIntro />
      <Portfolio />
      <Services />
      <HowItWorks />
      <LogoStrip label="Trusted by" logos={clientLogos} />
      <Testimonials />
      <FounderNote />
      <FAQ />
      <BookCallCTA />
    </div>
  );
}
