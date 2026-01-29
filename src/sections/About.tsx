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
        {/* Main Content Area: Terminal & Stats */}
        <div className="lg:col-span-12 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                {/* Text Side */}
                <div className="flex-1 prose prose-invert max-w-none">
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

                {/* Profile Image with Glow (Inside Terminal) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative shrink-0 self-center md:self-start"
                >
                  <div
                    className="absolute -inset-4 rounded-full opacity-30 blur-3xl"
                    style={{
                      background: `linear-gradient(135deg, var(--primary) 0%, var(--accent) 50%, var(--highlight) 100%)`,
                    }}
                  />
                  <div className="relative h-48 w-48 overflow-hidden rounded-2xl border border-[var(--glass-border)] md:h-64 md:w-64">
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </motion.div>
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

          <div className="grid gap-8 lg:grid-cols-12">
            {/* Education */}
            <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
              {about.education.map((e, i) => (
                <motion.div
                  key={e.degree}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card flex flex-col justify-between p-5 border-l-4 border-l-[var(--primary)]"
                >
                  <div className="font-mono text-xs mb-3 text-[var(--text-muted)] opacity-60">
                    // {e.year}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text)]">{e.degree}</h4>
                    <p className="mt-1 text-xs text-[var(--text-muted)]">{e.school}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats JSON block */}
            <div className="lg:col-span-4">
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
              className="font-mono rounded-lg border border-[var(--glass-border)] bg-[var(--text)]/5 px-4 py-2 text-xs font-medium text-[var(--text)] transition-colors hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5"
            >
              <span className="text-[var(--accent)] mr-1">&lt;</span>
              {t}
              <span className="text-[var(--accent)] ml-1">/&gt;</span>
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  )
}
