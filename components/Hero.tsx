import Link from "next/link";
import type { Dict } from "@/lib/translations";

export default function Hero({ dict }: { dict: Dict["hero"] }) {
  return (
    <section className="pt-28 pb-12 px-4 md:px-6 w-full max-w-7xl mx-auto flex flex-col items-center">
      <div className="w-full bg-[#f6faf8] rounded-[2rem] md:rounded-[3rem] px-6 py-20 md:py-32 flex flex-col items-center text-center relative overflow-hidden border border-gray-100">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium text-gray-900 tracking-tight leading-[1.1] max-w-4xl mb-6">
          {dict.heading1} <span className="italic text-gray-600">{dict.headingItalic}</span> {dict.heading2}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed font-normal">
          {dict.sub}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-pastel-blue text-white text-lg font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            {dict.cta1}
          </Link>
          <Link
            href="#case-studies"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-pastel-green text-gray-700 text-lg font-medium hover:bg-pastel-green/10 transition-colors w-full sm:w-auto bg-white"
          >
            {dict.cta2}
          </Link>
        </div>

        {/* Abstract Chart */}
        <div className="mt-12 md:mt-20 w-full max-w-3xl aspect-[21/9] bg-white rounded-xl shadow-sm border border-gray-200 relative flex items-end justify-around px-4 md:p-8 py-4 opacity-90 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 pointer-events-none" />
          <div className="w-[12%] h-[40%] bg-pastel-blue rounded-t-md" />
          <div className="w-[12%] h-[60%] bg-pastel-green rounded-t-md" />
          <div className="w-[12%] h-[30%] bg-pastel-purple rounded-t-md" />
          <div className="w-[12%] h-[80%] bg-pastel-blue rounded-t-md" />
          <div className="w-[12%] h-[95%] bg-pastel-green rounded-t-md shadow-[0_0_20px_rgba(181,234,215,0.4)] relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-900 whitespace-nowrap">+40%</div>
          </div>
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none text-gray-300"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              d="M10,80 Q30,60 50,70 T90,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
