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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pt-20 md:flex-row md:items-center md:gap-12 md:px-6 lg:gap-20"
    >
      {/* Background: code block, behind everything */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="scale-[1.55] opacity-[0.5] md:scale-[2.05]">
          <HeroCodeBlock isBackground />
        </div>
      </div>

      {/* Left: badge, name, typewriter, CTAs */}
      <div className="relative z-10 max-w-xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block rounded-full border border-[var(--primary)]/40 bg-[var(--primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--primary)]"
        >
          {site.roleBadge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="font-heading mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] md:text-5xl lg:text-6xl"
        >
          {site.name}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="mt-4 min-h-[1.6em] text-lg leading-relaxed text-[var(--text-muted)] md:text-xl"
        >
          <TypeWriter text={site.heroSentence} speed={38} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.28 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="btn-glow rounded-xl bg-[var(--primary)] px-6 py-3.5 font-medium text-white transition hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/20 bg-white/[0.04] px-6 py-3.5 font-medium text-[var(--text)] backdrop-blur-sm transition hover:border-[var(--accent)]/50 hover:bg-white/[0.06]"
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
        className="relative z-10 mt-14 flex justify-center md:mt-0 md:flex-1"
      >
        <div className="relative">
          <div
            className="absolute -inset-1 rounded-[2.25rem] opacity-60 blur-2xl"
            style={{
              background: `linear-gradient(135deg, var(--primary) 0%, var(--accent) 50%, var(--highlight) 100%)`,
            }}
          />
          <motion.div
            style={{ x: xy.x, y: xy.y }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10"
          >
            <img src={profileImg} alt="" className="h-64 w-64 object-cover md:h-80 md:w-80" />
          </motion.div>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
              style={{ left: `${20 + i * 15}%`, top: `${10 + (i % 3) * 30}%` }}
              aria-hidden
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {floatingTech.map((t, i) => {
            const angle = (i / floatingTech.length) * 360 * (Math.PI / 180)
            const r = 22
            const x = 50 + Math.cos(angle) * r
            const y = 50 + Math.sin(angle) * r
            return (
              <motion.span
                key={t.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + t.delay * 0.2 }}
                className="absolute rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-[var(--text-muted)]"
                style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
              >
                {t.name}
              </motion.span>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
