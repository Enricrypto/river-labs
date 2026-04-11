"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Anchor,
  AlertTriangle,
  Ship,
  FileCheck,
  CalendarDays,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const SKY = "#F472B6";
const SKY_DIM = "rgba(244,114,182,0.1)";
const SKY_BORDER = "rgba(244,114,182,0.2)";
const CORAL = "#FB923C";
const VIOLET = "#C084FC";

const TOTAL = 6;

const SLIDE_LABELS = [
  "01 - Visão Geral",
  "02 - Contexto de Mercado",
  "03 - Onde o Tempo Vira Dinheiro",
  "04 - IA & Automação",
  "05 - Impacto Financeiro",
  "06 - Por que River Labs",
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
      style={{ background: SKY_DIM, color: SKY }}
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
            style={{ background: SKY_DIM, border: `1px solid ${SKY_BORDER}` }}
          >
            <Anchor className="w-3 h-3" style={{ color: SKY }} strokeWidth={1.5} />
            <span className="text-xs font-medium tracking-wide" style={{ color: SKY }}>
              Fundada 1997 · Porto do Rio de Janeiro, RJ
            </span>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight leading-tight mb-4">
            Píer Mauá S.A.
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Concessionária do <span className="text-white font-medium">Terminal Internacional de Cruzeiros do Rio</span>, operando ~50 mil m² de área portuária, eventos e convenções com capacidade para 35 mil passageiros/dia.
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">Segmentos de Atuação</p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-6">
            {[
              "Terminal de Cruzeiros",
              "Eventos & Convenções",
              "Locação de Espaços",
              "Infraestrutura Portuária",
              "Logística de Passageiros",
              "Uso Comercial do Porto",
            ].map(seg => (
              <div key={seg} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full shrink-0" style={{ background: SKY }} />
                <span className="text-gray-400 text-xs">{seg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-80 grid grid-cols-2 gap-3">
        {[
          { value: "R$\u00a0102M", label: "Receita Operacional 2023", accent: SKY },
          { value: "7×", label: "World Travel Award Sul", accent: CORAL },
          { value: "50k m²", label: "Área Operacional Total", accent: VIOLET },
          { value: "35k", label: "Passageiros/dia", accent: SKY },
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
        Terminais de cruzeiros têm margens altas - mas concentradas na temporada. O jogo se ganha ou se perde na{" "}
        <span className="text-white">eficiência operacional fora do pico</span> e na velocidade de captação de eventos.
      </p>

      <div
        className="rounded-2xl p-5"
        style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
      >
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-5">
          Estrutura de Custos - Píer Mauá 2023 (dados reais do balanço)
        </p>
        <div className="space-y-3">
          {[
            { label: "Receita operacional líquida", pct: 100, color: "#374151", text: "100%", source: null },
            { label: "Custo de serviços (manutenção + utilities)", pct: 33, color: "#4B5563", text: "~33%", source: "Balanço 2023" },
            { label: "Compromisso concedente CDRJ", pct: 22, color: "#374151", text: "~22%", source: "Balanço 2023" },
            { label: "Despesas administrativas", pct: 7, color: CORAL, text: "~7%", source: "Balanço 2023" },
            { label: "Margem líquida atual", pct: 39, color: "#6B7280", text: "~39%", source: "Balanço 2023" },
            { label: "Com River Labs (+4-6pp)", pct: 44, color: SKY, text: "~44%", source: null },
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
          { value: "50-70%", label: "Ociosidade off-season", desc: "Taxa de capacidade ociosa fora da temporada de cruzeiros", source: "TCU Portos", color: SKY },
          { value: "20-30%", label: "Atrasos documentais", desc: "Operações com atraso por compliance manual PF/Anvisa/Alfândega", source: "PortosRio", color: CORAL },
          { value: "5-10%", label: "Custo compliance", desc: "Da receita em conformidade ANTAQ, ISPS Code e Lei 12.815/2013", source: "ANTAQ / ISPS Code", color: VIOLET },
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
      icon: Ship,
      title: "Planejamento de Atracação de Cruzeiros",
      accent: SKY,
      source: "Glassdoor portuário RJ",
      lines: [
        { tree: "├─", text: "30-50h por atracação (coordenação armadoras + CDRJ)", bold: false },
        { tree: "├─", text: "R$65/h × 40h = R$2.600 por atracação", bold: true },
        { tree: "├─", text: "100-150 atracações/ano = custo anual R$195k-487k", bold: true },
        { tree: "└─", text: "Falha no planejamento = atracação perdida (R$500k+ receita)", bold: false },
      ],
    },
    {
      icon: FileCheck,
      title: "Compliance Documental - PF / Alfândega / Anvisa",
      accent: CORAL,
      source: "ANTAQ / estimativa operacional",
      lines: [
        { tree: "├─", text: "20-40h por navio (analista compliance, R$55/h)", bold: false },
        { tree: "├─", text: "R$55/h × 30h = R$1.650 por navio", bold: true },
        { tree: "├─", text: "100-150 navios/ano = custo anual R$110k-330k", bold: true },
        { tree: "└─", text: "Não conformidade ANTAQ: multa R$50k+ por ocorrência", bold: false },
      ],
    },
    {
      icon: CalendarDays,
      title: "Propostas e Locação de Espaços para Eventos",
      accent: VIOLET,
      source: "Catho / estimativa de mercado",
      lines: [
        { tree: "├─", text: "15-25h por proposta (vendas + jurídico, R$60/h)", bold: false },
        { tree: "├─", text: "R$60/h × 20h = R$1.200 por proposta", bold: true },
        { tree: "├─", text: "200-300 propostas/ano = custo anual R$180k-450k", bold: true },
        { tree: "└─", text: "Evento perdido por atraso na resposta = R$200k+ receita média", bold: false },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 md:min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Gerentes de operações portuárias custam{" "}
        <span className="text-white font-medium">R$65/h no Rio de Janeiro (Glassdoor)</span>. Cada hora em
        burocracia manual é margem perdida - especialmente em operações com janelas de tempo curtas.
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
        style={{ border: `1px solid ${SKY_BORDER}`, background: SKY_DIM }}
      >
        <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: SKY }} strokeWidth={1.5} />
        <p className="text-gray-400 text-xs leading-relaxed">
          <strong className="text-white">250 propostas de eventos/ano × R$1.200 × 60% não convertidas</strong> ={" "}
          <strong style={{ color: SKY }}>R$180k/ano</strong> em horas comerciais sem retorno - recuperáveis com automação de propostas.
        </p>
      </div>
    </div>
  );
}

/* ── Slide 04 ─────────────────────────────────────────── */
function Slide04() {
  const groups = [
    {
      process: "Atracação de Cruzeiros",
      impact: "R$10M+ em receita + redução de ociosidade off-season",
      color: SKY,
      items: [
        {
          what: "Otimizador de berços com IA",
          how: "Dados de navios + meteorologia → cronograma de atracação otimizado",
          tools: ["Grok", "Google OR-Tools"],
        },
        {
          what: "Previsão de demanda de passageiros",
          how: "Histórico de cruzeiros + tendências → forecast de staffing e logística",
          tools: ["Claude", "Google Sheets", "Zapier"],
        },
      ],
    },
    {
      process: "Compliance Documental",
      impact: "R$350k em custos evitados (tempo + multas)",
      color: CORAL,
      items: [
        {
          what: "Validador automático de documentos PF/Anvisa/Alfândega",
          how: "PDFs do navio → checklist de conformidade → relatório aprovado",
          tools: ["GPT-4o", "DocAI"],
        },
        {
          what: "Chatbot de consulta compliance",
          how: "Pergunta do agente → resposta baseada na regulação ANTAQ/ISPS",
          tools: ["Grok", "Zapier"],
        },
      ],
    },
    {
      process: "Eventos & Locação de Espaços",
      impact: "R$12M+ em receita adicional - +15% conversão de propostas",
      color: VIOLET,
      items: [
        {
          what: "Gerador de propostas de eventos com IA",
          how: "Brief do cliente → cotação personalizada em PDF pronta para envio",
          tools: ["Claude", "Make.com", "Google Docs"],
        },
        {
          what: "Simulador de receita por configuração de espaço",
          how: "Layout + datas + perfil evento → projeção de receita e margem",
          tools: ["GPT-4o", "Excel"],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 md:min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Ferramentas reais, aplicadas à operação do Píer Mauá. Cada linha pode ser testada{" "}
        <span className="text-white font-medium">ainda esta semana</span> com dados reais de atracações e eventos.
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
      label: "1. Receita adicional de cruzeiros - +20 atracações/ano via otimização de berços",
      math: "20 atracações × R$500k receita média por escala = impacto em RECEITA de cruzeiros",
      result: "+R$10M",
      color: SKY,
    },
    {
      label: "2. Redução de custos operacionais - planejamento e compliance (-50%)",
      math: "R$1M custos anuais combinados (atracação + compliance) × 50% economia = impacto em CUSTO",
      result: "+R$500k",
      color: SKY,
    },
    {
      label: "3. Receita adicional de eventos - +15% conversão de propostas",
      math: "250 propostas × 15% conversão extra × R$800k × 40% margem = impacto em RECEITA de eventos",
      result: "+R$12M",
      color: VIOLET,
    },
    {
      label: "4. Receita off-season via eventos, uso comercial e locações - excluindo cruzeiros (já na alavanca 1)",
      math: "R$102M receita total × 25% ganho em ocupação fora de temporada (eventos, B2B, locações) - impacto em RECEITA não-cruzeiro, independente da alavanca 1",
      result: "+R$25,5M",
      color: CORAL,
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
            150 atracações × R$500k + 250 eventos × 40% × R$800k ={" "}
            <span className="text-white font-medium">R$102M receita real 2023</span>
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Receita operacional líquida real <Source label="Balanço Pier Mauá 2023" />
          </p>
        </div>

        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">
          Alavancas 1, 3 e 4 = impacto em receita · Alavanca 2 = redução de custo operacional
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
          style={{ border: `1px solid ${SKY_BORDER}`, background: SKY_DIM }}
        >
          <p className="text-gray-300 text-sm font-medium">Impacto anual total mensurável</p>
          <p className="font-serif text-2xl font-medium" style={{ color: SKY }}>R$48M</p>
        </div>
      </div>

      <div className="w-full md:w-52 shrink-0 flex flex-col gap-3">
        <div
          className="rounded-2xl p-6 text-center"
          style={{ border: `1px solid ${SKY_BORDER}`, background: SKY_DIM }}
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Ponto de retorno</p>
          <p className="font-serif text-4xl font-medium mb-0.5" style={{ color: SKY }}>~2 meses</p>
          <p className="text-gray-500 text-xs">com impacto total estimado</p>
          <div className="mt-5 pt-5 space-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {[
              { label: "Redução de custos/ano", value: "~R$500k", color: VIOLET },
              { label: "Potencial total (3 frentes)", value: "R$48M", color: SKY },
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
          {["Balanço Pier Mauá 2023", "ANTAQ / ISPS Code", "TCU Portos", "Lei 12.815/2013", "Glassdoor RJ 2026"].map(s => (
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
      title: "Teste esta semana, sem custo",
      desc: "Automatizamos o compliance de 5 atracações reais + geramos 10 propostas de eventos em formato PDF. Vocês avaliam a qualidade antes de qualquer compromisso. Custo: R$25k. ROI em 1 cruzeiro.",
      color: SKY,
    },
    {
      number: "02",
      title: "Sucesso atrelado a resultado",
      desc: "Parte do honorário é vinculada a resultado mensurável - atracações adicionais ou receita de eventos gerada. Se não entregamos, vocês não pagam a parcela de sucesso.",
      color: VIOLET,
    },
    {
      number: "03",
      title: "Co-criação com o time operacional",
      desc: "Cada solução é construída com as equipes do Píer Mauá - não para elas. Treinamento de 2h + piloto rodando na operação real antes de qualquer escala.",
      color: CORAL,
    },
  ];

  return (
    <div className="flex flex-col gap-6 md:min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        A temporada 2025/2026 começa em novembro. Concorrentes como Santos já usam IA para otimizar atracação, e o
        novo marco portuário (PL 733/25) pressiona eficiência.{" "}
        <span className="text-white">Quem estruturar agora chega na temporada com vantagem.</span>
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
        style={{ border: `1px solid ${SKY_BORDER}`, background: SKY_DIM }}
      >
        <div>
          <p className="text-white text-sm font-medium mb-1">Próximo passo</p>
          <p className="text-gray-400 text-xs leading-relaxed max-w-md">
            Uma conversa de 45 minutos com o time operacional e comercial do Píer Mauá. Sem apresentação genérica -
            só dados reais de atracações, compliance e eventos para definir o piloto desta semana.
          </p>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium shrink-0 transition-opacity hover:opacity-80"
          style={{ background: SKY, color: "#0f172a" }}
        >
          Agendar conversa
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

/* ── Shell ────────────────────────────────────────────── */
export default function PierMauaMarketStudySection() {
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
            style={{ background: SKY_DIM, border: `1px solid ${SKY_BORDER}` }}
          >
            <TrendingUp className="w-3 h-3" style={{ color: SKY }} strokeWidth={1.5} />
            <span className="text-xs font-medium tracking-wide" style={{ color: SKY }}>
              Pesquisa de Mercado · Píer Mauá × River Labs
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight mb-3">
            Onde a IA gera valor real<br />em terminais de cruzeiros e eventos
          </h2>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            Análise personalizada para o Píer Mauá S.A. - operações, compliance, eventos e impacto financeiro
            estimado com base em dados reais do balanço 2023 e benchmarks setoriais.
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
                  ? { background: SKY_DIM, color: SKY, border: `1px solid ${SKY_BORDER}` }
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
              <h3 className="text-white font-medium text-lg">{SLIDE_LABELS[current].split("- ")[1]}</h3>
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
                background: i === current ? SKY : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
