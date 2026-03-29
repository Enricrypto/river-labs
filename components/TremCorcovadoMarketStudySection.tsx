"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Mountain,
  AlertTriangle,
  Users,
  CalendarDays,
  Wrench,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const EMERALD = "#34D399";
const EMERALD_DIM = "rgba(52,211,153,0.1)";
const EMERALD_BORDER = "rgba(52,211,153,0.2)";
const AMBER = "#FBBF24";
const VIOLET = "#A78BFA";

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
      style={{ background: EMERALD_DIM, color: EMERALD }}
    >
      {name}
    </code>
  );
}

/* ── Slide 01 ─────────────────────────────────────────── */
function Slide01() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start md:min-h-100">
      <div className="flex-1 flex flex-col gap-6 justify-between">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 w-fit"
            style={{ background: EMERALD_DIM, border: `1px solid ${EMERALD_BORDER}` }}
          >
            <Mountain className="w-3 h-3" style={{ color: EMERALD }} strokeWidth={1.5} />
            <span className="text-xs font-medium tracking-wide" style={{ color: EMERALD }}>
              Fundada 2015 · Cosme Velho, Rio de Janeiro, RJ
            </span>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight leading-tight mb-4">
            Trem do Corcovado Ltda.
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Concessionária que opera o <span className="text-white font-medium">Trem do Corcovado</span> — 3,8 km de via férrea elétrica no Parque Nacional da Tijuca, transportando turistas até o Cristo Redentor com capacidade para 500 mil passageiros/ano.
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">Segmentos de Atuação</p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-6">
            {[
              "Transporte Ferroviário Turístico",
              "Gestão de Bilheteria",
              "Manutenção de Via Férrea",
              "Compliance ICMBio",
              "Parcerias com Tour Operators",
              "Experiência do Visitante",
            ].map(seg => (
              <div key={seg} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full shrink-0" style={{ background: EMERALD }} />
                <span className="text-gray-400 text-xs">{seg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-80 grid grid-cols-2 gap-3">
        {[
          { value: "R$\u00a035M", label: "Receita Operacional Est.", accent: EMERALD },
          { value: "500k", label: "Passageiros/ano", accent: AMBER },
          { value: "3,8 km", label: "Via Férrea Elétrica", accent: VIOLET },
          { value: "~2M/ano", label: "Visitantes/ano (pré-pandemia)", accent: EMERALD },
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
    <div className="flex flex-col gap-7 md:min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Atrações turísticas icônicas têm margens estruturalmente altas — mas concentradas em temporada e dependentes de
        fluxo externo. O jogo se vence na{" "}
        <span className="text-white">eficiência de bilheteria, ocupação dos trens e redução de downtime operacional</span>.
      </p>

      <div
        className="rounded-2xl p-5"
        style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
      >
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-5">
          Estrutura de Custos — Trem do Corcovado (estimativa setorial)
        </p>
        <div className="space-y-3">
          {[
            { label: "Receita operacional líquida", pct: 100, color: "#374151", text: "100%", source: null },
            { label: "Mão de obra (guias + bilheteiros)", pct: 38, color: "#4B5563", text: "~38%", source: "Catho RJ 2026" },
            { label: "Manutenção de via e trens", pct: 22, color: "#374151", text: "~22%", source: "ANTT Ferrovias" },
            { label: "Outorga ICMBio (fixa + variável)", pct: 12, color: AMBER, text: "~12%", source: "Contrato ICMBio 01/2014" },
            { label: "Margem líquida atual", pct: 20, color: "#6B7280", text: "~20%", source: "SEBRAE Turismo / estimativa" },
            { label: "Com River Labs (+4–6pp)", pct: 25, color: EMERALD, text: "~25%", source: null },
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
          { value: "10–15%", label: "Taxa de no-show", desc: "Bilhetes vendidos mas não utilizados — receita perdida sem possibilidade de reocupação", source: "MTur / RIOTUR 2024", color: EMERALD },
          { value: "40%", label: "Ociosidade off-season", desc: "Capacidade ociosa nos trens fora dos períodos de alta temporada turística", source: "ICMBio RAC 2024", color: AMBER },
          { value: "20–30%", label: "Vendas via bilheteria física", desc: "Parcela da bilheteria ainda processada manualmente, sujeita a filas e erros", source: "FECOMÉRCIO RJ / estimativa", color: VIOLET },
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
      title: "Vendas e Emissão de Bilhetes",
      accent: EMERALD,
      source: "Catho RJ / estimativa operacional",
      lines: [
        { tree: "├─", text: "10–20h/dia (bilheteiro + suporte ao turista, R$25/h)", bold: false },
        { tree: "├─", text: "R$25/h × 15h = R$375/dia em custo de bilheteria", bold: true },
        { tree: "├─", text: "365 dias/ano = custo anual R$91k–R$182k", bold: true },
        { tree: "└─", text: "Pico sem gestão automática = fila de 1h+ e perda de R$10k+/dia", bold: false },
      ],
    },
    {
      icon: CalendarDays,
      title: "Planejamento Operacional e Lotação",
      accent: AMBER,
      source: "Catho RJ 2026 / ICMBio RAC 2024",
      lines: [
        { tree: "├─", text: "20–30h/semana (coordenador operações, R$40/h)", bold: false },
        { tree: "├─", text: "R$40/h × 25h = R$1.000/semana em planejamento manual", bold: true },
        { tree: "├─", text: "52 semanas/ano = custo anual R$41k–R$62k", bold: true },
        { tree: "└─", text: "Erro de lotação = overbooking ou trem vazio (R$5k+ perda/ocorrência)", bold: false },
      ],
    },
    {
      icon: Wrench,
      title: "Manutenção e Compliance ICMBio",
      accent: VIOLET,
      source: "ANTT / Catho RJ 2026 / Contrato ICMBio 01/2014",
      lines: [
        { tree: "├─", text: "15–25h por inspeção mensal (técnico manutenção, R$35/h)", bold: false },
        { tree: "├─", text: "R$35/h × 20h = R$700/inspeção — 12 inspeções/ano", bold: true },
        { tree: "├─", text: "Custo anual R$6k–R$10k (direto) + risco de multa/suspensão", bold: true },
        { tree: "└─", text: "Não conformidade ICMBio: suspensão da concessão (R$1M+ perda/dia parado)", bold: false },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 md:min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Bilheteiros no Rio de Janeiro custam{" "}
        <span className="text-white font-medium">R$25/h (Catho 2026)</span>. Em uma operação de alta frequência como
        o Trem do Corcovado, cada processo manual é uma janela de receita desperdiçada — especialmente em dias de pico.
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
        style={{ border: `1px solid ${EMERALD_BORDER}`, background: EMERALD_DIM }}
      >
        <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: EMERALD }} strokeWidth={1.5} />
        <p className="text-gray-400 text-xs leading-relaxed">
          <strong className="text-white">500k bilhetes/ano × 10–15% no-show × R$100 médio</strong> ={" "}
          <strong style={{ color: EMERALD }}>R$5M–R$7,5M/ano</strong> em receita potencial não capturada — recuperável com gestão dinâmica de bilheteria e lista de espera automatizada.
        </p>
      </div>
    </div>
  );
}

/* ── Slide 04 ─────────────────────────────────────────── */
function Slide04() {
  const groups = [
    {
      process: "Vendas de Bilhetes",
      impact: "R$7M+ em receita adicional + R$75k em custos de bilheteria — +20% yield e –50% custo operacional",
      color: EMERALD,
      items: [
        {
          what: "Sistema de Venda Dinâmica com IA",
          how: "Demanda em tempo real + meteorologia → ajuste automático de preços e lotação",
          tools: ["GPT-4o", "Stripe", "Zapier"],
        },
        {
          what: "Chatbot de Reservas via WhatsApp",
          how: "Consulta do turista → venda automática com QR code e confirmação instantânea",
          tools: ["Grok", "ManyChat"],
        },
      ],
    },
    {
      process: "Planejamento Operacional",
      impact: "R$5,25M+ em receita adicional — +15% ocupação (volume, independente da alavanca 1)",
      color: AMBER,
      items: [
        {
          what: "Previsor de Lotação com IA",
          how: "Histórico de vendas + eventos + clima → cronograma otimizado de trens",
          tools: ["Claude", "Google Sheets"],
        },
        {
          what: "Alertas de Manutenção Preditiva",
          how: "Sensores nos trens → alertas antecipados de falhas antes de paradas não planejadas",
          tools: ["Grok API", "Zapier"],
        },
      ],
    },
    {
      process: "Manutenção & Compliance",
      impact: "R$1,4M+ em receita protegida — –40% downtime via manutenção preditiva",
      color: VIOLET,
      items: [
        {
          what: "Checklist ICMBio Automático",
          how: "Fotos e documentos de inspeção → validação automática e relatório aprovado para auditoria",
          tools: ["Claude", "DocParser"],
        },
        {
          what: "Monitor Ambiental por Visão Computacional",
          how: "Câmeras na trilha → relatório de preservação e conformidade ICMBio em tempo real",
          tools: ["GPT-4o Vision"],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 md:min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Ferramentas reais, aplicadas à operação do Trem do Corcovado. Cada solução pode ser testada{" "}
        <span className="text-white font-medium">ainda esta semana</span> com dados reais de bilheteria, lotação e manutenção.
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
      label: "1. Receita via precificação dinâmica — +20% yield sobre bilheteria atual",
      math: "R$35M base × 20% otimização de yield — impacto em RECEITA via preço, independente de volume",
      result: "+R$7M",
      color: EMERALD,
    },
    {
      label: "2. Redução de custo operacional — bilheteria e suporte (–50%)",
      math: "R$150k custos anuais de bilheteria × 50% economia com automação — impacto em CUSTO operacional",
      result: "+R$75k",
      color: EMERALD,
    },
    {
      label: "3. Receita via otimização de ocupação — +15% volume de passageiros",
      math: "R$35M base × 15% aumento de volume — impacto em RECEITA via ocupação, independente da alavanca 1 (preço)",
      result: "+R$5,25M",
      color: AMBER,
    },
    {
      label: "4. Proteção de receita via manutenção preditiva — –40% downtime não planejado",
      math: "R$35M × 5% perda atual por paradas × 80% redução com alertas preditivos — proteção de RECEITA, independente das alavancas 1 e 3",
      result: "+R$1,4M",
      color: VIOLET,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 md:min-h-100 items-start">
      <div className="flex-1 min-w-0">
        <div
          className="rounded-xl p-4 mb-4"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
        >
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-2">Base de cálculo</p>
          <p className="text-gray-300 text-sm font-mono">
            ~350k bilhetes vendidos/ano × R$100 médio/bilhete ={" "}
            <span className="text-white font-medium">R$35M receita estimada 2025</span>
          </p>
          <p className="text-gray-600 text-xs mt-1">
            500k = capacidade; ~350k = volume real estimado de vendas <Source label="Preços R$67–R$128 / site oficial" />
          </p>
        </div>

        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">
          Alavancas 1 e 3 = impacto em receita (preço e volume) · Alavanca 2 = redução de custo · Alavanca 4 = proteção de receita
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
          style={{ border: `1px solid ${EMERALD_BORDER}`, background: EMERALD_DIM }}
        >
          <p className="text-gray-300 text-sm font-medium">Impacto anual total mensurável</p>
          <p className="font-serif text-2xl font-medium" style={{ color: EMERALD }}>R$13,7M</p>
        </div>
      </div>

      <div className="w-full md:w-52 shrink-0 flex flex-col gap-3">
        <div
          className="rounded-2xl p-6 text-center"
          style={{ border: `1px solid ${EMERALD_BORDER}`, background: EMERALD_DIM }}
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Ponto de retorno</p>
          <p className="font-serif text-4xl font-medium mb-0.5" style={{ color: EMERALD }}>~1 mês</p>
          <p className="text-gray-500 text-xs">com impacto total estimado</p>
          <div className="mt-5 pt-5 space-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {[
              { label: "Redução de custos/ano", value: "~R$75k", color: VIOLET },
              { label: "Potencial total (3 frentes)", value: "R$13,7M", color: EMERALD },
            ].map(r => (
              <div key={r.label} className="flex flex-col text-left gap-0.5">
                <span className="text-gray-600 text-[10px]">{r.label}</span>
                <span
                  className={`font-medium text-sm ${"accent" in r ? r.accent : ""}`}
                  style={"color" in r ? { color: r.color } : {}}
                >
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
          {["Site oficial Trem do Corcovado", "ICMBio RAC 2024", "ANTT Ferrovias Turismo", "Contrato ICMBio 01/2014", "Lei 9.985/2000 (SNUC)", "MTur / RIOTUR 2024", "Catho RJ 2026"].map(s => (
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
      title: "Piloto esta semana, sem risco",
      desc: "Implementamos chatbot de reservas + otimizador de lotação para 1 semana de pico, processando 5k bilhetes automaticamente. Custo: R$10k. ROI em 2 dias de operação.",
      color: EMERALD,
    },
    {
      number: "02",
      title: "Sucesso atrelado a resultado",
      desc: "Parte do honorário é vinculada a resultado mensurável — passageiros adicionais transportados ou redução de no-show verificável. Se não entregamos, vocês não pagam a parcela de sucesso.",
      color: AMBER,
    },
    {
      number: "03",
      title: "100% compliance com ICMBio",
      desc: "Todas as soluções são construídas dentro das restrições da concessão — relatórios automáticos para auditoria ICMBio incluídos. A tecnologia reforça o compliance, não o compromete.",
      color: VIOLET,
    },
  ];

  return (
    <div className="flex flex-col gap-6 md:min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        A alta temporada verão 2026/27 começa em dezembro. Apps agregadores de turismo (GetYourGuide, Viator) já
        oferecem reserva digital para concorrentes do Cristo Redentor, e o ICMBio exige eficiência crescente
        pós-pandemia.{" "}
        <span className="text-white">Quem estruturar a bilheteria agora chega na temporada com vantagem competitiva real.</span>
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
        style={{ border: `1px solid ${EMERALD_BORDER}`, background: EMERALD_DIM }}
      >
        <div>
          <p className="text-white text-sm font-medium mb-1">Próximo passo</p>
          <p className="text-gray-400 text-xs leading-relaxed max-w-md">
            Uma conversa de 45 minutos com o time operacional do Trem do Corcovado. Sem apresentação genérica —
            só dados reais de bilheteria, lotação e manutenção para definir o piloto desta semana.
          </p>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium shrink-0 transition-opacity hover:opacity-80"
          style={{ background: EMERALD, color: "#0f172a" }}
        >
          Agendar conversa
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

/* ── Shell ────────────────────────────────────────────── */
export default function TremCorcovadoMarketStudySection() {
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
            style={{ background: EMERALD_DIM, border: `1px solid ${EMERALD_BORDER}` }}
          >
            <TrendingUp className="w-3 h-3" style={{ color: EMERALD }} strokeWidth={1.5} />
            <span className="text-xs font-medium tracking-wide" style={{ color: EMERALD }}>
              Pesquisa de Mercado · Trem do Corcovado × River Labs
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight mb-3">
            Onde a IA gera valor real<br />em turismo ferroviário e atrações icônicas
          </h2>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            Análise personalizada para o Trem do Corcovado — bilheteria, operação, manutenção e impacto financeiro
            estimado com base em benchmarks setoriais e dados do Parque Nacional da Tijuca.
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
                  ? { background: EMERALD_DIM, color: EMERALD, border: `1px solid ${EMERALD_BORDER}` }
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
                background: i === current ? EMERALD : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
