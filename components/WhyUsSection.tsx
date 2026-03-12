import Link from "next/link";
import { Target, Code2, CalendarClock, Languages, ArrowUpRight } from "lucide-react";
import type { Dict } from "@/lib/translations";

const icons = [Target, Code2, CalendarClock, Languages];

export default function WhyUsSection({ dict, lang }: { dict: Dict["whyus"]; lang: string }) {
  const featuredTitle = dict.features[0].title;
  const featuredDesc = dict.features[0].desc;
  const FeaturedIcon = icons[0];
  const rest = dict.features.slice(1).map((f, i) => ({ ...f, icon: icons[i + 1] }));

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
          {dict.heading}
        </h2>
      </div>

      {/* Bento grid: featured card left (2/3), stack of 2 right (1/3) on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">

        {/* Featured card — spans 2 cols, dark bg */}
        <div className="md:col-span-2 group relative rounded-2xl bg-gray-900 p-10 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)] min-h-[260px]">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#A3BFFA]/10 via-transparent to-[#D7BDE2]/10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3BFFA] opacity-[0.04] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/15 group-hover:scale-110">
              <FeaturedIcon className="w-6 h-6 text-[#A3BFFA] transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-medium tracking-tight text-white mb-3">{featuredTitle}</h3>
              <p className="text-base text-gray-400 font-normal leading-relaxed max-w-md">{featuredDesc}</p>
            </div>
          </div>

          {/* Arrow indicator */}
          <div className="relative z-10 mt-8 flex items-center gap-2 text-sm text-gray-500 font-medium group-hover:text-[#A3BFFA] transition-colors duration-300">
            <span>Learn more</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
          </div>
        </div>

        {/* Right column: first 2 of remaining */}
        <div className="flex flex-col gap-5">
          {rest.slice(0, 2).map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative rounded-2xl border border-gray-200 bg-white p-7 flex flex-col gap-4 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(163,191,250,0.2)] hover:border-[#A3BFFA]/50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center transition-all duration-300 group-hover:bg-[#A3BFFA]/10 group-hover:scale-110">
                  <Icon className="w-5 h-5 text-gray-400 transition-colors duration-300 group-hover:text-[#6B9BF2]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium tracking-tight text-gray-900">{f.title}</h3>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom row: last card full width */}
        {rest.slice(2).map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="md:col-span-3 group relative rounded-2xl border border-gray-200 bg-gradient-to-r from-gray-50 to-white p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(215,189,226,0.25)] hover:border-[#D7BDE2]/60"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#D7BDE2]/20 group-hover:scale-110 shadow-sm">
                <Icon className="w-6 h-6 text-gray-400 transition-colors duration-300 group-hover:text-purple-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-1">{f.title}</h3>
                <p className="text-base text-gray-500 font-normal leading-relaxed">{f.desc}</p>
              </div>
              <ArrowUpRight className="hidden sm:block ml-auto shrink-0 w-5 h-5 text-gray-200 transition-all duration-300 group-hover:text-[#D7BDE2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <Link
          href={`/${lang}/contact`}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 text-lg font-medium hover:bg-gray-50 transition-colors"
        >
          {dict.cta}
        </Link>
      </div>
    </section>
  );
}
