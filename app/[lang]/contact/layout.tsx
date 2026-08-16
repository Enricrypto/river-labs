import type { Metadata } from "next";

const CANONICAL_URL = "https://riverlabs.ai";

const meta: Record<string, { title: string; description: string }> = {
  pt: {
    title: "Contato - River Labs",
    description: "Fale com a gente. Vamos discutir o diagnóstico e o melhor caminho para sua operação.",
  },
  es: {
    title: "Contacto - River Labs",
    description: "Hablemos. Discutiremos el diagnóstico y el mejor camino para tu operación.",
  },
  en: {
    title: "Contact - River Labs",
    description: "Let's talk. We'll discuss the diagnosis and the best path forward for your operation.",
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const m = meta[lang] ?? meta.pt;
  const url = `${CANONICAL_URL}/${lang}/contact`;

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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
