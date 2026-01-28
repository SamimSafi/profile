import { motion } from 'framer-motion'
import { IconExternalLink, IconGithub } from '@/components/ui/Icons'
import { Section } from '@/components/animation/Section'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-24 md:space-y-32">
        {projects.map((p, i) => {
          const isEven = i % 2 === 0
          return (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center"
            >
              <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                {/* Screenshot / preview */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group/card relative overflow-hidden rounded-2xl border border-white/10 transition-shadow hover:shadow-glow-border"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-[var(--primary)]/15 via-[var(--bg)] to-[var(--accent)]/10">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt=""
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, rgba(99,102,241,0.25) 0%, transparent 50%),
                            radial-gradient(circle at 70% 70%, rgba(34,211,238,0.15) 0%, transparent 50%)`,
                        }}
                      />
                    )}
                    <div className="absolute bottom-3 right-3 flex flex-wrap justify-end gap-2">
                      {p.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-[var(--text)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                <h3 className="font-heading text-2xl font-semibold text-[var(--text)] md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-[var(--text-muted)]">{p.description}</p>
                {p.impact && (
                  <p className="mt-2 text-sm text-[var(--accent)]">{p.impact}</p>
                )}
                {p.stats && p.stats.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {p.stats.map((s) => (
                      <span
                        key={s.label}
                        className="text-sm text-[var(--text-muted)]"
                      >
                        <span className="font-semibold text-[var(--text)]">{s.value}</span>{' '}
                        {s.label}
                      </span>
                    ))}
                  </div>
                )}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-[var(--text-muted)] before:mr-1.5 before:content-['•']"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-4">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary)]/20 px-4 py-2.5 text-sm font-medium text-[var(--primary)] transition hover:bg-[var(--primary)]/30"
                    >
                      <IconExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-[var(--text-muted)] transition hover:border-white/20 hover:text-[var(--text)]"
                    >
                      <IconGithub size={14} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
