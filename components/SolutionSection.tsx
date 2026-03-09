import Link from "next/link";
import type { Dict } from "@/lib/translations";

const rowColors = ["text-pastel-green", "text-pastel-blue", "text-pastel-purple", "text-pastel-green", "text-pastel-blue"];

export default function SolutionSection({ dict }: { dict: Dict["solutions"] }) {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-gray-100">
      <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-16 text-center">
        {dict.heading}
      </h2>

      <div className="flex flex-col gap-4 mb-16">
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-base font-medium text-gray-400 uppercase tracking-widest border-b border-gray-100">
          <div className="col-span-3">{dict.colArea}</div>
          <div className="col-span-6">{dict.colWhat}</div>
          <div className="col-span-3 text-right">{dict.colImpact}</div>
        </div>

        {dict.rows.map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4 p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition-shadow items-center"
          >
            <div className="md:col-span-3 font-medium text-lg text-gray-900">{row.area}</div>
            <div className="md:col-span-6 text-base md:text-lg text-gray-600 font-normal">{row.what}</div>
            <div className={`md:col-span-3 text-left md:text-right font-medium text-base md:text-lg ${rowColors[idx]}`}>{row.impact}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-pastel-blue text-white text-lg font-medium hover:opacity-90 transition-opacity"
        >
          {dict.cta}
        </Link>
      </div>
    </section>
  );
}
