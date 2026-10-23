import type { Translations } from './es'

export const en: Translations = {
  nav: {
    summary: 'Summary',
    achievements: 'Achievements',
    experience: 'Experience',
    projects: 'Projects',
    stack: 'Stack',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Maximiliano Albeldas',
    title: 'Head of Frontend & Mobile',
    subtitle: 'React · React Native · Kotlin · Swift · Buenos Aires, Argentina (Remote/Hybrid)',
    stats: [
      { value: '12', label: 'developers in the area' },
      { value: '12', label: 'apps in production' },
      { value: '6', label: 'countries' },
      { value: '100+', label: 'production releases in 2 years' },
    ],
    contact: {
      email: 'maximilianoalbeldas@gmail.com',
      phone: '+54 9 11 6013-2068',
      linkedin: 'linkedin.com/in/maximiliano-albeldas',
      linkedinUrl: 'https://linkedin.com/in/maximiliano-albeldas',
    },
    cta: 'Learn more',
  },
  summary: {
    heading: 'Summary',
    paragraphs: [
      'Head of Frontend & Mobile with 5+ years in web and mobile development and 3+ years leading teams. I lead the Web and Mobile area at IT Rock, with 3 tech leads and 12 developers, combining team leadership with direct technical involvement in development.',
      'I specialize in native Android and iOS apps, mobile payments, CI/CD and AI-assisted development. I am technically responsible for 12 production apps across 6 countries and own end-to-end delivery with the CTO, clients, product, design and backend.',
      'I started in web development and grew into native mobile, so I can move between React, React Native, Kotlin and Swift and pick the right tool for each product. Before tech, I spent 8 years in sales and customer service, and that experience still shapes how I work with clients and teams.',
    ],
    highlights: [
      '3 tech leads · 12 web and mobile developers',
      '12 production apps · 6 Android + 6 iOS across 6 countries',
      '100+ production releases in 2 years · ~4 weekly QA builds',
      'CI/CD with GitHub Actions, fastlane and Docker',
    ],
  },
  achievements: {
    heading: 'Key achievements',
    items: [
      {
        metric: '4 → 12',
        title: 'Growth without losing pace',
        text: 'Sustained delivery while the portfolio grew from 4 to 12 projects and from 28 to 44 people, with technical ownership of 12 production apps.',
      },
      {
        metric: '2 → 1',
        title: 'Product unification',
        text: 'Led the merge of a two-country payments app into a single Android/iOS product with per-country configuration.',
      },
      {
        metric: '100+',
        title: 'Continuous delivery',
        text: 'Lead continuous delivery for a payments app in 6 countries: about 4 weekly QA builds and 100+ production releases over 2 years.',
      },
      {
        metric: 'Payments',
        title: 'A more reliable payment flow',
        text: 'Strengthened the stability and reliability of the Android and iOS payment flow, including the integration of fraud-prevention solutions.',
      },
      {
        metric: 'AI',
        title: 'AI-assisted development',
        text: 'Implemented an AI-assisted development model with specs, a technical decision log and per-deliverable audits, adopted as the standard workflow for the area.',
      },
      {
        metric: 'CI/CD',
        title: 'Quality as a process',
        text: 'Drove Android continuous deployment with GitHub Actions, Docker-based continuous integration and automated end-to-end testing.',
      },
    ],
  },
  experience: {
    heading: 'Experience',
    items: [
      {
        role: 'Head of Frontend (Web & Mobile)',
        company: 'IT Rock',
        period: 'Mar 2025 – Present',
        bullets: [
          'Lead 3 tech leads and, through them, 12 web and mobile developers.',
          'Set architecture, quality and performance guidelines and oversee code review processes.',
          "Manage the area's delivery: estimates, planning, releases and coordination with the CTO, product, design and backend.",
          'Support team growth through mentoring, career plans, performance reviews and technical interviews.',
          'Stay directly involved in critical projects, especially the native Android and iOS apps.',
          'Lead continuous delivery for a payments app in 6 countries: about 4 weekly QA builds and 100+ production releases over 2 years.',
          "Designed the AI-assisted development model the area uses today, from specs to per-deliverable audits.",
        ],
      },
      {
        role: 'Frontend Technical Lead (Web & Mobile)',
        company: 'IT Rock',
        period: 'Jul 2023 – Mar 2025',
        bullets: [
          'Provided technical support to Web and Mobile teams: unblocking work, defining tasks and aligning best practices.',
          'Drove development standards and improvements to code review processes and deliverable organization.',
          'Implemented Android continuous deployment with GitHub Actions and Docker-based continuous integration.',
          'Integrated fraud-prevention solutions into the Android and iOS payment flow.',
          'Organized internal technical workshops for the team.',
        ],
      },
      {
        role: 'Frontend Developer (Web & Mobile)',
        company: 'IT Rock',
        period: 'Apr 2021 – Jul 2023',
        bullets: [
          'Built web and mobile features for production products: integrations, notifications and payment flows.',
          'Grew from web development into native Android and iOS.',
        ],
      },
    ],
  },
  projects: {
    heading: 'Projects',
    featuredLabel: 'Featured',
    items: [
      {
        name: 'Puma Pris',
        client: 'Puma Energy',
        subtitle: 'Multinational ecosystem · 12 production apps across 6 countries',
        role: 'Technical leadership and frontend coordination',
        bullets: [
          'Payments app with QR and cards, a loyalty program and fraud prevention.',
          '6 Android and 6 iOS production apps, with releases coordinated per country.',
          'Merging 2 countries into a single Android/iOS product with per-country configuration (in progress).',
          'Release management, incident support, observability and Android/iOS platform updates.',
          "Coordination with the client's backend: integrations and dependency resolution.",
        ],
        tags: ['Kotlin', 'Jetpack Compose', 'Swift', 'Payments', 'CI/CD', 'Multinational'],
        featured: false,
      },
      {
        name: 'Welly GO',
        client: '',
        subtitle: 'Multi-component platform · Web + Mobile + Backend',
        role: 'Technical leadership / delivery coordination',
        bullets: [
          '5-component platform: landing page (Next.js), mobile app (Angular + Ionic/Capacitor), web admin (Vue), back office (React) and backend (NestJS).',
          'Client follow-up, technical definition, team coordination and releases.',
          'Shared architecture and quality criteria so 5 different stacks ship as a single product.',
        ],
        tags: ['Next.js', 'Vue', 'React', 'Angular', 'Ionic', 'NestJS'],
        featured: false,
      },
      {
        name: 'AI-assisted development',
        client: '',
        subtitle: 'Full project lifecycle workflow · Internal project',
        role: 'Design and implementation',
        bullets: [
          'Standardizes the project lifecycle with AI: discovery, specs, backlog, task breakdown and supervised execution.',
          'A technical decision log and per-deliverable audits, so every step is documented and reviewed.',
          'Two separate flows: new projects and maintenance of existing systems.',
          'Cuts technical documentation time and gives the whole team a reproducible standard.',
          'Adopted as the standard workflow for the area.',
        ],
        tags: ['AI', 'Process Design', 'Methodology', 'Documentation'],
        featured: true,
      },
    ],
  },
  approach: {
    heading: 'How I work',
    items: [
      {
        title: 'Leading without leaving the code',
        text: 'I combine team leadership with hands-on technical work: I review architecture, unblock problems and keep coding on critical projects.',
      },
      {
        title: 'Quality built into the flow',
        text: 'CI/CD, automated testing and code review are part of the process from day one, not a final stage.',
      },
      {
        title: 'Predictable delivery',
        text: 'Estimates, planning and frequent releases, coordinated with product, design, backend and the client.',
      },
      {
        title: 'AI with oversight',
        text: 'I use AI across the whole cycle, from specs to audits, with clear criteria and human review on every deliverable.',
      },
      {
        title: 'Growing the team',
        text: 'Mentoring, career plans, performance reviews and technical interviews, plus internal workshops to share knowledge.',
      },
      {
        title: 'Web and native mobile',
        text: 'I move between React, React Native, Kotlin and Swift, which lets me pick the right technology for each product.',
      },
    ],
  },
  stack: {
    heading: 'Stack',
    categories: [
      {
        name: 'Web',
        items: ['React', 'Next.js', 'Vue', 'Angular', 'TypeScript', 'Legacy maintenance'],
      },
      {
        name: 'Mobile',
        items: ['Android (Kotlin/Java)', 'Jetpack Compose', 'iOS (Swift)', 'React Native', 'Ionic + Capacitor', 'Firebase'],
      },
      {
        name: 'Tools',
        items: ['GitHub Actions', 'Jenkins', 'fastlane', 'Docker', 'Appium', 'WebdriverIO', 'Jira / Scrum', 'Play Console', 'App Store Connect', 'API / Microservices', 'AI-assisted development'],
      },
    ],
  },
  education: {
    heading: 'Education & Languages',
    courses: [
      { institution: 'Digital House', degree: 'Full Stack Web Development · Oct 2020 – Apr 2021' },
      { institution: 'Coderhouse', degree: 'React.js · May – Jul 2021' },
    ],
    previous: 'Previous experience: 8 years in sales and customer service (2012 – 2021).',
    languagesLabel: 'Languages',
    languages: [
      { lang: 'Spanish', level: 'Native' },
      { lang: 'English', level: 'Upper-intermediate (B2, EF SET 53/100)' },
    ],
  },
  footer: {
    tagline: 'Head of Frontend & Mobile',
    location: 'Buenos Aires, Argentina',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    linkedinLabel: 'LinkedIn',
    copyright: '© 2026 Maximiliano Albeldas',
    madeWith: 'Built with Next.js + Tailwind · Deployed on Vercel',
  },
}
