import type { Dict } from "@/lib/translations";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function DifferentiationSection({ dict }: { dict: Dict["differentiation"] }) {
  return (
    <section className="py-6 px-4 md:px-6 w-full max-w-7xl mx-auto">
      <div className="w-full bg-[#0F1D56] rounded-4xl md:rounded-5xl px-8 md:px-14 py-16 md:py-24 relative overflow-hidden">

        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diff-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.07)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diff-dots)" />
        </svg>

        {/* Glow blob */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-indigo-500 opacity-20 blur-[100px] pointer-events-none" />

        {/* Two columns */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: heading + intro */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white tracking-tight leading-snug">
              {dict.heading}
            </h2>
            <p className="text-base text-white/55 font-normal leading-relaxed">
              {dict.intro}
            </p>
          </div>

          {/* Right: terminal card */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

            {/* Terminal top bar */}
            <div className="bg-gray-50 border-b border-gray-100 px-5 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-300" />
              <div className="w-3 h-3 rounded-full bg-yellow-300" />
              <div className="w-3 h-3 rounded-full bg-green-300" />
              <span className="ml-3 font-mono text-xs text-gray-400">river-labs</span>
            </div>

            {/* Card body — copy unchanged */}
            <div className="p-8 flex flex-col gap-6">
              <p className="font-serif text-2xl font-medium text-gray-900 leading-snug">
                {dict.pivot}
              </p>
              <ul className="flex flex-col gap-4">
                {dict.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon />
                    </div>
                    <span className="text-base text-gray-700 font-normal leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
