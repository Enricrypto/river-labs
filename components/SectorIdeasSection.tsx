import type { Dict } from "@/lib/translations";

const sectorStyles = [
  { iconBg: "bg-pastel-blue/10", dotColor: "bg-blue-400", headColor: "text-blue-600", border: "border-pastel-blue/20" },
  { iconBg: "bg-pastel-green/10", dotColor: "bg-emerald-400", headColor: "text-emerald-600", border: "border-pastel-green/20" },
  { iconBg: "bg-pastel-purple/10", dotColor: "bg-purple-400", headColor: "text-purple-600", border: "border-pastel-purple/20" },
  { iconBg: "bg-amber-50", dotColor: "bg-amber-400", headColor: "text-amber-600", border: "border-amber-100" },
];

const sectorIcons = [
  // Truck
  <svg key="tr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  // Store
  <svg key="st" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1-6h16l1 6"/><path d="M3 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0"/><path d="M5 9v12h14V9"/></svg>,
  // Briefcase
  <svg key="br" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
  // Scale
  <svg key="sc" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 9l9-6 9 6"/><path d="M3 9l4 8H3M21 9l-4 8h4"/></svg>,
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {dict.sectors.map((sector, idx) => {
          const s = sectorStyles[idx];
          return (
            <div key={idx} className={`bg-white rounded-2xl border ${s.border} p-6 flex flex-col gap-4`}>
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className={`w-7 h-7 rounded-lg ${s.iconBg} flex items-center justify-center ${s.headColor}`}>
                  {sectorIcons[idx]}
                </div>
                <h3 className={`font-sans text-sm font-700 font-bold ${s.headColor}`}>{sector.name}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {sector.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-snug">
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dotColor} shrink-0 mt-1.5`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
