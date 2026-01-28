import { motion } from 'framer-motion'
import { Section } from '@/components/animation/Section'
import { about } from '@/data/about'

export function About() {
  return (
    <Section id="about" title="About">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
        className="glass-card rounded-2xl p-8 md:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:gap-12">
          <div>
            {about.intro.map((p, i) => (
              <p
                key={i}
                className="text-[var(--text-muted)] [&+&]:mt-4"
              >
                {p}
              </p>
            ))}
          </div>
          {/* Tech stack grid */}
          <div className="flex flex-wrap items-start gap-2 lg:max-w-[280px]">
            {about.techStack.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.03 }}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-[var(--text)]"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
