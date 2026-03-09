import { X, Check } from "lucide-react";
import Logo from "./Logo";
import type { Dict } from "@/lib/translations";

export default function ComparisonSection({ dict }: { dict: Dict["comparison"] }) {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto w-full">
      <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-16 text-center">
        {dict.heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="bg-gray-50 p-8 md:p-12 flex flex-col gap-8 border-b md:border-b-0 md:border-r border-gray-200">
          <h3 className="text-2xl tracking-tight font-medium text-gray-500 mb-4">{dict.badTitle}</h3>
          <ul className="flex flex-col gap-6 text-lg text-gray-600 font-normal">
            {dict.badItems.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <X className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-8 md:p-12 flex flex-col gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue/5 to-transparent pointer-events-none" />
          <div className="mb-4">
            <Logo size="sm" />
          </div>
          <ul className="flex flex-col gap-6 text-lg text-gray-800 font-normal">
            {dict.goodItems.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <Check className="w-6 h-6 text-pastel-blue shrink-0 mt-1" strokeWidth={1.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
