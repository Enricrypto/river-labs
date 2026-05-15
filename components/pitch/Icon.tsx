import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

type IconSize = "sm" | "md" | "lg";
type IconVariant = "light" | "dark";

const pixelSize  = { sm: 16, md: 20, lg: 24 };
const wrapperSize = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-12 h-12" };

interface IconProps {
  icon: IconSvgElement;
  size?: IconSize;
  variant?: IconVariant;
  className?: string;
}

export default function Icon({ icon, size = "md", variant = "dark", className = "" }: IconProps) {
  const color  = variant === "dark" ? "#0F1D56" : "rgba(255,255,255,0.75)";
  const border = variant === "dark" ? "border border-gray-200" : "border border-white/20";

  return (
    <div
      className={`${wrapperSize[size]} ${border} rounded-full flex items-center justify-center flex-shrink-0 ${className}`}
    >
      <HugeiconsIcon icon={icon} size={pixelSize[size]} color={color} strokeWidth={1.5} />
    </div>
  );
}
