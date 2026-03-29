import Link from "next/link";
import type { Dict } from "@/lib/translations";

export default function Hero({ dict, lang }: { dict: Dict["hero"]; lang: string }) {
  return (
    <section className="pt-28 pb-12 px-4 md:px-6 w-full max-w-7xl mx-auto flex flex-col items-center">
      <div className="w-full bg-[#f6faf8] rounded-[2rem] md:rounded-[3rem] px-8 md:px-16 py-20 md:py-32 flex flex-col relative overflow-hidden border border-gray-100">

        {/* Decorative background circles */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[#A3BFFA] opacity-[0.07] blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[360px] h-[360px] rounded-full bg-[#B5EAD7] opacity-[0.09] blur-3xl translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 tracking-tight leading-[1.08]">
            {dict.heading1}
            <br />
            <span className="italic text-gray-500">{dict.headingItalic}</span>
            <br />
            {dict.heading2}
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mt-8 mb-10 leading-relaxed font-normal max-w-2xl">
            {dict.sub}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <Link
              href={`/${lang}/diagnostic`}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-gray-900 text-white text-base font-medium hover:bg-gray-800 transition-colors"
            >
              {dict.cta1}
            </Link>
            <Link
              href="#case-studies"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-gray-300 text-gray-700 text-base font-medium hover:bg-white transition-colors"
            >
              {dict.cta2}
            </Link>
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="relative z-10 mt-16 md:mt-24 pt-8 border-t border-gray-200/80 grid grid-cols-3 gap-6 max-w-lg">
          <div>
            <p className="font-serif text-3xl md:text-4xl font-medium text-gray-900">90</p>
            <p className="text-xs text-gray-400 mt-1 leading-snug uppercase tracking-wide">dias ao ROI</p>
          </div>
          <div>
            <p className="font-serif text-3xl md:text-4xl font-medium text-gray-900">3</p>
            <p className="text-xs text-gray-400 mt-1 leading-snug uppercase tracking-wide">semanas ao protótipo</p>
          </div>
          <div>
            <p className="font-serif text-3xl md:text-4xl font-medium text-gray-900">6</p>
            <p className="text-xs text-gray-400 mt-1 leading-snug uppercase tracking-wide">clientes ativos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
