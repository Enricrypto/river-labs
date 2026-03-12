"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { use } from "react";
import { getDiagnosticSteps } from "@/lib/diagnostic-steps";
import type { StepDef } from "@/lib/diagnostic-steps";

type AnswerValue = string | string[] | number;
type Answers = Record<string, AnswerValue>;

const UI = {
  en: {
    badge: "Free Diagnosis",
    heading: "Discover where AI can change your results",
    sub: "9 steps, ~4 minutes. Our team prepares a personalized diagnosis with your biggest ROI opportunities.",
    pills: ["Free & no commitment", "Response in 48h", "Personalized diagnosis"],
    stepOf: (s: number, t: number) => `Step ${s} of ${t}`,
    completed: (p: number) => `${p}% completed`,
    back: "Back",
    continue: "Continue",
    send: "Submit diagnosis",
    sending: "Sending…",
    error: "Error sending. Please try again.",
    optional: "(optional)",
    multiAll: "Select all that apply",
    multiMax: (n: number) => `Choose up to ${n}`,
    selected: (a: number, b: number) => `${a}/${b} selected`,
    successTitle: "Diagnosis submitted.",
    successBody: (h: string) => `Our team will review your answers and get back to you within ${h}.`,
    successHours: "48 hours",
    successBack: "Back to site",
    topBar: "Free Diagnosis · River Labs",
    privacy: "Your answers are confidential and used only to personalize your diagnosis.",
  },
  es: {
    badge: "Diagnóstico Gratuito",
    heading: "Descubre dónde la IA puede cambiar tus resultados",
    sub: "9 pasos, ~4 minutos. Nuestro equipo prepara un diagnóstico personalizado con tus mayores oportunidades de ROI.",
    pills: ["Gratis & sin compromiso", "Respuesta en 48h", "Diagnóstico personalizado"],
    stepOf: (s: number, t: number) => `Paso ${s} de ${t}`,
    completed: (p: number) => `${p}% completado`,
    back: "Volver",
    continue: "Continuar",
    send: "Enviar diagnóstico",
    sending: "Enviando…",
    error: "Error al enviar. Inténtalo de nuevo.",
    optional: "(opcional)",
    multiAll: "Puedes seleccionar más de una",
    multiMax: (n: number) => `Elige hasta ${n}`,
    selected: (a: number, b: number) => `${a}/${b} seleccionados`,
    successTitle: "Diagnóstico enviado.",
    successBody: (h: string) => `Nuestro equipo revisará tus respuestas y se pondrá en contacto en ${h}.`,
    successHours: "48 horas",
    successBack: "Volver al sitio",
    topBar: "Diagnóstico Gratuito · River Labs",
    privacy: "Tus respuestas son confidenciales y se usan solo para personalizar tu diagnóstico.",
  },
  pt: {
    badge: "Diagnóstico Gratuito",
    heading: "Descubra onde a IA pode mudar seu resultado",
    sub: "9 etapas, ~4 minutos. Nossa equipe prepara um diagnóstico personalizado com as maiores oportunidades de ROI para o seu negócio.",
    pills: ["Grátis & sem compromisso", "Resposta em 48h", "Diagnóstico personalizado"],
    stepOf: (s: number, t: number) => `Etapa ${s} de ${t}`,
    completed: (p: number) => `${p}% concluído`,
    back: "Voltar",
    continue: "Continuar",
    send: "Enviar diagnóstico",
    sending: "Enviando…",
    error: "Erro ao enviar. Tente novamente.",
    optional: "(opcional)",
    multiAll: "Pode selecionar mais de uma",
    multiMax: (n: number) => `Escolha até ${n}`,
    selected: (a: number, b: number) => `${a}/${b} selecionados`,
    successTitle: "Diagnóstico enviado.",
    successBody: (h: string) => `Nossa equipe vai analisar suas respostas e entrar em contato em até ${h}.`,
    successHours: "48 horas",
    successBack: "Voltar ao site",
    topBar: "Diagnóstico Gratuito · River Labs",
    privacy: "Suas respostas são confidenciais e usadas apenas para personalizar seu diagnóstico.",
  },
};

/* ─── UI primitives ─────────────────────────────────────── */
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
        {selected && <Check className="w-3.5 h-3.5 shrink-0 text-[#A3BFFA]" strokeWidth={2.5} />}
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
            <button key={i} type="button" onClick={() => onChange(i)}
              className="w-9 h-9 rounded-lg text-sm font-medium transition-all duration-150 shrink-0"
              style={{ background: value === i ? "#A3BFFA" : "transparent", color: value === i ? "#111827" : "rgb(107,114,128)", border: value === i ? "none" : "1px solid rgba(255,255,255,0.08)" }}
            >{i}</button>
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
    <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder="..."
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      className="w-full bg-transparent text-white text-sm placeholder-gray-700 py-3 px-4 rounded-xl outline-none transition-all duration-150"
      style={{ border: focused ? "1px solid rgba(163,191,250,0.5)" : "1px solid rgba(255,255,255,0.1)" }}
    />
  );
}

