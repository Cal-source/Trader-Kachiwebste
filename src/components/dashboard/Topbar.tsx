"use client";

export default function Topbar() {
  return (
    <header className="h-20 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl flex items-center justify-between px-8">

      <div>

        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-500 text-sm">
          Welcome back, Trader 
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center font-bold text-black">
          TK
        </div>

      </div>

    </header>
  );
}