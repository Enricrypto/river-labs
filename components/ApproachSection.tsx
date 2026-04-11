import type { Dict } from "@/lib/translations";

const ICONS = [
  // Co-criamos — two people / handshake
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  // Capacitamos — graduation / upward growth
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
    </svg>
  ),
  // Entregamos — box / delivery
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
];

const LABELS = ["Co-criamos", "Capacitamos", "Entregamos"];

export default function ApproachSection({ dict }: { dict: Dict["methodology"] }) {
  return (
    <section id="howwework" className="py-6 px-4 md:px-6 w-full max-w-7xl mx-auto">
      <div className="w-full bg-[#0F1D56] rounded-4xl md:rounded-5xl relative overflow-hidden">

        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="approach-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.07)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#approach-dots)" />
        </svg>

        {/* Glow blob */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-indigo-500 opacity-15 blur-[100px] pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 px-8 md:px-14 pt-16 md:pt-24 pb-12 max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white tracking-tight leading-snug mb-4">
            {dict.triadHeading}
          </h2>
          <p className="text-base text-white/55 font-normal leading-relaxed">
            {dict.sub}
          </p>
        </div>

        {/* 3 principle columns */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
          {dict.principles.map((principle, idx) => (
            <div
              key={idx}
              className={`px-8 md:px-10 py-10 flex flex-col gap-5 ${idx < 2 ? "border-b md:border-b-0 md:border-r border-white/10" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                {ICONS[idx]}
              </div>
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-indigo-300">
                {LABELS[idx]}
              </span>
              <p className="text-base text-white/60 font-normal leading-relaxed">
                {principle.replace(/^(Co-criamos|Capacitamos|Entregamos)\s*-\s*/i, "")}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
