import Image from "next/image";
import type { Dict } from "@/lib/translations";

function DotPattern({ id }: { id: string }) {
  return (
    <svg className="absolute inset-x-0 bottom-0 top-10 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={`indigo-${id}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(99,102,241,0.22)" />
        </pattern>
        <pattern id={`violet-${id}`} x="12" y="12" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(139,92,246,0.15)" />
        </pattern>
        <radialGradient id={`fade-${id}`} cx="90%" cy="10%" r="75%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="55%"  stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`mask-${id}`}>
          <rect width="100%" height="100%" fill={`url(#fade-${id})`} />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill={`url(#indigo-${id})`} mask={`url(#mask-${id})`} />
      <rect width="100%" height="100%" fill={`url(#violet-${id})`} mask={`url(#mask-${id})`} />
    </svg>
  );
}

export default function TeamSection({ dict }: { dict: Dict["team"] }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-gray-100">
      <div className="max-w-2xl mb-12">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5 leading-snug">
          {dict.heading}
        </h2>
        <p className="text-lg text-gray-500 font-normal leading-relaxed">
          {dict.sub}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {dict.members.map((member, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden border border-indigo-100 rounded-2xl p-6 flex flex-col items-center gap-4"
            style={{ background: "linear-gradient(135deg, #EEF0FF 0%, #EDE8FF 100%)" }}
          >
            <DotPattern id={`tm-${idx}`} />

            <div className="relative z-10 w-24 h-24 rounded-full overflow-hidden bg-indigo-100 shrink-0 ring-2 ring-white">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                style={{ objectPosition: member.objectPosition ?? "center top" }}
              />
            </div>

            <div className="relative z-10 flex flex-col gap-1 text-center">
              <p className="text-base font-semibold text-gray-900 leading-snug">
                {member.name}
              </p>
              <p className="text-sm text-indigo-400 font-normal leading-snug">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
