import Link from "next/link";
import { Linkedin, Instagram, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import type { Dict } from "@/lib/translations";

export default function Footer({ dict, lang }: { dict: Dict["footer"]; lang: "en" | "es" | "pt" }) {
  return (
    <footer className="w-full bg-[#0F1D56] relative overflow-hidden pt-16 pb-8 px-6">
      {/* Dot grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="footer-dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-dot-grid)" />
      </svg>

      {/* Glow blob */}
      <div className="absolute -top-24 -right-24 w-120 h-120 rounded-full bg-indigo-600 opacity-15 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <Logo size="md" variant="light" />

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-base text-white/60 font-medium">
          {dict.links.map((link, i) => {
            const href = i === 0 ? `/${lang}#services` : i === 1 ? `/${lang}/cases` : `/${lang}/contact`;
            return (
              <Link key={link} href={href} className="hover:text-white transition-colors">
                {link}
              </Link>
            );
          })}
        </div>

        <Link
          href={`/${lang}/diagnostic`}
          className="inline-flex w-full md:w-auto items-center justify-center px-6 py-3 rounded-full bg-white text-[#0A0F2C] text-base font-medium hover:bg-white/90 transition-colors"
        >
          {dict.cta}
        </Link>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-base text-white/30 font-normal">
        <p>{dict.copyright}</p>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-white/50 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" strokeWidth={1.5} />
          </Link>
          <Link href="#" className="text-white/50 hover:text-white transition-colors">
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
          </Link>
          <Link href="#" className="text-white/50 hover:text-white transition-colors">
            <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
