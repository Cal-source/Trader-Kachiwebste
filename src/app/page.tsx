import Navbar from "@/components/layout/Navbar";
import TradingTicker from "@/components/shared/TradingTicker";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import FadeIn from "@/components/shared/FadeIn";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* TRADINGTICKER */}
      <TradingTicker />

      <main>
<FadeIn> 
        {/* HERO */}
        <Hero />
</FadeIn>
        
        <FadeIn>
        {/* STATS */}
        <Stats />
          </FadeIn>
<FadeIn>
        {/* PROBLEM */}
        <Problem />
</FadeIn>
        
        <FadeIn>
        {/* SERVICES */}
        <Services />
          </FadeIn>
                 
<FadeIn>
        {/* RESULTS */}
<Results />
</FadeIn>
        
        <FadeIn>
        {/* TESTIMONIALS */}
        <Testimonials />
          </FadeIn>
        
        
        <FadeIn>
        {/* FAQ */}
        <FAQ />
          </FadeIn>

        <FadeIn>
        {/* CTA */}
        <CTA />
          </FadeIn>

        {/* FOOTER */}
        <Footer />

      </main>
    </>
  );
          }
