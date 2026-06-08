import Navbar from "@/components/layout/Navbar";
import TradingTicker from "@/components/shared/TradingTicker";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/shared/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />
      <TradingTicker />

      <main className="bg-[#050505] text-white">

        <FadeIn>
          <Hero />
        </FadeIn>

        <FadeIn>
          <Stats />
        </FadeIn>

        <FadeIn>
          <Problem />
        </FadeIn>

        <FadeIn>
          <Services />
        </FadeIn>

        <FadeIn>
          <Results />
        </FadeIn>

        <FadeIn>
          <Testimonials />
        </FadeIn>

        <FadeIn>
          <FAQ />
        </FadeIn>

        <FadeIn>
          <CTA />
        </FadeIn>

        <Footer />

      </main>
    </>
  );
}
