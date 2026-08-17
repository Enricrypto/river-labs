import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL, LOCALES, isLocale } from "@/lib/site";

const meta: Record<string, { title: string; description: string; htmlLang: string }> = {
  pt: {
    htmlLang: "pt-BR",
    title: "River Labs - Diagnóstico e Sistemas sob Medida para Empresas Tradicionais",
    description:
      "Boutique de estratégia e tecnologia para empresas estabelecidas. Diagnóstico primeiro, sistema depois. Construído na sua infraestrutura, capacidade que fica.",
  },
  es: {
    htmlLang: "es",
    title: "River Labs - Diagnóstico y Sistemas Personalizados para Empresas Establecidas",
    description:
      "Boutique de estrategia y tecnología para empresas consolidadas. Diagnóstico primero, sistema después. Construido en tu infraestructura, capacidad que queda.",
  },
  en: {
    htmlLang: "en",
    title: "River Labs - Diagnosis and Custom Systems for Established Companies",
    description:
      "Strategy and technology boutique for established enterprises. Diagnosis first, system next. Built in your infrastructure, capability that stays.",
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const m = meta[lang];
  const url = `${SITE_URL}/${lang}`;

  return {
    title: m.title,
    description: m.description,
    openGraph: {
      url: url,
      title: m.title,
      description: m.description,
      siteName: "River Labs",
      locale: m.htmlLang,
      type: "website",
    },
    alternates: {
      // Each language is canonical to itself. Pointing every locale at the
      // bare root would tell Google /es and /en are duplicates of /pt.
      canonical: url,
      languages: {
        "pt-BR": `${SITE_URL}/pt`,
        es: `${SITE_URL}/es`,
        en: `${SITE_URL}/en`,
      },
    },
  };
}

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  // Without this, the [lang] segment matches ANY single-segment path, so
  // /robots.txt, /sitemap.xml and /anything-at-all render the PT homepage
  // with HTTP 200 — an unlimited supply of soft-404s for search engines.
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <>{children}</>;
}
