"use client";

import { Lock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CLIENTS = [
  {
    href: "/apia",
    accent: "#A3BFFA",
    accentDim: "rgba(163,191,250,0.08)",
    accentBorder: "rgba(163,191,250,0.15)",
    label: "Grupo Ápia × River Labs",
    desc: "Construção pesada, licitações e gestão de contratos — estudo de mercado e diagnóstico personalizado.",
    teaser: "R$210M",
    teaserLabel: "em alavancas identificadas",
  },
  {
    href: "/matrisoja",
    accent: "#2DD4BF",
    accentDim: "rgba(45,212,191,0.08)",
    accentBorder: "rgba(45,212,191,0.15)",
    label: "Matrisoja × River Labs",
    desc: "Trading de soja, planejamento de safra e compliance logístico — análise de impacto financeiro com IA.",
    teaser: "R$13,02M",
    teaserLabel: "em alavancas identificadas",
  },
  {
    href: "/pier-maua",
    accent: "#F472B6",
    accentDim: "rgba(244,114,182,0.08)",
    accentBorder: "rgba(244,114,182,0.15)",
    label: "Píer Mauá × River Labs",
    desc: "Terminal de cruzeiros, eventos e compliance portuário — estudo baseado em dados reais do balanço 2023.",
    teaser: "R$48M",
    teaserLabel: "em alavancas identificadas",
  },
  {
    href: "/trem-corcovado",
    accent: "#34D399",
    accentDim: "rgba(52,211,153,0.08)",
    accentBorder: "rgba(52,211,153,0.15)",
    label: "Trem do Corcovado × River Labs",
    desc: "Bilheteria, operação ferroviária e compliance ICMBio — análise de receita e manutenção preditiva.",
    teaser: "R$13,7M",
    teaserLabel: "em alavancas identificadas",
  },
  {
    href: "/bondinho",
    accent: "#F59E0B",
    accentDim: "rgba(245,158,11,0.08)",
    accentBorder: "rgba(245,158,11,0.15)",
    label: "Bondinho Pão de Açúcar × River Labs",
    desc: "Teleférico, eventos e gastronomia — análise de bilheteria dinâmica e manutenção preditiva.",
    teaser: "R$34M",
    teaserLabel: "em alavancas identificadas",
  },
  {
    href: "/cataratas",
    accent: "#C084FC",
    accentDim: "rgba(192,132,252,0.08)",
    accentBorder: "rgba(192,132,252,0.15)",
    label: "Grupo Cataratas × River Labs",
    desc: "7 unidades de ecoturismo (AquaRio, BioParque, Cataratas, Noronha) — análise de fluxo e compliance ICMBio.",
    teaser: "R$135M",
    teaserLabel: "em alavancas identificadas",
  },
];

export default function ClientAccessCards() {
  return (
    <section id="case-studies" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-gray-600 text-xs font-medium uppercase tracking-widest mb-3">
              Acesso restrito · Estudos exclusivos
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-medium tracking-tight">
              Diagnósticos em produção
            </h2>
          </div>
          <p className="hidden md:block text-gray-600 text-sm max-w-xs text-right leading-relaxed">
            Cada estudo é baseado em documentos financeiros reais do cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CLIENTS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group block rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: c.accentDim, border: `1px solid ${c.accentBorder}` }}
                >
                  <Lock className="w-4 h-4" style={{ color: c.accent }} strokeWidth={1.5} />
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs font-medium tracking-widest uppercase mb-1"
                    style={{ color: c.accent }}
                  >
                    Acesso restrito
                  </p>
                  <h3 className="font-serif text-lg md:text-xl text-white font-medium tracking-tight mb-1.5">
                    {c.label}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.desc}</p>

                  {/* Financial teaser */}
                  <div
                    className="inline-flex items-baseline gap-1.5 px-3 py-1.5 rounded-lg"
                    style={{ background: c.accentDim, border: `1px solid ${c.accentBorder}` }}
                  >
                    <span className="font-serif text-lg font-medium" style={{ color: c.accent }}>
                      {c.teaser}
                    </span>
                    <span className="text-xs" style={{ color: c.accent, opacity: 0.7 }}>
                      {c.teaserLabel}
                    </span>
                  </div>
                </div>

                <div
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{ border: `1px solid ${c.accentBorder}`, color: c.accent }}
                >
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
