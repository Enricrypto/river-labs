import type { Dict } from "@/lib/translations";

const ICONS = [
  // Fragmented data — stacked layers with a gap
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 12l10 5 10-5" />
      <line x1="2" y1="17" x2="8" y2="20" />
      <line x1="16" y1="20" x2="22" y2="17" />
    </svg>
  ),
  // Rework loop — circular arrows
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  ),
  // Complex systems — gear with orbit nodes
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
];

export default function ProblemSection({ dict }: { dict: Dict["problems"] }) {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto w-full">

      <div className="max-w-2xl mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5">
          {dict.heading}
        </h2>
        <p className="text-lg text-gray-500 font-normal leading-relaxed">
          {dict.sub}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {dict.items.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-5">

            {/* Icon container */}
            <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0">
              {ICONS[idx]}
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-gray-900 leading-snug">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-base text-gray-500 font-normal leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}
