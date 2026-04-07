import type { Metadata } from "next";

const meta: Record<string, { title: string; description: string; htmlLang: string }> = {
  pt: {
    htmlLang: "pt-BR",
    title: "River Labs – Automação com IA para Operações que Precisam de Resultado",
    description:
      "Desenvolvemos soluções de IA e automação customizadas na sua infraestrutura — sem dependência de SaaS. Diagnóstico gratuito. Resultados em semanas.",
  },
  es: {
    htmlLang: "es",
    title: "River Labs – Automatización con IA para Operaciones que Necesitan Resultado",
    description:
      "Desarrollamos soluciones de IA y automatización personalizadas en tu infraestructura — sin dependencia de SaaS. Diagnóstico gratuito. Resultados en semanas.",
  },
  en: {
    htmlLang: "en",
    title: "River Labs – AI Automation for Operations That Need Results",
    description:
      "We build custom AI and automation solutions inside your infrastructure — no SaaS dependency. Free diagnosis. Results in weeks.",
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const m = meta[lang] ?? meta.pt;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      languages: {
        "pt-BR": "/pt",
        es: "/es",
        en: "/en",
      },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }, { lang: "pt" }];
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
