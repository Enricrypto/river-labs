"use client";

import { useState } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { use } from "react";

const UI = {
  en: {
    badge: "Get in Touch",
    heading: "Let's talk about your business",
    sub: "Free diagnosis in 48h. We identify the 3 biggest AI and automation opportunities in your business — no commitment.",
    pills: [
      { title: "Reply within 48h", desc: "No message goes unanswered." },
      { title: "Free diagnosis", desc: "We map your opportunities before any proposal." },
      { title: "No commitment", desc: "The conversation is exploratory. You decide the next step." },
    ],
    fields: {
      name: "Full name *",
      namePlaceholder: "John Smith",
      email: "Email *",
      emailPlaceholder: "john@company.com",
      company: "Company",
      companyPlaceholder: "Your company name",
      message: "Message *",
      messagePlaceholder: "Tell us briefly what you're looking for…",
    },
    submit: "Send message",
    sending: "Sending…",
    error: "Error sending. Please try again.",
    privacy: "No spam. We only reply to talk about your project.",
    successTitle: "Message sent.",
    successBody: "We received your message and will get back to you within",
    successHours: "48 hours",
    successBack: "Back to site",
  },
  es: {
    badge: "Contáctanos",
    heading: "Hablemos de tu negocio",
    sub: "Diagnóstico gratuito en 48h. Identificamos las 3 mayores oportunidades de IA y automatización en tu negocio — sin compromiso.",
    pills: [
      { title: "Respuesta en 48h", desc: "Ningún mensaje queda sin respuesta." },
      { title: "Diagnóstico gratuito", desc: "Mapeamos tus oportunidades antes de cualquier propuesta." },
      { title: "Sin compromiso", desc: "La conversación es exploratoria. Tú decides el próximo paso." },
    ],
    fields: {
      name: "Nombre completo *",
      namePlaceholder: "Juan García",
      email: "Email *",
      emailPlaceholder: "juan@empresa.com",
      company: "Empresa",
      companyPlaceholder: "Nombre de tu empresa",
      message: "Mensaje *",
      messagePlaceholder: "Cuéntanos brevemente qué estás buscando…",
    },
    submit: "Enviar mensaje",
    sending: "Enviando…",
    error: "Error al enviar. Inténtalo de nuevo.",
    privacy: "Sin spam. Solo te contactamos para hablar sobre tu proyecto.",
    successTitle: "Mensaje enviado.",
    successBody: "Recibimos tu mensaje y te responderemos en",
    successHours: "48 horas",
    successBack: "Volver al sitio",
  },
  pt: {
    badge: "Fale com a gente",
    heading: "Vamos conversar sobre o seu negócio",
    sub: "Diagnóstico gratuito em 48h. Identificamos as 3 maiores oportunidades de IA e automação no seu negócio — sem compromisso.",
    pills: [
      { title: "Resposta em até 48h", desc: "Nenhuma mensagem fica sem resposta." },
      { title: "Diagnóstico gratuito", desc: "Mapeamos suas oportunidades antes de qualquer proposta." },
      { title: "Sem compromisso", desc: "A conversa é exploratória. Você decide o próximo passo." },
    ],
    fields: {
      name: "Nome completo *",
      namePlaceholder: "João Silva",
      email: "E-mail *",
      emailPlaceholder: "joao@empresa.com",
      company: "Empresa",
      companyPlaceholder: "Nome da sua empresa",
      message: "Mensagem *",
      messagePlaceholder: "Conte brevemente o que você está buscando…",
    },
    submit: "Enviar mensagem",
    sending: "Enviando…",
    error: "Erro ao enviar. Tente novamente.",
    privacy: "Sem spam. Só retornamos para falar sobre o seu projeto.",
    successTitle: "Mensagem enviada.",
    successBody: "Recebemos o seu contato e retornaremos em até",
    successHours: "48 horas",
    successBack: "Voltar ao site",
  },
};

function Field({ label, value, onChange, placeholder, type = "text", multiline = false }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; multiline?: boolean;
}) {
  const base = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 text-gray-900 text-sm placeholder-gray-400 outline-none transition-all focus:border-pastel-blue focus:bg-white";
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-gray-700 text-xs font-medium">{label}</label>
      {multiline ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={5} className={`${base} py-3 resize-none`} />
      ) : (
        <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} className={`${base} py-3`} />
      )}
    </div>
  );
}

export default function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const safeLang = (["en", "es", "pt"].includes(lang) ? lang : "pt") as "en" | "es" | "pt";
  const t = UI[safeLang];

  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
    setError(false);
  }

  const valid = form.name.trim() && form.email.trim() && form.message.trim();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="min-h-screen bg-[#f6faf8] flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <div className="w-14 h-14 rounded-full bg-pastel-green/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-7 h-7 text-pastel-green" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-3xl text-gray-900 font-medium mb-3">{t.successTitle}</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            {t.successBody} <span className="text-gray-900 font-medium">{t.successHours}</span>.
          </p>
          <Link href={`/${safeLang}`} className="inline-flex items-center gap-2 text-gray-600 text-sm hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t.successBack}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6faf8]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link href={`/${safeLang}`} className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm transition-colors mb-12">
          <ArrowLeft className="w-3.5 h-3.5" />
          {t.successBack}
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <span className="text-pastel-blue text-xs font-medium tracking-widest uppercase">{t.badge}</span>
            <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mt-3 mb-6 leading-tight">{t.heading}</h1>
            <p className="text-gray-500 text-base leading-relaxed mb-10">{t.sub}</p>
            <div className="space-y-5">
              {t.pills.map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-pastel-blue/15 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-pastel-blue" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-medium">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label={t.fields.name} value={form.name} onChange={v => set("name", v)} placeholder={t.fields.namePlaceholder} />
                <Field label={t.fields.email} type="email" value={form.email} onChange={v => set("email", v)} placeholder={t.fields.emailPlaceholder} />
              </div>
              <Field label={t.fields.company} value={form.company} onChange={v => set("company", v)} placeholder={t.fields.companyPlaceholder} />
              <Field label={t.fields.message} value={form.message} onChange={v => set("message", v)} placeholder={t.fields.messagePlaceholder} multiline />
              {error && <p className="text-red-500 text-xs">{t.error}</p>}
              <button type="submit" disabled={!valid || sending}
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: valid && !sending ? "var(--color-pastel-blue, #A3BFFA)" : "rgba(163,191,250,0.3)",
                  color: valid && !sending ? "#fff" : "rgba(163,191,250,0.6)",
                  cursor: valid && !sending ? "pointer" : "not-allowed",
                }}
              >
                {sending ? t.sending : t.submit}
                {!sending && <ArrowUpRight className="w-4 h-4" strokeWidth={2} />}
              </button>
              <p className="text-gray-400 text-xs text-center">{t.privacy}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
