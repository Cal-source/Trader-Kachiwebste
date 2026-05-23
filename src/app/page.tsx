import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO */}
        <Hero />

        {/* STATS */}
        <Stats />

        {/* PROBLEM */}
        <Problem />

        {/* SERVICES */}
        <Services />
        
  
        
        {/* 🔥 NAVIGATION HUB (NEW SECTION ADDED) */}
        <section className="py-20 px-6 bg-black/30 border-y border-white/10">
          <div className="max-w-6xl mx-auto text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Trader Kachi
            </h2>

            <p className="text-gray-400 mb-10">
              Navigate through our ecosystem and learn everything about trading success.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              <Link href="/about" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <h3 className="text-xl font-semibold mb-2">About</h3>
                <p className="text-gray-400 text-sm">Our story & mission</p>
              </Link>

              <Link href="/services" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <h3 className="text-xl font-semibold mb-2">Services</h3>
                <p className="text-gray-400 text-sm">Mentorship & signals</p>
              </Link>

              <Link href="/results" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <h3 className="text-xl font-semibold mb-2">Results</h3>
                <p className="text-gray-400 text-sm">Student success proof</p>
              </Link>

              <Link href="/community" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-400 text-sm">Join our traders</p>
              </Link>

            </div>
          </div>
        </section>

        {/* RESULTS */}
<Results />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CTA */}
        <CTA />

        {/* FOOTER */}
        <Footer />

      </main>
    </>
  );
          }
