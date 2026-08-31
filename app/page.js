import Hero from "@/components/home/Hero";
import TrustLogos from "@/components/home/TrustLogos";
import AboutSplit from "@/components/home/AboutSplit";
import FeaturedWork from "@/components/home/FeaturedWork";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import VideoShowreel from "@/components/home/VideoShowreel";
import WhyStratIQ from "@/components/home/WhyStratIQ";
import Pricing from "@/components/home/Pricing";
import BlogInsights from "@/components/home/BlogInsights";
// import IntroLoader from "@/components/home/IntroLoader";

export default function Home() {
  return (
    <>
      <div className="main-content">
        <Hero />
        <TrustLogos />
        {/* <AboutSplit /> */}
      </div>
      <FeaturedWork />
      <AboutSplit />
      <Services />
      <Testimonials />
      <VideoShowreel />
      <WhyStratIQ />
      <Pricing />
      <BlogInsights />
      {/* <IntroLoader /> */}
    </>
  );
}
