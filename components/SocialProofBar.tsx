import { CheckCircle2, TrendingDown, Zap } from "lucide-react";
import type { Dict } from "@/lib/translations";

export default function SocialProofBar({ dict }: { dict: Dict["proof"] }) {
  return (
    <div className="w-full border-b border-gray-100 py-6 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-base text-gray-500">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-pastel-green shrink-0" strokeWidth={1.5} />
          {dict.stat1}
        </span>
        <span className="hidden md:inline text-gray-300">|</span>
        <span className="flex items-center gap-2">
          <TrendingDown className="w-5 h-5 text-pastel-blue shrink-0" strokeWidth={1.5} />
          {dict.stat2}
        </span>
        <span className="hidden md:inline text-gray-300">|</span>
        <span className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-pastel-purple shrink-0" strokeWidth={1.5} />
          {dict.stat3}
        </span>
      </div>
    </div>
  );
}
