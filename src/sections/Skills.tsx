import { motion } from 'framer-motion'
import {
  IconServer,
  IconLayout,
  IconBarChart,
  IconPackage,
  IconTool,
  IconMap,
} from '@/components/ui/Icons'
import { Section } from '@/components/animation/Section'
import { skillGroups } from '@/data/skills'

const iconMap: Record<string, React.ReactNode> = {
  FiServer: <IconServer size={22} className="text-[var(--accent)]" />,
  FiLayout: <IconLayout size={22} className="text-[var(--accent)]" />,
  FiBarChart2: <IconBarChart size={22} className="text-[var(--accent)]" />,
  FiPackage: <IconPackage size={22} className="text-[var(--accent)]" />,
  FiTool: <IconTool size={22} className="text-[var(--accent)]" />,
  FiMap: <IconMap size={22} className="text-[var(--accent)]" />,
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <motion.article
            key={g.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="glass-card group flex flex-col p-6 transition-shadow hover:shadow-glow"
          >
            <div className="mb-3 flex items-center gap-2">
              {iconMap[g.icon] || <IconTool size={22} className="text-[var(--accent)]" />}
              <span className="font-heading text-base font-semibold text-[var(--text)]">
                {g.category}
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-[var(--text-muted)]">
              {g.description}
            </p>
            <ul className="mt-auto space-y-1.5 text-sm text-[var(--text-muted)]">
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
