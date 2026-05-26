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
    <div className="w-full border-b border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
      <div id="tradingview-widget" />
    </div>
  );
}
