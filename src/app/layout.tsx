import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export const metadata = {
  title: "Trader Kachi",
  description: "Elite Forex Mentorship Nigeria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-white">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="pt-24">
          {children}
        </main>

        {/* FLOATING WHATSAPP BUTTON */}
        <WhatsAppButton />

      </body>
    </html>
  );
}
