import type { Dict } from "@/lib/translations";

const stepColors = [
  "bg-pastel-blue/10 border-pastel-blue/20",
  "bg-pastel-purple/10 border-pastel-purple/20",
  "bg-pastel-green/10 border-pastel-green/20",
  "bg-pastel-blue/10 border-pastel-blue/20",
  "bg-pastel-green/10 border-pastel-green/20",
];

const letters = ["a", "b", "c"];

export default function MethodologySection({ dict }: { dict: Dict["methodology"] }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      {/* Heading */}
      <div className="max-w-2xl mb-10">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5">
          {dict.heading}
        </h2>
        <p className="text-lg text-gray-500 font-normal leading-relaxed">
          {dict.sub}
        </p>
      </div>

      {/* Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden mb-6">
        {dict.principles.map((text, idx) => (
          <div key={idx} className="bg-white px-8 py-8 flex items-start gap-4">
            <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-gray-400 shrink-0 pt-1">
              {letters[idx]}
            </span>
            <p className="text-base text-gray-600 font-normal leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* Process strip */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm overflow-x-auto">
        <div className="flex items-stretch gap-2 min-w-[640px]">
          {dict.steps.flatMap((step, idx) => [
            <div
              key={idx}
              className={`flex-1 rounded-xl px-4 py-4 flex flex-col gap-3 border ${stepColors[idx]}`}
            >
              <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-gray-400">
                0{idx + 1}
              </span>
              <h3 className="font-serif text-base font-medium text-gray-900 leading-snug">
                {step.title}
              </h3>
              <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mt-auto pt-3 border-t border-gray-100">
                {step.timeline}
              </span>
            </div>,
            ...(idx < dict.steps.length - 1
              ? [
                  <div key={`arrow-${idx}`} className="flex items-center text-gray-300 shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>,
                ]
              : []),
          ])}
        </div>
      </div>
    </section>
  );
}
