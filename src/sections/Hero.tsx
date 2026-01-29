import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { TypeWriter } from '@/components/ui/TypeWriter'
import { HeroCodeBlock } from '@/components/ui/HeroCodeBlock'
import { site } from '@/data/site'
import profileImg from '@/assets/profile.jpg'

const floatingTech = [
  { name: 'React', delay: 0 },
  { name: 'FastAPI', delay: 0.5 },
  { name: 'Python', delay: 1 },
  { name: 'JS', delay: 1.5 },
]

export function Hero() {
  const [xy, setXy] = useState({ x: 0, y: 0 })
  const areaRef = useRef<HTMLDivElement>(null)

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!areaRef.current) return
    const rect = areaRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setXy({ x: (e.clientX - cx) / 40, y: (e.clientY - cy) / 40 })
  }, [])
  const onMouseLeave = useCallback(() => setXy({ x: 0, y: 0 }), [])

  return (
    <section
      id="home"
      ref={areaRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-20 md:flex-row md:items-center md:gap-14 lg:gap-20"
    >
      {/* Background: code block with improved separation */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-25 blur-[1.5px]"
        aria-hidden
      >
        <div className="scale-[1.55] md:scale-[2.05] -translate-y-12 md:-translate-y-20">
          <HeroCodeBlock isBackground />
        </div>
      </div>

      {/* Vignette overlay to darken edges and center the text focus */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,15,26,0.6)_100%)]" />

      {/* Left: badge, name, typewriter, CTAs */}
      <div className="relative z-10 max-w-xl md:flex-1">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[var(--primary)] backdrop-blur-sm"
        >
          {site.roleBadge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="font-heading mt-6 text-5xl font-extrabold leading-tight tracking-tight text-[var(--text)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] md:text-6xl"
        >
          {site.name}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="mt-6 max-w-lg text-lg leading-relaxed text-white/80 drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)] md:text-xl"
        >
          {site.heroSentence.includes('real-time dashboards') ? (
            <>
              {site.heroSentence.split('real-time dashboards')[0]}
              <span className="text-[var(--accent)]">real-time dashboards</span>
              {site.heroSentence.split('real-time dashboards')[1]}
            </>
          ) : (
            <TypeWriter text={site.heroSentence} speed={38} />
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.28 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="btn-glow flex h-12 items-center rounded-xl bg-[var(--primary)] px-8 font-medium text-white transition hover:scale-[1.02] active:scale-[0.98]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="flex h-12 items-center rounded-xl border border-white/20 bg-white/[0.04] px-8 font-medium text-[var(--text)] backdrop-blur-sm transition hover:bg-white/[0.08] hover:border-white/30"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right: profile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mt-14 flex justify-center md:mt-0 md:flex-1 md:justify-end"
      >
        <div className="relative">
          {/* Restored Original Glow */}
          <div
            className="absolute -inset-1 rounded-[2.25rem] opacity-60 blur-2xl"
            style={{
              background: `linear-gradient(135deg, var(--primary) 0%, var(--accent) 50%, var(--highlight) 100%)`,
            }}
          />
          <motion.div
            style={{ x: xy.x, y: xy.y }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl"
          >
            <img src={profileImg} alt="" className="h-72 w-72 object-cover sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
          </motion.div>
          
          {/* Tech chips */}
          <div className="pointer-events-none absolute inset-0">
            {floatingTech.map((t, i) => {
              const angle = (i / floatingTech.length) * 360 * (Math.PI / 180)
              const r = 24
              const x = 50 + Math.cos(angle) * r
              const y = 50 + Math.sin(angle) * r
              return (
                <motion.span
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + t.delay * 0.2 }}
                  className="absolute hidden rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-white/50 backdrop-blur-md md:block"
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  {t.name}
                </motion.span>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
