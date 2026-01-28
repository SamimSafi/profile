export type SkillGroup = {
  category: string
  icon: string
  description: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: 'FiLayout',
    description: 'Modern UI with React, TypeScript, and responsive design.',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: 'FiServer',
    description: 'APIs, data pipelines, and async workers.',
    items: ['FastAPI', 'Python', 'PostgreSQL', 'Celery', 'ETL', 'REST APIs'],
  },
  {
    category: 'Data & Analytics',
    icon: 'FiBarChart2',
    description: 'Dashboards, metrics, and time-series analysis.',
    items: ['ApexCharts', 'Kobo', 'Pandas', 'Dashboard & Visualization', 'Time Series'],
  },
  {
    category: 'Mapping & Visualization',
    icon: 'FiMap',
    description: 'Maps, GIS, and spatial data.',
    items: ['Leaflet', 'GPS', 'GeoJSON', 'ODK', 'Spatial analysis'],
  },
  {
    category: 'Tools & DevOps',
    icon: 'FiTool',
    description: 'Containers, CI/CD, and tooling.',
    items: ['Docker', 'Linux', 'CI/CD', 'Nginx', 'Git', 'MEAL / M&E'],
  },
]
