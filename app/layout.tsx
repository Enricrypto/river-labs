import type { Metadata } from "next";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "River Labs – AI Automation for Logistics, Real Estate, Retail",
  description:
    "Custom AI agents cut logistics costs 25-40%, predict real estate values, automate retail. Free diagnosis. Prototypes in 3 weeks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${jakarta.variable} font-sans text-gray-800 bg-white antialiased selection:bg-pastel-blue selection:text-white flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
