import { motion } from 'framer-motion'
import { Section } from '@/components/animation/Section'
import { experience } from '@/data/experience'
import { IconCheck } from '@/components/ui/Icons'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative mx-auto max-w-4xl">
        {/* Central vertical line */}
        <div
          className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-transparent md:left-1/2 md:-translate-x-1/2"
          aria-hidden
        />

        <div className="space-y-12">
          {experience.map((e, i) => (
            <motion.div
              key={`${e.year}-${e.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row md:justify-between ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[var(--bg)] bg-[var(--primary)] shadow-xl md:left-1/2">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-[45%]">
                <div className="glass-card group relative p-6 transition-all hover:border-[var(--primary)]/30">
                  {/* Date Badge */}
                  <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                    {e.year}
                  </span>
                  
                  <h3 className="font-heading text-xl font-bold text-[var(--text)]">
                    {e.role}
                  </h3>
                  
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-medium text-[var(--primary)]">{e.company}</span>
                    <span className="text-[var(--text-muted)]">•</span>
                    <span className="text-[var(--text-muted)]">{e.location}</span>
                  </div>

                  {e.description && (
                    <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                      {e.description}
                    </p>
                  )}

                  <ul className="mt-6 space-y-3">
                    {e.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                        <IconCheck className="mt-1 shrink-0 text-[var(--primary)]" size={14} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for desktop */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
