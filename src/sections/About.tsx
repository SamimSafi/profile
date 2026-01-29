import { motion } from 'framer-motion'
import { Section } from '@/components/animation/Section'
import { about } from '@/data/about'
import profileImg from '@/assets/profile.jpg'

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
        <div className="grid gap-12 lg:grid-cols-[1fr,auto]">
          <div>
            {about.intro.map((p, i) => (
              <p key={i} className="text-[var(--text-muted)] [&+&]:mt-4">
                {p}
              </p>
            ))}

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
                  Education
                </h4>
                <div className="space-y-4">
                  {about.education.map((e) => (
                    <div key={e.degree}>
                      <div className="text-sm font-medium text-[var(--text)]">{e.degree}</div>
                      <div className="text-xs text-[var(--text-muted)]">
                        {e.school} • {e.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image with Hero Style */}
          <div className="relative flex justify-center lg:block">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-[2.25rem] opacity-60 blur-2xl"
                style={{
                  background: `linear-gradient(135deg, var(--primary) 0%, var(--accent) 50%, var(--highlight) 100%)`,
                }}
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                <img src={profileImg} alt="" className="h-64 w-64 object-cover sm:h-72 sm:w-72" />
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack at the end */}
        <div className="mt-12 flex flex-wrap gap-2 border-t border-white/5 pt-8">
          {about.techStack
            .filter((t) => !['React', 'TypeScript'].includes(t))
            .map((t, i) => (
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
      </motion.div>
    </Section>
  )
}
