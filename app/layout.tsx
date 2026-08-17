import type { Metadata } from "next";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: "River Labs - Automação com IA para Operações que Precisam de Resultado",
  description:
    "Desenvolvemos soluções de IA e automação customizadas na sua infraestrutura - sem dependência de SaaS. Diagnóstico gratuito. Resultados em semanas.",
  alternates: {
    languages: {
      "pt-BR": "/pt",
      "es": "/es",
      "en": "/en",
    },
  },
  openGraph: {
    title: "River Labs - Automação com IA para Operações que Precisam de Resultado",
    description:
      "Desenvolvemos soluções de IA e automação customizadas na sua infraestrutura - sem dependência de SaaS. Diagnóstico gratuito. Resultados em semanas.",
    url: SITE_URL,
    siteName: "River Labs",
    // og:image comes from app/[lang]/opengraph-image.tsx. The previous
    // /og-image.png reference pointed at a file that does not exist, which
    // is why link previews rendered without a card.
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "River Labs - Automação com IA para Operações que Precisam de Resultado",
    description:
      "Desenvolvemos soluções de IA e automação customizadas na sua infraestrutura - sem dependência de SaaS. Diagnóstico gratuito. Resultados em semanas.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${jakarta.variable} font-sans text-gray-800 bg-white antialiased selection:bg-pastel-blue selection:text-white flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
