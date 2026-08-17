import { getArticle } from "@/lib/blog-articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Artigo não encontrado",
      description: "O artigo que você procura não existe.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${article.title} - River Labs`,
    description: article.subtitle,
    // Drafts stay reachable by direct link so they can be shared for review,
    // but they must never enter the index.
    robots: article.published ? undefined : { index: false, follow: false },
    alternates: {
      canonical: `${SITE_URL}/${lang}/conteudo/artigos/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.subtitle,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const article = getArticle(slug);

  // Rendering a "not found" body with HTTP 200 is a soft-404; return a real one.
  if (!article) notFound();

  return (
    <div className="w-full bg-white py-16 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <Link href={`/${lang}/conteudo/artigos`} className="text-gray-500 hover:text-gray-700 mb-8 inline-block">
          ← Voltar aos artigos
        </Link>

        <header className="mb-12">
          <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">{article.category}</span>
          <h1 className="text-4xl font-bold mt-2 mb-4">{article.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{article.subtitle}</p>

          <div className="flex items-center justify-between text-sm text-gray-500 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <span>{article.author}</span>
              <span>•</span>
              <span>{new Date(article.date).toLocaleDateString("pt-BR")}</span>
              <span>•</span>
              <span>{article.readTime} min</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {article.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("#")) {
              const level = paragraph.match(/^#+/)?.[0].length || 1;
              const text = paragraph.replace(/^#+\s/, "");
              const HeadingTag = `h${Math.min(level + 1, 6)}` as "h2" | "h3" | "h4" | "h5" | "h6";

              return (
                <HeadingTag key={idx} className="mt-8 mb-4 font-bold">
                  {text}
                </HeadingTag>
              );
            }
            return (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Footer */}
        <div className="py-8 border-t border-gray-200 mt-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Sobre o autor</h3>
            <p className="text-gray-600">{article.author} é sócio-fundador da River Labs.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Quer conversar sobre isso?</h2>
          <Link
            href={`/${lang}/diagnostic`}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700"
          >
            Iniciar diagnóstico
          </Link>
        </div>
      </article>
    </div>
  );
}
