"use client";

import { useEffect } from "react";

export default function TradingTicker() {

  useEffect(() => {

    const container = document.getElementById("tradingview-widget");

    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";

    script.type = "text/javascript";

    script.async = true;

    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FX:EURUSD",
          title: "EUR/USD"
        },
        {
          proName: "FX:GBPUSD",
          title: "GBP/USD"
        },
        {
          proName: "FX:USDJPY",
          title: "USD/JPY"
        },
        {
          proName: "BINANCE:BTCUSDT",
          title: "BTC/USD"
        },
        {
          proName: "BINANCE:ETHUSDT",
          title: "ETH/USD"
        }
      ],

      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en"
    });

    container.appendChild(script);

}, []);

return (
  <div className="relative w-full overflow-hidden border-b border-[#16A34A]/20 bg-black/60 backdrop-blur-xl">

    {/* TOP GLOW LINE */}
    <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#16A34A] to-transparent opacity-70" />

    {/* LIVE MARKET TAG */}
    <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center gap-2 bg-black/80 px-3 py-1 rounded-full border border-[#16A34A]/30">

      <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />

      <span className="text-xs text-[#16A34A] font-medium">
        LIVE MARKET
      </span>

    </div>

    {/* TICKER */}
    <div
      id="tradingview-widget"
      className="pl-0 md:pl-36"
    />

  </div>
);
}
  
