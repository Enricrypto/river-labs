import type { Dict } from "@/lib/translations";

export default function MethodologySection({ dict }: { dict: Dict["methodology"] }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left: heading + sub */}
        <div className="md:sticky md:top-24">
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
            {dict.heading}
          </h2>
          <p className="text-lg text-gray-500 font-normal leading-relaxed max-w-sm">
            {dict.sub}
          </p>
        </div>

        {/* Right: steps */}
        <div className="flex flex-col">
          {dict.steps.map((step, idx) => (
            <div key={idx} className="flex gap-6 pb-12 last:pb-0 relative">
              {/* Vertical line */}
              {idx < dict.steps.length - 1 && (
                <div className="absolute left-4 top-9 bottom-0 w-px bg-gray-100" />
              )}

              {/* Step number bubble */}
              <div className="shrink-0 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center z-10">
                <span className="text-white text-xs font-bold">{idx + 1}</span>
              </div>

              <div className="pt-0.5">
                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-gray-900">
                    {step.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-widest whitespace-nowrap">
                    {step.timeline}
                  </span>
                </div>
                <p className="text-base text-gray-500 font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
