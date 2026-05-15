import DotGrid from "./DotGrid";
import GlowBlobs from "./GlowBlobs";

export type SlideVariant = "dark" | "light" | "violet";

interface SlideContainerProps {
  children: React.ReactNode;
  variant: SlideVariant;
}

export default function SlideContainer({ children, variant }: SlideContainerProps) {
  if (variant === "dark") {
    return (
      <div className="relative w-full h-full bg-[#0F1D56] overflow-hidden flex flex-col">
        <DotGrid variant="dark" />
        <GlowBlobs />
        <div className="relative z-10 flex flex-col h-full px-14 md:px-20 py-14 md:py-16">
          {children}
        </div>
      </div>
    );
  }

  if (variant === "violet") {
    return (
      <div
        className="relative w-full h-full overflow-hidden flex flex-col"
        style={{ background: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FF 100%)" }}
      >
        <DotGrid variant="light" />
        <div className="relative z-10 flex flex-col h-full px-14 md:px-20 py-14 md:py-16">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex flex-col">
      <div className="flex flex-col h-full px-14 md:px-20 py-14 md:py-16">
        {children}
      </div>
    </div>
  );
}
