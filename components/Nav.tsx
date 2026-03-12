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
    { label: dict.casestudies, href: "#case-studies" },
    { label: dict.contact, href: "/contact" },
    { label: dict.quote, href: `/${lang}/diagnostic` },
  ];

  function switchLang(newLang: string) {
    router.push(`/${newLang}`);
  }

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between z-50 absolute top-0">
      <Logo size="sm" />

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8 text-base text-gray-600">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="hover:text-gray-900 transition-colors">
            {l.label}
          </a>
        ))}
      </div>

      {/* Desktop language switcher */}
      <div className="hidden md:flex items-center gap-1 text-sm font-medium">
        {LANGS.map((l, i) => (
          <span key={l} className="flex items-center gap-1">
            <button
              onClick={() => switchLang(l)}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                lang === l ? "text-gray-900 font-semibold" : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {l.toUpperCase()}
            </button>
            {i < LANGS.length - 1 && <span className="text-gray-200">|</span>}
          </span>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-gray-600 z-50"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {open ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-0 bg-white z-40 flex flex-col items-center justify-center gap-8">
          <Logo size="sm" />
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-2xl font-medium text-gray-800 hover:text-pastel-blue transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          {/* Mobile language switcher */}
          <div className="flex items-center gap-3 text-base font-medium mt-4">
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
