"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  AlertTriangle,
  FileText,
  Wrench,
  MessageSquare,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

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
      style={{ background: "rgba(163,191,250,0.1)", color: "#A3BFFA" }}
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pastel-blue/10 border border-pastel-blue/20 mb-5 w-fit">
            <Building2 className="w-3 h-3 text-pastel-blue" strokeWidth={1.5} />
            <span className="text-pastel-blue text-xs font-medium tracking-wide">
              Fundada em 1960 · Belo Horizonte, MG
            </span>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight leading-tight mb-4">
            Construtora<br />Ápia S/A
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Entre as <span className="text-white font-medium">maiores construtoras pesadas</span> do
            Brasil, com especialização em infraestrutura de larga escala e projetos estratégicos nacionais.
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">Segmentos de Atuação</p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-6">
            {["Rodovias & Ferrovias", "Barragens", "Saneamento", "Projetos Industriais", "Concessões", "Engenharia Civil"].map(seg => (
              <div key={seg} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-pastel-blue shrink-0" />
                <span className="text-gray-400 text-xs">{seg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-72 grid grid-cols-2 gap-3">
        {[
          { value: "R$\u00a01,2B", label: "Receita Bruta 2023", accent: "#A3BFFA" },
          { value: "Top 22", label: "Ranking Nacional · CBIC", accent: "#B5EAD7" },
          { value: "60+", label: "Anos de Operação", accent: "#D7BDE2" },
          { value: "6", label: "Segmentos de atuação", accent: "#A3BFFA" },
        ].map(s => (
          <div
            key={s.label}
            className="rounded-2xl p-5 flex flex-col justify-between min-h-30"
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
        A construção pesada opera com margens finas e alta exposição a risco. O jogo se ganha ou se
        perde nos <span className="text-white">processos internos</span>.
      </p>

      <div
        className="rounded-2xl p-5"
        style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
      >
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-5">
          De onde vem (e some) o lucro — Construção Pesada Brasil 2024
        </p>
        <div className="space-y-3">
          {[
            { label: "Receita bruta", pct: 100, color: "#374151", text: "100%", source: null },
            { label: "Custos diretos & indiretos", pct: 84, color: "#4B5563", text: "~84%", source: "IBGE PAIC" },
            { label: "Atrasos & retrabalho", pct: 8, color: "#D7BDE2", text: "8%", source: "TCU" },
            { label: "Margem líquida atual", pct: 8, color: "#6B7280", text: "8%", source: "IBGE" },
            { label: "Com River Labs (+4pp)", pct: 12, color: "#A3BFFA", text: "12%", source: null },
          ].map(row => (
            <div key={row.label} className="flex items-center gap-3">
              <span className="text-gray-500 text-xs w-28 sm:w-44 shrink-0 flex items-center flex-wrap gap-y-0.5">
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
            value: "25%",
            label: "Atraso médio em obras",
            desc: "Do prazo contratado — padrão nacional",
            source: "TCU",
            color: "#A3BFFA",
          },
          {
            value: "70–80%",
            label: "Taxa de perda em licitações",
            desc: "Propostas perdidas por erro documental ou preço",
            source: "TCU / CBIC",
            color: "#D7BDE2",
          },
          {
            value: "8–12%",
            label: "Custo extra por projeto",
            desc: "Da receita gasta em atrasos e correções",
            source: "IBGE PAIC",
            color: "#B5EAD7",
          },
        ].map(p => (
          <div
            key={p.label}
            className="rounded-xl p-5"
            style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
          >
            <p className="font-serif text-2xl font-medium text-white mb-0.5">{p.value}</p>
            <p className="text-xs font-medium text-gray-400 mb-1 flex items-center">
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
      icon: FileText,
      title: "Preparação de Licitações",
      accent: "#A3BFFA",
      source: "TCU / CBIC",
      lines: [
        { tree: "├─", text: "250h médio por proposta (est.)", bold: false },
        { tree: "├─", text: "R$120/h × 250h = R$30k por licitação", bold: true },
        { tree: "├─", text: "70–80% das propostas são perdidas (preço ou documentação)", bold: false },
        { tree: "└─", text: "30 licitações/ano = R$900k em custo total de propostas", bold: true },
      ],
    },
    {
      icon: Wrench,
      title: "Controle Mensal — Obra R$50M",
      accent: "#B5EAD7",
      source: "Lei 8.666/93",
      lines: [
        { tree: "├─", text: "120h/mês engenheiro sênior em relatórios e controle (est.)", bold: false },
        { tree: "├─", text: "Multa diária: 0,05% × R$50M = R$25k/dia", bold: true },
        { tree: "└─", text: "1 semana de atraso = R$175k em custo direto", bold: true },
      ],
    },
    {
      icon: MessageSquare,
      title: "Relatórios e Documentos Técnicos",
      accent: "#D7BDE2",
      source: "estimativa de mercado",
      lines: [
        { tree: "├─", text: "40–120h por laudo ou memorial técnico", bold: false },
        { tree: "├─", text: "R$4,8k–14k por documento (a R$120/h)", bold: true },
        { tree: "└─", text: "Erro em laudo → paralisação, desconto ou revisão do contrato", bold: false },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Engenheiros sêniores custam{" "}
        <span className="text-white font-medium">R$120/h (IBGE 2024)</span>. Cada hora em trabalho não
        faturável é margem que não volta.
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
        style={{ border: "1px solid rgba(215,189,226,0.2)", background: "rgba(215,189,226,0.04)" }}
      >
        <AlertTriangle className="w-4 h-4 text-pastel-purple mt-0.5 shrink-0" strokeWidth={1.5} />
        <p className="text-gray-400 text-xs leading-relaxed">
          <strong className="text-white">30 licitações/ano × R$30k × 70–80% perdidas</strong> ={" "}
          <strong className="text-pastel-purple">R$630k–720k/ano</strong> em horas de engenharia que não
          geram nenhum contrato. Esse número é recuperável.
        </p>
      </div>
    </div>
  );
}

/* ── Slide 04 ─────────────────────────────────────────── */
function Slide04() {
  const groups = [
    {
      process: "Licitações",
      impact: "R$160M de margem incremental",
      color: "#A3BFFA",
      items: [
        {
          what: "Memoriais técnicos em 2h",
          how: "15 memoriais passados → rascunho novo",
          tools: ["Claude 3.5"],
        },
        {
          what: "Levantamento de quantidades com alta precisão",
          how: "PDF/CAD do projeto → planilha orçamentária",
          tools: ["Llama 3.1"],
        },
        {
          what: "Alertas de editais em 5 min",
          how: "Portais de licitações → notificação automática em minutos",
          tools: ["Zapier"],
        },
      ],
    },
    {
      process: "Controle de Obra",
      impact: "R$48M economizados em custos extras",
      color: "#B5EAD7",
      items: [
        {
          what: "Painel de acompanhamento de obra em tempo real",
          how: "Dados de campo + ERP → relatório automático",
          tools: ["Google Sheets", "Make.com"],
        },
        {
          what: "Previsão de custo extra com antecedência",
          how: "Padrões históricos → alerta de desvio",
          tools: ["Claude 3.5"],
        },
        {
          what: "Medições automáticas mensais",
          how: "ERP → boletim gerado sem intervenção",
          tools: ["Make.com"],
        },
      ],
    },
    {
      process: "Documentação",
      impact: "R$1,6M em horas recuperadas",
      color: "#D7BDE2",
      items: [
        {
          what: "Laudos em horas (vs dias de trabalho)",
          how: "Base Notion + histórico → rascunho para revisão",
          tools: ["Notion", "Claude 3.5"],
        },
        {
          what: "Leitura automática de PDFs → Excel",
          how: "Quantidades extraídas sem digitação manual",
          tools: ["Extração de PDF"],
        },
        {
          what: "Checklist automático de exigências por órgão",
          how: "Base de requisitos por órgão → lista gerada automaticamente",
          tools: ["Google Forms"],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 min-h-100">
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Ferramentas reais, sem promessas vazias. Cada linha abaixo pode ser testada{" "}
        <span className="text-white font-medium">ainda esta semana</span>.
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
      label: "1. Volume de licitações: 30 → 70/ano",
      math: "40 extras × 20% taxa de vitória × R$180M × 10% margem",
      result: "+R$144M margem",
      color: "#A3BFFA",
    },
    {
      label: "2. Taxa de vitória: 20% → 23% (propostas melhores)",
      math: "30 × +3 p.p. × R$180M × 10% margem",
      result: "+R$16M margem",
      color: "#A3BFFA",
    },
    {
      label: "3. Custo extra de obra: 8% → 4% da receita",
      math: "4 pontos % × R$1,2B de receita base",
      result: "+R$48M",
      color: "#B5EAD7",
    },
    {
      label: "4. Horas recuperadas de engenharia",
      math: "15 eng × 150h/mês × 50% × R$120 × 12 meses (est. conservadora)",
      result: "+R$1,6M",
      color: "#D7BDE2",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 min-h-100 items-start">
      <div className="flex-1 min-w-0">
        {/* Base */}
        <div
          className="rounded-xl p-4 mb-4"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
        >
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-2">Base de cálculo</p>
          <p className="text-gray-300 text-sm font-mono">
            30 licitações × 20% × R$180M valor médio ={" "}
            <span className="text-white font-medium">R$1,08B receita atual</span>
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Custo engenheiro: R$120/h <Source label="IBGE 2024" /> · Volume, taxa de vitória e valor médio: <Source label="dados Ápia" />
          </p>
        </div>

        {/* Levers */}
        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">
          Alavancas 1 e 2 · resultado = margem líquida (não receita)
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
                <p className="text-gray-600 text-xs font-mono wrap-break-word">{l.math}</p>
              </div>
              <span className="font-serif text-lg font-medium shrink-0" style={{ color: l.color }}>
                {l.result}
              </span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div
          className="rounded-xl p-4 mt-3 flex items-center justify-between"
          style={{ border: "1px solid rgba(181,234,215,0.2)", background: "rgba(181,234,215,0.04)" }}
        >
          <p className="text-gray-300 text-sm font-medium">Impacto anual total mensurável</p>
          <p className="font-serif text-2xl font-medium text-pastel-green">R$210M</p>
        </div>
      </div>

      {/* ROI sidebar */}
      <div className="w-full md:w-52 shrink-0 flex flex-col gap-3">
        <div
          className="rounded-2xl p-6 text-center"
          style={{ border: "1px solid rgba(163,191,250,0.2)", background: "rgba(163,191,250,0.06)" }}
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Ponto de retorno</p>
          <p className="font-serif text-4xl font-medium text-pastel-blue mb-0.5">~3 sem.</p>
          <p className="text-gray-500 text-xs">só com economia de custos diretos</p>
          <div className="mt-5 pt-5 space-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {[
              { label: "Investimento River Labs", value: "R$3,2M", accent: "text-white" },
              { label: "Economia direta/ano", value: "~R$50M", accent: "text-pastel-green" },
              { label: "Potencial total (4 frentes)", value: "R$210M", accent: "text-pastel-green" },
            ].map(r => (
              <div key={r.label} className="flex flex-col text-left gap-0.5">
                <span className="text-gray-600 text-[10px]">{r.label}</span>
                <span className={`font-medium text-sm ${r.accent}`}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-xl p-4"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
        >
          <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-2">Fontes</p>
          {["TCU relatórios", "Lei 8.666/93", "IBGE PAIC 2024", "CBIC 2023"].map(s => (
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
      desc: "Pegamos 1 licitação real da Ápia e mostramos um memorial gerado por IA em 2h. Vocês avaliam antes de qualquer compromisso.",
      color: "#A3BFFA",
    },
    {
      number: "02",
      title: "30% apenas após ganhar 1 contrato",
      desc: "Nosso honorário é parcialmente atrelado a resultado. Se não ganharmos 1 contrato extra, vocês não pagam a parcela de sucesso.",
      color: "#B5EAD7",
    },
    {
      number: "03",
      title: "Código 100% seu, sem dependência",
      desc: "Tudo que construirmos roda na infra da Ápia. Sem plataforma proprietária, sem vínculo com fornecedor.",
      color: "#D7BDE2",
    },
    {
      number: "04",
      title: "R$3,2M fixo — 3 agentes + 90 dias",
      desc: "Agente de licitações, controle de obra e documentação técnica. Preço fechado, escopo fechado, entrega em 90 dias.",
      color: "#A3BFFA",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 min-h-100 items-start">
      <div className="flex-1 flex flex-col gap-5">
        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
          Não pedimos que você acredite no potencial da IA.{" "}
          <span className="text-white font-medium">Pedimos que você teste uma vez.</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {commits.map(c => (
            <div
              key={c.number}
              className="rounded-xl p-4 flex flex-col gap-2"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-medium" style={{ color: c.color }}>
                  {c.number}
                </span>
                <p className="text-white text-xs font-medium">{c.title}</p>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">Checklist antes de apresentar</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {[
              "Métricas citam TCU/IBGE/Lei 8.666",
              "R$210M traça até 30 licitações × R$180M",
              "Ferramentas reais: Claude, Zapier, Sheets",
              "Payback ~3 semanas (só custos diretos)",
              "Pagamento parcial após 1 contrato ganho",
            ].map(item => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-pastel-green shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-gray-500 text-xs leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="w-full md:w-64 shrink-0 rounded-2xl p-6 flex flex-col gap-4"
        style={{ border: "1px solid rgba(163,191,250,0.2)", background: "rgba(163,191,250,0.05)" }}
      >
        <div>
          <p className="font-serif text-xl text-white font-medium mb-1.5">Pronto para testar?</p>
          <p className="text-gray-400 text-xs leading-relaxed">
            Diagnóstico gratuito em 48h. Identificamos as 3 maiores oportunidades e mostramos
            um resultado real de IA aplicado nos seus dados.
          </p>
        </div>
        <Link
          href="/pt/contact"
          className="w-full flex items-center justify-center gap-2 bg-pastel-blue text-gray-900 text-sm font-medium py-2.5 px-4 rounded-xl hover:bg-[#B5C9FF] transition-colors"
        >
          Falar com a River Labs
          <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
        </Link>
        <Link
          href="/pt/contact"
          className="w-full flex items-center justify-center gap-2 text-gray-300 text-sm font-medium py-2.5 px-4 rounded-xl hover:bg-white/5 transition-colors"
          style={{ border: "1px solid rgba(255,255,255,0.15)" }}
        >
          Agendar uma conversa
        </Link>
        <div
          className="rounded-lg p-3"
          style={{ background: "rgba(181,234,215,0.06)", border: "1px solid rgba(181,234,215,0.15)" }}
        >
          <div className="flex items-start gap-2">
            <TrendingUp className="w-3.5 h-3.5 text-pastel-green shrink-0 mt-0.5" strokeWidth={1.5} />
            <p className="text-pastel-green text-[10px] leading-relaxed">
              Primeiro teste gratuito. Pagamento de sucesso só após 1 contrato ganho.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main ─────────────────────────────────────────────── */
const SLIDES = [Slide01, Slide02, Slide03, Slide04, Slide05, Slide06];

export default function MarketStudySection() {
  const [current, setCurrent] = useState(0);
  const prev = useCallback(() => setCurrent(c => (c - 1 + TOTAL) % TOTAL), []);
  const next = useCallback(() => setCurrent(c => (c + 1) % TOTAL), []);
  const CurrentSlide = SLIDES[current];
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tabsRef.current?.children[current] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [current]);

  return (
    <section className="py-24 bg-gray-950" id="market-study">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-pastel-blue text-xs font-medium tracking-widest uppercase">
              Estudo de Mercado
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mt-2">
              Grupo Ápia × River Labs
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md leading-relaxed">
              Análise de oportunidades de IA & automação com números verificáveis — fontes TCU, IBGE,
              Lei 8.666 e com base na própria receita da Ápia.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Slide anterior"
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Próximo slide"
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab nav */}
        <div ref={tabsRef} className="flex overflow-x-auto gap-1 mb-6 pb-1" style={{ scrollbarWidth: "none" }}>
          {SLIDE_LABELS.map((label, i) => (
            <button
              key={label}
              onClick={() => setCurrent(i)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                i === current ? "bg-pastel-blue/15 text-pastel-blue" : "text-gray-600 hover:text-gray-400"
              }`}
              style={
                i === current
                  ? { border: "1px solid rgba(163,191,250,0.25)" }
                  : { border: "1px solid transparent" }
              }
            >
              {label}
            </button>
          ))}
        </div>

        {/* Slide card */}
        <div
          className="rounded-3xl p-6 md:p-10"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "#111827" }}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span
                className="font-serif text-5xl font-medium leading-none select-none"
                style={{ color: "rgba(255,255,255,0.04)" }}
              >
                {String(current + 1).padStart(2, "0")}
              </span>
              <div className="h-px w-6" style={{ background: "rgba(255,255,255,0.1)" }} />
              <span className="text-gray-500 text-sm">{SLIDE_LABELS[current].split("— ")[1]}</span>
            </div>
            <span className="text-gray-700 text-xs">{current + 1} / {TOTAL}</span>
          </div>

          <div key={current} className="animate-fade-in-up">
            <CurrentSlide />
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-1.5 items-center">
            {Array.from({ length: TOTAL }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 24 : 4,
                  background: i === current ? "#A3BFFA" : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-4">
            {current < TOTAL - 1 && (
              <button
                onClick={next}
                className="hidden md:flex items-center gap-1.5 text-gray-700 hover:text-gray-400 text-xs transition-colors"
              >
                {SLIDE_LABELS[current + 1].split("— ")[1]}
                <ChevronRight className="w-3 h-3" />
              </button>
            )}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={prev}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-white"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-white"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
