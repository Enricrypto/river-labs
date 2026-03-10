"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

/* ─── Types ─────────────────────────────────────────────── */
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

/* ─── Steps ─────────────────────────────────────────────── */
const STEPS: StepDef[] = [
  {
    id: "empresa",
    title: "Sobre a sua empresa",
    subtitle: "Contexto inicial para entender o negócio.",
    questions: [
      {
        id: "segmento",
        label: "Em qual segmento sua empresa atua principalmente?",
        type: "choice",
        options: [
          "Construção pesada — rodovias, ferrovias, barragens",
          "Construção civil — edifícios, galpões industriais",
          "Saneamento & infraestrutura urbana",
          "Projetos industriais & mineração",
          "Outro",
        ],
        required: true,
      },
      {
        id: "receita",
        label: "Qual é a faixa de receita bruta anual?",
        type: "choice",
        options: ["Até R$50M", "R$50M – R$200M", "R$200M – R$500M", "R$500M – R$1,5B", "Acima de R$1,5B"],
        required: true,
      },
    ],
  },
  {
    id: "receita_fontes",
    title: "Como vocês ganham dinheiro",
    subtitle: "Entender as fontes de receita ajuda a identificar onde a IA gera mais impacto.",
    questions: [
      {
        id: "fontes",
        label: "Principais fontes de receita: (selecione todas que se aplicam)",
        type: "multiselect",
        options: [
          "Contratos públicos — licitações",
          "Contratos privados — direto com clientes",
          "Concessões e PPPs",
          "Projetos como investidora",
          "Serviços de engenharia e consultoria",
        ],
        required: true,
      },
      {
        id: "ticket_medio",
        label: "Qual é o ticket médio de um contrato típico?",
        type: "choice",
        options: ["Até R$10M", "R$10M – R$50M", "R$50M – R$200M", "Acima de R$200M"],
        required: true,
      },
    ],
  },
  {
    id: "licitacoes",
    title: "Licitações & novos contratos",
    subtitle: "Licitações são onde a maioria das construtoras deixa dinheiro na mesa.",
    questions: [
      {
        id: "volume_lic",
        label: "Quantas licitações a empresa disputa por ano?",
        type: "choice",
        options: ["Menos de 10", "10 – 30", "30 – 60", "Mais de 60"],
        required: true,
      },
      {
        id: "taxa_sucesso",
        label: "Qual é a taxa de sucesso (ganhas ÷ disputadas)?",
        type: "choice",
        options: ["Menos de 10%", "10% – 25%", "25% – 40%", "Acima de 40%"],
        required: true,
      },
      {
        id: "tempo_proposta",
        label: "Quanto tempo leva preparar uma proposta de licitação?",
        type: "choice",
        options: ["Menos de 1 semana", "1 – 2 semanas", "2 – 4 semanas", "Mais de 4 semanas"],
        required: true,
      },
    ],
  },
  {
    id: "execucao",
    title: "Execução de obras & overruns",
    subtitle: "Atrasos e sobrecustos são os maiores destruidores de margem.",
    questions: [
      {
        id: "freq_atrasos",
        label: "Com que frequência seus projetos terminam com atrasos?",
        type: "scale",
        hint: "0 = raramente  ·  10 = quase sempre",
        required: true,
      },
      {
        id: "overrun",
        label: "Qual é o sobrecusto médio (overrun) por projeto?",
        type: "choice",
        options: ["Praticamente nenhum", "Até 5%", "5% – 15%", "15% – 30%", "Acima de 30%"],
        required: true,
      },
      {
        id: "gargalo",
        label: "Qual é o maior gargalo na execução hoje?",
        type: "choice",
        options: [
          "Planejamento deficiente desde o início",
          "Falta de informação de campo em tempo real",
          "Mudanças de escopo não controladas",
          "Problemas com fornecedores e subcontratados",
          "Time insuficiente para o volume de projetos",
        ],
        required: true,
      },
    ],
  },
  {
    id: "documentacao",
    title: "Relatórios, documentação & compliance",
    subtitle: "Documentação consome horas valiosas de engenheiros — e pode ser automatizada.",
    questions: [
      {
        id: "horas_doc",
        label: "Quantas horas por semana seu time gasta em relatórios e documentação (por projeto)?",
        type: "choice",
        options: ["Menos de 10h", "10h – 30h", "30h – 80h", "Mais de 80h"],
        required: true,
      },
      {
        id: "processo_doc",
        label: "Qual processo documental é mais trabalhoso hoje?",
        type: "choice",
        options: [
          "Relatórios de avanço físico-financeiro",
          "Laudos e pareceres técnicos",
          "Documentação de compliance e licenciamento",
          "Comunicação formal com órgãos públicos",
          "Boletins de medição e memórias de cálculo",
        ],
        required: true,
      },
    ],
  },
  {
    id: "pessoas",
    title: "Pessoas & capacidade do time",
    subtitle: "Entender a estrutura ajuda a dimensionar o impacto real de qualquer solução.",
    questions: [
      {
        id: "tamanho_time",
        label: "Quantos engenheiros e técnicos compõem o time hoje?",
        type: "choice",
        options: ["Menos de 20", "20 – 50", "50 – 150", "150 – 500", "Mais de 500"],
        required: true,
      },
      {
        id: "capacidade",
        label: "O time consegue dar conta das demandas com a estrutura atual?",
        type: "scale",
        hint: "0 = muito sobrecarregado  ·  10 = temos capacidade de crescer facilmente",
        required: true,
      },
      {
        id: "tempo_improdutivo",
        label: "Onde o time passa mais tempo que não gera receita direta?",
        type: "choice",
        options: [
          "Preparação de licitações e propostas",
          "Reuniões e relatórios internos",
          "Retrabalho e correções de erros",
          "Burocracia e processos administrativos",
          "Treinamentos e onboarding de novos membros",
        ],
        required: true,
      },
    ],
  },
  {
    id: "tecnologia",
    title: "Tecnologia & dados hoje",
    subtitle: "O ponto de partida define o que é possível implementar — e em quanto tempo.",
    questions: [
      {
        id: "ferramentas",
        label: "Quais ferramentas sua empresa usa atualmente? (selecione todas)",
        type: "multiselect",
        options: [
          "ERP — SAP, TOTVS ou similar",
          "MS Project ou equivalente",
          "Excel & Google Sheets",
          "CAD / BIM",
          "Sistemas próprios — desenvolvidos internamente",
          "Não usamos sistemas estruturados",
        ],
        required: true,
      },
      {
        id: "dados_realtime",
        label: "Os dados de obra estão disponíveis em tempo real para quem decide?",
        type: "scale",
        hint: "0 = não, tudo manual e fragmentado  ·  10 = dashboards em tempo real",
        required: true,
      },
    ],
  },
  {
    id: "prioridades",
    title: "Prioridades de negócio",
    subtitle: "O que mais importa para vocês nos próximos 12 meses.",
    questions: [
      {
        id: "urgencia",
        label: "O que é mais urgente agora? (escolha até 2)",
        type: "multiselect",
        maxSelect: 2,
        options: [
          "Ganhar mais licitações e contratos",
          "Reduzir custos operacionais",
          "Aumentar a margem por projeto",
          "Escalar sem precisar contratar muito mais",
          "Melhorar compliance e reduzir risco",
          "Entrar em novos mercados ou segmentos",
        ],
        required: true,
      },
      {
        id: "meta_crescimento",
        label: "Meta de crescimento de receita para os próximos 2 anos:",
        type: "choice",
        options: ["Manter estável", "Crescer até 20%", "Crescer 20% – 50%", "Mais do que dobrar"],
        required: true,
      },
    ],
  },
  {
    id: "ia",
    title: "Abertura para IA & automação",
    subtitle: "Sem julgamento — só queremos entender o contexto para propor o que faz sentido.",
    questions: [
      {
        id: "experiencia_ia",
        label: "Sua empresa já tentou alguma solução de automação ou IA?",
        type: "choice",
        options: [
          "Não, ainda não",
          "Tentamos, mas sem resultados concretos",
          "Sim, com resultados parciais",
          "Sim, com bons resultados — queremos mais",
        ],
        required: true,
      },
      {
        id: "problema_prioritario",
        label: "Se a IA pudesse resolver um problema hoje, qual seria?",
        type: "choice",
        options: [
          "Automatizar a preparação de propostas e licitações",
          "Controle de obra e avanço físico em tempo real",
          "Geração automática de relatórios e laudos",
          "Previsão de custos, prazos e riscos",
          "Extração e análise de dados de projetos",
        ],
        required: true,
      },
      {
        id: "prazo",
        label: "Em que prazo vocês gostariam de ver os primeiros resultados?",
        type: "choice",
        options: ["1 – 3 meses", "3 – 6 meses", "6 – 12 meses", "Sem urgência definida"],
        required: true,
      },
    ],
  },
  {
    id: "contato",
    title: "Contato & próximo passo",
    subtitle: "Com base nas suas respostas, vamos preparar um diagnóstico personalizado e gratuito.",
    questions: [
      {
        id: "nome",
        label: "Seu nome completo",
        type: "text",
        required: true,
      },
      {
        id: "empresa_nome",
        label: "Nome da empresa",
        type: "text",
        required: true,
      },
      {
        id: "cargo",
        label: "Seu cargo",
        type: "choice",
        options: [
          "CEO / Presidente",
          "Diretor de Engenharia",
          "Diretor de Operações",
          "Gerente de Projetos",
          "Outro",
        ],
        required: true,
      },
      {
        id: "email",
        label: "E-mail corporativo",
        type: "email",
        required: true,
      },
      {
        id: "whatsapp",
        label: "WhatsApp (opcional)",
        type: "text",
        required: false,
      },
    ],
  },
];

