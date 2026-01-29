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
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--hero-vignette)_100%)] transition-colors duration-300" />

      {/* Left: badge, name, typewriter, CTAs */}
      <div className="relative z-10 max-w-xl md:flex-1">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block text-sm font-medium tracking-wider text-[var(--accent)] uppercase"
        >
          Welcome to my portfolio!
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="font-heading mt-4 text-5xl font-extrabold leading-tight tracking-tight text-[var(--text)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] md:text-6xl"
        >
          Hello, my name's <span className="text-[var(--primary)]">Mohammad Samim Safi</span>.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--text-muted)] drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)] md:text-xl"
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
            href={site.cvUrl}
            download
            className="btn-glow flex h-14 items-center rounded-2xl bg-[var(--primary)] px-8 font-bold text-white transition hover:scale-[1.05] active:scale-[0.98] shadow-lg shadow-[var(--primary)]/20"
          >
            Download cv
          </a>
          <a
            href="#projects"
            className="flex h-14 items-center rounded-2xl border-2 border-[var(--text-muted)]/20 bg-transparent px-8 font-bold text-[var(--text)] backdrop-blur-sm transition hover:bg-[var(--text)]/[0.05] hover:border-[var(--text-muted)]/40 group"
          >
            See my work
            <svg
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll down indicator like in image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-6 hidden items-center gap-3 md:flex lg:left-10"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-[var(--text-muted)]/20 p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-1.5 w-1 rounded-full bg-[var(--accent)]"
          />
        </div>
        <span className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
          Scroll down
        </span>
      </motion.div>


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
            <img
              src={profileImg}
              alt=""
              className="h-72 w-72 object-cover sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            />
          </motion.div>

          {/* Tech chips */}
          <div className="pointer-events-none absolute inset-0">
            {floatingTech.map((t, i) => {
              const angle = (i / floatingTech.length) * 360 * (Math.PI / 180)
              const r = 45
              const x = 45 + Math.cos(angle) * r
              const y = 42 + Math.sin(angle) * r
              return (
                <motion.span
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.4, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + t.delay * 0.2 }}
                  className="absolute hidden rounded-lg border border-[var(--glass-border)] bg-[var(--bg-end)]/80 px-2.5 py-1 font-mono text-xs text-[var(--text)] backdrop-blur-md md:block"
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  {t.name}
                </motion.span>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Social links like in image (Right side vertical) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute right-6 top-50 z-20 hidden flex-col items-center gap-6 md:flex lg:right-10"
      >
        <span
          className="text-[15px] font-bold uppercase tracking-[0.3em] text-[var(--text-muted)]/40"
          style={{ writingMode: 'vertical-rl' }}
        >
          Follow me on ——
        </span>
        <div className="flex flex-col gap-4">
          <a
            href="http://linkedin.com/in/mohammad-samim-safi-6b9590155"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--text)]/5 border border-[var(--text)]/10 text-[var(--text-muted)] transition hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] hover:shadow-glow"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://github.com/samimsafi"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--text)]/5 border border-[var(--text)]/10 text-[var(--text-muted)] transition hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] hover:shadow-glow"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
