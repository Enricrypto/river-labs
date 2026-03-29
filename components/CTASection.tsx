import Link from "next/link";
import type { Dict } from "@/lib/translations";

export default function CTASection({ dict, lang }: { dict: Dict["cta"]; lang: string }) {
  return (
    <section id="contact" className="py-24 px-4 w-full">
      <div className="max-w-5xl mx-auto bg-gray-950 rounded-[2rem] px-10 md:px-16 py-16 md:py-20 relative overflow-hidden">

        {/* Background accents */}
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-pastel-blue opacity-[0.06] blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-75 h-75 rounded-full bg-pastel-green opacity-[0.05] blur-3xl -translate-x-1/4 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mb-5 leading-[1.1]">
            {dict.heading}
          </h2>
          <p className="text-lg text-gray-400 font-normal leading-relaxed mb-10">
            {dict.sub}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
            <Link
              href={`/${lang}/diagnostic`}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-gray-900 text-base font-medium hover:bg-gray-100 transition-colors"
            >
              {dict.btn1}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/20 text-white text-base font-medium hover:bg-white/5 transition-colors"
            >
              {dict.btn2}
            </Link>
          </div>

          <p className="text-sm text-gray-600">{dict.badge}</p>
        </div>
      </div>
    </section>
  );
}
