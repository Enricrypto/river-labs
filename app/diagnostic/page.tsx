"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

/* ─── Types ────────────────────────────────────────────── */
type QuestionType = "choice" | "multiselect" | "scale" | "text" | "email";

interface Question {
  id: string;
  label: string;
  type: QuestionType;
  options?: string[];
  hint?: string;
  maxSelect?: number;
  required?: boolean;
}

interface StepDef {
  id: string;
  title: string;
  subtitle: string;
  questions: Question[];
}

type AnswerValue = string | string[] | number;
type Answers = Record<string, AnswerValue>;

/* ─── Steps ────────────────────────────────────────────── */
const STEPS: StepDef[] = [
  {
    id: "empresa",
    title: "Sobre o seu negócio",
    subtitle: "Contexto inicial para entendermos o tamanho e o setor da sua operação.",
    questions: [
      {
        id: "setor",
        label: "Em qual setor sua empresa atua?",
        type: "choice",
        options: [
          "Logística & transporte",
          "Imobiliário & construção",
          "Varejo & e-commerce",
          "Manufatura & indústria",
          "Saúde & clínicas",
          "Educação",
          "Financeiro & contabilidade",
          "Tecnologia & SaaS",
          "Agronegócio",
          "Outro",
        ],
        required: true,
      },
      {
        id: "receita",
        label: "Qual é a faixa de receita bruta anual?",
        type: "choice",
        options: ["Até R$1M", "R$1M - R$10M", "R$10M - R$50M", "R$50M - R$200M", "Acima de R$200M"],
        required: true,
      },
    ],
  },
  {
    id: "operacao",
    title: "Onde o tempo vai embora",
    subtitle: "Identificar as áreas com mais trabalho manual é o primeiro passo para calcular o ROI.",
    questions: [
      {
        id: "areas_manuais",
        label: "Em quais áreas sua equipe passa mais tempo em tarefas manuais ou repetitivas?",
        type: "multiselect",
        options: [
          "Operações & logística",
          "Vendas & CRM",
          "Financeiro & controladoria",
          "RH & folha de pagamento",
          "Atendimento ao cliente",
          "Relatórios & análise de dados",
          "Jurídico & compliance",
          "Compras & supply chain",
        ],
        required: true,
      },
    ],
  },
  {
    id: "gargalos",
    title: "Principais gargalos",
    subtitle: "Escolha os problemas que mais impactam o resultado hoje.",
    questions: [
      {
        id: "problemas",
        label: "Quais são os maiores desafios operacionais da empresa? (escolha até 3)",
        type: "multiselect",
        maxSelect: 3,
        options: [
          "Processos manuais e repetitivos que consomem tempo",
          "Falta de visibilidade e dados em tempo real",
          "Retrabalho causado por erros humanos",
          "Dificuldade de comunicação entre áreas",
          "Decisões lentas por falta de informação consolidada",
          "Dificuldade de crescer sem contratar muito mais",
          "Atrasos e descumprimento de prazos",
          "Custo operacional elevado",
        ],
        required: true,
      },
    ],
  },
  {
    id: "escala",
    title: "Escala do problema",
    subtitle: "Entender o volume nos ajuda a estimar o impacto financeiro real antes de qualquer proposta.",
    questions: [
      {
        id: "pessoas_afetadas",
        label: "Quantas pessoas estão envolvidas nos processos que você quer melhorar?",
        type: "choice",
        options: ["1 - 5 pessoas", "5 - 20 pessoas", "20 - 100 pessoas", "Mais de 100 pessoas"],
        required: true,
      },
      {
        id: "impacto_frequencia",
        label: "Com que frequência esses problemas causam impacto real no resultado?",
        type: "scale",
        hint: "0 = raramente  ·  10 = todo dia, o tempo todo",
        required: true,
      },
    ],
  },
  {
    id: "ferramentas",
    title: "Ferramentas que vocês usam",
    subtitle: "Saber o que já existe nos ajuda a integrar em vez de substituir.",
    questions: [
      {
        id: "sistemas",
        label: "Quais sistemas ou ferramentas a empresa usa hoje? (selecione todas que se aplicam)",
        type: "multiselect",
        options: [
          "ERP - SAP, TOTVS, Omie ou similar",
          "CRM - Salesforce, HubSpot, RD Station ou similar",
          "Excel & Google Sheets",
          "BI - Power BI, Tableau, Looker",
          "Sistema desenvolvido internamente",
          "Plataformas de e-commerce",
          "Ferramentas de comunicação - Slack, Teams",
          "Poucos sistemas estruturados",
        ],
        required: true,
      },
    ],
  },
  {
    id: "automacao",
    title: "Experiência com automação",
    subtitle: "Sem julgamento - o contexto nos ajuda a propor o que realmente faz sentido para a sua realidade.",
    questions: [
      {
        id: "tentou_antes",
        label: "Sua empresa já tentou alguma solução de automação ou IA antes?",
        type: "choice",
        options: [
          "Não, ainda não exploramos esse caminho",
          "Tentamos, mas sem resultados concretos",
          "Sim, com resultados parciais - queremos evoluir",
          "Sim, com bons resultados - queremos expandir",
        ],
        required: true,
      },
      {
        id: "maior_obstáculo",
        label: "Qual foi ou seria o maior obstáculo para implementar uma solução?",
        type: "choice",
        options: [
          "Custo e incerteza sobre o retorno",
          "Falta de tempo para conduzir a mudança",
          "Resistência da equipe",
          "Integração com sistemas existentes",
          "Não saber por onde começar",
        ],
        required: true,
      },
    ],
  },
  {
    id: "prioridades",
    title: "O que mais importa agora",
    subtitle: "Isso define onde focamos primeiro.",
    questions: [
      {
        id: "objetivo_principal",
        label: "Qual é o principal objetivo para os próximos 12 meses? (escolha até 2)",
        type: "multiselect",
        maxSelect: 2,
        options: [
          "Reduzir custos operacionais",
          "Aumentar receita ou volume de vendas",
          "Escalar sem precisar contratar muito mais",
          "Melhorar qualidade e reduzir erros",
          "Tomar decisões mais rápidas e embasadas",
          "Melhorar experiência do cliente",
          "Atender exigências regulatórias ou de compliance",
        ],
        required: true,
      },
    ],
  },
  {
    id: "expectativas",
    title: "Expectativas e próximo passo",
    subtitle: "Alinhamento rápido para que nossa proposta faça sentido desde a primeira conversa.",
    questions: [
      {
        id: "prazo_resultado",
        label: "Em que prazo você espera ver os primeiros resultados?",
        type: "choice",
        options: ["1 - 3 meses", "3 - 6 meses", "6 - 12 meses", "Ainda estou explorando"],
        required: true,
      },
      {
        id: "metrica_sucesso",
        label: "O que seria um resultado claro de sucesso para você?",
        type: "choice",
        options: [
          "Redução mensurável de custo",
          "Horas economizadas por semana",
          "Aumento de receita ou margem",
          "Menos erros e retrabalho",
          "Relatórios e decisões mais rápidas",
        ],
        required: true,
      },
    ],
  },
  {
    id: "contato",
    title: "Contato",
    subtitle: "Com base nas suas respostas, preparamos um diagnóstico personalizado e gratuito em até 48h.",
    questions: [
      { id: "nome", label: "Seu nome completo", type: "text", required: true },
      { id: "empresa_nome", label: "Nome da empresa", type: "text", required: true },
      {
        id: "cargo",
        label: "Seu cargo",
        type: "choice",
        options: ["CEO / Fundador", "Diretor / VP", "Gerente", "Analista / Coordenador", "Outro"],
        required: true,
      },
      { id: "email", label: "E-mail corporativo", type: "email", required: true },
      { id: "whatsapp", label: "WhatsApp (opcional)", type: "text", required: false },
    ],
  },
];

