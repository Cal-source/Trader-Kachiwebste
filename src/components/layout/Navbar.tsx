export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-white text-lg">
          Trader Kachi
        </h1>

        <nav className="hidden md:flex gap-6 text-gray-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#testimonials" className="hover:text-white">Results</a>
          <a href="#cta" className="hover:text-white">Join</a>
        </nav>

        <button className="bg-green-500 px-4 py-2 rounded-xl font-semibold">
          Join Now
        </button>

      </div>
    </header>
  );
}
