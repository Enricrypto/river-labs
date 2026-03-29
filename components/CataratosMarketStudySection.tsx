"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Leaf,
  AlertTriangle,
  Ticket,
  CalendarDays,
  FileCheck,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const GREEN = "#C084FC";
const GREEN_DIM = "rgba(192,132,252,0.1)";
const GREEN_BORDER = "rgba(192,132,252,0.2)";
const SKY = "#38BDF8";
const AMBER = "#F59E0B";

const TOTAL = 6;

const SLIDE_LABELS = [
  "01 — Visão Geral",
  "02 — Contexto de Mercado",
  "03 — Onde o Tempo Vira Dinheiro",
  "04 — IA & Automação",
  "05 — Impacto Financeiro",
  "06 — Por que River Labs",
];

/* ─── Shared UI ───────────────────────────────────────── */
function Source({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium ml-1.5 align-middle"
      style={{ background: "rgba(255,255,255,0.06)", color: "rgb(107,114,128)" }}
    >
      {label}
    </span>
  );
}

function Tool({ name }: { name: string }) {
  return (
    <code
      className="text-[10px] font-mono px-1.5 py-0.5 rounded"
      style={{ background: GREEN_DIM, color: GREEN }}
    >
      {name}
    </code>
  );
}

/* ── Slide 01 ─────────────────────────────────────────── */
function Slide01() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start min-h-100">
      <div className="flex-1 flex flex-col gap-6 justify-between">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 w-fit"
            style={{ background: GREEN_DIM, border: `1px solid ${GREEN_BORDER}` }}
          >
            <Leaf className="w-3 h-3" style={{ color: GREEN }} strokeWidth={1.5} />
            <span className="text-xs font-medium tracking-wide" style={{ color: GREEN }}>
              Fundado 1999 · Rio de Janeiro, RJ
            </span>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight leading-tight mb-4">
            Grupo Cataratas
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Líder em <span className="text-white font-medium">concessões de turismo sustentável no Brasil</span>, operando AquaRio, BioParque RJ, Paineiras Corcovado, Cataratas do Iguaçu, Marco Três Fronteiras, EcoNoronha e AquaFoz — 5 milhões+ de visitantes/ano.
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">Unidades Operacionais</p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-6">
            {[
              "AquaRio (RJ)",
              "BioParque RJ",
              "Paineiras Corcovado",
              "Cataratas do Iguaçu",
              "EcoNoronha",
              "AquaFoz / Marco 3 Fronteiras",
            ].map(seg => (
              <div key={seg} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full shrink-0" style={{ background: GREEN }} />
                <span className="text-gray-400 text-xs">{seg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-72 grid grid-cols-2 gap-3">
        {[
          { value: "R$\u00a0300M", label: "Receita Operacional Estimada 2025", accent: GREEN },
          { value: "5M+", label: "Visitantes/ano (todas as unidades)", accent: SKY },
          { value: "585", label: "Funcionários (Grupo)", accent: AMBER },
          { value: "18%", label: "Margem Líquida 1T25 (Urbia Cataratas)", accent: GREEN },
        ].map(s => (
          <div
            key={s.label}
            className="rounded-2xl p-5 flex flex-col justify-between min-h-30"
            style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
          >
            <span className="font-serif text-2xl md:text-3xl font-medium" style={{ color: s.accent }}>
              {s.value}
            </span>
            <span className="text-gray-500 text-xs leading-snug mt-2 line-clamp-2">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Slide 02 ─────────────────────────────────────────── */
function Slide02() {
  return (
    <div className="flex flex-col gap-7 min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        O modelo de concessão gera margens estruturalmente sólidas — mas a escala multi-unidade amplifica qualquer ineficiência. O diferencial competitivo está na{" "}
        <span className="text-white">otimização de fluxo de visitantes, precificação dinâmica e compliance automatizado com o ICMBio</span>.
      </p>

      <div
        className="rounded-2xl p-5"
        style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
      >
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-5">
          Estrutura de Custos — Urbia Cataratas S.A. (DF 1T25)
        </p>
        <div className="space-y-3">
          {[
            { label: "Receita operacional líquida", pct: 100, color: "#374151", text: "100%", source: null },
            { label: "Custo de vendas (CPV)", pct: 38, color: "#4B5563", text: "~38%", source: "DF 1T25" },
            { label: "Despesas G&A", pct: 8, color: "#374151", text: "~8%", source: "DF 1T25" },
            { label: "Repasses concessão ICMBio", pct: 15, color: AMBER, text: "~15%", source: "DF 1T25 / estimativa" },
            { label: "Margem líquida atual", pct: 18, color: "#6B7280", text: "~18%", source: "DF 1T25" },
            { label: "Com River Labs (+4–6pp)", pct: 23, color: GREEN, text: "~23%", source: null },
          ].map(row => (
            <div key={row.label} className="flex items-center gap-3">
              <span className="text-gray-500 text-xs w-36 sm:w-56 shrink-0 flex items-center flex-wrap gap-y-0.5">
                {row.label}
                {row.source && <Source label={row.source} />}
              </span>
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 bg-white/5 rounded-full h-5 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${row.pct}%`, background: row.color }} />
                </div>
                <span className="text-gray-300 text-[10px] font-medium w-8 text-right shrink-0">{row.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { value: "10–20%", label: "Perda de conversão", desc: "Visitantes perdidos por filas longas e processo de bilheteria manual nos picos", source: "MTur / estimativa setorial", color: GREEN },
          { value: "30–40%", label: "Ociosidade off-season", desc: "Capacidade ociosa nas unidades fora dos períodos de alta temporada e feriados", source: "ICMBio RAC 2024 / estimativa", color: SKY },
          { value: "30 dias", label: "Ciclo de recebíveis", desc: "Prazo médio de conciliação com parceiros de distribuição e operadoras de turismo", source: "DF 1T25 / estimativa", color: AMBER },
        ].map(p => (
          <div
            key={p.label}
            className="rounded-xl p-5"
            style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
          >
            <p className="font-serif text-2xl font-medium text-white mb-0.5">{p.value}</p>
            <p className="text-xs font-medium text-gray-400 mb-1 flex items-center flex-wrap gap-y-0.5">
              {p.label}<Source label={p.source} />
            </p>
            <p className="text-xs text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Slide 03 ─────────────────────────────────────────── */
function Slide03() {
  const processes = [
    {
      icon: Ticket,
      title: "Vendas e Conciliação de Ingressos",
      accent: GREEN,
      source: "Catho RJ 2026 / ICMBio RAC 2024",
      lines: [
        { tree: "├─", text: "15–25h/dia (atendente bilheteria + suporte, R$30/h)", bold: false },
        { tree: "├─", text: "R$30/h × 20h = R$600/dia em custo de atendimento", bold: true },
        { tree: "├─", text: "365 dias/ano = custo anual R$164k–R$274k (por unidade)", bold: true },
        { tree: "└─", text: "Dias de pico sem controle automático = fila de 2h+ e conversão perdida de R$50k+/dia", bold: false },
      ],
    },
    {
      icon: CalendarDays,
      title: "Planejamento de Visitação e Capacidade",
      accent: SKY,
      source: "Catho RJ 2026 / ICMBio RAC 2024",
      lines: [
        { tree: "├─", text: "25–40h/semana (coordenador operações, R$50/h)", bold: false },
        { tree: "├─", text: "R$50/h × 32h = R$1.600/semana por unidade", bold: true },
        { tree: "├─", text: "7 unidades × 52 semanas = custo grupo R$455k–R$728k/ano", bold: true },
        { tree: "└─", text: "Erro de capacidade = superlotação (risco regulatório ICMBio) ou ociosidade (R$30k+/dia perdido)", bold: false },
      ],
    },
    {
      icon: FileCheck,
      title: "Compliance com Concessões ICMBio",
      accent: AMBER,
      source: "Lei 9.985/2000 / ICMBio RAC 2024 / Catho RJ 2026",
      lines: [
        { tree: "├─", text: "20–35h/mês por unidade (analista regulatório, R$60/h)", bold: false },
        { tree: "├─", text: "R$60/h × 27h = R$1.620/mês por unidade", bold: true },
        { tree: "├─", text: "7 unidades × 12 meses = custo anual R$100k–R$176k (grupo)", bold: true },
        { tree: "└─", text: "Não conformidade ICMBio: penalidades contratuais e risco de rescisão de concessão", bold: false },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Coordenadores de operações turísticas custam{" "}
        <span className="text-white font-medium">R$50/h no Rio de Janeiro (Catho 2026)</span>. Com 7 unidades operacionais,
        cada ineficiência de processo é multiplicada — e o impacto na margem do grupo é estrutural.
      </p>

      <div className="space-y-3">
        {processes.map(p => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="rounded-2xl p-5"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${p.accent}18` }}>
                  <Icon className="w-3.5 h-3.5" style={{ color: p.accent }} strokeWidth={1.5} />
                </div>
                <span className="text-white text-sm font-medium">{p.title}</span>
                <Source label={p.source} />
              </div>
              <div className="space-y-1.5 pl-2">
                {p.lines.map((l, i) => (
                  <div key={i} className="flex items-baseline gap-2">
                    <span className="text-gray-700 text-xs font-mono shrink-0">{l.tree}</span>
                    <span className="text-xs leading-relaxed" style={{ color: l.bold ? "rgb(229,231,235)" : "rgb(107,114,128)" }}>
                      {l.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="rounded-xl p-4 flex items-start gap-3"
        style={{ border: `1px solid ${GREEN_BORDER}`, background: GREEN_DIM }}
      >
        <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GREEN }} strokeWidth={1.5} />
        <p className="text-gray-400 text-xs leading-relaxed">
          <strong className="text-white">5M visitantes/ano × 15% perda de conversão × R$60 ticket médio</strong> ={" "}
          <strong style={{ color: GREEN }}>R$45M/ano</strong> em receita potencial não capturada — recuperável com gestão dinâmica de fluxo e bilheteria automatizada.
        </p>
      </div>
    </div>
  );
}

/* ── Slide 04 ─────────────────────────────────────────── */
function Slide04() {
  const groups = [
    {
      process: "Vendas de Ingressos",
      impact: "R$75M+ em receita adicional — +25% yield via precificação dinâmica em todas as unidades",
      color: GREEN,
      items: [
        {
          what: "Sistema de Venda Dinâmica com IA",
          how: "Demanda em tempo real + histórico sazonal → ajuste automático de preços e disponibilidade por unidade",
          tools: ["GPT-4o", "Stripe", "Zapier"],
        },
        {
          what: "Chatbot Multilíngue de Reservas",
          how: "Consulta do visitante via site/WhatsApp → bilhete QR com confirmação em segundos, em múltiplos idiomas",
          tools: ["Grok", "Dialogflow"],
        },
      ],
    },
    {
      process: "Planejamento de Capacidade",
      impact: "R$60M+ em receita adicional — +20% volume via otimização de fluxo (independente da alavanca 1, preço)",
      color: SKY,
      items: [
        {
          what: "Previsor de Fluxo de Visitantes",
          how: "Dados históricos + clima + eventos → forecast de lotação por unidade com cronograma de staffing",
          tools: ["Claude", "Google Sheets", "OR-Tools"],
        },
        {
          what: "Painel Operacional Multi-Unidade",
          how: "Dados em tempo real de todas as 7 unidades → alertas de superlotação e redistribuição de fluxo",
          tools: ["GPT-4o", "Zapier"],
        },
      ],
    },
    {
      process: "Compliance ICMBio",
      impact: "Proteção de concessões com R$520M+ ROB — relatórios automáticos e alertas de não conformidade",
      color: AMBER,
      items: [
        {
          what: "Auditor Automático de Concessões",
          how: "Contratos e relatórios mensais → checagem automática de conformidade com alertas proativos",
          tools: ["Claude", "DocParser"],
        },
        {
          what: "Monitor de Indicadores ICMBio",
          how: "KPIs operacionais → dashboard de compliance em tempo real para todas as unidades",
          tools: ["GPT-4o", "Google Sheets"],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Ferramentas reais, aplicadas em escala para as 7 unidades do Grupo Cataratas. Cada solução pode ser pilotada{" "}
        <span className="text-white font-medium">no AquaRio esta semana</span> e escalada para o grupo inteiro em 30 dias.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {groups.map(g => (
          <div
            key={g.process}
            className="rounded-2xl p-5 flex flex-col gap-4"
            style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: g.color }} />
                <span className="text-xs font-medium uppercase tracking-widest" style={{ color: g.color }}>
                  {g.process}
                </span>
              </div>
              <p className="text-xs font-medium" style={{ color: g.color }}>→ {g.impact}</p>
            </div>
            <div className="space-y-3.5 flex-1">
              {g.items.map(item => (
                <div key={item.what}>
                  <p className="text-white text-xs font-medium mb-0.5">{item.what}</p>
                  <p className="text-gray-600 text-xs leading-relaxed mb-1">{item.how}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tools.map(t => <Tool key={t} name={t} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Slide 05 ─────────────────────────────────────────── */
function Slide05() {
  const levers = [
    {
      label: "1. Receita via precificação dinâmica — +25% yield sobre bilheteria atual (grupo)",
      math: "R$300M base × 25% otimização de yield — impacto em RECEITA via preço, aplicado às 7 unidades",
      result: "+R$75M",
      color: GREEN,
    },
    {
      label: "2. Receita via otimização de fluxo — +20% volume de visitantes",
      math: "R$300M base × 20% aumento de volume — impacto em RECEITA via capacidade, independente da alavanca 1 (preço)",
      result: "+R$60M",
      color: SKY,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 min-h-100 items-start">
      <div className="flex-1 min-w-0">
        <div
          className="rounded-xl p-4 mb-4"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
        >
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-2">Base de cálculo</p>
          <p className="text-gray-300 text-sm font-mono">
            R$77,4M receita líquida 1T25 × 4 ={" "}
            <span className="text-white font-medium">~R$300M estimativa grupo anualizada 2025</span>
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Base: Urbia Cataratas (Iguaçu) 1T25 extrapolada ao grupo <Source label="DF Urbia Cataratas 1T25" /> · 5M+ visitantes <Source label="ICMBio RAC 2024" />
          </p>
        </div>

        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">
          Alavancas 1 e 2 = impacto em receita (preço e volume) · Independentes entre si
        </p>
        <div className="space-y-2.5">
          {levers.map((l, i) => (
            <div
              key={i}
              className="rounded-xl p-4 flex items-start justify-between gap-4"
              style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}
            >
              <div className="flex-1 min-w-0">
                <p className="text-gray-300 text-xs font-medium mb-0.5">{l.label}</p>
                <p className="text-gray-600 text-xs font-mono leading-relaxed break-all">{l.math}</p>
              </div>
              <span className="font-serif text-lg font-medium shrink-0" style={{ color: l.color }}>
                {l.result}
              </span>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-4 mt-3 flex items-center justify-between"
          style={{ border: `1px solid ${GREEN_BORDER}`, background: GREEN_DIM }}
        >
          <p className="text-gray-300 text-sm font-medium">Impacto anual total mensurável</p>
          <p className="font-serif text-2xl font-medium" style={{ color: GREEN }}>R$135M</p>
        </div>
      </div>

      <div className="w-full md:w-52 shrink-0 flex flex-col gap-3">
        <div
          className="rounded-2xl p-6 text-center"
          style={{ border: `1px solid ${GREEN_BORDER}`, background: GREEN_DIM }}
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Ponto de retorno</p>
          <p className="font-serif text-4xl font-medium mb-0.5" style={{ color: GREEN }}>~6 sem.</p>
          <p className="text-gray-500 text-xs">com impacto total estimado</p>
          <div className="mt-5 pt-5 space-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {[
              { label: "Potencial total (2 frentes)", value: "R$135M", color: GREEN },
            ].map(r => (
              <div key={r.label} className="flex flex-col text-left gap-0.5">
                <span className="text-gray-600 text-[10px]">{r.label}</span>
                <span className="font-medium text-sm" style={{ color: r.color }}>
                  {r.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-xl p-4"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
        >
          <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-2">Fontes</p>
          {[
            "DF Urbia Cataratas 1T25",
            "ICMBio RAC 2024",
            "Lei 9.985/2000 (SNUC)",
            "grupocataratas.com",
            "Catho RJ 2026",
          ].map(s => (
            <p key={s} className="text-gray-600 text-[10px] leading-relaxed">· {s}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Slide 06 ─────────────────────────────────────────── */
function Slide06() {
  const commits = [
    {
      number: "01",
      title: "Piloto no AquaRio — resultado em 1 semana",
      desc: "Automatizamos vendas e planejamento de capacidade para o AquaRio durante 1 semana de pico. Os dados reais provam o modelo antes de qualquer escala para as demais unidades.",
      color: GREEN,
    },
    {
      number: "02",
      title: "Escalável para o grupo inteiro",
      desc: "Cada solução é construída para rodar em multi-unidade. O que funciona no AquaRio é replicado para BioParque, Cataratas, Noronha e demais unidades com adaptações mínimas.",
      color: SKY,
    },
    {
      number: "03",
      title: "100% compliance com ICMBio",
      desc: "Todas as automações são construídas respeitando os contratos de concessão e os indicadores ICMBio. Relatórios automáticos facilitam auditorias e reduzem risco regulatório.",
      color: AMBER,
    },
  ];

  return (
    <div className="flex flex-col gap-6 min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        O ROB do grupo ICMBio atingiu R$520M em 2024. Com Copa 2026 e crescimento do ecoturismo, o fluxo de visitantes vai aumentar — e a eficiência operacional vai definir quem captura essa demanda.{" "}
        <span className="text-white">Quem automatizar agora chega na alta temporada com vantagem real em todas as 7 unidades.</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {commits.map(c => (
          <div
            key={c.number}
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold"
              style={{ background: `${c.color}18`, color: c.color }}
            >
              {c.number}
            </div>
            <div>
              <p className="text-white text-sm font-medium mb-2">{c.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        style={{ border: `1px solid ${GREEN_BORDER}`, background: GREEN_DIM }}
      >
        <div>
          <p className="text-white text-sm font-medium mb-1">Próximo passo</p>
          <p className="text-gray-400 text-xs leading-relaxed max-w-md">
            Uma conversa de 45 minutos com o time de operações do Grupo Cataratas. Sem apresentação genérica —
            só dados reais de bilheteria, fluxo e compliance para definir o piloto do AquaRio esta semana.
          </p>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium shrink-0 transition-opacity hover:opacity-80"
          style={{ background: GREEN, color: "#0f172a" }}
        >
          Agendar conversa
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

/* ── Shell ────────────────────────────────────────────── */
export default function CataratosMarketStudySection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (next: number) => {
      if (animating || next === current) return;
      setAnimating(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 180);
    },
    [animating, current]
  );

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const slides = [Slide01, Slide02, Slide03, Slide04, Slide05, Slide06];
  const Slide = slides[current];

  return (
    <section className="bg-gray-950 min-h-screen px-6 py-16 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 w-fit"
            style={{ background: GREEN_DIM, border: `1px solid ${GREEN_BORDER}` }}
          >
            <TrendingUp className="w-3 h-3" style={{ color: GREEN }} strokeWidth={1.5} />
            <span className="text-xs font-medium tracking-wide" style={{ color: GREEN }}>
              Pesquisa de Mercado · Grupo Cataratas × River Labs
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight mb-3">
            Onde a IA gera valor real<br />em concessões de turismo sustentável
          </h2>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            Análise personalizada para o Grupo Cataratas — bilheteria, fluxo de visitantes, compliance ICMBio e impacto
            financeiro estimado com base nos dados reais do DF 1T25 e benchmarks setoriais.
          </p>
        </div>

        <div className="flex gap-1 flex-wrap mb-8">
          {SLIDE_LABELS.map((label, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={
                i === current
                  ? { background: GREEN_DIM, color: GREEN, border: `1px solid ${GREEN_BORDER}` }
                  : { background: "transparent", color: "rgb(107,114,128)", border: "1px solid transparent" }
              }
            >
              {label}
            </button>
          ))}
        </div>

        <div
          className="rounded-3xl p-6 md:p-8 transition-opacity duration-200"
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.015)",
            opacity: animating ? 0 : 1,
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-1">{current + 1} / {TOTAL}</p>
              <h3 className="text-white font-medium text-lg">{SLIDE_LABELS[current].split("— ")[1]}</h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(Math.max(0, current - 1))}
                disabled={current === 0}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-20"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgb(156,163,175)" }}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => go(Math.min(TOTAL - 1, current + 1))}
                disabled={current === TOTAL - 1}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-20"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgb(156,163,175)" }}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <Slide />
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                background: i === current ? GREEN : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
