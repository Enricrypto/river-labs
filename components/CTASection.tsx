import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import type { Dict } from "@/lib/translations";

export default function CTASection({ dict }: { dict: Dict["cta"] }) {
  return (
    <section id="contact" className="py-24 px-4 w-full bg-[#f6f9fc] mt-auto">
      <div className="max-w-4xl mx-auto bg-pastel-blue rounded-[2.5rem] p-10 md:p-16 text-center shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pastel-purple opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            {dict.heading}
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-normal max-w-2xl mx-auto mb-10">
            {dict.sub}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-pastel-green text-gray-900 text-lg font-medium hover:bg-pastel-green/90 transition-colors w-full sm:w-auto shadow-sm"
            >
              {dict.btn1}
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-white/30 text-white text-lg font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              {dict.btn2}
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 text-base text-white/80 font-medium bg-black/10 px-4 py-2 rounded-full">
            <ShieldCheck className="w-4 h-4" strokeWidth={1.5} />
            {dict.badge}
          </div>
        </div>
      </div>
    </section>
  );
}