const TOTAL = STEPS.length;

/* ─── UI primitives ────────────────────────────────────── */
function ChoiceCard({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left px-4 py-3.5 rounded-xl text-sm transition-all duration-150"
      style={{
        border: selected ? "1px solid rgba(163,191,250,0.45)" : "1px solid rgba(255,255,255,0.08)",
        background: selected ? "rgba(163,191,250,0.08)" : "transparent",
        color: selected ? "#A3BFFA" : "rgb(156,163,175)",
      }}
      onMouseEnter={e => { if (!selected) { (e.currentTarget as HTMLButtonElement).style.color = "rgb(229,231,235)"; (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)"; } }}
      onMouseLeave={e => { if (!selected) { (e.currentTarget as HTMLButtonElement).style.color = "rgb(156,163,175)"; (e.currentTarget as HTMLButtonElement).style.background = "transparent"; } }}
    >
      <span className="flex items-center justify-between gap-3">
        {label}
        {selected && <Check className="w-3.5 h-3.5 shrink-0 text-pastel-blue" strokeWidth={2.5} />}
      </span>
    </button>
  );
}

function ScaleInput({ value, onChange, hint }: { value?: number; onChange: (v: number) => void; hint?: string }) {
  return (
    <div>
      <div className="overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        <div className="flex gap-1.5" style={{ minWidth: "max-content" }}>
          {Array.from({ length: 11 }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onChange(i)}
              className="w-9 h-9 rounded-lg text-sm font-medium transition-all duration-150 shrink-0"
              style={{
                background: value === i ? "#A3BFFA" : "transparent",
                color: value === i ? "#111827" : "rgb(107,114,128)",
                border: value === i ? "none" : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
      {hint && <p className="text-gray-600 text-xs mt-3">{hint}</p>}
    </div>
  );
}

function TextInput({ value, onChange, type = "text" }: { value: string; onChange: (v: string) => void; type?: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Digite aqui..."
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="w-full bg-transparent text-white text-sm placeholder-gray-700 py-3 px-4 rounded-xl outline-none transition-all duration-150"
      style={{ border: focused ? "1px solid rgba(163,191,250,0.5)" : "1px solid rgba(255,255,255,0.1)" }}
    />
  );
}

/* ─── Success ───────────────────────────────────────────── */
function SuccessScreen() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(181,234,215,0.15)" }}>
          <CheckCircle2 className="w-7 h-7 text-pastel-green" strokeWidth={1.5} />
        </div>
        <h2 className="font-serif text-3xl text-white font-medium mb-3">Diagnóstico enviado.</h2>
        <p className="text-gray-400 text-base leading-relaxed mb-8">
          Nossa equipe vai analisar suas respostas e entrar em contato em até{" "}
          <span className="text-white font-medium">48 horas</span> com as principais oportunidades identificadas.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 text-sm hover:text-gray-300 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao site
        </Link>
      </div>
    </div>
  );
}

/* ─── Main ──────────────────────────────────────────────── */
export default function DiagnosticPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const current = STEPS[step];

  function setAnswer(id: string, value: AnswerValue) {
    setAnswers(prev => ({ ...prev, [id]: value }));
  }

  function toggleMultiselect(id: string, option: string, maxSelect?: number) {
    setAnswers(prev => {
      const curr = (prev[id] as string[] | undefined) ?? [];
      if (curr.includes(option)) return { ...prev, [id]: curr.filter(v => v !== option) };
      if (maxSelect && curr.length >= maxSelect) return prev;
      return { ...prev, [id]: [...curr, option] };
    });
  }

  function isStepValid(): boolean {
    return current.questions
      .filter(q => q.required !== false)
      .every(q => {
        const val = answers[q.id];
        if (q.type === "multiselect") return Array.isArray(val) && val.length > 0;
        if (q.type === "scale") return typeof val === "number";
        return typeof val === "string" && val.trim().length > 0;
      });
  }

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  async function handleNext() {
    if (!isStepValid()) return;
    if (step < TOTAL - 1) {
      setStep(s => s + 1);
      scrollTop();
    } else {
      setSending(true);
      setSendError(false);
      try {
        const res = await fetch("/api/diagnostic-free", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers, steps: STEPS }),
        });
        if (!res.ok) throw new Error();
        setSubmitted(true);
      } catch {
        setSendError(true);
      } finally {
        setSending(false);
      }
    }
  }

  function handleBack() {
    if (step > 0) { setStep(s => s - 1); scrollTop(); }
  }

  if (submitted) return <SuccessScreen />;

  const progressPct = (step / TOTAL) * 100;

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Top bar */}
      <div className="border-b border-white/5 px-6 py-4 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-xs transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar ao site
        </Link>
        <span className="text-white/10">·</span>
        <span className="text-gray-600 text-xs">Diagnóstico Gratuito · River Labs</span>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-pastel-green text-xs font-medium tracking-widest uppercase">
            Diagnóstico Gratuito
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mt-2">
            Descubra onde a IA pode<br className="hidden md:block" /> mudar seu resultado
          </h1>
          <p className="text-gray-500 text-sm mt-3 max-w-sm mx-auto leading-relaxed">
            9 etapas, ~4 minutos. Ao final, nossa equipe prepara um diagnóstico personalizado
            com as maiores oportunidades de ROI para o seu negócio.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {["Grátis & sem compromisso", "Resposta em 48h", "Diagnóstico personalizado"].map(pill => (
              <span key={pill} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-gray-500" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="w-1 h-1 rounded-full bg-pastel-green inline-block" />
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", background: "#111827" }}>
          {/* Progress */}
          <div className="h-0.5" style={{ background: "rgba(255,255,255,0.05)" }}>
            <div className="h-full transition-all duration-500" style={{ width: `${progressPct}%`, background: "#B5EAD7" }} />
          </div>

          <div className="p-6 md:p-10">
            {/* Step meta */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <span className="text-pastel-green text-xs font-medium">Etapa {step + 1} de {TOTAL}</span>
                <div className="flex gap-1">
                  {Array.from({ length: TOTAL }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => i < step && setStep(i)}
                      className="py-2 flex items-center"
                      style={{ cursor: i < step ? "pointer" : "default" }}
                    >
                      <div
                        className="h-1 w-4 rounded-full transition-all duration-300"
                        style={{
                          background: i < step ? "#B5EAD7" : i === step ? "rgba(181,234,215,0.5)" : "rgba(255,255,255,0.12)",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <span className="text-gray-700 text-xs">{Math.round(progressPct)}% concluído</span>
            </div>

            {/* Title */}
            <div className="mb-8">
              <h2 className="font-serif text-2xl md:text-3xl text-white font-medium tracking-tight">{current.title}</h2>
              <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{current.subtitle}</p>
            </div>

            {/* Questions */}
            <div key={step} className="animate-fade-in-up space-y-8">
              {current.questions.map(q => (
                <div key={q.id}>
                  <p className="text-gray-300 text-sm font-medium mb-3 leading-relaxed">
                    {q.label}
                    {q.required === false && <span className="text-gray-600 font-normal ml-1.5">(opcional)</span>}
                  </p>

                  {/* Choice */}
                  {q.type === "choice" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options!.map(opt => (
                        <ChoiceCard key={opt} label={opt} selected={answers[q.id] === opt} onClick={() => setAnswer(q.id, opt)} />
                      ))}
                    </div>
                  )}

                  {/* Multiselect */}
                  {q.type === "multiselect" && (
                    <>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: "rgba(181,234,215,0.08)", color: "#B5EAD7", border: "1px solid rgba(181,234,215,0.2)" }}>
                          <span className="w-1 h-1 rounded-full bg-pastel-green inline-block" />
                          {q.maxSelect ? `Escolha até ${q.maxSelect}` : "Pode selecionar mais de uma"}
                        </span>
                        {q.maxSelect && (
                          <span className="text-gray-600 text-xs">
                            {((answers[q.id] as string[] | undefined) ?? []).length}/{q.maxSelect} selecionados
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options!.map(opt => {
                          const vals = (answers[q.id] as string[] | undefined) ?? [];
                          const isSelected = vals.includes(opt);
                          const isDisabled = !isSelected && q.maxSelect !== undefined && vals.length >= q.maxSelect;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => !isDisabled && toggleMultiselect(q.id, opt, q.maxSelect)}
                              className="w-full text-left px-4 py-3.5 rounded-xl text-sm transition-all duration-150"
                              style={{
                                border: isSelected ? "1px solid rgba(181,234,215,0.4)" : "1px solid rgba(255,255,255,0.08)",
                                background: isSelected ? "rgba(181,234,215,0.08)" : "transparent",
                                color: isDisabled ? "rgb(75,85,99)" : isSelected ? "#B5EAD7" : "rgb(156,163,175)",
                                cursor: isDisabled ? "not-allowed" : "pointer",
                              }}
                            >
                              <span className="flex items-center justify-between gap-3">
                                {opt}
                                {isSelected && <Check className="w-3.5 h-3.5 shrink-0 text-pastel-green" strokeWidth={2.5} />}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {/* Scale */}
                  {q.type === "scale" && (
                    <ScaleInput value={answers[q.id] as number | undefined} onChange={v => setAnswer(q.id, v)} hint={q.hint} />
                  )}

                  {/* Text / Email */}
                  {(q.type === "text" || q.type === "email") && (
                    <TextInput type={q.type} value={(answers[q.id] as string) ?? ""} onChange={v => setAnswer(q.id, v)} />
                  )}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 0}
                className="flex items-center gap-1.5 text-sm transition-all duration-200"
                style={{ color: step === 0 ? "transparent" : "rgb(107,114,128)", pointerEvents: step === 0 ? "none" : "auto" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "rgb(156,163,175)"; }}
                onMouseLeave={e => { if (step > 0) (e.currentTarget as HTMLButtonElement).style.color = "rgb(107,114,128)"; }}
              >
                <ChevronLeft className="w-4 h-4" />
                Voltar
              </button>

              <div className="flex flex-col items-end gap-2">
                {sendError && <p className="text-red-400/80 text-xs">Erro ao enviar. Tente novamente.</p>}
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStepValid() || sending}
                  className="flex items-center gap-2 text-sm font-medium py-2.5 px-6 rounded-xl transition-all duration-200"
                  style={{
                    background: isStepValid() && !sending ? "#B5EAD7" : "rgba(181,234,215,0.2)",
                    color: isStepValid() && !sending ? "#111827" : "rgba(181,234,215,0.4)",
                    cursor: isStepValid() && !sending ? "pointer" : "not-allowed",
                  }}
                >
                  {sending ? "Enviando…" : step === TOTAL - 1 ? "Enviar diagnóstico" : "Continuar"}
                  {!sending && <ChevronRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 text-xs text-center mt-5">
          Suas respostas são confidenciais e usadas apenas para personalizar seu diagnóstico.
        </p>
      </div>
    </div>
  );
}
