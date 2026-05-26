export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-24">

      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          About Trader Kachi
        </h1>

        <p className="text-gray-400 text-center mt-6 max-w-2xl mx-auto">
          A structured trading ecosystem focused on discipline, strategy,
          and long-term consistency in the financial markets.
        </p>

        {/* STORY */}
        <section className="mt-16 space-y-6 text-gray-300 leading-relaxed">

          <p>
            Trader Kachi was built with one goal — to help traders move from
            inconsistent emotional trading to structured, professional-level execution.
          </p>

          <p>
            Most traders fail not because the market is random, but because
            they lack discipline, structure, and proper risk management.
          </p>

          <p>
            This platform focuses on simplifying trading into a repeatable system
            that prioritizes consistency over excitement.
          </p>

        </section>

        {/* VALUES */}
        <section className="mt-16 grid md:grid-cols-3 gap-6">

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="font-semibold text-lg mb-2">Discipline</h3>
            <p className="text-gray-400 text-sm">
              We prioritize structure over emotional decision making.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="font-semibold text-lg mb-2">Consistency</h3>
            <p className="text-gray-400 text-sm">
              Small wins repeated over time create real results.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="font-semibold text-lg mb-2">Education</h3>
            <p className="text-gray-400 text-sm">
              We focus on understanding the market, not gambling it.
            </p>
          </div>

        </section>

        {/* CTA */}
        <div className="text-center mt-20">

          <h2 className="text-2xl font-semibold">
            Ready to start your trading journey?
          </h2>

          <a
            href="/community"
            className="inline-block mt-6 bg-[#16A34A] px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
            Join Community
          </a>

        </div>

      </div>
    </main>
  );
}
