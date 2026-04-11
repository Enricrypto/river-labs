import type { Dict } from "@/lib/translations";

const ICONS = [
  // Diagnóstico — magnifying glass with pulse line
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5l4 4" />
      <path d="M8 11h2l1.5-2.5L13 13l1.5-2H16" />
    </svg>
  ),
  // Sistemas de IA — neural network nodes
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M7 6.5l3.5 4.5M7 17.5l3.5-4.5M14 12h3" />
    </svg>
  ),
  // Treinamento e Entrega — person with upward arrow
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v8M16 11l3-3 3 3" />
    </svg>
  ),
];

function DotPattern({ id }: { id: string }) {
  return (
    <svg className="absolute inset-x-0 bottom-0 top-10 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Indigo dots — primary grid */}
        <pattern id={`indigo-${id}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(99,102,241,0.22)" />
        </pattern>
        {/* Violet dots — offset secondary grid */}
        <pattern id={`violet-${id}`} x="12" y="12" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(139,92,246,0.15)" />
        </pattern>
        {/* Fade mask from top-right */}
        <radialGradient id={`fade-${id}`} cx="90%" cy="10%" r="75%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="55%"  stopColor="white" stopOpacity="0.5" />
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

export default function ServicesSection({ dict }: { dict: Dict["services"] }) {
  const [featured, ...rest] = dict.items;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-gray-100">
      <div className="max-w-2xl mb-12">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5">
          {dict.heading}
        </h2>
        <p className="text-lg text-gray-500 font-normal leading-relaxed">{dict.sub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Featured card — Service 1 */}
        <div
          className="relative overflow-hidden border border-indigo-100 border-t-2 border-t-indigo-500 rounded-2xl p-10 flex flex-col gap-6"
          style={{ background: "linear-gradient(135deg, #EEF0FF 0%, #EDE8FF 100%)" }}
        >
          <DotPattern id="s0" />
          <div className="relative z-10 w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0">
            {ICONS[0]}
          </div>
          <div className="relative z-10 flex flex-col gap-3">
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-gray-900 leading-snug">
              {featured.title}
            </h3>
            <p className="text-base text-gray-500 font-normal leading-relaxed">
              {featured.desc}
            </p>
          </div>
          <div className="relative z-10 mt-auto pt-6 border-t border-indigo-100">
            <span className="font-mono text-xs tracking-widest uppercase text-indigo-400">
              Ponto de entrada
            </span>
          </div>
        </div>

        {/* Stacked cards — Services 2 & 3 */}
        <div className="flex flex-col gap-5">
          {rest.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden border border-violet-100 rounded-2xl p-8 flex flex-col gap-4 flex-1"
              style={{ background: "linear-gradient(135deg, #F0EBFF 0%, #EEF0FF 100%)" }}
            >
              <DotPattern id={`s${idx + 1}`} />
              <div className="relative z-10 w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0">
                {ICONS[idx + 1]}
              </div>
              <h3 className="relative z-10 font-serif text-xl font-medium text-gray-900 leading-snug">
                {item.title}
              </h3>
              <p className="relative z-10 text-base text-gray-500 font-normal leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
