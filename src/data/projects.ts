export type Project = {
  id: string
  title: string
  description: string
  impact?: string
  features: readonly string[]
  tech: readonly string[]
  link?: string
  repo?: string
  image?: string
  stats?: { label: string; value: string | number }[]
}

export const projects: Project[] = [
  {
    id: 'meal-monitoring',
    title: 'MEAL Monitoring System',
    description: 'Real-time survey monitoring platform for field data collection and impact tracking.',
    impact: 'Enabled real-time oversight of 50+ field surveys and faster reporting cycles.',
    features: ['Kobo Integration', 'Real-time dashboards', 'GPS Mapping', 'Role-based access'],
    tech: ['FastAPI', 'React', 'Kobo', 'ApexCharts'],
    link: '#',
    repo: '#',
    image: undefined,
    stats: [
      { label: 'Submissions', value: '10k+' },
      { label: 'Dashboards', value: 12 },
      { label: 'Maps', value: 8 },
      { label: 'Users', value: '50+' },
    ],
  },
  {
    id: 'erp-module',
    title: 'ERP System Module',
    description: 'Custom modules for inventory, HR, and finance workflows.',
    impact: 'Streamlined operations and reduced manual data entry across departments.',
    features: ['Workflow automation', 'Reporting', 'Multi-tenant', 'Audit logs'],
    tech: ['Python', 'PostgreSQL', 'React', 'Celery'],
    link: '#',
    repo: '#',
    image: undefined,
    stats: [
      { label: 'Modules', value: 5 },
      { label: 'Users', value: '200+' },
    ],
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'KPI and time-series dashboards for program monitoring.',
    impact: 'Improved decision-making with live metrics and frequency analysis.',
    features: ['ApexCharts', 'Time series', 'Frequency distribution', 'Export to PDF'],
    tech: ['React', 'ApexCharts', 'FastAPI', 'PostgreSQL'],
    link: '#',
    repo: '#',
    image: undefined,
    stats: [
      { label: 'Dashboards', value: 6 },
      { label: 'KPIs', value: '30+' },
    ],
  },
]
