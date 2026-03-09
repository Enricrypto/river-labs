import Link from "next/link";
import { Linkedin, Instagram, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import type { Dict } from "@/lib/translations";

export default function Footer({ dict, lang }: { dict: Dict["footer"]; lang: "en" | "es" | "pt" }) {
  return (
    <footer className="w-full border-t border-gray-200 bg-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <Logo size="md" />

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-base text-gray-600 font-medium">
          {dict.links.map((link) => (
            <Link key={link} href="#" className="hover:text-pastel-blue transition-colors">
              {link}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden lg:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-base font-medium hover:bg-gray-100 transition-colors border border-gray-200"
        >
          {lang === "en" ? "Start Free Diagnosis" : lang === "es" ? "Diagnóstico Gratuito" : "Diagnóstico Gratuito"}
        </Link>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-100 text-base text-gray-500 font-normal">
        <p>{dict.copyright}</p>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-pastel-blue transition-colors">
            <Linkedin className="w-5 h-5" strokeWidth={1.5} />
          </Link>
          <Link href="#" className="hover:text-pastel-blue transition-colors">
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
          </Link>
          <Link href="#" className="hover:text-pastel-blue transition-colors">
            <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
