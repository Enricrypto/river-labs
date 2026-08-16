import type { Metadata } from "next";

const CANONICAL_URL = "https://riverlabs.ai";

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
  const m = meta[lang] ?? meta.pt;
  const url = `${CANONICAL_URL}/${lang}`;

  return {
    title: m.title,
    description: m.description,
    canonical: url,
    openGraph: {
      url: url,
      title: m.title,
      description: m.description,
      siteName: "River Labs",
      locale: m.htmlLang,
      type: "website",
    },
    alternates: {
      languages: {
        "pt-BR": "/pt",
        es: "/es",
        en: "/en",
      },
      canonical: CANONICAL_URL,
    },
  };
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }, { lang: "pt" }];
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
