import { motion } from 'framer-motion'
import { IconCheck } from '@/components/ui/Icons'
import { Section } from '@/components/animation/Section'
import { showcaseItems } from '@/data/showcase'

export function Showcase() {
  return (
    <Section id="showcase" title="Showcase">
      <p className="mb-8 max-w-2xl text-[var(--text-muted)]">
        Visual proof: dashboards, charts, maps, and analytics UI.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {showcaseItems.map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card flex items-center gap-3 rounded-xl px-4 py-3"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/20 text-[var(--accent)]">
              <IconCheck size={16} />
            </span>
            <span className="font-medium text-[var(--text)]">{label}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
