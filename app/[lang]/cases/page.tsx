"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Lock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { use } from "react";

const PASSWORD = "riverlabs1234#";
const SESSION_KEY = "rl_cases_access";

const UI = {
  en: {
    back: "Back to site",
    heading: "Client Area",
    sub: "This area is restricted to River Labs clients and partners.",
    placeholder: "Enter password",
    submit: "Access",
    error: "Incorrect password. Please try again.",
    title: "Our Work",
    comingSoon: "Case studies coming soon. Check back shortly.",
  },
  es: {
    back: "Volver al sitio",
    heading: "Área de Cliente",
    sub: "Esta área está restringida a clientes y socios de River Labs.",
    placeholder: "Ingresa la contraseña",
    submit: "Acceder",
    error: "Contraseña incorrecta. Inténtalo de nuevo.",
    title: "Nuestro Trabajo",
    comingSoon: "Casos de éxito próximamente. Vuelve pronto.",
  },
  pt: {
    back: "Voltar ao site",
    heading: "Área do Cliente",
    sub: "Esta área é restrita a clientes e parceiros da River Labs.",
    placeholder: "Digite a senha",
    submit: "Acessar",
    error: "Senha incorreta. Tente novamente.",
    title: "Nosso Trabalho",
    comingSoon: "Casos de sucesso em breve. Volte em breve.",
  },
};

export default function CasesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const safeLang = (["en", "es", "pt"].includes(lang) ? lang : "pt") as "en" | "es" | "pt";
  const t = UI[safeLang];

  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setUnlocked(true);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-[#f6faf8] flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <Link
            href={`/${safeLang}`}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm transition-colors mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.back}
          </Link>

          <div className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center mb-6">
            <Lock className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>

          <h1 className="font-serif text-3xl font-medium text-gray-900 mb-2">{t.heading}</h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">{t.sub}</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder={t.placeholder}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder-gray-400 outline-none focus:border-gray-400 transition-all"
              autoFocus
            />
            {error && <p className="text-red-500 text-xs">{t.error}</p>}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              {t.submit}
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6faf8] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href={`/${safeLang}`}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm transition-colors mb-12"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t.back}
        </Link>

        <h1 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 mb-4">{t.title}</h1>
        <p className="text-gray-400 text-base">{t.comingSoon}</p>
      </div>
    </div>
  );
}
