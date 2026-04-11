import Link from "next/link"
import type { Dict } from "@/lib/translations"

function DotPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="cta-indigo" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(99,102,241,0.18)" />
        </pattern>
        <pattern id="cta-violet" x="12" y="12" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(139,92,246,0.12)" />
        </pattern>
        <radialGradient id="cta-fade" cx="90%" cy="10%" r="75%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="55%"  stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="cta-mask">
          <rect width="100%" height="100%" fill="url(#cta-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#cta-indigo)" mask="url(#cta-mask)" />
      <rect width="100%" height="100%" fill="url(#cta-violet)" mask="url(#cta-mask)" />
    </svg>
  )
}

export default function CTASection({
  dict,
  lang
}: {
  dict: Dict["cta"]
  lang: string
}) {
  return (
    <section id='contact' className='py-6 px-4 md:px-6 w-full max-w-7xl mx-auto'>
      <div className='w-full border border-violet-100 rounded-4xl md:rounded-5xl px-8 md:px-16 py-16 md:py-24 relative overflow-hidden' style={{ background: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FF 100%)" }}>

        <DotPattern />

        <div className='relative z-10 max-w-2xl'>
          <h2 className='font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-5 leading-snug'>
            {dict.heading}
          </h2>
          <p className='text-lg text-gray-500 font-normal leading-relaxed mb-10'>
            {dict.sub}
          </p>

          <div className='flex flex-col sm:flex-row items-start gap-3 mb-8'>
            <Link
              href={`/${lang}/diagnostic`}
              className='inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#0F1D56] text-white text-base font-medium hover:bg-[#162470] transition-colors'
            >
              {dict.btn1}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className='inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-gray-300 text-gray-700 text-base font-medium hover:bg-white/60 transition-colors'
            >
              {dict.btn2}
            </Link>
          </div>

          <p className='text-sm text-gray-400'>{dict.badge}</p>
        </div>
      </div>
    </section>
  )
}
