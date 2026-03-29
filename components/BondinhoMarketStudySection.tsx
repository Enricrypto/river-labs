"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Cable,
  AlertTriangle,
  Users,
  CalendarDays,
  Wrench,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const AMBER = "#F59E0B";
const AMBER_DIM = "rgba(245,158,11,0.1)";
const AMBER_BORDER = "rgba(245,158,11,0.2)";
const CORAL = "#F87171";
const SKY = "#38BDF8";

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
      style={{ background: AMBER_DIM, color: AMBER }}
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
            style={{ background: AMBER_DIM, border: `1px solid ${AMBER_BORDER}` }}
          >
            <Cable className="w-3 h-3" style={{ color: AMBER }} strokeWidth={1.5} />
            <span className="text-xs font-medium tracking-wide" style={{ color: AMBER }}>
              Fundada 1966 · Urca, Rio de Janeiro, RJ
            </span>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight leading-tight mb-4">
            Bondinho Pão de Açúcar
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Operadora do <span className="text-white font-medium">primeiro teleférico do Brasil</span>, gerenciando o Parque Bondinho com vistas icônicas, eventos (Sunset DJ, exposições), trilhas e gastronomia — ~1 milhão de visitantes/ano.
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">Segmentos de Atuação</p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-6">
            {[
              "Teleférico Turístico",
              "Eventos & Sunset DJ",
              "Gastronomia no Parque",
              "Exposições de Arte",
              "Parcerias Turismo RJ",
              "Turismo de Experiência",
            ].map(seg => (
              <div key={seg} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full shrink-0" style={{ background: AMBER }} />
                <span className="text-gray-400 text-xs">{seg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-80 grid grid-cols-2 gap-3">
        {[
          { value: "R$\u00a0115M", label: "Bilheteria Est. 2025", accent: AMBER },
          { value: "~1M", label: "Visitantes por ano", accent: CORAL },
          { value: "1966", label: "1º teleférico do Brasil", accent: SKY },
          { value: "R$\u00a0272M", label: "Receita Real 2020", accent: AMBER },
        ].map(s => (
          <div
            key={s.label}
            className="rounded-2xl p-5 flex flex-col justify-between min-h-36"
            style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
          >
            <span className="font-serif text-2xl md:text-3xl font-medium" style={{ color: s.accent }}>
              {s.value}
            </span>
            <span className="text-gray-500 text-xs leading-snug mt-2">{s.label}</span>
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
        Atrações turísticas premium têm custos operacionais altos e receita concentrada em temporada e fins de semana. A vantagem competitiva vem da{" "}
        <span className="text-white">ocupação máxima das cabines, digitalização da bilheteria e rentabilidade dos eventos</span>.
      </p>

      <div
        className="rounded-2xl p-5"
        style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
      >
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-5">
          Estrutura de Custos — Bondinho Pão de Açúcar (balanço 2021)
        </p>
        <div className="space-y-3">
          {[
            { label: "Receita operacional líquida", pct: 100, color: "#374151", text: "100%", source: null },
            { label: "Custos operacionais (energia + manutenção)", pct: 35, color: "#4B5563", text: "~35%", source: "Balanço 2021 / estimativa" },
            { label: "Mão de obra (operação + atendimento)", pct: 28, color: "#374151", text: "~28%", source: "Balanço 2021 / estimativa" },
            { label: "Marketing e eventos", pct: 15, color: CORAL, text: "~15%", source: "Balanço 2021 / estimativa" },
            { label: "Margem líquida atual", pct: 22, color: "#6B7280", text: "~22%", source: "SEBRAE Turismo / estimativa" },
            { label: "Com River Labs (+4–6pp)", pct: 25, color: AMBER, text: "~25%", source: null },
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
          { value: "15%", label: "Taxa de no-show", desc: "Ingressos vendidos mas não utilizados — receita perdida sem reocupação das cabines", source: "MTur / RIOTUR 2024", color: AMBER },
          { value: "40%", label: "Ociosidade off-season", desc: "Capacidade ociosa das cabines fora dos períodos de alta temporada e fins de semana", source: "SEBRAE Turismo / estimativa", color: CORAL },
          { value: "5–10%", label: "Downtime manutenção", desc: "Tempo de parada operacional por manutenção corretiva não planejada do teleférico", source: "INMETRO / NBR 14543", color: SKY },
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
      icon: Users,
      title: "Vendas e Controle de Ingressos",
      accent: AMBER,
      source: "Catho RJ 2026 / MTur 2024",
      lines: [
        { tree: "├─", text: "15–25h/dia (atendente bilheteria + suporte, R$28/h)", bold: false },
        { tree: "├─", text: "R$28/h × 20h = R$560/dia em custo de atendimento", bold: true },
        { tree: "├─", text: "365 dias/ano = custo anual R$153k–R$255k", bold: true },
        { tree: "└─", text: "Pico sem controle automático = fila de 2h+ e perda de R$20k+/dia", bold: false },
      ],
    },
    {
      icon: CalendarDays,
      title: "Planejamento de Eventos e Capacidade",
      accent: CORAL,
      source: "Catho RJ 2026 / estimativa operacional",
      lines: [
        { tree: "├─", text: "25–40h por evento (coordenador eventos, R$45/h)", bold: false },
        { tree: "├─", text: "R$45/h × 32h = R$1.440 por evento", bold: true },
        { tree: "├─", text: "50–100 eventos/ano = custo anual R$56k–R$180k", bold: true },
        { tree: "└─", text: "Cancelamento por falha logística = R$100k+ perda (Sunset DJ, exposições)", bold: false },
      ],
    },
    {
      icon: Wrench,
      title: "Manutenção do Teleférico e Compliance",
      accent: SKY,
      source: "INMETRO / Catho RJ 2026 / Lei 6.606/79",
      lines: [
        { tree: "├─", text: "20–30h por inspeção mensal (técnico manutenção, R$40/h)", bold: false },
        { tree: "├─", text: "R$40/h × 25h = R$1.000/inspeção — 12 inspeções/ano", bold: true },
        { tree: "├─", text: "Custo anual R$9,6k–R$14,4k (direto) + risco de parada", bold: true },
        { tree: "└─", text: "Parada não planejada do teleférico = R$50k+/dia de receita perdida", bold: false },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Atendentes de turismo no Rio custam{" "}
        <span className="text-white font-medium">R$28/h (Catho 2026)</span>. Em uma atração com 1 milhão de visitantes/ano,
        cada processo manual é uma janela de receita desperdiçada — especialmente nos picos de fim de semana e alta temporada.
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
        style={{ border: `1px solid ${AMBER_BORDER}`, background: AMBER_DIM }}
      >
        <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: AMBER }} strokeWidth={1.5} />
        <p className="text-gray-400 text-xs leading-relaxed">
          <strong className="text-white">1M ingressos/ano × 15% no-show × R$115 médio</strong> ={" "}
          <strong style={{ color: AMBER }}>R$17,25M/ano</strong> em receita potencial não capturada — recuperável com gestão dinâmica de bilheteria e lista de espera automatizada.
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
      impact: "R$28,75M+ em receita adicional — +25% yield via precificação dinâmica",
      color: AMBER,
      items: [
        {
          what: "Sistema de Venda Dinâmica com IA",
          how: "Demanda em tempo real + clima → ajuste automático de preços e disponibilidade de cabines",
          tools: ["GPT-4o", "Stripe", "Zapier"],
        },
        {
          what: "Chatbot Multilíngue de Reservas",
          how: "Consulta do turista via site/WhatsApp → bilhete digital QR com confirmação em segundos",
          tools: ["Grok", "Dialogflow"],
        },
      ],
    },
    {
      process: "Eventos & Capacidade",
      impact: "R$2,3M+ em receita adicional de eventos — +20% volume via otimização de capacidade (independente da alavanca 1, preço ingresso)",
      color: CORAL,
      items: [
        {
          what: "Otimizador de Capacidade para Eventos",
          how: "Especificações do evento → alocação de espaços e cronograma otimizados",
          tools: ["Claude", "Google OR-Tools"],
        },
        {
          what: "Previsor de Público com IA",
          how: "Histórico + tendências → forecast de visitantes para dimensionamento de staffing",
          tools: ["GPT-4o", "Google Sheets"],
        },
      ],
    },
    {
      process: "Manutenção & Compliance",
      impact: "R$2,875M+ em receita protegida — –50% downtime via manutenção preditiva (independente das alavancas 1 e 2, receita e eventos)",
      color: SKY,
      items: [
        {
          what: "Manutenção Preditiva das Cabines",
          how: "Sensores IoT nas cabines → alertas de falha antecipados antes de paradas não planejadas",
          tools: ["Grok API", "Zapier"],
        },
        {
          what: "Auditoria Visual por IA",
          how: "Fotos de drones → relatório automático de inspeção e conformidade INMETRO",
          tools: ["GPT-4o Vision"],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Ferramentas reais, aplicadas à operação do Bondinho. Cada solução pode ser testada{" "}
        <span className="text-white font-medium">ainda esta semana</span> com dados reais de bilheteria, eventos e manutenção.
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
      label: "1. Receita via precificação dinâmica — +25% yield sobre bilheteria atual",
      math: "R$115M base × 25% otimização de yield — impacto em RECEITA via preço e ocupação de cabines",
      result: "+R$28,75M",
      color: AMBER,
    },
    {
      label: "2. Receita adicional de eventos — +20% volume via otimização de capacidade",
      math: "R$115M base × 10% receita eventos × 20% crescimento — impacto em RECEITA de eventos, independente da alavanca 1 (preço ingresso)",
      result: "+R$2,3M",
      color: CORAL,
    },
    {
      label: "3. Proteção de receita via manutenção preditiva — –50% downtime não planejado",
      math: "R$115M × 5% perda atual por paradas × 50% redução com alertas preditivos — proteção de RECEITA, independente das alavancas 1 e 2",
      result: "+R$2,875M",
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
            ~1M ingressos × R$115 médio ={" "}
            <span className="text-white font-medium">R$115M receita de bilheteria estimada 2025</span>
          </p>
          <p className="text-gray-600 text-xs mt-1">
            R$272M receita real 2020 <Source label="Balanço CCAPA 2020" /> · R$115 ticket médio (faixa R$67–R$128) <Source label="Site oficial Bondinho 2026" />
          </p>
        </div>

        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">
          Alavancas 1 e 2 = impacto em receita · Alavanca 3 = proteção de receita
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
          style={{ border: `1px solid ${AMBER_BORDER}`, background: AMBER_DIM }}
        >
          <p className="text-gray-300 text-sm font-medium">Impacto anual total mensurável</p>
          <p className="font-serif text-2xl font-medium" style={{ color: AMBER }}>R$34M</p>
        </div>
      </div>

      <div className="w-full md:w-52 shrink-0 flex flex-col gap-3">
        <div
          className="rounded-2xl p-6 text-center"
          style={{ border: `1px solid ${AMBER_BORDER}`, background: AMBER_DIM }}
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Ponto de retorno</p>
          <p className="font-serif text-4xl font-medium mb-0.5" style={{ color: AMBER }}>~3 sem.</p>
          <p className="text-gray-500 text-xs">com impacto total estimado</p>
          <div className="mt-5 pt-5 space-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {[
              { label: "Potencial total (3 frentes)", value: "R$34M", color: AMBER },
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
            "Balanço CCAPA 2020/2021",
            "INMETRO / Lei 6.606/79",
            "MTur / RIOTUR 2024",
            "Lei 11.771/08 (Turismo)",
            "SEBRAE Turismo 2025",
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
      title: "Piloto esta semana, resultado em 2 dias",
      desc: "Implementamos chatbot de vendas + otimizador de lotação para 1 fim de semana de pico, processando 10k ingressos automaticamente. Custo: R$15k. ROI imediato.",
      color: AMBER,
    },
    {
      number: "02",
      title: "Sucesso atrelado a resultado",
      desc: "Parte do honorário é vinculada a resultado mensurável — ocupação adicional das cabines ou receita de eventos gerada. Se não entregamos, vocês não pagam a parcela de sucesso.",
      color: CORAL,
    },
    {
      number: "03",
      title: "Compliance INMETRO garantido",
      desc: "Todas as soluções são construídas dentro das normas de segurança do teleférico — relatórios automáticos para auditoria INMETRO incluídos. A tecnologia reforça a segurança, não a compromete.",
      color: SKY,
    },
  ];

  return (
    <div className="flex flex-col gap-6 min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Copa 2026 e o legado olímpico trazem um fluxo histórico de turistas ao Rio. Concorrentes como o Cristo Redentor
        já avançam em digitalização, e apps como GetYourGuide capturam vendas antes mesmo do visitante chegar.{" "}
        <span className="text-white">Quem estruturar a bilheteria e os eventos agora captura essa demanda com vantagem real.</span>
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
        style={{ border: `1px solid ${AMBER_BORDER}`, background: AMBER_DIM }}
      >
        <div>
          <p className="text-white text-sm font-medium mb-1">Próximo passo</p>
          <p className="text-gray-400 text-xs leading-relaxed max-w-md">
            Uma conversa de 45 minutos com o time operacional e comercial do Bondinho. Sem apresentação genérica —
            só dados reais de bilheteria, eventos e manutenção para definir o piloto desta semana.
          </p>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium shrink-0 transition-opacity hover:opacity-80"
          style={{ background: AMBER, color: "#0f172a" }}
        >
          Agendar conversa
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

/* ── Shell ────────────────────────────────────────────── */
export default function BondinhoMarketStudySection() {
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
            style={{ background: AMBER_DIM, border: `1px solid ${AMBER_BORDER}` }}
          >
            <TrendingUp className="w-3 h-3" style={{ color: AMBER }} strokeWidth={1.5} />
            <span className="text-xs font-medium tracking-wide" style={{ color: AMBER }}>
              Pesquisa de Mercado · Bondinho Pão de Açúcar × River Labs
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight mb-3">
            Onde a IA gera valor real<br />em atrações turísticas premium e teleféricos
          </h2>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            Análise personalizada para o Bondinho Pão de Açúcar — bilheteria, eventos, manutenção e impacto financeiro
            estimado com base em dados reais do balanço 2020/2021 e benchmarks setoriais.
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
                  ? { background: AMBER_DIM, color: AMBER, border: `1px solid ${AMBER_BORDER}` }
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
                background: i === current ? AMBER : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
