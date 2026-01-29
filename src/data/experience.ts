export type Experience = {
  year: string
  role: string
  company: string
  location: string
  description?: string
  responsibilities: string[]
}

export const experience: Experience[] = [
  {
    year: '2022-08-27 – Present',
    role: 'Senior Software Developer',
    company: 'Ministry of Energy & Water',
    location: 'Kabul, Afghanistan',
    responsibilities: [
      'Development of Databases for Ministry Energy Water',
      'Development of web site',
      'Daily backup of server database and maintenance',
      'Training of database to new and old employees',
      'Adhoc Report Sql server',
      'Development of Complete ERP System with React TypeScript interface',
      'System architecture design for scalable applications',
      'Implementation of security protocols and encryption for sensitive data',
      'Collaboration with cross-functional teams',
      'Code review and mentoring junior developers',
      'Automating deployment pipelines and CI processes',
    ],
  },
  {
    year: '2021-03-01 – 2022-08-20',
    role: 'Web Application Developer',
    company: 'Ghalib University',
    location: 'Kabul, Afghanistan',
    description:
      'Ghalib University is a leading Private Higher Education Institute known for academic excellence.',
    responsibilities: [
      'Development of Databases for University',
      'Development of web site',
      'Daily backup of server database and maintenance',
      'Training of database to employees and teachers',
      'Adhoc Report Sql server',
      'Development of Complete HRMIS System',
      'Development of Student portal in React',
    ],
  },
  {
    year: '2020-01-05 – 2021-01-01',
    role: 'Graphic Designer & Web Developer',
    company: 'Kabul Packages Company',
    location: 'Kabul, Afghanistan',
    description: 'Leading manufacturer of corrugated packaging products in Afghanistan.',
    responsibilities: [
      'Designing based on customer requests and editing designs',
      'Daily Report to Controller',
      'Development of Kabul Packages Company Website',
      'Maintenance of Website',
    ],
  },
  {
    year: '2015-05-01 – 2020-01-01',
    role: 'Software Engineer',
    company: 'InteracTech Solutions',
    location: 'Kabul, Afghanistan',
    description: 'A leading IT solutions company providing End to End IT solutions.',
    responsibilities: [
      'Development of client’s projects and requirement gathering',
      'Implementation of various technological solutions',
      'Development Website & MIS',
      'Creation, implementation and management of Desktop Apps',
      'Administration and maintenance of website',
      'Data entry management and crosschecking to avoid gaps',
      'Training of database to all users',
    ],
  },
  {
    year: '2015 – Present',
    role: 'Full Stack Developer (Freelance)',
    company: 'Self-Employed / Contracted Projects',
    location: 'Remote / Kabul, Afghanistan',
    description:
      'Providing end-to-end software solutions for various business sectors through contracted projects.',
    responsibilities: [
      'Development of Tailor Management Systems for local businesses',
      'Design and development of custom professional websites',
      'Implementation of Silver Shop Management Systems',
      'Development of custom Human Resource (HR) Systems',
      'Creation of Point of Sale (POS) systems for Supermarkets and Pharmacies',
      'Maintenance and support for long-term client projects',
    ],
  },
]
