import type { Dict } from "@/lib/translations";

const ICONS = [
  // Receita e Demanda — trending up
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  // Marketing — megaphone
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  ),
  // Compliance & Legal — shield with check
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
];

export default function SectorIdeasSection({ dict }: { dict: Dict["sectorIdeas"] }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-gray-100">
      <div className="max-w-2xl mb-12">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5">
          {dict.heading}
        </h2>
        <p className="text-lg text-gray-500 font-normal leading-relaxed">{dict.sub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {dict.sectors.map((sector, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-8 flex flex-col gap-6 overflow-hidden"
            style={{ background: "linear-gradient(145deg, #0F1D56 0%, #162470 100%)" }}
          >
            {/* Label + sector name */}
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-white/40">
                Casos de uso
              </span>
              <h3 className="text-lg font-semibold text-white leading-snug">
                {sector.name}
              </h3>
            </div>

            {/* Icon */}
            <div>
              {ICONS[idx]}
            </div>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Items */}
            <ul className="flex flex-col gap-3">
              {sector.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-white/60 leading-snug">
                  <span className="w-1 h-1 rounded-full bg-white/40 shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
