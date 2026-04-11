"use client";
import { ChevronDown } from "lucide-react";
import type { Dict } from "@/lib/translations";

export default function FAQSection({ dict }: { dict: Dict["faq"] }) {
  return (
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto w-full border-t border-gray-100">
      <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-12 text-center">
        {dict.heading}
      </h2>

      <div className="flex flex-col divide-y divide-gray-200">
        {dict.items.map((faq, idx) => (
          <details key={idx} className="group py-6" open={idx === 0}>
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl tracking-tight text-gray-900">
              <span>{faq.q}</span>
              <span className="transition group-open:rotate-180">
                <ChevronDown className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
              </span>
            </summary>
            <p className="text-lg text-gray-600 font-normal mt-4 pr-4 md:pr-12 leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
