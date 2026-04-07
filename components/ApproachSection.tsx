import type { Dict } from "@/lib/translations";

const triadColors = [
  { label: "text-pastel-blue", card: "border-pastel-blue/30 bg-pastel-blue/5" },
  { label: "text-pastel-green", card: "border-pastel-green/30 bg-pastel-green/5" },
  { label: "text-pastel-purple", card: "border-pastel-purple/30 bg-pastel-purple/5" },
];

const triadLabels = ["Co-criamos", "Capacitamos", "Entregamos"];

export default function ApproachSection({ dict }: { dict: Dict["methodology"] }) {
  const principles = dict.principles;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="max-w-2xl mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5">
          {dict.triadHeading}
        </h2>
        <p className="text-lg text-gray-500 font-normal leading-relaxed">
          {dict.sub}
        </p>
      </div>

      {/* Triangle layout */}
      <div className="flex flex-col items-center gap-6 md:block md:relative md:h-80 max-w-2xl mx-auto">

        {/* Top — Co-criamos */}
        <div className={`w-full max-w-xs rounded-2xl border px-6 py-5 text-center md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0 ${triadColors[0].card}`}>
          <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${triadColors[0].label}`}>
            {triadLabels[0]}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {principles[0].replace(/^Co-criamos\s*—\s*/i, "").replace(/^We co-create\s*—\s*/i, "").replace(/^Cocreamos\s*—\s*/i, "")}
          </p>
        </div>

        {/* Center node (desktop only) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gray-900 items-center justify-center z-10 shadow-lg">
          <svg viewBox="0 0 64 64" className="w-6 h-6" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 24 Q21 8 32 24 T54 24" />
            <path d="M10 40 Q21 24 32 40 T54 40" />
          </svg>
        </div>

        {/* Bottom left — Capacitamos */}
        <div className={`w-full max-w-xs rounded-2xl border px-6 py-5 text-center md:absolute md:left-0 md:bottom-0 ${triadColors[1].card}`}>
          <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${triadColors[1].label}`}>
            {triadLabels[1]}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {principles[1].replace(/^Capacitamos\s*—\s*/i, "").replace(/^We train\s*—\s*/i, "")}
          </p>
        </div>

        {/* Bottom right — Entregamos */}
        <div className={`w-full max-w-xs rounded-2xl border px-6 py-5 text-center md:absolute md:right-0 md:bottom-0 ${triadColors[2].card}`}>
          <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${triadColors[2].label}`}>
            {triadLabels[2]}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {principles[2].replace(/^Entregamos\s*—\s*/i, "").replace(/^We deliver\s*—\s*/i, "")}
          </p>
        </div>
      </div>
    </section>
  );
}
