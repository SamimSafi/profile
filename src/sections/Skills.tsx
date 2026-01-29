import { motion } from 'framer-motion'
import { Section } from '@/components/animation/Section'
import { skillGroups, techSkills } from '@/data/skills'
import { SkillIcon } from '@/components/ui/SkillIcon'
import { IconServer, IconLayout, IconPackage, IconTool } from '@/components/ui/Icons'

const iconMap: Record<string, React.ReactNode> = {
  FiServer: <IconServer size={22} className="text-[var(--accent)]" />,
  FiLayout: <IconLayout size={22} className="text-[var(--accent)]" />,
  FiBox: <IconPackage size={22} className="text-[var(--accent)]" />,
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="mb-20">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {techSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: i * 0.05,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group relative flex flex-col items-center"
            >
              {/* Tile Container - Matching image style */}
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-end)] p-4 shadow-2xl transition-all group-hover:border-[var(--primary)]/50 group-hover:bg-[var(--bg)] md:h-24 md:w-24">
                <SkillIcon
                  name={skill.name}
                  className="h-10 w-10 transition-transform group-hover:scale-110 md:h-12 md:w-12"
                  size={48}
                />

                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--text)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <span className="mt-3 text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)] transition-colors group-hover:text-[var(--text)] md:text-xs">
                {skill.name}
              </span>

              {/* Tile Glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity group-hover:opacity-20 bg-[var(--primary)]" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, groupIdx) => (
          <motion.article
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
            className="glass-card group flex flex-col p-6 overflow-hidden relative"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-[var(--primary)]/5 blur-2xl group-hover:bg-[var(--primary)]/10 transition-colors" />

            <div className="mb-4 flex items-center gap-3 relative z-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--text)]/5 border border-[var(--glass-border)] group-hover:border-[var(--accent)]/30 transition-colors">
                {iconMap[group.icon] || <IconTool size={22} className="text-[var(--accent)]" />}
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[var(--text)]">
                  {group.category}
                </h3>
                <p className="text-xs text-[var(--text-muted)]">{group.description}</p>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              {group.items.map((skill, skillIdx) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-[var(--text)]">{skill.name}</span>
                    <span className="font-mono text-[var(--text-muted)]">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--text)]/5 border border-[var(--text)]/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + skillIdx * 0.05, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
