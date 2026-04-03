import type { Dict } from "@/lib/translations";

const serviceStyles = [
  { iconBg: "bg-pastel-blue/10", iconColor: "text-blue-500", border: "border-pastel-blue/20" },
  { iconBg: "bg-pastel-purple/10", iconColor: "text-purple-400", border: "border-pastel-purple/20" },
  { iconBg: "bg-pastel-green/10", iconColor: "text-emerald-500", border: "border-pastel-green/20" },
];

const icons = [
  // Lightbulb
  <svg key="lb" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 4 12.9V17H8v-2.1A7 7 0 0 1 12 2z"/></svg>,
  // Chart
  <svg key="ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  // Code
  <svg key="cd" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
];

export default function ServicesSection({ dict }: { dict: Dict["services"] }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-gray-100">
      <div className="max-w-2xl mb-12">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5">
          {dict.heading}
        </h2>
        <p className="text-lg text-gray-500 font-normal leading-relaxed">{dict.sub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dict.items.map((item, idx) => {
          const s = serviceStyles[idx];
          return (
            <div
              key={idx}
              className={`bg-white rounded-2xl border ${s.border} px-8 py-8 flex flex-col gap-5`}
            >
              <div className={`w-10 h-10 rounded-xl ${s.iconBg} border ${s.border} flex items-center justify-center ${s.iconColor}`}>
                {icons[idx]}
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-gray-900 mb-2">{item.title}</h3>
                <p className="text-base text-gray-500 font-normal leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
