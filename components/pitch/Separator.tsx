interface SeparatorProps {
  variant?: "light" | "dark" | "violet";
  className?: string;
}

export default function Separator({ variant = "light", className = "" }: SeparatorProps) {
  const color =
    variant === "dark"   ? "border-white/10" :
    variant === "violet" ? "border-violet-200/60" :
                           "border-gray-100";

  return <hr className={`border-0 border-t ${color} ${className}`} />;
}
