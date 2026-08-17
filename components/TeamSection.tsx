"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

function BioModal({
  member,
  idx,
  onClose,
}: {
  member: Dict["team"]["members"][number];
  idx: number;
  onClose: () => void;
}) {
  useEffect(() => {
    // Locking document.body directly froze desktop too: this modal is only
    // display:none above md, so it still mounts and still ran the lock.
    // The class is scoped to the mobile breakpoint in globals.css.
    document.body.classList.add("bio-modal-open");
    return () => { document.body.classList.remove("bio-modal-open"); };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 md:hidden flex flex-col animate-fade-in-up"
      style={{ background: "linear-gradient(135deg, #EEF0FF 0%, #EDE8FF 100%)" }}
    >
      <DotPattern id={`modal-${idx}`} />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-12 pb-5 border-b border-indigo-100/70">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-indigo-100 shrink-0 ring-2 ring-white">
            <Image
              src={member.image}
              alt={member.name}
              width={48}
              height={48}
              className="object-cover w-full h-full"
              style={{ objectPosition: member.objectPosition ?? "center top" }}
            />
          </div>
          <div>
            <p className="text-base font-semibold text-gray-900 leading-snug">{member.name}</p>
            <p className="text-sm text-indigo-400 font-normal leading-snug">{member.role}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/60 text-gray-500 hover:text-gray-800 transition-colors shrink-0"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Scrollable bio */}
      <div className="relative z-10 flex-1 overflow-y-auto px-5 py-6 space-y-4">
        {member.fullBio?.split("\n\n").map((para, i) => (
          <p key={i} className="text-sm text-gray-700 leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

function MemberCard({
  member,
  idx,
  bioLabel,
  open,
  onToggle,
}: {
  member: Dict["team"]["members"][number];
  idx: number;
  bioLabel: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
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

      {member.fullBio && (
        <div className="relative z-10 w-full">
          <button
            onClick={onToggle}
            className="flex items-center gap-1 mx-auto text-xs font-mono font-medium text-indigo-500 hover:text-indigo-700 transition-colors"
          >
            {bioLabel}
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Desktop only: inline accordion */}
          {open && (
            <div className="hidden md:block mt-3 text-left space-y-2">
              {member.fullBio.split("\n\n").map((para, i) => (
                <p key={i} className="text-xs text-gray-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function TeamSection({ dict }: { dict: Dict["team"] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="team" className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-gray-100">
      <div className="max-w-2xl mb-12">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5 leading-snug">
          {dict.heading}
        </h2>
        <p className="text-lg text-gray-500 font-normal leading-relaxed">
          {dict.sub}
        </p>
      </div>

      {/* Three members no longer fill a four-column row, so the grid tracks the
          count and centres itself rather than leaving a gap on the right. */}
      <div
        className={`grid grid-cols-2 gap-5 ${
          dict.members.length === 3
            ? "md:grid-cols-3 md:max-w-4xl md:mx-auto"
            : "md:grid-cols-4"
        }`}
      >
        {dict.members.map((member, idx) => (
          <MemberCard
            key={idx}
            member={member}
            idx={idx}
            bioLabel={dict.bioLabel}
            open={openIdx === idx}
            onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
          />
        ))}
      </div>

      {/* Mobile full-screen bio — one person at a time */}
      {openIdx !== null && dict.members[openIdx]?.fullBio && (
        <BioModal
          member={dict.members[openIdx]}
          idx={openIdx}
          onClose={() => setOpenIdx(null)}
        />
      )}
    </section>
  );
}
