import type { Dict } from "@/lib/translations";

const stepColors = [
  "bg-pastel-blue/10 border-pastel-blue/20",
  "bg-pastel-purple/10 border-pastel-purple/20",
  "bg-pastel-green/10 border-pastel-green/20",
  "bg-pastel-blue/10 border-pastel-blue/20",
  "bg-pastel-green/10 border-pastel-green/20",
];

const triadColors = [
  { label: "text-pastel-blue", card: "border-pastel-blue/30 bg-pastel-blue/5" },
  { label: "text-pastel-green", card: "border-pastel-green/30 bg-pastel-green/5" },
  { label: "text-pastel-purple", card: "border-pastel-purple/30 bg-pastel-purple/5" },
];

const triadLabels = ["Co-criamos", "Capacitamos", "Entregamos"];

export default function MethodologySection({ dict }: { dict: Dict["methodology"] }) {
  const principles = dict.principles;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      {/* Section heading */}
      <div className="max-w-2xl mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5">
          {dict.heading}
        </h2>
        <p className="text-lg text-gray-500 font-normal leading-relaxed">
          {dict.sub}
        </p>
      </div>

      {/* Triad */}
      <div className="mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10 text-center">
          {dict.triadHeading}
        </p>

        {/* Triangle layout */}
        <div className="flex flex-col items-center gap-6 md:block md:relative md:h-80 max-w-2xl mx-auto">

          {/* Top — Co-criamos */}
          <div className={`w-full max-w-xs rounded-2xl border px-6 py-5 text-center md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0 ${triadColors[0].card}`}>
            <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${triadColors[0].label}`}>
              {triadLabels[0]}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">{principles[0].replace(/^Co-criamos\s*—\s*/i, "").replace(/^We co-create\s*—\s*/i, "").replace(/^Cocreamos\s*—\s*/i, "")}</p>
          </div>

          {/* Bottom left — Capacitamos */}
          <div className={`w-full max-w-xs rounded-2xl border px-6 py-5 text-center md:absolute md:left-0 md:bottom-0 ${triadColors[1].card}`}>
            <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${triadColors[1].label}`}>
              {triadLabels[1]}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">{principles[1].replace(/^Capacitamos\s*—\s*/i, "").replace(/^We train\s*—\s*/i, "")}</p>
          </div>

          {/* Center connector (desktop only) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gray-900 items-center justify-center z-10 shadow-lg">
            <svg viewBox="0 0 64 64" className="w-6 h-6" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 24 Q21 8 32 24 T54 24" />
              <path d="M10 40 Q21 24 32 40 T54 40" />
            </svg>
          </div>

          {/* Bottom right — Entregamos */}
          <div className={`w-full max-w-xs rounded-2xl border px-6 py-5 text-center md:absolute md:right-0 md:bottom-0 ${triadColors[2].card}`}>
            <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${triadColors[2].label}`}>
              {triadLabels[2]}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">{principles[2].replace(/^Entregamos\s*—\s*/i, "").replace(/^We deliver\s*—\s*/i, "")}</p>
          </div>
        </div>
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
