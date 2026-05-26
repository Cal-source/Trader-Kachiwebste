export default function CommunityPage() {
  return (
    <main className="min-h-screen px-6 py-24">

      <div className="max-w-5xl mx-auto text-center">

        {/* HERO */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Join the Trader Kachi Community
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          A focused trading environment where discipline, structure, and consistency
          are built daily.
        </p>

        {/* BENEFITS */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A]/10 hover:-translate-y-2">
            <h3 className="font-semibold text-lg mb-2">Daily Trade Ideas</h3>
            <p className="text-gray-400 text-sm">
              Get structured setups and market direction updates.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A]/10 hover:-translate-y-2">
            <h3 className="font-semibold text-lg mb-2">Market Breakdown</h3>
            <p className="text-gray-400 text-sm">
              Learn how to read structure and understand price action.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A]/10 hover:-translate-y-2">
            <h3 className="font-semibold text-lg mb-2">Trader Psychology</h3>
            <p className="text-gray-400 text-sm">
              Build discipline and remove emotional trading habits.
            </p>
          </div>

        </div>

        {/* SOCIAL PROOF */}
        <div className="mt-20">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <p className="text-gray-300 italic">
              “Before joining, I was inconsistent and emotional. Now I finally understand structure and patience.”
            </p>

            <p className="mt-4 text-[#16A34A] font-medium">
              — Community Member
            </p>

          </div>

        </div>

        {/* CTA SECTION */}
        <div className="mt-20">

          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to start trading with structure?
          </h2>

          <p className="text-gray-400 mt-4">
            Join the community and start learning how professionals approach the market.
          </p>

          <a
            href="https://wa.me/2347048284823"
            target="_blank"
            className="inline-block mt-8 bg-[#16A34A] px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
          >
            Join on WhatsApp
          </a>

        </div>

      </div>

    </main>
  );
}
