import type { Dict } from "@/lib/translations";

// Hardcoded key metrics per case — move to dict.items[].metric later
const METRICS = [
  { value: "1 mês",  label: "para primeira página" },
  { value: "91%",    label: "redução em custos" },
  { value: "< 3h",   label: "por relatório" },
];

function DotCluster({ id }: { id: string }) {
  return (
    <svg
      className="absolute top-6 right-0 w-full h-48 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={`dots-${id}`} x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(99,102,241,0.28)" />
        </pattern>
        <radialGradient id={`fade-${id}`} cx="100%" cy="0%" r="80%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="60%"  stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`mask-${id}`}>
          <rect width="100%" height="100%" fill={`url(#fade-${id})`} />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill={`url(#dots-${id})`} mask={`url(#mask-${id})`} />
    </svg>
  );
}

export default function CasesSection({ dict }: { dict: Dict["cases"] }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="max-w-2xl mb-12">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5">
          {dict.heading}
        </h2>
        <p className="text-lg text-gray-500 font-normal leading-relaxed">{dict.sub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dict.items.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#EEF0FF] rounded-2xl p-8 flex flex-col relative overflow-hidden"
          >
            <DotCluster id={`case-${idx}`} />

            {/* Top content — grows to fill card, pushing result to bottom */}
            <div className="relative z-10 flex flex-col gap-5 flex-1">

              {/* Tag + client */}
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-indigo-300">
                  {item.tag}
                </span>
                <h3 className="font-serif text-2xl font-medium text-gray-900">
                  {item.client}
                </h3>
              </div>

              {/* Key metric */}
              <div className="flex flex-col gap-0.5">
                <span className="text-5xl font-bold text-indigo-500 leading-none tracking-tight">
                  {METRICS[idx]?.value}
                </span>
                <span className="text-xs font-mono tracking-widest uppercase text-indigo-300 mt-1">
                  {METRICS[idx]?.label}
                </span>
              </div>

              {/* Problem */}
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-gray-400">
                  {dict.problemLabel}
                </span>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.context}
                </p>
              </div>

            </div>

            {/* Result — always at bottom, never inside the flex-1 wrapper */}
            <div className="relative z-10 border-t border-indigo-100 pt-4 mt-6 flex flex-col gap-1.5">
              <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-gray-400">
                {dict.resultLabel}
              </span>
              <p className="text-sm font-semibold text-gray-800 leading-snug">
                {item.result}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
