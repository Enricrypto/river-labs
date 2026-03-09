import { Truck, Building2, ShoppingCart, FileX2 } from "lucide-react";
import type { Dict } from "@/lib/translations";

const cardStyles = [
  {
    icon: Truck,
    gradient: "from-blue-50/70 to-white",
    border: "border-blue-100 hover:border-[#A3BFFA]",
    iconBg: "bg-blue-50 group-hover:bg-[#A3BFFA]/20",
    iconColor: "text-gray-400 group-hover:text-[#6B9BF2]",
    glow: "hover:shadow-[0_12px_40px_rgba(163,191,250,0.35)]",
    delay: "0ms",
  },
  {
    icon: Building2,
    gradient: "from-emerald-50/70 to-white",
    border: "border-emerald-100 hover:border-[#B5EAD7]",
    iconBg: "bg-emerald-50 group-hover:bg-[#B5EAD7]/40",
    iconColor: "text-gray-400 group-hover:text-emerald-600",
    glow: "hover:shadow-[0_12px_40px_rgba(181,234,215,0.45)]",
    delay: "80ms",
  },
  {
    icon: ShoppingCart,
    gradient: "from-purple-50/70 to-white",
    border: "border-purple-100 hover:border-[#D7BDE2]",
    iconBg: "bg-purple-50 group-hover:bg-[#D7BDE2]/40",
    iconColor: "text-gray-400 group-hover:text-purple-500",
    glow: "hover:shadow-[0_12px_40px_rgba(215,189,226,0.45)]",
    delay: "160ms",
  },
  {
    icon: FileX2,
    gradient: "from-red-50/70 to-white",
    border: "border-red-100 hover:border-red-200",
    iconBg: "bg-red-50 group-hover:bg-red-100",
    iconColor: "text-gray-400 group-hover:text-red-400",
    glow: "hover:shadow-[0_12px_40px_rgba(252,165,165,0.35)]",
    delay: "240ms",
  },
];

export default function ProblemSection({ dict }: { dict: Dict["problems"] }) {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
          {dict.heading}
        </h2>
        <p className="text-lg text-gray-600 font-normal">
          {dict.sub}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {dict.items.map((item, idx) => {
          const style = cardStyles[idx];
          const Icon = style.icon;
          return (
            <div
              key={idx}
              className={`animate-fade-in-up relative p-8 rounded-2xl border bg-gradient-to-b ${style.gradient} ${style.border} ${style.glow} flex flex-col gap-4 group cursor-default transition-all duration-300 hover:-translate-y-1.5 shadow-sm`}
              style={{ animationDelay: style.delay }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${style.iconBg}`}
              >
                <Icon
                  className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 ${style.iconColor}`}
                  strokeWidth={1.5}
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-medium tracking-tight text-gray-900">{item.title}</h3>
              <p className="text-base text-gray-500 font-normal leading-relaxed">{item.desc}</p>

              {/* Subtle bottom accent line that appears on hover */}
              <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${style.iconColor}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
