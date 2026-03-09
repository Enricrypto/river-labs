import type { Dict } from "@/lib/translations";

const stepColors = [
  "bg-pastel-blue text-white",
  "bg-pastel-green text-gray-800",
  "bg-pastel-purple text-gray-800",
  "bg-gray-900 text-white",
];

export default function MethodologySection({ dict }: { dict: Dict["methodology"] }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full bg-gray-50 rounded-[2rem] md:rounded-[3rem] mb-24 border border-gray-100">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
          {dict.heading}
        </h2>
        <p className="text-lg text-gray-600 font-normal">
          {dict.sub}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {dict.steps.map((step, idx) => (
          <div
            key={idx}
            className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm relative pt-12"
          >
            <div className={`absolute -top-5 left-8 w-10 h-10 rounded-full ${stepColors[idx]} flex items-center justify-center font-medium text-xl shadow-sm border-4 border-gray-50`}>
              {idx + 1}
            </div>
            <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">
              {step.title}{" "}
              <span className="text-base text-gray-400 font-normal ml-2">({step.timeline})</span>
            </h3>
            <p className="text-lg text-gray-600 font-normal">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
