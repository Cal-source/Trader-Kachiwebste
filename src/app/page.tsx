import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Problem />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
