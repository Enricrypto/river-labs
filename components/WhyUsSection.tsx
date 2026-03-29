import Link from "next/link";
import type { Dict } from "@/lib/translations";

export default function WhyUsSection({ dict, lang }: { dict: Dict["whyus"]; lang: string }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left: heading + CTA */}
        <div>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-8">
            {dict.heading}
          </h2>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-900 text-white text-base font-medium hover:bg-gray-800 transition-colors"
          >
            {dict.cta}
          </Link>
        </div>

        {/* Right: feature list */}
        <div className="flex flex-col divide-y divide-gray-100">
          {dict.features.map((f, idx) => (
            <div key={idx} className="py-8 first:pt-0 last:pb-0">
              <div className="flex items-start gap-4">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-gray-300 pt-1 shrink-0">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-3">
                    {f.title}
                  </h3>
                  <p className="text-base text-gray-500 font-normal leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
