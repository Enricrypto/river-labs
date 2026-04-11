"use client";
import Link from "next/link";
import type { Dict } from "@/lib/translations";

export default function Hero({ dict, lang }: { dict: Dict["hero"]; lang: string }) {
  return (
    <section className="pt-6 pb-12 px-4 md:px-6 w-full max-w-7xl mx-auto flex flex-col items-center">
      <div className="w-full bg-[#0F1D56] rounded-[2rem] md:rounded-[3rem] px-8 md:px-16 py-20 md:py-32 flex flex-col relative overflow-hidden">

        {/* Glow blobs - behind dots */}
        <div className="absolute -top-32 -right-20 w-150 h-150 rounded-full bg-indigo-600 opacity-20 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/4 w-100 h-100 rounded-full bg-blue-800 opacity-20 blur-[100px] pointer-events-none" />

        {/* SVG dot grid - on top of glow so dots catch the light */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.18)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>

        {/* Headline + sub + CTAs */}
        <div className="relative z-10 max-w-4xl">
          <h1
            className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.08]"
            style={{ animation: "heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0ms both" }}
          >
            {dict.heading1}{" "}
            <span className="italic text-white/50">{dict.headingItalic}</span>{" "}
            {dict.heading2}
          </h1>

          <p
            className="text-lg md:text-xl text-white/55 mt-8 mb-10 leading-relaxed font-normal max-w-2xl"
            style={{ animation: "heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 150ms both" }}
          >
            {dict.sub}
          </p>

          <div
            className="flex flex-col sm:flex-row items-start gap-3"
            style={{ animation: "heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 300ms both" }}
          >
            <Link
              href={`/${lang}/diagnostic`}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-[#0A0F2C] text-base font-medium hover:bg-white/90 transition-colors"
            >
              {dict.cta1}
            </Link>
            <Link
              href={`/${lang}/cases`}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/25 text-white/80 text-base font-medium hover:border-white/50 hover:text-white transition-colors"
            >
              {dict.cta2}
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
