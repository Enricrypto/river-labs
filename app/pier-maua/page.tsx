"use client";

import { useState, useEffect } from "react";
import { Lock, ArrowLeft, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import PierMauaMarketStudySection from "@/components/PierMauaMarketStudySection";
import DiagnosticSection from "@/components/DiagnosticSection";
import { STEPS_PIER_MAUA } from "@/lib/diagnosticSteps";

const STORAGE_KEY = "pier_maua_unlocked";

export default function PierMauaPage() {
  const [unlocked, setUnlocked] = useState(() => typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1");
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ client: "pier-maua", password: input }),
    });
    setLoading(false);
    if (res.ok) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  }

  if (!ready) return null;

  if (unlocked) {
    return (
      <main>
        <div className="bg-gray-950 border-b border-white/5 px-6 py-4 flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-xs transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar ao site
          </Link>
          <span className="text-white/10">·</span>
          <span className="text-gray-600 text-xs">Píer Mauá × River Labs - Acesso restrito</span>
        </div>
        <PierMauaMarketStudySection />
        <DiagnosticSection steps={STEPS_PIER_MAUA} accentColor="#F472B6" />
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{ background: "rgba(244,114,182,0.1)", border: "1px solid rgba(244,114,182,0.2)" }}
          >
            <Lock className="w-5 h-5" style={{ color: "#F472B6" }} strokeWidth={1.5} />
          </div>
          <h1 className="font-serif text-2xl text-white font-medium mb-2">Acesso restrito</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Este material é exclusivo para<br />
            <span className="text-gray-400">Píer Mauá × River Labs</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              value={input}
              onChange={e => { setInput(e.target.value); setError(false); }}
              placeholder="Senha de acesso"
              autoFocus
              className="w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors pr-10"
              style={{ borderColor: error ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.1)" }}
            />
            <button
              type="button"
              onClick={() => setShow(s => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors"
            >
              {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {error && <p className="text-red-400/80 text-xs text-center">Senha incorreta. Tente novamente.</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full font-medium text-sm py-3 rounded-xl transition-colors disabled:opacity-60"
            style={{ background: "#F472B6", color: "#0f172a" }}
          >
            {loading ? "Verificando..." : "Acessar"}
          </button>
        </form>

        <p className="text-center mt-6">
          <Link href="/" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">
            ← Voltar ao site principal
          </Link>
        </p>
      </div>
    </div>
  );
}
