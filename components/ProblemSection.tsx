import type { Dict } from "@/lib/translations";

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
        {dict.items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white px-8 py-10 flex flex-col gap-5"
          >
            <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-gray-300">
              0{idx + 1}
            </span>
            <h3 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-gray-900 leading-snug">
              {item.title}
            </h3>
            <p className="text-base text-gray-500 font-normal leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
