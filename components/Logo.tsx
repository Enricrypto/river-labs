interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
}

const sizes = {
  sm: { svg: "w-7 h-7", text: "text-xl", gap: "gap-3" },
  md: { svg: "w-9 h-9", text: "text-2xl", gap: "gap-4" },
  lg: { svg: "w-14 h-14", text: "text-5xl", gap: "gap-5" },
};

export default function Logo({ size = "sm", variant = "dark" }: LogoProps) {
  const s = sizes[size];
  const color = variant === "light" ? "text-white" : "text-black";
  return (
    <div className={`flex items-center ${s.gap}`}>
      <svg
        className={`${s.svg} ${color} shrink-0`}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 10 24 Q 21 8, 32 24 T 54 24" />
        <path d="M 10 40 Q 21 24, 32 40 T 54 40" />
      </svg>
      <span
        className={`${s.text} font-medium tracking-tight ${color}`}
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        River Labs
      </span>
    </div>
  );
}
