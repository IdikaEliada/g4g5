import { motion as Motion } from 'framer-motion'
import { useState } from 'react'

export default function Carousel({ logos }) {
  // Duplicate logos so the loop is seamless
  const doubled = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos]
  const [isPaused, setIsPaused] = useState(false)
  
  return (
    <section id="api" className="py-28">
      <div className="max-w-6xl mx-auto px-12">
        <p className="text-center font-mono text-[11px] text-green tracking-[0.14em] uppercase mb-3">
          AFFILIATES
        </p>

        <div className="flex items-center justify-center mb-10">
          <p className="text-gray-300 font-light max-w-130 text-center text-[13px]">
            TRUSTED &amp; SPONSORED BY TECH COMMUNITIES IN FUTO
          </p>
        </div>

        {/* Mask the edges with a fade */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative cursor-pointer overflow-hidden mb-10 mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <Motion.div
            className="flex items-center gap-8 w-max"
            animate={isPaused ? { x: undefined } : { x: ['0%', '-50%'] }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            {doubled.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-20 object-contain shrink-0"
              />
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  )
}