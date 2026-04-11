"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import type { Dict } from "@/lib/translations";

const LANGS = ["en", "es", "pt"] as const;

export default function Nav({ dict, lang }: { dict: Dict["nav"]; lang: "en" | "es" | "pt" }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const links = [
    { label: dict.services, href: "#services" },
    { label: dict.casestudies, href: `/${lang}/cases` },
    { label: dict.contact, href: `/${lang}/contact` },
  ];

  function switchLang(newLang: string) {
    router.push(`/${newLang}`);
  }

  return (
    <nav className="sticky top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo size="sm" />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop right side: lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs font-medium text-gray-400">
            {LANGS.map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                <button
                  onClick={() => switchLang(l)}
                  className={`px-1 py-0.5 rounded transition-colors ${
                    lang === l ? "text-gray-700 font-semibold" : "hover:text-gray-600"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
                {i < LANGS.length - 1 && <span className="text-gray-200">|</span>}
              </span>
            ))}
          </div>

          {dict.cta && (
            <a
              href="#contact"
              className="bg-[#0F1D56] text-white text-sm font-medium rounded-full px-5 py-2.5 hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {dict.cta}
            </a>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-600 z-50"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8">
          <Logo size="sm" />
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-2xl font-medium text-gray-800 hover:text-gray-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}

          {dict.cta && (
            <a
              href="#contact"
              className="bg-[#0F1D56] text-white text-base font-medium rounded-full px-6 py-3 hover:opacity-90 transition-opacity"
              onClick={() => setOpen(false)}
            >
              {dict.cta}
            </a>
          )}

          {/* Mobile language switcher */}
          <div className="flex items-center gap-3 text-sm font-medium mt-2">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => { switchLang(l); setOpen(false); }}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  lang === l
                    ? "border-gray-900 text-gray-900 bg-gray-50"
                    : "border-gray-200 text-gray-400 hover:text-gray-700"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
