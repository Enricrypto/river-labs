import type { Dict } from "@/lib/translations";

export default function AuthoritySection({ dict }: { dict: Dict["authority"] }) {
  return (
    <section className="py-6 px-4 md:px-6 w-full max-w-7xl mx-auto">
      <div className="w-full bg-[#0F1D56] rounded-[2rem] md:rounded-[3rem] px-8 md:px-14 py-16 md:py-24 relative overflow-hidden">

        {/* Dot grid */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="auth-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.07)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#auth-dots)" />
        </svg>

        {/* Glow blob */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-indigo-500 opacity-20 blur-[100px] pointer-events-none" />

        {/* Two columns */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: heading + paragraphs */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white tracking-tight leading-snug">
              {dict.heading}
            </h2>
            <p className="text-base text-white/55 font-normal leading-relaxed">
              {dict.paragraphs[0]}
            </p>
            <p className="font-serif text-xl md:text-2xl font-medium text-white/80 italic leading-snug">
              {dict.paragraphs[1]}
            </p>
          </div>

          {/* Right: white inner card */}
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-gray-300">
                Automação · Engenharia
              </span>
              <span className="text-lg font-semibold text-gray-900">
                Lumina - Dubai
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl font-serif font-medium text-gray-300 line-through decoration-red-300">
                  4-5 dias
                </span>
                <span className="text-xs text-gray-400 font-mono tracking-wide uppercase">antes</span>
              </div>
              <span className="text-2xl text-gray-200 font-light">→</span>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl font-serif font-medium text-[#0F1D56]">
                  &lt; 3 horas
                </span>
                <span className="text-xs text-gray-400 font-mono tracking-wide uppercase">depois</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-5">
              {dict.paragraphs[2]}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
