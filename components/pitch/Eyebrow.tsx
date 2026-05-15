interface EyebrowProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "violet";
  className?: string;
}

export default function Eyebrow({ children, variant = "light", className = "" }: EyebrowProps) {
  const color =
    variant === "dark"   ? "text-white/40" :
    variant === "violet" ? "text-[#0F1D56]/50" :
                           "text-gray-400";

  return (
    <span
      className={`text-xs font-semibold tracking-widest uppercase ${color} ${className}`}
      style={{ fontFamily: "var(--font-jakarta)" }}
    >
      {children}
    </span>
  );
}
