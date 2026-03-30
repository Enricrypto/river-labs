import { Check } from "lucide-react";
import type { Dict } from "@/lib/translations";

export default function ComparisonSection({ dict }: { dict: Dict["comparison"] }) {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-gray-100">
      <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-16 max-w-xl">
        {dict.heading}
      </h2>

      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-white px-8 md:px-10 py-10 flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-pastel-blue/5 to-transparent pointer-events-none" />
          <p className="text-xs font-medium text-gray-900 uppercase tracking-widest relative z-10">River Labs</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
            {dict.goodItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-pastel-blue shrink-0 mt-1" strokeWidth={2.5} />
                <span className="text-base text-gray-800 font-normal leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