/* ─── Main ──────────────────────────────────────────────── */
export default function DiagnosticPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const safeLang = (["en", "es", "pt"].includes(lang) ? lang : "pt") as "en" | "es" | "pt";
  const STEPS: StepDef[] = getDiagnosticSteps(safeLang);
  const t = UI[safeLang];
  const TOTAL = STEPS.length;

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

  const scrollTop = useCallback(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

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

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(181,234,215,0.15)" }}>
            <CheckCircle2 className="w-7 h-7 text-[#B5EAD7]" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-3xl text-white font-medium mb-3">{t.successTitle}</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            {t.successBody(<span className="text-white font-medium">{t.successHours}</span> as unknown as string)}
          </p>
          <Link href={`/${safeLang}`} className="inline-flex items-center gap-2 text-gray-500 text-sm hover:text-gray-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t.successBack}
          </Link>
        </div>
      </div>
    );
  }

  const progressPct = (step / TOTAL) * 100;

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="border-b border-white/5 px-6 py-4 flex items-center gap-3">
        <Link href={`/${safeLang}`} className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-xs transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          {t.successBack}
        </Link>
        <span className="text-white/10">·</span>
        <span className="text-gray-600 text-xs">{t.topBar}</span>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <span className="text-[#B5EAD7] text-xs font-medium tracking-widest uppercase">{t.badge}</span>
          <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mt-2">{t.heading}</h1>
          <p className="text-gray-500 text-sm mt-3 max-w-sm mx-auto leading-relaxed">{t.sub}</p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {t.pills.map(pill => (
              <span key={pill} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-gray-500" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="w-1 h-1 rounded-full bg-[#B5EAD7] inline-block" />
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", background: "#111827" }}>
          <div className="h-0.5" style={{ background: "rgba(255,255,255,0.05)" }}>
            <div className="h-full transition-all duration-500" style={{ width: `${progressPct}%`, background: "#B5EAD7" }} />
          </div>

          <div className="p-6 md:p-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <span className="text-[#B5EAD7] text-xs font-medium">{t.stepOf(step + 1, TOTAL)}</span>
                <div className="flex gap-1">
                  {Array.from({ length: TOTAL }).map((_, i) => (
                    <button key={i} type="button" onClick={() => i < step && setStep(i)} className="py-2 flex items-center" style={{ cursor: i < step ? "pointer" : "default" }}>
                      <div className="h-1 w-4 rounded-full transition-all duration-300" style={{ background: i < step ? "#B5EAD7" : i === step ? "rgba(181,234,215,0.5)" : "rgba(255,255,255,0.12)" }} />
                    </button>
                  ))}
                </div>
              </div>
              <span className="text-gray-700 text-xs">{t.completed(Math.round(progressPct))}</span>
            </div>

            <div className="mb-8">
              <h2 className="font-serif text-2xl md:text-3xl text-white font-medium tracking-tight">{current.title}</h2>
              <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{current.subtitle}</p>
            </div>

            <div key={step} className="animate-fade-in-up space-y-8">
              {current.questions.map(q => (
                <div key={q.id}>
                  <p className="text-gray-300 text-sm font-medium mb-3 leading-relaxed">
                    {q.label}
                    {q.required === false && <span className="text-gray-600 font-normal ml-1.5">{t.optional}</span>}
                  </p>

                  {q.type === "choice" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options!.map(opt => (
                        <ChoiceCard key={opt} label={opt} selected={answers[q.id] === opt} onClick={() => setAnswer(q.id, opt)} />
                      ))}
                    </div>
                  )}

                  {q.type === "multiselect" && (
                    <>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: "rgba(181,234,215,0.08)", color: "#B5EAD7", border: "1px solid rgba(181,234,215,0.2)" }}>
                          <span className="w-1 h-1 rounded-full bg-[#B5EAD7] inline-block" />
                          {q.maxSelect ? t.multiMax(q.maxSelect) : t.multiAll}
                        </span>
                        {q.maxSelect && (
                          <span className="text-gray-600 text-xs">
                            {t.selected(((answers[q.id] as string[] | undefined) ?? []).length, q.maxSelect)}
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options!.map(opt => {
                          const vals = (answers[q.id] as string[] | undefined) ?? [];
                          const isSelected = vals.includes(opt);
                          const isDisabled = !isSelected && q.maxSelect !== undefined && vals.length >= q.maxSelect;
                          return (
                            <button key={opt} type="button" onClick={() => !isDisabled && toggleMultiselect(q.id, opt, q.maxSelect)}
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
                                {isSelected && <Check className="w-3.5 h-3.5 shrink-0 text-[#B5EAD7]" strokeWidth={2.5} />}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {q.type === "scale" && (
                    <ScaleInput value={answers[q.id] as number | undefined} onChange={v => setAnswer(q.id, v)} hint={q.hint} />
                  )}

                  {(q.type === "text" || q.type === "email") && (
                    <TextInput type={q.type} value={(answers[q.id] as string) ?? ""} onChange={v => setAnswer(q.id, v)} />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-10 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <button type="button" onClick={handleBack} disabled={step === 0}
                className="flex items-center gap-1.5 text-sm transition-all duration-200"
                style={{ color: step === 0 ? "transparent" : "rgb(107,114,128)", pointerEvents: step === 0 ? "none" : "auto" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "rgb(156,163,175)"; }}
                onMouseLeave={e => { if (step > 0) (e.currentTarget as HTMLButtonElement).style.color = "rgb(107,114,128)"; }}
              >
                <ChevronLeft className="w-4 h-4" />{t.back}
              </button>

              <div className="flex flex-col items-end gap-2">
                {sendError && <p className="text-red-400/80 text-xs">{t.error}</p>}
                <button type="button" onClick={handleNext} disabled={!isStepValid() || sending}
                  className="flex items-center gap-2 text-sm font-medium py-2.5 px-6 rounded-xl transition-all duration-200"
                  style={{
                    background: isStepValid() && !sending ? "#B5EAD7" : "rgba(181,234,215,0.2)",
                    color: isStepValid() && !sending ? "#111827" : "rgba(181,234,215,0.4)",
                    cursor: isStepValid() && !sending ? "pointer" : "not-allowed",
                  }}
                >
                  {sending ? t.sending : step === TOTAL - 1 ? t.send : t.continue}
                  {!sending && <ChevronRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 text-xs text-center mt-5">{t.privacy}</p>
      </div>
    </div>
  );
}
