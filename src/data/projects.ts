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
  images?: string[]
  stats?: { label: string; value: string | number }[]
}

// Import project images
import meal1 from '@/assets/projects/mealSystem/1.png'
import meal2 from '@/assets/projects/mealSystem/2.png'
import meal3 from '@/assets/projects/mealSystem/3.png'
import meal4 from '@/assets/projects/mealSystem/4.png'

import tailor1 from '@/assets/projects/tailorSystem/1.png'
import tailor2 from '@/assets/projects/tailorSystem/2.png'
import tailor3 from '@/assets/projects/tailorSystem/3.png'
import tailor4 from '@/assets/projects/tailorSystem/4.png'

export const projects: Project[] = [
  {
    id: 'meal-monitoring',
    title: 'MEAL Monitoring System',
    description:
      'Real-time survey monitoring platform for field data collection and impact tracking.',
    impact: 'Enabled real-time oversight of 50+ field surveys and faster reporting cycles.',
    features: ['Kobo Integration', 'Real-time dashboards', 'GPS Mapping', 'Role-based access'],
    tech: ['FastAPI', 'React', 'Kobo', 'ApexCharts'],
    images: [meal1, meal2, meal3, meal4],
    stats: [
      { label: 'Submissions', value: '10k+' },
      { label: 'Dashboards', value: 12 },
      { label: 'Maps', value: 8 },
      { label: 'Users', value: '50+' },
    ],
  },
  {
    id: 'npfx-market',
    title: 'NPFX Market Financial System',
    description:
      'A comprehensive financial market system with real-time trading entries and account management.',
    impact: 'Streamlined financial operations and automated trading workflows with high precision.',
    features: [
      'Employee registration',
      'Expense & Loan Management',
      'Trading entries',
      '2-step verification',
    ],
    tech: ['React', 'TypeScript', '.NET 8', 'SQL Server'],
    link: 'https://npfx-market.com',
    stats: [
      { label: 'Technology', value: '.NET 8' },
      { label: 'Frontend', value: 'React' },
    ],
  },
  {
    id: 'hrpmis',
    title: 'HRPMIS',
    description:
      'Human Resources & Plan Management Information System for comprehensive employee lifecycle management.',
    impact:
      'Digitized HR processes for large organizations, including biometric attendance and plan management.',
    features: [
      'Employee Contract Management',
      'Biometric Attendance',
      'Organization Unit Management',
      'Localization',
    ],
    tech: ['ASP.NET Core MVC 5', 'SQL Server', 'C#'],
    stats: [
      { label: 'Platform', value: 'ASP.NET Core' },
      { label: 'DB', value: 'SQL Server' },
    ],
  },
  {
    id: 'oii-smart-system',
    title: 'OII Smart System',
    description:
      'Document Management System with tracking, localization, and automated translation support.',
    impact: 'Improved document tracking and customer information management efficiency.',
    features: [
      'Document Tracking',
      'Translation management',
      'Customer Info Registration',
      'Localization',
    ],
    tech: ['C#', 'SQL Server', 'Desktop App'],
    stats: [
      { label: 'Type', value: 'Desktop' },
      { label: 'Language', value: 'C#' },
    ],
  },
  {
    id: 'interactech-web',
    title: 'InteracTech Web Site',
    description: 'Complete dynamic website for an IT solutions company.',
    features: ['Dynamic Content Management', 'Service Showcasing', 'Client Management'],
    tech: ['Laravel', 'PHP', 'MySQL'],
    link: 'http://www.interac.tech',
  },
  {
    id: 'saadat-clinic',
    title: 'Saadat Dental Clinic Software',
    description:
      'Management software for dental clinics covering patient records and treatment history.',
    features: ['Patient Registration', 'Treatment Assign', 'Laboratory Management'],
    tech: ['C#', 'SQL Server'],
  },
  {
    id: 'tailor-system',
    title: 'Tailor Management System',
    description:
      'Specific ERP for tailoring businesses with measurement tracking and order management.',
    features: ['Measurement Registration', 'Automatic Print Slip', 'Order Tracking'],
    tech: ['C#', 'SQL Server'],
    images: [tailor1, tailor2, tailor3, tailor4],
  },
]
