import type { Dict } from "@/lib/translations";

function DotPattern({ id }: { id: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={`indigo-${id}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(99,102,241,0.18)" />
        </pattern>
        <pattern id={`violet-${id}`} x="12" y="12" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(139,92,246,0.12)" />
        </pattern>
        <radialGradient id={`fade-${id}`} cx="50%" cy="50%" r="65%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="60%"  stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`mask-${id}`}>
          <rect width="100%" height="100%" fill={`url(#fade-${id})`} />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill={`url(#indigo-${id})`} mask={`url(#mask-${id})`} />
      <rect width="100%" height="100%" fill={`url(#violet-${id})`} mask={`url(#mask-${id})`} />
    </svg>
  );
}

export default function MethodologySection({ dict }: { dict: Dict["methodology"] }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-gray-100">
      <div className="max-w-2xl mb-10">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5">
          {dict.heading}
        </h2>
      </div>

      <div className="relative overflow-hidden border border-indigo-100 rounded-2xl p-4" style={{ background: "linear-gradient(135deg, #EEF0FF 0%, #EDE8FF 100%)" }}>
        <DotPattern id="meth" />
        <div className="relative z-10 flex items-stretch gap-2 overflow-x-auto min-w-0 pb-1 snap-x snap-mandatory">
          {dict.steps.flatMap((step, idx) => [
            <div
              key={idx}
              className="flex-1 min-w-40 snap-start rounded-xl px-5 py-5 flex flex-col gap-3 bg-[#162470]"
            >
              <div className="flex justify-end">
                <span className="font-mono text-sm font-bold tracking-widest text-indigo-300">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="font-serif text-base font-medium text-white leading-snug">
                {step.title}
              </h3>
              <span className="text-[10px] font-medium uppercase tracking-widest text-white/45 mt-auto pt-3 border-t border-white/10">
                {step.timeline}
              </span>
            </div>,
            ...(idx < dict.steps.length - 1
              ? [
                  <div key={`arrow-${idx}`} className="flex items-center text-indigo-500 shrink-0">
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
