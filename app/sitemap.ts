import type { MetadataRoute } from "next";
import { SITE_URL, LOCALES } from "@/lib/site";
import { getArticles } from "@/lib/blog-articles";

/** Public, indexable routes under /[lang]. "" is the locale home page. */
const PATHS = [
  { path: "", priority: 1.0 },
  { path: "/diagnostic", priority: 0.9 },
  { path: "/contact", priority: 0.8 },
  { path: "/conteudo", priority: 0.7 },
  { path: "/conteudo/artigos", priority: 0.7 },
  { path: "/cases", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = LOCALES.flatMap((lang) =>
    PATHS.map(({ path, priority }) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((alt) => [alt, `${SITE_URL}/${alt}${path}`])
        ),
      },
    }))
  );

  // Articles are Portuguese-only content, so they are listed once under /pt
  // rather than duplicated across all three locales. Drafts stay out entirely.
  const articles: MetadataRoute.Sitemap = getArticles(true).map((article) => ({
    url: `${SITE_URL}/pt/conteudo/artigos/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
