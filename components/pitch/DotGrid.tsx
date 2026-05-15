interface DotGridProps {
  variant?: "dark" | "light";
}

export default function DotGrid({ variant = "dark" }: DotGridProps) {
  if (variant === "dark") {
    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pitch-dot-dark" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.12)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pitch-dot-dark)" />
      </svg>
    );
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="pitch-dot-light" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(99,102,241,0.10)" />
        </pattern>
        <radialGradient id="pitch-dot-fade" cx="85%" cy="15%" r="70%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="55%"  stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="pitch-dot-mask">
          <rect width="100%" height="100%" fill="url(#pitch-dot-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#pitch-dot-light)" mask="url(#pitch-dot-mask)" />
    </svg>
  );
}
