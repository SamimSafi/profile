export type SkillItem = {
  name: string
  icon?: string
}

export const techSkills: SkillItem[] = [
  { name: 'PHP' },
  { name: 'Node.js' },
  { name: 'JavaScript' },
  { name: 'React JS' },
  { name: 'MySQL' },
  { name: 'Python' },
  { name: 'FastAPI' },
  { name: 'Flutter' },
  { name: 'SQL Server' },
  { name: 'SQLite' },
  { name: '.NET Core' },
  { name: 'Express.js' },
  { name: 'React Native' },
  { name: 'TypeScript' },
  { name: 'Laravel' },
]

export type SkillGroup = {
  category: string
  icon: string
  description: string
  items: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Full Stack Development',
    icon: 'FiLayout',
    description: 'Modern web applications and system design.',
    items: [
      { name: 'System Architecture', level: 95 },
      { name: 'API Design & Integration', level: 92 },
      { name: 'Scalable Systems', level: 90 },
      { name: 'Security Best Practices', level: 94 },
      { name: 'ERP & MIS Solutions', level: 96 },
      { name: 'Version Control (Git)', level: 90 },
    ],
  },
  {
    category: 'Frontend & UI',
    icon: 'FiBox',
    description: 'Responsive and interactive interfaces.',
    items: [
      { name: 'Responsive Design', level: 95 },
      { name: 'UX/UI Design Principles', level: 88 },
      { name: 'Performance Optimization', level: 92 },
      { name: 'State Management', level: 90 },
      { name: 'Accessibility (A11y)', level: 85 },
      { name: 'Cross-browser Compatibility', level: 94 },
    ],
  },
  {
    category: 'Databases & Backend',
    icon: 'FiServer',
    description: 'Data management and server-side logic.',
    items: [
      { name: 'Database Normalization', level: 95 },
      { name: 'Query Optimization', level: 92 },
      { name: 'RESTful API Development', level: 94 },
      { name: 'Authentication & JWT', level: 90 },
      { name: 'Data Modeling', level: 95 },
      { name: 'Server Administration', level: 85 },
    ],
  },
]
