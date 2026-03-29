import type { Dict } from "@/lib/translations";

const CLIENTS = [
  "Grupo Cataratas",
  "Bondinho Pão de Açúcar",
  "Trem do Corcovado",
  "Píer Mauá",
  "Matrisoja",
  "Grupo Ápia",
];

export default function SocialProofBar({ dict }: { dict: Dict["proof"] }) {
  return (
    <div className="w-full border-b border-gray-100 py-5 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-widest shrink-0 mr-2">
          {dict.label}
        </span>
        {CLIENTS.map((name, i) => (
          <span key={name} className="flex items-center gap-3">
            <span className="text-sm text-gray-600 font-medium whitespace-nowrap">{name}</span>
            {i < CLIENTS.length - 1 && (
              <span className="text-gray-200 text-xs select-none">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