const TOTAL = STEPS.length;

/* ─── Sub-components ─────────────────────────────────────── */
function ChoiceCard({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left px-4 py-3.5 rounded-xl text-sm transition-all duration-150"
      style={{
        border: selected
          ? "1px solid rgba(163,191,250,0.45)"
          : "1px solid rgba(255,255,255,0.08)",
        background: selected ? "rgba(163,191,250,0.08)" : "transparent",
        color: selected ? "#A3BFFA" : "rgb(156,163,175)",
      }}
      onMouseEnter={e => {
        if (!selected) {
          (e.currentTarget as HTMLButtonElement).style.color = "rgb(229,231,235)";
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)";
        }
      }}
      onMouseLeave={e => {
        if (!selected) {
          (e.currentTarget as HTMLButtonElement).style.color = "rgb(156,163,175)";
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
        }
      }}
    >
      <span className="flex items-center justify-between gap-3">
        {label}
        {selected && (
          <Check className="w-3.5 h-3.5 shrink-0 text-[#A3BFFA]" strokeWidth={2.5} />
        )}
      </span>
    </button>
  );
}

function ScaleInput({
  value,
  onChange,
  hint,
}: {
  value?: number;
  onChange: (v: number) => void;
  hint?: string;
}) {
  return (
    <div>
      <div className="flex gap-1.5 flex-wrap">
        {Array.from({ length: 11 }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onChange(i)}
            className="w-9 h-9 rounded-lg text-sm font-medium transition-all duration-150"
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
      {hint && <p className="text-gray-600 text-xs mt-3">{hint}</p>}
    </div>
  );
}

function TextInput({
  value,
  onChange,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
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
      style={{
        border: focused
          ? "1px solid rgba(163,191,250,0.5)"
          : "1px solid rgba(255,255,255,0.1)",
      }}
    />
  );
}

/* ─── Success screen ─────────────────────────────────────── */
function SuccessScreen() {
  return (
    <section className="py-24 bg-gray-950" id="diagnostic">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div
          className="rounded-3xl p-12 flex flex-col items-center gap-6"
          style={{
            border: "1px solid rgba(181,234,215,0.2)",
            background: "rgba(181,234,215,0.04)",
          }}
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(181,234,215,0.15)" }}>
            <CheckCircle2 className="w-7 h-7 text-[#B5EAD7]" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-serif text-3xl text-white font-medium mb-3">
              Diagnóstico enviado.
            </h3>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm mx-auto">
              Nossa equipe vai analisar suas respostas e entrar em contato em até{" "}
              <span className="text-white">48 horas</span> com as principais oportunidades
              de ROI identificadas.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
            <Link
              href="#contact"
              className="flex-1 flex items-center justify-center gap-2 bg-[#A3BFFA] text-gray-900 text-sm font-medium py-3 px-5 rounded-xl hover:bg-[#B5C9FF] transition-colors"
            >
              Agendar call agora
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
          <p className="text-gray-700 text-xs">Sem compromisso. Apenas insights acionáveis.</p>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export default function DiagnosticSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);

  const current = STEPS[step];

  function setAnswer(id: string, value: AnswerValue) {
    setAnswers(prev => ({ ...prev, [id]: value }));
  }

  function toggleMultiselect(id: string, option: string, maxSelect?: number) {
    setAnswers(prev => {
      const curr = (prev[id] as string[] | undefined) ?? [];
      if (curr.includes(option)) {
        return { ...prev, [id]: curr.filter(v => v !== option) };
      }
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

  function handleNext() {
    if (!isStepValid()) return;
    if (step < TOTAL - 1) {
      setStep(s => s + 1);
      window.scrollTo({ top: document.getElementById("diagnostic")?.offsetTop ?? 0, behavior: "smooth" });
    } else {
      setSubmitted(true);
    }
  }

  function handleBack() {
    if (step > 0) setStep(s => s - 1);
  }

  if (submitted) return <SuccessScreen />;

  const progressPct = (step / TOTAL) * 100;

  return (
    <section className="py-24 bg-gray-950" id="diagnostic">
      <div className="max-w-2xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-[#B5EAD7] text-xs font-medium tracking-widest uppercase">
            Diagnóstico Gratuito
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mt-2">
            Descubra onde a IA pode<br className="hidden md:block" /> mudar seu resultado
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-sm mx-auto leading-relaxed">
            10 etapas, ~4 minutos. Ao final, você recebe um diagnóstico personalizado com as
            maiores oportunidades de ROI para o seu negócio.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {["Grátis & sem compromisso", "Resposta em 48h", "Diagnóstico personalizado"].map(pill => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-gray-500"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="w-1 h-1 rounded-full bg-[#B5EAD7] inline-block" />
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "#111827" }}
        >
          {/* Progress bar */}
          <div className="h-0.5" style={{ background: "rgba(255,255,255,0.05)" }}>
            <div
              className="h-full transition-all duration-500"
              style={{ width: `${progressPct}%`, background: "#A3BFFA" }}
            />
          </div>

          <div className="p-6 md:p-10">
            {/* Step meta */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <span className="text-[#A3BFFA] text-xs font-medium">
                  Etapa {step + 1} de {TOTAL}
                </span>
                <div className="flex gap-1">
                  {Array.from({ length: TOTAL }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => i < step && setStep(i)}
                      className="h-0.5 w-4 rounded-full transition-all duration-300"
                      style={{
                        background: i < step
                          ? "#A3BFFA"
                          : i === step
                          ? "rgba(163,191,250,0.5)"
                          : "rgba(255,255,255,0.12)",
                        cursor: i < step ? "pointer" : "default",
                      }}
                    />
                  ))}
                </div>
              </div>
              <span className="text-gray-700 text-xs">
                {Math.round(progressPct)}% concluído
              </span>
            </div>

            {/* Step title */}
            <div className="mb-8">
              <h3 className="font-serif text-2xl md:text-3xl text-white font-medium tracking-tight">
                {current.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{current.subtitle}</p>
            </div>

            {/* Questions */}
            <div key={step} className="animate-fade-in-up space-y-8">
              {current.questions.map(q => (
                <div key={q.id}>
                  <p className="text-gray-300 text-sm font-medium mb-3 leading-relaxed">
                    {q.label}
                    {q.required === false && (
                      <span className="text-gray-600 font-normal ml-1.5">(opcional)</span>
                    )}
                  </p>

                  {/* Choice */}
                  {q.type === "choice" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options!.map(opt => (
                        <ChoiceCard
                          key={opt}
                          label={opt}
                          selected={answers[q.id] === opt}
                          onClick={() => setAnswer(q.id, opt)}
                        />
                      ))}
                    </div>
                  )}

                  {/* Multiselect */}
                  {q.type === "multiselect" && (
                    <>
                      {q.maxSelect && (
                        <p className="text-gray-700 text-xs mb-3">
                          Selecione até {q.maxSelect}. Selecionados:{" "}
                          {((answers[q.id] as string[] | undefined) ?? []).length}/{q.maxSelect}
                        </p>
                      )}
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
                                border: isSelected
                                  ? "1px solid rgba(163,191,250,0.45)"
                                  : "1px solid rgba(255,255,255,0.08)",
                                background: isSelected ? "rgba(163,191,250,0.08)" : "transparent",
                                color: isDisabled ? "rgb(75,85,99)" : isSelected ? "#A3BFFA" : "rgb(156,163,175)",
                                cursor: isDisabled ? "not-allowed" : "pointer",
                              }}
                            >
                              <span className="flex items-center justify-between gap-3">
                                {opt}
                                {isSelected && <Check className="w-3.5 h-3.5 shrink-0 text-[#A3BFFA]" strokeWidth={2.5} />}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {/* Scale */}
                  {q.type === "scale" && (
                    <ScaleInput
                      value={answers[q.id] as number | undefined}
                      onChange={v => setAnswer(q.id, v)}
                      hint={q.hint}
                    />
                  )}

                  {/* Text / Email */}
                  {(q.type === "text" || q.type === "email") && (
                    <TextInput
                      type={q.type}
                      value={(answers[q.id] as string) ?? ""}
                      onChange={v => setAnswer(q.id, v)}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div
              className="flex items-center justify-between mt-10 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 0}
                className="flex items-center gap-1.5 text-sm transition-all duration-200"
                style={{
                  color: step === 0 ? "transparent" : "rgb(107,114,128)",
                  pointerEvents: step === 0 ? "none" : "auto",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "rgb(156,163,175)"; }}
                onMouseLeave={e => { if (step > 0) (e.currentTarget as HTMLButtonElement).style.color = "rgb(107,114,128)"; }}
              >
                <ChevronLeft className="w-4 h-4" />
                Voltar
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!isStepValid()}
                className="flex items-center gap-2 text-sm font-medium py-2.5 px-6 rounded-xl transition-all duration-200"
                style={{
                  background: isStepValid() ? "#A3BFFA" : "rgba(163,191,250,0.2)",
                  color: isStepValid() ? "#111827" : "rgba(163,191,250,0.4)",
                  cursor: isStepValid() ? "pointer" : "not-allowed",
                }}
              >
                {step === TOTAL - 1 ? "Enviar diagnóstico" : "Continuar"}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-gray-700 text-xs text-center mt-5">
          Suas respostas são confidenciais e usadas apenas para personalizar seu diagnóstico.
        </p>
      </div>
    </section>
  );
}
