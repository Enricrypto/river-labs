/**
 * Single source of truth for the production origin.
 *
 * This MUST match the domain the site is actually served from. It feeds
 * rel=canonical, og:url and the sitemap — pointing it at a domain we do not
 * serve tells Google the authoritative copy of every page lives elsewhere.
 */
export const SITE_URL = "https://www.riverlabs-ai.com";

export const LOCALES = ["en", "es", "pt"] as const;

export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
