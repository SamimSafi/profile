import { motion } from 'framer-motion'
import { IconMail, IconMessageCircle, IconGithub, IconLinkedin } from '@/components/ui/Icons'
import { Section } from '@/components/animation/Section'
import { contactItems } from '@/data/contact'

const iconMap: Record<string, React.ReactNode> = {
  FiMail: <IconMail size={20} />,
  FiMessageCircle: <IconMessageCircle size={20} />,
  FiGithub: <IconGithub size={20} />,
  FiLinkedin: <IconLinkedin size={20} />,
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-8 text-lg text-[var(--text-muted)]">Let's work together.</p>
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {contactItems.map((c) => (
            <motion.a
              key={c.type}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card flex items-center gap-3 rounded-xl px-5 py-3 text-[var(--text)] transition hover:border-[var(--primary)]/40 hover:shadow-glow"
            >
              {iconMap[c.icon] || <IconMail size={20} />}
              <span>{c.label}</span>
            </motion.a>
          ))}
        </div>
        <motion.a
          href={contactItems.find((c) => c.type === 'email')?.url ?? 'mailto:example@email.com'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-glow inline-block rounded-lg bg-[var(--primary)] px-8 py-4 font-display font-semibold text-white transition hover:opacity-90"
        >
          Let's build something powerful.
        </motion.a>
      </div>
    </Section>
  )
}
