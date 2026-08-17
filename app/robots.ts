import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Password-gated client areas — public URLs, but nothing to index. */
const PRIVATE_PATHS = [
  "/apia",
  "/bondinho",
  "/cataratas",
  "/matrisoja",
  "/pier-maua",
  "/trem-corcovado",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", ...PRIVATE_PATHS],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
