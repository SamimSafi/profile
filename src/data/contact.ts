export type ContactItem = {
  type: 'email' | 'whatsapp' | 'github' | 'linkedin'
  label: string
  url: string
  icon: string
}

export const contactItems: ContactItem[] = [
  {
    type: 'email',
    label: 'Samim.rahmany.sr@gmail.com',
    url: 'mailto:Samim.rahmany.sr@gmail.com',
    icon: 'FiMail',
  },
  {
    type: 'whatsapp',
    label: '+93 787 349 769',
    url: 'https://wa.me/93787349769',
    icon: 'FiMessageCircle',
  },
  { type: 'github', label: 'GitHub', url: 'https://github.com', icon: 'FiGithub' },
  { type: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com', icon: 'FiLinkedin' },
]
