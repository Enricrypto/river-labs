"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface SlideNavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  variant?: "light" | "dark";
}

export default function SlideNav({
  current,
  total,
  onPrev,
  onNext,
  variant = "light",
}: SlideNavProps) {
  const isDark = variant === "dark";

  const btnBase = "w-8 h-8 rounded-full border flex items-center justify-center transition-all disabled:opacity-20";
  const btnStyle = isDark
    ? "border-white/25 text-white/70 hover:bg-white/10 hover:border-white/40"
    : "border-gray-200 text-gray-400 hover:bg-gray-50 hover:border-gray-300";

  return (
    <div className="absolute bottom-7 right-12 flex items-center gap-3 z-20">
      <button onClick={onPrev} disabled={current === 0} className={`${btnBase} ${btnStyle}`}>
        <HugeiconsIcon icon={ArrowLeft01Icon} size={13} color="currentColor" strokeWidth={2} />
      </button>

      <span
        className={`text-xs font-medium tabular-nums min-w-[3.5rem] text-center ${isDark ? "text-white/35" : "text-gray-400"}`}
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>

      <button onClick={onNext} disabled={current === total - 1} className={`${btnBase} ${btnStyle}`}>
        <HugeiconsIcon icon={ArrowRight01Icon} size={13} color="currentColor" strokeWidth={2} />
      </button>
    </div>
  );
}
