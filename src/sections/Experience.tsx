import { motion } from 'framer-motion'
import { Section } from '@/components/animation/Section'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--primary)]/60 via-[var(--accent)]/40 to-transparent md:left-4"
          aria-hidden
        />
        <ul className="space-y-6">
          {experience.map((e, i) => (
            <motion.li
              key={`${e.year}-${e.role}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="relative flex gap-6 pl-8 md:pl-10"
            >
              <span
                className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-[var(--primary)] bg-[var(--bg)]"
                aria-hidden
              />
              <span className="font-display w-14 shrink-0 text-sm font-medium text-[var(--accent)]">
                {e.year}
              </span>
              <div>
                <span className="font-medium text-[var(--text)]">{e.role}</span>
                {e.company && (
                  <span className="text-[var(--text-muted)]"> · {e.company}</span>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
