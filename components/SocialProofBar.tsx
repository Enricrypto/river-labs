"use client";

import type { Dict } from "@/lib/translations";

export default function SocialProofBar({ dict }: { dict: Dict["proof"] }) {
  const items = [...dict.sectors, ...dict.sectors];

  return (
    <div className="w-full border-b border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center gap-6">
        <span className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest shrink-0">
          {dict.label}
        </span>

        <div className="flex-1 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className="flex items-center gap-3 w-max"
            style={{ animation: "ticker 32s linear infinite" }}
          >
            {items.map((sector, i) => (
              <span
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600 whitespace-nowrap select-none"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
