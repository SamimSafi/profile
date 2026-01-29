import { motion } from 'framer-motion'
import { Section } from '@/components/animation/Section'
import { about } from '@/data/about'
import profileImg from '@/assets/profile.jpg'

export function About() {
  const stats = [
    { label: 'Role', value: 'Senior Software Developer' },
    { label: 'Experience', value: '9+ Years' },
    { label: 'Specialization', value: 'MIS & ERP Systems' },
    { label: 'Location', value: 'Kabul, Afghanistan' },
  ]

  return (
    <Section id="about" title="About">
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Column: Narrative & Terminal */}
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--editor-bg)] shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-[var(--glass-border)] bg-[var(--text)]/5 px-4 py-3">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                about_me.md
              </div>
              <div className="w-12" />
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8">
              <div className="prose prose-invert max-w-none">
                {about.intro.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="text-lg leading-relaxed text-[var(--text-muted)] last:mb-0"
                  >
                    <span className="mr-3 inline-block font-mono text-[var(--primary)] text-sm opacity-50">
                      {i + 1}
                    </span>
                    {p}
                  </motion.p>
                ))}
              </div>

              {/* Terminal Footer Info */}
              <div className="mt-8 flex items-center gap-4 border-t border-[var(--glass-border)] pt-6 text-sm font-mono text-[var(--text-muted)]">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  UTF-8
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  Markdown
                </span>
                <span className="ml-auto opacity-50">Ln 1, Col 1</span>
              </div>
            </div>
          </motion.div>

          {/* Education - More modern layout */}
          <div className="grid gap-4 sm:grid-cols-2">
            {about.education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card flex flex-col justify-between p-5"
              >
                <div>
                  <h4 className="text-sm font-bold text-[var(--text)]">{e.degree}</h4>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">{e.school}</p>
                </div>
                <span className="mt-4 inline-block self-start rounded-full bg-[var(--primary)]/10 px-3 py-1 text-[10px] font-bold text-[var(--primary)] uppercase">
                  {e.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Profile & Stats */}
        <div className="lg:col-span-4 space-y-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div
              className="absolute -inset-1 rounded-[2.25rem] opacity-40 blur-2xl transition-opacity group-hover:opacity-60"
              style={{
                background: `linear-gradient(135deg, var(--primary) 0%, var(--accent) 50%, var(--highlight) 100%)`,
              }}
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--glass-border)] bg-[var(--editor-bg)] p-2 shadow-2xl">
              <img
                src={profileImg}
                alt="Profile"
                className="aspect-square w-full rounded-[1.75rem] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Quick Stats JSON block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden p-6 font-mono text-sm shadow-xl"
          >
            <div className="mb-4 flex items-center gap-2 border-b border-[var(--glass-border)] pb-3">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                quick_stats.json
              </span>
            </div>
            <div className="space-y-3">
              <div className="text-[var(--text-muted)] opacity-50">{"{"}</div>
              {stats.map((s, i) => (
                <div key={s.label} className="pl-4">
                  <span className="text-[var(--accent)]">"{s.label.toLowerCase()}"</span>
                  <span className="text-[var(--text)]">: </span>
                  <span className="text-[var(--primary)]">"{s.value}"</span>
                  {i < stats.length - 1 && <span className="text-[var(--text)]">,</span>}
                </div>
              ))}
              <div className="text-[var(--text-muted)] opacity-50">{"}"}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categorized Tech Stack */}
      <div className="mt-12">
        <h3 className="mb-6 font-heading text-lg font-bold text-[var(--text)]">
          Technical Arsenal
        </h3>
        <div className="flex flex-wrap gap-3">
          {about.techStack.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -2, scale: 1.05 }}
              className="rounded-xl border border-[var(--glass-border)] bg-[var(--text)]/5 px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  )
}
