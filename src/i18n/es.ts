export const es = {
  nav: {
    summary: 'Resumen',
    experience: 'Experiencia',
    projects: 'Proyectos',
    stack: 'Stack',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    name: 'Maximiliano Albeldas',
    title: 'Head Frontend · Team Lead Web & Mobile',
    subtitle: 'Technical Lead · Buenos Aires, Argentina (Remoto/Híbrido)',
    stats: [
      { value: '2', label: 'células lideradas' },
      { value: '12', label: 'devs coordinados' },
      { value: '12', label: 'apps en producción' },
      { value: '4–5', label: 'releases/semana a QA' },
    ],
    contact: {
      email: 'maximilianoalbeldas@gmail.com',
      phone: '+54 9 11 6013-2068',
      linkedin: 'linkedin.com/in/maximiliano-albeldas',
      linkedinUrl: 'https://linkedin.com/in/maximiliano-albeldas',
    },
    cta: 'Ver experiencia',
  },
  summary: {
    heading: 'Resumen',
    text: 'Head Frontend y líder técnico con experiencia liderando dos células (Web + Mobile). Desde julio del 2023 Referente Técnico del área y desde marzo del 2025 Head Frontend consolidado. Gestiono una estructura de 3 referentes y, junto a ellos, seguimiento de 12 desarrolladores. En proyectos nacionales como multinacionales, acompaño el delivery técnico end-to-end: arquitectura, estándares, code review, performance, coordinación con CTO y stakeholders, e integraciones con backend externo e in-company.',
    highlights: [
      '2 células (Web + Mobile) · 3 referentes · 12 devs',
      '12 apps en producción · 6 Android + 6 iOS',
      '1 release/mes a producción por país + 4–5 releases/semana a QA',
      'CI/CD con GitHub Actions (Web + Android)',
    ],
  },
  experience: {
    heading: 'Experiencia',
    items: [
      {
        role: 'Head Frontend (Web & Mobile)',
        company: 'IT Rock',
        period: 'Mar 2025 – Actualidad',
        bullets: [
          'Liderazgo del área Frontend (Web + Mobile) y definición de lineamientos técnicos.',
          'Coordinación de estructura: seguimiento directo de 3 referentes y, junto a ellos, de 12 desarrolladores.',
          'Consistencia técnica: criterios de arquitectura, calidad y performance; acompañamiento en decisiones de mayor impacto.',
          'Gestión del delivery: estimaciones, planificación, seguimiento de PRs y releases; coordinación con CTO, producto, diseño y backend.',
          'Seguimiento activo de code reviews y resolución de bloqueos técnicos/organizativos.',
          'Alta cadencia: 4–5 releases semanales a QA y al menos 1 mensual a producción por país/proyecto.',
          'Diseñé e implementé una metodología de trabajo asistida por IA para el ciclo de vida completo de proyectos: desde specs y backlog hasta la descomposición en tareas ejecutables. Adoptada como flujo estándar del área.',
        ],
      },
      {
        role: 'Referente Técnico Frontend (Web & Mobile)',
        company: 'IT Rock',
        period: 'Jul 2023 – Actualidad',
        bullets: [
          'Acompañamiento técnico a equipos Web/Mobile: resolución de bloqueos, definición de tareas y alineación de buenas prácticas.',
          'Impulso de procesos: estándares, mejoras de code review y ordenamiento de entregables.',
          'Coordinación con otras áreas para asegurar integraciones estables y entregas sostenibles.',
        ],
      },
      {
        role: 'Frontend Developer (Web) + exposición Mobile',
        company: 'IT Rock',
        period: 'Abr 2021 – Jul 2023',
        bullets: [
          'Desarrollo web y participación progresiva en iniciativas mobile (según necesidad del negocio).',
          'Colaboración en proyectos en producción con foco en estabilidad, mantenimiento y evolución de features.',
        ],
      },
    ],
  },
  projects: {
    heading: 'Proyectos',
    items: [
      {
        name: 'Puma Pris',
        client: 'Puma Energy',
        subtitle: 'Ecosistema multinacional · 12 apps en producción',
        role: 'Liderazgo técnico y coordinación Frontend',
        bullets: [
          'Liderazgo técnico de 6 apps Android + 6 apps iOS en producción.',
          'Definición técnica de features, estimaciones y seguimiento interno del equipo.',
          'Coordinación con backend externo: integraciones y resolución de dependencias.',
          'Releases y mantenimiento continuo (GitHub, despliegues, soporte de incidentes).',
        ],
        tags: ['React Native', 'Android', 'iOS', 'Multinacional'],
        featured: false,
      },
      {
        name: 'Welly GO',
        client: '',
        subtitle: 'Plataforma multi-componente · Web + Mobile + Backend',
        role: 'Liderazgo técnico / coordinación de entrega',
        bullets: [
          'Ecosistema de 5 componentes: Landing (Next.js), App mobile (Angular + Ionic-Capacitor), Admin Web (Vue), Backoffice (React) y Backend (Nest).',
          'Seguimiento con cliente, bajada técnica, coordinación del equipo y releases.',
        ],
        tags: ['Next.js', 'Vue', 'React', 'Angular', 'Ionic', 'NestJS'],
        featured: false,
      },
      {
        name: 'BigPons',
        client: '',
        subtitle: 'App de loyalty · En desarrollo',
        role: 'Liderazgo técnico y definición de stack frontend',
        bullets: [
          'Definición de features a partir de Figma y necesidades del cliente.',
          'Selección/validación de stack y lineamientos técnicos del front.',
          'Coordinación con backend, funcional y diseño para consistencia end-to-end.',
        ],
        tags: ['Mobile', 'Frontend', 'Arquitectura'],
        featured: false,
      },
      {
        name: 'Metodología AI-Driven',
        client: '',
        subtitle: 'Framework de ciclo de vida de proyectos · Proyecto interno',
        role: 'Diseño e implementación',
        bullets: [
          'Framework asistido por IA que estandariza el ciclo de vida completo de un proyecto: discovery, specs, backlog y ejecución supervisada.',
          'Dos flujos diferenciados: proyectos nuevos y mantenimiento de sistemas existentes.',
          'Reduce el tiempo de documentación técnica y establece un estándar reproducible.',
          'Adoptado como flujo de trabajo estándar del área.',
        ],
        tags: ['AI', 'Process Design', 'Metodología', 'Documentación'],
        featured: true,
      },
    ],
  },
  stack: {
    heading: 'Stack',
    categories: [
      {
        name: 'Web',
        items: ['React', 'Vue', 'Angular', 'TypeScript', 'Next.js', 'Legado'],
      },
      {
        name: 'Mobile',
        items: ['React Native', 'Android (Kotlin/Java)', 'iOS (Swift)', 'Ionic + Capacitor'],
      },
      {
        name: 'Herramientas',
        items: ['GitHub', 'GitHub Actions', 'Code Review', 'Performance', 'API / Microservicios'],
      },
    ],
  },
  initiatives: {
    heading: 'Iniciativas del área',
    groups: [
      {
        name: 'iOS',
        items: ['Migración a SPM', 'CI/CD: lint, tests, TestFlight', 'Adopción gradual de SwiftUI', 'Testing'],
      },
      {
        name: 'Web',
        items: ['Tech update + UI/UX best practices', 'Testing (Jest / Testing Library / Cypress)', 'Storybook para reutilización'],
      },
      {
        name: 'Android',
        items: ['Jetpack Compose', 'MVVM / Clean Architecture', 'Coroutines / Flow', 'Testing como estándar'],
      },
    ],
  },
  education: {
    heading: 'Educación e Idiomas',
    degree: 'Full Stack · Intensivo 8 meses',
    institution: 'Digital House',
    languagesLabel: 'Idiomas',
    languages: [
      { lang: 'Español', level: 'Nativo' },
      { lang: 'Inglés', level: 'Básico-Medio' },
    ],
  },
  footer: {
    emailLabel: 'Email',
    phoneLabel: 'Teléfono',
    linkedinLabel: 'LinkedIn',
    copyright: '© 2026 Maximiliano Albeldas',
    madeWith: 'Hecho con Next.js + Tailwind · Deployado en Vercel',
  },
}

export type Translations = typeof es
