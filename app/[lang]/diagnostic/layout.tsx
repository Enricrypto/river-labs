import type { Metadata } from "next";

const CANONICAL_URL = "https://riverlabs.ai";

const meta: Record<string, { title: string; description: string }> = {
  pt: {
    title: "Diagnóstico Inicial - River Labs",
    description: "Descobra exatamente onde sua operação está perdendo valor. Diagnóstico inicial em 4 minutos, análise personalizada em 48h.",
  },
  es: {
    title: "Diagnóstico Inicial - River Labs",
    description: "Descubre exactamente dónde tu operación está perdiendo valor. Diagnóstico inicial en 4 minutos, análisis personalizado en 48h.",
  },
  en: {
    title: "Initial Diagnosis - River Labs",
    description: "Discover exactly where your operation is losing value. Initial diagnosis in 4 minutes, personalized analysis in 48h.",
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const m = meta[lang] ?? meta.pt;
  const url = `${CANONICAL_URL}/${lang}/diagnostic`;

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

export default function DiagnosticLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
