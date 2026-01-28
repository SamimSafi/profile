import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type SectionProps = {
  id?: string
  title?: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id={id} ref={ref} className={`relative border-t border-white/[0.06] py-16 md:py-24 ${className}`}>
      {/* Optional gradient divider */}
      <div
        className="absolute left-0 right-0 top-0 h-px opacity-60"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--primary), var(--accent), transparent)',
        }}
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-heading mb-10 text-2xl font-semibold text-[var(--text)] md:mb-12 md:text-3xl"
          >
            {title}
          </motion.h2>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
