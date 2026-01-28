export type ContactItem = {
  type: 'email' | 'whatsapp' | 'github' | 'linkedin'
  label: string
  url: string
  icon: string
}

export const contactItems: ContactItem[] = [
  { type: 'email', label: 'Email', url: 'mailto:example@email.com', icon: 'FiMail' },
  { type: 'whatsapp', label: 'WhatsApp', url: 'https://wa.me/1234567890', icon: 'FiMessageCircle' },
  { type: 'github', label: 'GitHub', url: 'https://github.com', icon: 'FiGithub' },
  { type: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com', icon: 'FiLinkedin' },
]
