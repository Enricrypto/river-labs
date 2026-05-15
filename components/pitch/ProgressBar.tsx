interface ProgressBarProps {
  value: number;
  max?: number;
  size?: "sm" | "lg";
  variant?: "light" | "dark";
  className?: string;
}

export default function ProgressBar({
  value,
  max = 100,
  size = "lg",
  variant = "light",
  className = "",
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const isDark = variant === "dark";

  if (size === "sm") {
    return (
      <div className={`h-0.5 w-full rounded-full overflow-hidden ${isDark ? "bg-white/10" : "bg-gray-100"} ${className}`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${isDark ? "bg-white/50" : "bg-[#0F1D56]"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative h-12 rounded-full overflow-hidden border ${isDark ? "border-white/30" : "border-gray-900/70"} ${className}`}
    >
      <div
        className={`absolute left-0 top-0 h-full transition-all duration-700 ease-out ${isDark ? "bg-white/10" : "bg-gray-100"}`}
        style={{ width: `${pct}%` }}
      />
      {pct > 1 && pct < 99 && (
        <div
          className={`absolute top-0 h-full w-px ${isDark ? "bg-white/40" : "bg-gray-900/60"}`}
          style={{ left: `${pct}%` }}
        />
      )}
    </div>
  );
}
