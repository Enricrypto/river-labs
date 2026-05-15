type HeadingSize = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<HeadingSize, string> = {
  sm: "text-2xl md:text-3xl leading-tight",
  md: "text-3xl md:text-4xl leading-tight",
  lg: "text-4xl md:text-5xl leading-[1.08]",
  xl: "text-5xl md:text-6xl lg:text-7xl leading-[1.05]",
};

interface SlideHeadingProps {
  children: React.ReactNode;
  size?: HeadingSize;
  variant?: "light" | "dark";
  className?: string;
}

export default function SlideHeading({
  children,
  size = "lg",
  variant = "light",
  className = "",
}: SlideHeadingProps) {
  const color = variant === "dark" ? "text-white" : "text-[#0A0F2C]";

  return (
    <h2
      className={`font-serif font-medium tracking-tight ${sizeMap[size]} ${color} ${className}`}
    >
      {children}
    </h2>
  );
}
