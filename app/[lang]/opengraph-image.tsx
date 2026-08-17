import { ImageResponse } from "next/og";
import { LOCALES, isLocale } from "@/lib/site";

export const alt = "River Labs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

const TAGLINE: Record<string, string> = {
  pt: "Diagnóstico primeiro, sistema depois.",
  es: "Diagnóstico primero, sistema después.",
  en: "Diagnosis first, system next.",
};

const SUB: Record<string, string> = {
  pt: "Estratégia e tecnologia para empresas estabelecidas",
  es: "Estrategia y tecnología para empresas consolidadas",
  en: "Strategy and technology for established enterprises",
};

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = isLocale(lang) ? lang : "pt";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0F1D56",
          backgroundImage:
            "linear-gradient(145deg, #0F1D56 0%, #162470 55%, #1B2C86 100%)",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            width="76"
            height="76"
            viewBox="0 0 64 64"
            fill="none"
            stroke="white"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 10 24 Q 21 8, 32 24 T 54 24" />
            <path d="M 10 40 Q 21 24, 32 40 T 54 40" />
          </svg>
          <div
            style={{
              display: "flex",
              marginLeft: 24,
              fontSize: 44,
              color: "white",
              letterSpacing: -1,
            }}
          >
            River Labs
          </div>
        </div>

        {/* Message */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 66,
              color: "white",
              lineHeight: 1.15,
              letterSpacing: -2,
            }}
          >
            {TAGLINE[l]}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 30,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.4,
            }}
          >
            {SUB[l]}
          </div>
        </div>
      </div>
    ),
    size
  );
}
