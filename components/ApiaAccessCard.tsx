"use client";

import { Lock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ApiaAccessCard() {
  return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          href="/apia"
          className="group block rounded-3xl p-8 md:p-12 transition-all duration-300 hover:border-pastel-blue/30"
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(163,191,250,0.03)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "rgba(163,191,250,0.08)", border: "1px solid rgba(163,191,250,0.15)" }}
              >
                <Lock className="w-4.5 h-4.5 text-pastel-blue" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-pastel-blue text-xs font-medium tracking-widest uppercase mb-1.5">
                  Acesso restrito
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-white font-medium tracking-tight mb-2">
                  Grupo Ápia × River Labs
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                  Estudo de mercado completo e diagnóstico personalizado — material exclusivo preparado para o Grupo Ápia.
                </p>
              </div>
            </div>
            <div
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-pastel-blue transition-colors group-hover:bg-pastel-blue/10"
              style={{ border: "1px solid rgba(163,191,250,0.2)" }}
            >
              Acessar
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
