interface Step {
  label: string;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep?: number;
  variant?: "light" | "dark";
}

export default function ProgressIndicator({
  steps,
  currentStep = 0,
  variant = "light",
}: ProgressIndicatorProps) {
  const isDark = variant === "dark";

  return (
    <div className="flex items-start w-full">
      {steps.map((step, i) => {
        const isComplete = i < currentStep;
        const isActive   = i === currentStep;

        return (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-2.5">
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  isComplete
                    ? isDark
                      ? "bg-white/80 border-white/80"
                      : "bg-[#0F1D56] border-[#0F1D56]"
                    : isActive
                    ? isDark
                      ? "bg-white/15 border-white"
                      : "bg-[#A3BFFA]/30 border-[#0F1D56]"
                    : isDark
                    ? "border-white/25 bg-transparent"
                    : "border-gray-300 bg-transparent"
                }`}
              >
                {isComplete && (
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1.5 5l3 3 6-6"
                      stroke={isDark ? "#0F1D56" : "white"}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {isActive && (
                  <div className={`w-2.5 h-2.5 rounded-full ${isDark ? "bg-white" : "bg-[#0F1D56]"}`} />
                )}
              </div>
              <span
                className={`text-xs whitespace-nowrap ${isDark ? "text-white/60" : "text-gray-500"}`}
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {step.label}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-px mx-2 mb-6 ${
                  i < currentStep
                    ? isDark
                      ? "border-t-2 border-white/60"
                      : "border-t-2 border-[#0F1D56]"
                    : isDark
                    ? "border-t border-dashed border-white/20"
                    : "border-t border-dashed border-gray-300"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
