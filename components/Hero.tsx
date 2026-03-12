import Link from "next/link";
import { Icon } from "@iconify/react";
import type { Dict } from "@/lib/translations";

const STEPS = {
  en: [
    { num: "01", icon: "mdi:magnify", color: "#A3BFFA", bg: "rgba(163,191,250,0.12)", title: "Process Discovery", deliverable: "Process map" },
    { num: "02", icon: "mdi:chart-bar", color: "#D7BDE2", bg: "rgba(215,189,226,0.12)", title: "Opportunity Assessment", deliverable: "Use case matrix" },
    { num: "03", icon: "mdi:cpu-64-bit", color: "#B5EAD7", bg: "rgba(181,234,215,0.12)", title: "Solution Design", deliverable: "Architecture plan" },
    { num: "04", icon: "mdi:rocket-launch-outline", color: "#A3BFFA", bg: "rgba(163,191,250,0.12)", title: "Pilot Build", deliverable: "Prototype + metrics" },
    { num: "05", icon: "mdi:trending-up", color: "#B5EAD7", bg: "rgba(181,234,215,0.12)", title: "Deploy & Optimize", deliverable: "Production system" },
  ],
  es: [
    { num: "01", icon: "mdi:magnify", color: "#A3BFFA", bg: "rgba(163,191,250,0.12)", title: "Descubrimiento", deliverable: "Mapa de proceso" },
    { num: "02", icon: "mdi:chart-bar", color: "#D7BDE2", bg: "rgba(215,189,226,0.12)", title: "Evaluación", deliverable: "Matriz de casos" },
    { num: "03", icon: "mdi:cpu-64-bit", color: "#B5EAD7", bg: "rgba(181,234,215,0.12)", title: "Diseño de solución", deliverable: "Plan de arquitectura" },
    { num: "04", icon: "mdi:rocket-launch-outline", color: "#A3BFFA", bg: "rgba(163,191,250,0.12)", title: "Piloto", deliverable: "Prototipo + métricas" },
    { num: "05", icon: "mdi:trending-up", color: "#B5EAD7", bg: "rgba(181,234,215,0.12)", title: "Despliegue", deliverable: "Sistema en producción" },
  ],
  pt: [
    { num: "01", icon: "mdi:magnify", color: "#A3BFFA", bg: "rgba(163,191,250,0.12)", title: "Descoberta", deliverable: "Mapa de processo" },
    { num: "02", icon: "mdi:chart-bar", color: "#D7BDE2", bg: "rgba(215,189,226,0.12)", title: "Avaliação", deliverable: "Matriz de casos" },
    { num: "03", icon: "mdi:cpu-64-bit", color: "#B5EAD7", bg: "rgba(181,234,215,0.12)", title: "Design da solução", deliverable: "Plano de arquitetura" },
    { num: "04", icon: "mdi:rocket-launch-outline", color: "#A3BFFA", bg: "rgba(163,191,250,0.12)", title: "Piloto", deliverable: "Protótipo + métricas" },
    { num: "05", icon: "mdi:trending-up", color: "#B5EAD7", bg: "rgba(181,234,215,0.12)", title: "Deploy & Otimização", deliverable: "Sistema em produção" },
  ],
};

export default function Hero({ dict, lang }: { dict: Dict["hero"]; lang: string }) {
  return (
    <section className="pt-28 pb-12 px-4 md:px-6 w-full max-w-7xl mx-auto flex flex-col items-center">
      <div className="w-full bg-[#f6faf8] rounded-[2rem] md:rounded-[3rem] px-6 py-20 md:py-32 flex flex-col items-center text-center relative overflow-hidden border border-gray-100">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium text-gray-900 tracking-tight leading-[1.1] max-w-4xl mb-6">
          {dict.heading1} <span className="italic text-gray-600">{dict.headingItalic}</span> {dict.heading2}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed font-normal">
          {dict.sub}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href={`/${lang}/diagnostic`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-pastel-blue text-white text-lg font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            {dict.cta1}
          </Link>
          <Link
            href="#case-studies"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-pastel-green text-gray-700 text-lg font-medium hover:bg-pastel-green/10 transition-colors w-full sm:w-auto bg-white"
          >
            {dict.cta2}
          </Link>
        </div>

        {/* Process roadmap */}
        <div className="mt-12 md:mt-20 w-full max-w-4xl bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-6 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <div className="flex items-stretch gap-1.5 min-w-150">
            {(STEPS[(lang as keyof typeof STEPS) ?? "en"] ?? STEPS.en).map((step, i, arr) => (
              <div key={step.num} className="flex items-stretch gap-1.5 flex-1">
                {/* Step card */}
                <div className="flex-1 rounded-xl px-3 py-3.5 flex flex-col gap-2.5" style={{ background: step.bg, border: `1px solid ${step.color}22` }}>
                  {/* Icon + number */}
                  <div className="flex items-center justify-between">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${step.color}22` }}>
                      <Icon icon={step.icon} width={15} style={{ color: step.color }} />
                    </div>
                    <span className="font-mono text-[10px] font-semibold" style={{ color: step.color }}>{step.num}</span>
                  </div>
                  {/* Title */}
                  <p className="text-gray-800 text-xs font-semibold leading-tight">{step.title}</p>
                  {/* Deliverable */}
                  <div className="mt-auto">
                    <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-medium text-gray-500 bg-white/70 border border-gray-200/60">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
                {/* Arrow connector */}
                {i < arr.length - 1 && (
                  <div className="flex items-center shrink-0 self-center">
                    <Icon icon="mdi:chevron-right" width={14} className="text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
