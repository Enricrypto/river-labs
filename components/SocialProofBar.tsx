"use client";

import type { Dict } from "@/lib/translations";

const CLIENTS = [
  "Grupo Cataratas",
  "Bondinho Pão de Açúcar",
  "Trem do Corcovado",
  "Píer Mauá",
  "Matrisoja",
  "Grupo Ápia",
];

export default function SocialProofBar({ dict }: { dict: Dict["proof"] }) {
  // Duplicate for seamless loop
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <div className="w-full border-b border-gray-100 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-6">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-widest shrink-0">
          {dict.label}
        </span>
        <div className="flex-1 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className="flex items-center gap-10 w-max"
            style={{
              animation: "ticker 28s linear infinite",
            }}
          >
            {items.map((name, i) => (
              <span
                key={i}
                className="text-sm font-medium text-gray-400 whitespace-nowrap select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        div:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
