import type { Translations } from './es'

export const en: Translations = {
  nav: {
    summary: 'Summary',
    experience: 'Experience',
    projects: 'Projects',
    stack: 'Stack',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Maximiliano Albeldas',
    title: 'Head Frontend · Team Lead Web & Mobile',
    subtitle: 'Technical Lead · Buenos Aires, Argentina (Remote/Hybrid)',
    stats: [
      { value: '2', label: 'cells led' },
      { value: '12', label: 'devs coordinated' },
      { value: '12', label: 'apps in production' },
      { value: '4–5', label: 'releases/week to QA' },
    ],
    contact: {
      email: 'maximilianoalbeldas@gmail.com',
      phone: '+54 9 11 6013-2068',
      linkedin: 'linkedin.com/in/maximiliano-albeldas',
      linkedinUrl: 'https://linkedin.com/in/maximiliano-albeldas',
    },
    cta: 'View experience',
  },
  summary: {
    heading: 'Summary',
    text: 'Frontend Head and Technical Lead with experience leading two product cells (Web + Mobile). Technical Reference for the area since July 2023 and consolidated Head Frontend since March 2025. I manage a structure of 3 tech leads and, together with them, a team of 12 developers. Across national and multinational projects, I drive end-to-end technical delivery: architecture, standards, code review, performance, coordination with the CTO and stakeholders, and integrations with external and in-company backends.',
    highlights: [
      '2 cells (Web + Mobile) · 3 tech leads · 12 devs',
      '12 apps in production · 6 Android + 6 iOS',
      '1 production release/month per country + 4–5 releases/week to QA',
      'CI/CD with GitHub Actions (Web + Android)',
    ],
  },
  experience: {
    heading: 'Experience',
    items: [
      {
        role: 'Head Frontend (Web & Mobile)',
        company: 'IT Rock',
        period: 'Mar 2025 – Present',
        bullets: [
          'Leadership of the Frontend area (Web + Mobile) and definition of technical guidelines.',
          'Structure coordination: direct management of 3 tech leads and, together with them, 12 developers.',
          'Technical consistency: architecture, quality and performance criteria; involvement in high-impact decisions.',
          'Delivery management: estimations, planning, PR and release tracking; coordination with CTO, product, design and backend.',
          'Active code review oversight and resolution of technical/organizational blockers.',
          'High-cadence operations: 4–5 weekly releases to QA and at least 1 monthly production release per country/project.',
          "Designed and implemented an AI-assisted methodology for the complete software project lifecycle: from spec generation and backlog planning to executable task decomposition. Adopted as the area's standard delivery workflow.",
        ],
      },
      {
        role: 'Technical Reference Frontend (Web & Mobile)',
        company: 'IT Rock',
        period: 'Jul 2023 – Present',
        bullets: [
          'Technical support for Web/Mobile teams: unblocking, task definition and best practices alignment.',
          'Process improvement: standards, code review quality and delivery organization.',
          'Cross-area coordination to ensure stable integrations and sustainable delivery.',
        ],
      },
      {
        role: 'Frontend Developer (Web) + Mobile exposure',
        company: 'IT Rock',
        period: 'Apr 2021 – Jul 2023',
        bullets: [
          'Web development with progressive involvement in mobile initiatives (driven by business needs).',
          'Contribution to production projects focused on stability, maintenance and feature evolution.',
        ],
      },
    ],
  },
  projects: {
    heading: 'Projects',
    items: [
      {
        name: 'Puma Pris',
        client: 'Puma Energy',
        subtitle: 'Multinational ecosystem · 12 apps in production',
        role: 'Technical Lead and Frontend coordination',
        bullets: [
          'Technical leadership of 6 Android apps + 6 iOS apps in production.',
          'Feature definition, estimations and internal team tracking.',
          'External backend coordination: integrations and dependency resolution.',
          'Release operations and continuous maintenance (GitHub, deployments, incident support).',
        ],
        tags: ['React Native', 'Android', 'iOS', 'Multinational'],
        featured: false,
      },
      {
        name: 'Welly GO',
        client: '',
        subtitle: 'Multi-component platform · Web + Mobile + Backend',
        role: 'Technical Lead / delivery coordination',
        bullets: [
          '5-component ecosystem: Landing (Next.js), mobile app (Angular + Ionic-Capacitor for Android and iOS), restaurant web admin (Vue), commercial backoffice (React) and backend (Nest).',
          'Client follow-up, technical briefing, internal team coordination and releases.',
        ],
        tags: ['Next.js', 'Vue', 'React', 'Angular', 'Ionic', 'NestJS'],
        featured: false,
      },
      {
        name: 'BigPons',
        client: '',
        subtitle: 'Loyalty app · In development',
        role: 'Technical Lead and frontend stack definition',
        bullets: [
          'Feature definition from Figma and client requirements.',
          'Stack selection/validation and frontend technical guidelines.',
          'Coordination with backend, functional and design teams for end-to-end consistency.',
        ],
        tags: ['Mobile', 'Frontend', 'Architecture'],
        featured: false,
      },
      {
        name: 'AI-Driven Methodology',
        client: '',
        subtitle: 'Project lifecycle framework · Internal project',
        role: 'Design & implementation',
        bullets: [
          'AI-assisted framework standardizing the complete software project lifecycle: discovery, specs, backlog planning, and supervised execution.',
          'Covers two workflows: new projects and maintenance of existing systems.',
          'Reduces technical documentation time and establishes a reproducible standard.',
          "Adopted as the area's standard delivery workflow.",
        ],
        tags: ['AI', 'Process Design', 'Methodology', 'Documentation'],
        featured: true,
      },
    ],
  },
  stack: {
    heading: 'Stack',
    categories: [
      {
        name: 'Web',
        items: ['React', 'Vue', 'Angular', 'TypeScript', 'Next.js', 'Legacy'],
      },
      {
        name: 'Mobile',
        items: ['React Native', 'Android (Kotlin/Java)', 'iOS (Swift)', 'Ionic + Capacitor'],
      },
      {
        name: 'Tools',
        items: ['GitHub', 'GitHub Actions', 'Code Review', 'Performance', 'API / Microservices'],
      },
    ],
  },
  initiatives: {
    heading: 'Area Initiatives',
    groups: [
      {
        name: 'iOS',
        items: ['SPM Migration', 'CI/CD: lint, tests, TestFlight', 'Gradual SwiftUI adoption', 'Testing'],
      },
      {
        name: 'Web',
        items: ['Tech update + UI/UX best practices', 'Testing (Jest / Testing Library / Cypress)', 'Storybook for reusability'],
      },
      {
        name: 'Android',
        items: ['Jetpack Compose', 'MVVM / Clean Architecture', 'Coroutines / Flow', 'Testing as standard'],
      },
    ],
  },
  education: {
    heading: 'Education & Languages',
    degree: 'Full Stack · 8-month intensive',
    institution: 'Digital House',
    languagesLabel: 'Languages',
    languages: [
      { lang: 'Spanish', level: 'Native' },
      { lang: 'English', level: 'Basic-Intermediate' },
    ],
  },
  footer: {
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    linkedinLabel: 'LinkedIn',
    copyright: '© 2026 Maximiliano Albeldas',
    madeWith: 'Built with Next.js + Tailwind · Deployed on Vercel',
  },
}
