import { User } from "lucide-react";
import type { Dict } from "@/lib/translations";

const accentColors = ["bg-pastel-blue", "bg-pastel-green"];
const statColors = ["text-pastel-blue", "text-pastel-green", "text-pastel-purple"];

export default function TestimonialsSection({ dict }: { dict: Dict["testimonials"] }) {
  return (
    <section id="case-studies" className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-gray-100">
      <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-16 text-center">
        {dict.heading}
      </h2>

      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {dict.items.map((t, idx) => {
          const reverse = idx % 2 !== 0;
          const accentColor = accentColors[idx % accentColors.length];
          return (
            <div
              key={idx}
              className={`flex flex-col ${reverse ? "md:flex-row-reverse md:ml-8" : "md:flex-row"} gap-8 items-start bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm relative`}
            >
              <div
                className={`absolute top-0 ${reverse ? "right-0 rounded-r-2xl hidden md:block" : "left-0 rounded-l-2xl"} w-2 h-full ${accentColor}`}
              />
              {reverse && (
                <div className={`absolute top-0 left-0 w-2 h-full ${accentColor} rounded-l-2xl md:hidden`} />
              )}
              <div className="w-16 h-16 rounded-full bg-gray-100 shrink-0 overflow-hidden border border-gray-200 flex items-center justify-center text-gray-400">
                <User className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className={`flex flex-col gap-4 ${reverse ? "md:text-right" : ""}`}>
                <blockquote className="text-xl md:text-2xl text-gray-900 font-serif italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="text-lg">
                  <p className="font-medium text-gray-900">{t.name}</p>
                  <p className="text-gray-500 font-normal">{t.role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-20 py-8 px-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-wrap items-center justify-around gap-y-6 text-center">
        {dict.stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className={`text-3xl font-medium tracking-tight ${statColors[i % statColors.length]}`}>{s.value}</span>
            <span className="text-base text-gray-500 font-normal">{s.label}</span>
            {i < dict.stats.length - 1 && <div className="hidden md:block absolute w-px h-12 bg-gray-200" />}
          </div>
        ))}
      </div>
    </section>
  );
}
