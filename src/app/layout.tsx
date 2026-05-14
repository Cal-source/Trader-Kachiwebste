import "./globals.css";
export const metadata = {
  title: "Trader Kachi",
  description: "Elite Forex Mentorship Nigeria"
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-white">
        {children}
      </body>
    </html>
  );
}
