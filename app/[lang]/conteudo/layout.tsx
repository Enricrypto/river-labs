import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

const meta: Record<string, { title: string; description: string }> = {
  pt: {
    title: "Conteúdo - River Labs",
    description: "Artigos, newsletter e relatórios sobre diagnóstico, estratégia e sistemas em empresas estabelecidas.",
  },
  es: {
    title: "Contenido - River Labs",
    description: "Artículos, boletín e informes sobre diagnóstico, estrategia y sistemas en empresas consolidadas.",
  },
  en: {
    title: "Content - River Labs",
    description: "Articles, newsletter, and reports on diagnosis, strategy, and systems in established companies.",
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const m = meta[lang] ?? meta.pt;
  const url = `${SITE_URL}/${lang}/conteudo`;

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      url: url,
      title: m.title,
      description: m.description,
      siteName: "River Labs",
      type: "website",
    },
  };
}

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
