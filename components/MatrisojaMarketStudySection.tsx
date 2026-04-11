"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sprout,
  AlertTriangle,
  FileText,
  Truck,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const TEAL = "#2DD4BF";
const TEAL_DIM = "rgba(45,212,191,0.12)";
const TEAL_BORDER = "rgba(45,212,191,0.2)";
const GREEN = "#86EFAC";
const AMBER = "#FCD34D";

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
      style={{ background: TEAL_DIM, color: TEAL }}
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
            style={{ background: TEAL_DIM, border: `1px solid ${TEAL_BORDER}` }}
          >
            <Sprout className="w-3 h-3" style={{ color: TEAL }} strokeWidth={1.5} />
            <span className="text-xs font-medium tracking-wide" style={{ color: TEAL }}>
              Fundada ~2012 · Sorriso, Mato Grosso
            </span>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight leading-tight mb-4">
            Matrisoja<br />Agroindustrial
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Empresa de médio porte no <span className="text-white font-medium">agro-soja do Centro-Oeste</span>, operando
            em produção, trading e logística de grãos a partir de Sorriso/MT - capital mundial da soja.
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">Segmentos de Atuação</p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-6">
            {[
              "Cultivo de Soja",
              "Trading de Commodities",
              "Logística de Grãos",
              "Beneficiamento",
              "Comercialização",
              "Exportação",
            ].map(seg => (
              <div key={seg} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full shrink-0" style={{ background: TEAL }} />
                <span className="text-gray-400 text-xs">{seg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-80 grid grid-cols-2 gap-3">
        {[
          { value: "R$\u00a0200M", label: "Receita Bruta Est. 2025", accent: TEAL },
          { value: "5-10k", label: "Hectares Plantados", accent: GREEN },
          { value: "150-300", label: "Funcionários", accent: AMBER },
          { value: "~2012", label: "Ano de Fundação", accent: TEAL },
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
        O agro-soja opera com margens pressionadas por volatilidade de preços e custos logísticos altos. O diferencial
        competitivo está nos <span className="text-white">processos internos e na velocidade de decisão</span>.
      </p>

      <div
        className="rounded-2xl p-5"
        style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
      >
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-5">
          Estrutura de Custos - Trading de Soja MT 2025
        </p>
        <div className="space-y-3">
          {[
            { label: "Receita bruta", pct: 100, color: "#374151", text: "100%", source: null },
            { label: "Insumos (fertilizantes + defensivos)", pct: 45, color: "#4B5563", text: "~45%", source: "Conab 2025" },
            { label: "Logística (frete MT → Santos)", pct: 30, color: "#374151", text: "~30%", source: "Conab 2025" },
            { label: "Perdas pós-colheita (armazéns)", pct: 7, color: AMBER, text: "7%", source: "Embrapa" },
            { label: "Margem líquida atual", pct: 10, color: "#6B7280", text: "~10%", source: "ABIove 2025" },
            { label: "Com River Labs (+4pp)", pct: 14, color: TEAL, text: "14%", source: null },
          ].map(row => (
            <div key={row.label} className="flex items-center gap-3">
              <span className="text-gray-500 text-xs w-28 sm:w-52 shrink-0 flex items-center flex-wrap gap-y-0.5">
                {row.label}
                {row.source && <Source label={row.source} />}
              </span>
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 bg-white/5 rounded-full h-5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${row.pct}%`, background: row.color }}
                  />
                </div>
                <span className="text-gray-300 text-[10px] font-medium w-8 text-right shrink-0">{row.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            value: "5-10%",
            label: "Perdas pós-colheita",
            desc: "Volume perdido por armazenagem inadequada",
            source: "Embrapa",
            color: TEAL,
          },
          {
            value: "15-20%",
            label: "Erro em previsão de yield",
            desc: "Imprecisão no planejamento manual de safra",
            source: "TCU Logística Agro 2024",
            color: GREEN,
          },
          {
            value: "8-12%",
            label: "Custo compliance",
            desc: "Da receita em conformidade Conab + Lei 14.133",
            source: "IBGE Agro 2025",
            color: AMBER,
          },
        ].map(p => (
          <div
            key={p.label}
            className="rounded-xl p-5"
            style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
          >
            <p className="font-serif text-2xl font-medium text-white mb-0.5">{p.value}</p>
            <p className="text-xs font-medium text-gray-400 mb-1 flex items-center flex-wrap gap-y-0.5">
              {p.label}
              <Source label={p.source} />
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
      icon: Sprout,
      title: "Planejamento de Safra e Previsão de Yield",
      accent: TEAL,
      source: "TCU / Glassdoor 2026",
      lines: [
        { tree: "├─", text: "40-60h por planejamento (equipe de 5 × 2 semanas)", bold: false },
        { tree: "├─", text: "R$45/h × 50h = R$2.250-3.000 por safra", bold: true },
        { tree: "├─", text: "Frequência: semestral (duas safras/ano)", bold: false },
        { tree: "└─", text: "Erro de yield → perda R$500k+ em vendas não planejadas", bold: true },
      ],
    },
    {
      icon: FileText,
      title: "Elaboração de Propostas Comerciais e Contratos",
      accent: GREEN,
      source: "Catho / estimativa de mercado",
      lines: [
        { tree: "├─", text: "20-30h por proposta (vendas + jurídico)", bold: false },
        { tree: "├─", text: "R$60/h × 25h = R$1.500 por proposta", bold: true },
        { tree: "├─", text: "10-20 propostas/mês = custo anual R$144k-432k", bold: true },
        { tree: "└─", text: "Proposta perdida por atraso = R$1-5M valor médio de contrato", bold: false },
      ],
    },
    {
      icon: Truck,
      title: "Compliance Logístico e Conab",
      accent: AMBER,
      source: "Lei 10.925/2004 / Conab",
      lines: [
        { tree: "├─", text: "15-25h por remessa (logístico sênior, R$50/h)", bold: false },
        { tree: "├─", text: "R$50/h × 20h = R$1.000 por remessa", bold: true },
        { tree: "├─", text: "50-100 remessas/ano = R$37k-125k em custo anual", bold: true },
        { tree: "└─", text: "Multa Conab por não conformidade: R$10k+ por ocorrência", bold: false },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 md:min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Analistas agro custam{" "}
        <span className="text-white font-medium">R$45-60/h (Glassdoor 2026)</span>. Cada hora em
        burocracia manual é margem que não volta - e no agro, cada semana conta.
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
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${p.accent}18` }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: p.accent }} strokeWidth={1.5} />
                </div>
                <span className="text-white text-sm font-medium">{p.title}</span>
                <Source label={p.source} />
              </div>
              <div className="space-y-1.5 pl-2">
                {p.lines.map((l, i) => (
                  <div key={i} className="flex items-baseline gap-2">
                    <span className="text-gray-700 text-xs font-mono shrink-0">{l.tree}</span>
                    <span
                      className="text-xs leading-relaxed"
                      style={{ color: l.bold ? "rgb(229,231,235)" : "rgb(107,114,128)" }}
                    >
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
        style={{ border: `1px solid ${TEAL_BORDER}`, background: TEAL_DIM }}
      >
        <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: TEAL }} strokeWidth={1.5} />
        <p className="text-gray-400 text-xs leading-relaxed">
          <strong className="text-white">200 propostas/ano × R$1.500 × 70% não convertidas</strong> ={" "}
          <strong style={{ color: TEAL }}>R$210k/ano</strong> em horas comerciais sem retorno. Esse número é recuperável
          com automação.
        </p>
      </div>
    </div>
  );
}

/* ── Slide 04 ─────────────────────────────────────────── */
function Slide04() {
  const groups = [
    {
      process: "Planejamento de Safra",
      impact: "R$550k em erros evitados",
      color: TEAL,
      items: [
        {
          what: "Previsão de yield com IA por talhão",
          how: "Imagens Sentinel + histórico fazenda → mapa de yield + relatório",
          tools: ["Grok API", "Google Earth Engine"],
        },
        {
          what: "Otimização de insumos por área",
          how: "Dados de solo + clima → plano de fertilização por talhão",
          tools: ["Claude", "Excel", "Zapier"],
        },
        {
          what: "Alerta automático de desvio de produção",
          how: "Dados de campo em tempo real → alerta de desvio vs. meta",
          tools: ["Make.com", "Google Sheets"],
        },
      ],
    },
    {
      process: "Propostas Comerciais",
      impact: "R$900k em horas recuperadas (elaboração + precificação + monitoramento de contratos)",
      color: GREEN,
      items: [
        {
          what: "Gerador de propostas comerciais com IA",
          how: "Dados do cliente no CRM → proposta formatada em PDF",
          tools: ["GPT-4o", "Make.com", "Google Docs"],
        },
        {
          what: "Simulador de preço dinâmico CBOT",
          how: "Preços de mercado em tempo real → faixa ideal de oferta",
          tools: ["Grok", "TradingView API"],
        },
        {
          what: "Monitoramento automático de contratos",
          how: "Vencimentos + condições → alertas automáticos de ação",
          tools: ["Notion", "Zapier"],
        },
      ],
    },
    {
      process: "Compliance Logístico",
      impact: "R$230k economizados",
      color: AMBER,
      items: [
        {
          what: "Validador de conformidade Conab automático",
          how: "PDF da remessa → checklist de compliance + relatório aprovado",
          tools: ["Claude", "DocParser"],
        },
        {
          what: "Roteirizador de frota inteligente",
          how: "Pedidos de entrega → rota otimizada + cronograma",
          tools: ["Google OR-Tools", "Zapier"],
        },
        {
          what: "Extração automática de PDFs para Excel",
          how: "Documentos fiscais → planilha preenchida sem digitação",
          tools: ["Claude", "Make.com"],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 md:min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Ferramentas reais, sem promessas vazias. Cada linha abaixo pode ser testada{" "}
        <span className="text-white font-medium">ainda esta semana</span> com dados reais da Matrisoja.
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
              <p className="text-xs font-medium" style={{ color: g.color }}>
                → {g.impact}
              </p>
            </div>

            <div className="space-y-3.5 flex-1">
              {g.items.map(item => (
                <div key={item.what}>
                  <p className="text-white text-xs font-medium mb-0.5">{item.what}</p>
                  <p className="text-gray-600 text-xs leading-relaxed mb-1">{item.how}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tools.map(t => (
                      <Tool key={t} name={t} />
                    ))}
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
      label: "1. Volume de propostas: 200 → 300/ano (automação libera capacidade)",
      math: "100 extras × 30% conversão × R$2M valor médio × 10% margem",
      result: "+R$6M",
      color: TEAL,
    },
    {
      label: "2. Redução custo de elaboração de propostas (-80% tempo)",
      math: "200 propostas × R$1.500 × 80% economia",
      result: "+R$240k",
      color: TEAL,
    },
    {
      label: "3. Compliance logístico e frete (validador Conab + roteirização)",
      math: "R$80k (validador Conab -70% tempo) + R$150k (frete -20% custo)",
      result: "+R$230k",
      color: GREEN,
    },
    {
      label: "4. Receita adicional por melhor planejamento de yield (+5pp)",
      math: "R$120M receita × 5% em contratos antecipados e produção não desperdiçada - impacto em RECEITA",
      result: "+R$6M",
      color: AMBER,
    },
    {
      label: "5. Redução de custos operacionais de safra - planejamento e insumos",
      math: "R$250k (horas analista -50%, 2 safras/ano) + R$300k (insumos -15%) - impacto em CUSTO, independente da alavanca 4",
      result: "+R$550k",
      color: GREEN,
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
            200 propostas × 30% × R$2M ={" "}
            <span className="text-white font-medium">R$120M receita estimada</span>
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Custo analista: R$45-60/h <Source label="Glassdoor 2026" /> · Volume e conversão: <Source label="CNA / estimativa de mercado" />
          </p>
        </div>

        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">
          Alavancas 1 e 4 = impacto em receita · Alavancas 2, 3 e 5 = redução de custo operacional
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
                <p className="text-gray-600 text-xs font-mono break-all">{l.math}</p>
              </div>
              <span className="font-serif text-lg font-medium shrink-0" style={{ color: l.color }}>
                {l.result}
              </span>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-4 mt-3 flex items-center justify-between"
          style={{ border: `1px solid ${TEAL_BORDER}`, background: TEAL_DIM }}
        >
          <p className="text-gray-300 text-sm font-medium">Impacto anual total mensurável</p>
          <p className="font-serif text-2xl font-medium" style={{ color: TEAL }}>R$13,02M</p>
        </div>
      </div>

      <div className="w-full md:w-52 shrink-0 flex flex-col gap-3">
        <div
          className="rounded-2xl p-6 text-center"
          style={{ border: `1px solid ${TEAL_BORDER}`, background: TEAL_DIM }}
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Ponto de retorno</p>
          <p className="font-serif text-4xl font-medium mb-0.5" style={{ color: TEAL }}>~6 sem.</p>
          <p className="text-gray-500 text-xs">com impacto total estimado</p>
          <div className="mt-5 pt-5 space-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {[
              { label: "Redução de custos/ano", value: "~R$1,02M", color: GREEN },
              { label: "Potencial total (3 frentes)", value: "R$13,02M", color: TEAL },
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
          {["ABIove 2025", "Conab 2025/26", "Embrapa", "IBGE Agro 2025", "MAPA / CNA 2025", "Glassdoor 2026"].map(s => (
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
      desc: "Pegamos 1 proposta comercial real da Matrisoja e entregamos a versão automatizada em 48h. Vocês avaliam a qualidade antes de qualquer compromisso.",
      color: TEAL,
    },
    {
      number: "02",
      title: "Sucesso atrelado a resultado",
      desc: "Parte do nosso honorário é vinculada a resultado mensurável - economia real ou receita adicional gerada. Se não entregar, vocês não pagam a parcela de sucesso.",
      color: GREEN,
    },
    {
      number: "03",
      title: "Co-criação com o time de campo",
      desc: "Cada solução é construída com as equipes da Matrisoja - não para elas. O piloto é testado na operação real antes de qualquer escala.",
      color: AMBER,
    },
  ];

  return (
    <div className="flex flex-col gap-6 md:min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        A safra 2026/27 começa em 3 meses. Tradings globais como Cargill e ADM já usam IA para yield e
        pricing - <span className="text-white">quem fica manual perde margem por padrão.</span>
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
        style={{ border: `1px solid ${TEAL_BORDER}`, background: TEAL_DIM }}
      >
        <div>
          <p className="text-white text-sm font-medium mb-1">Próximo passo</p>
          <p className="text-gray-400 text-xs leading-relaxed max-w-md">
            Uma conversa de 45 minutos com o time comercial e operacional da Matrisoja. Sem apresentação genérica -
            só dados reais e 1 caso de uso para testar ainda esta semana.
          </p>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium shrink-0 transition-opacity hover:opacity-80"
          style={{ background: TEAL, color: "#0f172a" }}
        >
          Agendar conversa
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

/* ── Shell ────────────────────────────────────────────── */
export default function MatrisojaMarketStudySection() {
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
        {/* Header */}
        <div className="mb-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 w-fit"
            style={{ background: TEAL_DIM, border: `1px solid ${TEAL_BORDER}` }}
          >
            <TrendingUp className="w-3 h-3" style={{ color: TEAL }} strokeWidth={1.5} />
            <span className="text-xs font-medium tracking-wide" style={{ color: TEAL }}>
              Pesquisa de Mercado · Matrisoja × River Labs
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight mb-3">
            Onde a IA gera valor real<br />no agronegócio da soja
          </h2>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            Análise personalizada para a Matrisoja Agroindustrial - processos, custos, oportunidades e impacto
            financeiro estimado com base em dados públicos do setor.
          </p>
        </div>

        {/* Nav tabs */}
        <div className="flex gap-1 flex-wrap mb-8">
          {SLIDE_LABELS.map((label, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={
                i === current
                  ? { background: TEAL_DIM, color: TEAL, border: `1px solid ${TEAL_BORDER}` }
                  : { background: "transparent", color: "rgb(107,114,128)", border: "1px solid transparent" }
              }
            >
              {label}
            </button>
          ))}
        </div>

        {/* Slide */}
        <div
          className="rounded-3xl p-6 md:p-8 transition-opacity duration-200"
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.015)",
            opacity: animating ? 0 : 1,
          }}
        >
          {/* Slide header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-1">
                {current + 1} / {TOTAL}
              </p>
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

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                background: i === current ? TEAL : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
