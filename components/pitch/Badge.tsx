export type BadgeVariant = "positive" | "info" | "roadmap" | "primary" | "neutral";

const styles: Record<BadgeVariant, string> = {
  positive: "bg-[#B5EAD7]/50 text-[#0a3620] border-[#B5EAD7]",
  info:     "bg-[#A3BFFA]/40 text-[#0F1D56] border-[#A3BFFA]",
  roadmap:  "bg-[#D7BDE2]/50 text-[#3d1a4d] border-[#D7BDE2]",
  primary:  "bg-[#0F1D56] text-white border-[#0F1D56]",
  neutral:  "bg-gray-50 text-gray-500 border-gray-200",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export default function Badge({ children, variant = "neutral", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium leading-none border ${styles[variant]} ${className}`}
      style={{ fontFamily: "var(--font-jakarta)" }}
    >
      {children}
    </span>
  );
}
