import type { Metadata } from "next";

const CANONICAL_URL = "https://riverlabs.ai";

const meta: Record<string, { title: string; description: string }> = {
  pt: {
    title: "Casos - River Labs",
    description: "Conheça os sistemas que já estão em produção e os resultados que geraram. Diagnóstico, planejamento e sistemas sob medida.",
  },
  es: {
    title: "Casos - River Labs",
    description: "Conoce los sistemas que ya están en producción y los resultados que generaron. Diagnóstico, planificación y sistemas personalizados.",
  },
  en: {
    title: "Cases - River Labs",
    description: "Meet the systems already in production and the results they've delivered. Diagnosis, planning, and custom systems.",
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const m = meta[lang] ?? meta.pt;
  const url = `${CANONICAL_URL}/${lang}/cases`;

  return {
    title: m.title,
    description: m.description,
    canonical: url,
    openGraph: {
      url: url,
      title: m.title,
      description: m.description,
      siteName: "River Labs",
      type: "website",
    },
  };
}

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
