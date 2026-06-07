export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold">
              Trader <span className="text-[#16A34A]">Kachi</span>
            </h2>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              A structured trading ecosystem focused on discipline, strategy,
              and long-term consistency — not hype or gambling behavior.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#hero" className="hover:text-[#16A34A]">Home</a></li>
              <li><a href="#problem" className="hover:text-[#16A34A]">Problem</a></li>
              <li><a href="#services" className="hover:text-[#16A34A]">Services</a></li>
              <li><a href="#results" className="hover:text-[#16A34A]">Results</a></li>
              <li><a href="#faq" className="hover:text-[#16A34A]">FAQ</a></li>
            </ul>
          </div>

          {/* CTA / CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Join the Community
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Get access to structured trading guidance and market insights.
            </p>

            <a
              href="https://wa.me/YOUR_NUMBER"
              className="inline-block bg-[#16A34A] text-black px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Join on WhatsApp
            </a>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Trader Kachi. All rights reserved.
          </p>

          <p className="text-gray-600 text-xs">
            Built for disciplined traders only.
          </p>

        </div>

      </div>

    </footer>
  );
}