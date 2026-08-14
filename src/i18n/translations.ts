export type Language = 'es' | 'en'

export interface EducationItem {
  title: string
  period: string
  description: string
}

export interface Certification {
  title: string
  year: string
}

export interface OtherProjectItem {
  title: string
  description: string
}

export interface ProjectCard {
  /** Matches a preview renderer in Portfolio.tsx */
  id: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
}

export interface StackItem {
  name: string
  category: string
}

export interface Translation {
  nav: {
    home: string
    currently: string
    work: string
    contact: string
  }
  hero: {
    eyebrow: string
    name: string
    role: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    available: string
  }
  currently: {
    eyebrow: string
    heading: string
    paragraph: string
    linkText: string
    paragraphEnd: string
  }
  capabilities: {
    eyebrow: string
    heading: string
    categories: string[]
  }
  education: {
    eyebrow: string
    heading: string
    items: EducationItem[]
    certifications: Certification[]
  }
  projects: {
    eyebrow: string
    heading: string
    subtitle: string
    tabs: { projects: string; certificates: string; stack: string }
    items: ProjectCard[]
    stack: StackItem[]
    liveLabel: string
    codeLabel: string
    noLinkLabel: string
    otherHeading: string
    otherItems: OtherProjectItem[]
  }
  contact: {
    eyebrow: string
    heading: string
    description: string
    availability: string
    location: string
    formName: string
    formEmail: string
    formMessage: string
    formPlaceholderName: string
    formPlaceholderEmail: string
    formPlaceholderMessage: string
    formSubmit: string
    formSent: string
  }
  footer: {
    builtWith: string
    rights: string
  }
}

export const translations: Record<Language, Translation> = {
  es: {
    nav: {
      home: 'Inicio',
      currently: 'Ahora',
      work: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'INGENIERÍA EN SISTEMAS · FULL-STACK DEVELOPER',
      name: 'Sebastián González',
      role: 'Construyo software real que resuelve problemas reales.',
      description:
        'Desarrollador full-stack enfocado en C# (.NET), React/TypeScript e ingeniería de datos. Construyo APIs, bases de datos e interfaces bajo arquitectura limpia, y las llevo a producción en la nube.',
      ctaPrimary: 'Ver lo que estoy construyendo',
      ctaSecondary: 'Hablemos',
      available: 'Abierto a oportunidades en desarrollo de software',
    },
    currently: {
      eyebrow: 'AHORA MISMO',
      heading: 'En qué ando',
      paragraph:
        'Estoy en el último tramo de Ingeniería en Sistemas en la Universidad Fidélitas y trabajo como desarrollador independiente, llevando mis propios proyectos de punta a punta: base de datos, API, interfaz y despliegue. Así construí y mantengo',
      linkText: "David's Bakery",
      paragraphEnd:
        ', un sistema de gestión que un negocio real usa todos los días para reemplazar hojas de cálculo y cuadernos. Hoy busco sumarme a un equipo donde pueda seguir construyendo software de este tipo.',
    },
    capabilities: {
      eyebrow: 'CAPACIDADES',
      heading: 'Con qué trabajo',
      categories: [
        'Backend & APIs',
        'Frontend',
        'Bases de Datos',
        'Cloud & DevOps',
        'Ingeniería de Datos',
        'Business Intelligence',
      ],
    },
    education: {
      eyebrow: 'FORMACIÓN',
      heading: 'Educación',
      items: [
        {
          title: 'Universidad Fidélitas',
          period: '2023 — Presente',
          description: 'Bachillerato en Ingeniería en Sistemas',
        },
        {
          title: 'COOPECOCEIC',
          period: '2018 — 2022',
          description: 'Bachillerato de Educación Diversificada',
        },
      ],
      certifications: [
        { title: 'Cisco CCNA', year: '2024' },
        { title: 'BELT English C1', year: '2026' },
        { title: 'Google AI Essentials', year: '2026' },
        { title: 'IBM Python for Data Science, AI & Development', year: '2026' },
      ],
    },
    projects: {
      eyebrow: 'PROYECTOS',
      heading: 'Proyectos',
      subtitle: 'Un recorrido por lo que he construido, mis certificaciones y las tecnologías que uso.',
      tabs: { projects: 'Proyectos', certificates: 'Certificaciones', stack: 'Stack técnico' },
      items: [
        {
          id: 'bakery',
          title: "David's Bakery",
          description:
            'Sistema de gestión full-stack en producción para una pastelería real: dos APIs en ASP.NET Core 8, base de datos SQL Server con 36 stored procedures, frontend en React + TypeScript + Vite, autenticación JWT y CI/CD con GitHub Actions.',
          tags: ['C#', 'ASP.NET Core 8', 'SQL Server', 'React', 'TypeScript', 'Azure'],
          liveUrl: 'https://www.davisbakery.store',
          repoUrl: 'https://github.com/Sebasgonzalez26/david-s-bakery-',
        },
        {
          id: 'portfolio',
          title: 'Portafolio personal',
          description:
            'Este mismo sitio: una sola página en React + TypeScript con Vite, animaciones en Framer Motion, sistema de idiomas propio y despliegue continuo en Vercel.',
          tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
          repoUrl: 'https://github.com/Sebasgonzalez26/portfolio',
        },
      ],
      stack: [
        { name: 'C# / .NET', category: 'Backend' },
        { name: 'ASP.NET Core', category: 'Backend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Python', category: 'Backend' },
        { name: 'React', category: 'Frontend' },
        { name: 'TypeScript', category: 'Frontend' },
        { name: 'Tailwind CSS', category: 'Frontend' },
        { name: 'SQL Server', category: 'Bases de datos' },
        { name: 'MongoDB', category: 'Bases de datos' },
        { name: 'Azure', category: 'Cloud & DevOps' },
        { name: 'Git / GitHub', category: 'Cloud & DevOps' },
        { name: 'Pentaho ETL', category: 'Datos & BI' },
        { name: 'Power BI', category: 'Datos & BI' },
        { name: 'Tableau', category: 'Datos & BI' },
      ],
      liveLabel: 'Ver en vivo',
      codeLabel: 'Ver código',
      noLinkLabel: 'Repositorio privado',
      otherHeading: 'Otras cosas que he construido',
      otherItems: [
        {
          title: 'Backends en C# con Clean Architecture',
          description:
            'APIs siguiendo Controller → Flujo → DA → Abstracciones, con autenticación y control de acceso por roles.',
        },
        {
          title: 'APIs en Node.js y Python',
          description: 'Servicios REST integrados con SQL Server y MongoDB, con autenticación JWT.',
        },
        {
          title: 'Data Warehouse con Pentaho',
          description: 'Diseño de modelo estrella y procesos ETL para consolidar datos de múltiples fuentes.',
        },
        {
          title: 'Dashboards en Power BI y Tableau',
          description: 'Paneles con KPIs y reportes ejecutivos conectados a bases de datos SQL.',
        },
      ],
    },
    contact: {
      eyebrow: 'CONTACTO',
      heading: 'Hablemos',
      description: '¿Tenés una oportunidad, un proyecto o simplemente querés charlar? Estoy disponible.',
      availability:
        'Estudiante avanzado de Ingeniería en Sistemas y desarrollador independiente. Busco sumarme a un equipo de desarrollo, ya sea en backend, frontend o data.',
      location: 'San Antonio de Coronado, Costa Rica',
      formName: 'Nombre',
      formEmail: 'Email',
      formMessage: 'Mensaje',
      formPlaceholderName: 'Tu nombre',
      formPlaceholderEmail: 'tu@email.com',
      formPlaceholderMessage: 'Contame sobre la oportunidad...',
      formSubmit: 'Enviar mensaje',
      formSent: '¡Mensaje enviado!',
    },
    footer: {
      builtWith: 'Construido con React, TypeScript y Tailwind CSS',
      rights: 'Todos los derechos reservados',
    },
  },
  en: {
    nav: {
      home: 'Home',
      currently: 'Now',
      work: 'Work',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'SYSTEMS ENGINEERING · FULL-STACK DEVELOPER',
      name: 'Sebastián González',
      role: 'I build real software that solves real problems.',
      description:
        'Full-stack developer focused on C# (.NET), React/TypeScript and data engineering. I build APIs, databases and interfaces under clean architecture, and ship them to production in the cloud.',
      ctaPrimary: "See what I'm building",
      ctaSecondary: "Let's talk",
      available: 'Open to software development opportunities',
    },
    currently: {
      eyebrow: 'RIGHT NOW',
      heading: "What I'm up to",
      paragraph:
        "I'm in the final stretch of my Systems Engineering degree at Universidad Fidélitas and work as an independent developer, taking my own projects end to end: database, API, interface and deployment. That's how I built and maintain",
      linkText: "David's Bakery",
      paragraphEnd:
        ", a management system a real business uses every day to replace spreadsheets and notebooks. I'm now looking to join a team where I can keep building software like this.",
    },
    capabilities: {
      eyebrow: 'CAPABILITIES',
      heading: 'What I work with',
      categories: [
        'Backend & APIs',
        'Frontend',
        'Databases',
        'Cloud & DevOps',
        'Data Engineering',
        'Business Intelligence',
      ],
    },
    education: {
      eyebrow: 'EDUCATION',
      heading: 'Education',
      items: [
        {
          title: 'Universidad Fidélitas',
          period: '2023 — Present',
          description: "Bachelor's Degree in Systems Engineering",
        },
        {
          title: 'COOPECOCEIC',
          period: '2018 — 2022',
          description: 'High School Diploma',
        },
      ],
      certifications: [
        { title: 'Cisco CCNA', year: '2024' },
        { title: 'BELT English C1', year: '2026' },
        { title: 'Google AI Essentials', year: '2026' },
        { title: 'IBM Python for Data Science, AI & Development', year: '2026' },
      ],
    },
    projects: {
      eyebrow: 'PROJECTS',
      heading: 'Projects',
      subtitle: "A walk through what I've built, my certifications and the tools I work with.",
      tabs: { projects: 'Projects', certificates: 'Certificates', stack: 'Tech stack' },
      items: [
        {
          id: 'bakery',
          title: "David's Bakery",
          description:
            'Full-stack management system running in production for a real bakery: two ASP.NET Core 8 APIs, a SQL Server database with 36 stored procedures, a React + TypeScript + Vite frontend, JWT authentication and GitHub Actions CI/CD.',
          tags: ['C#', 'ASP.NET Core 8', 'SQL Server', 'React', 'TypeScript', 'Azure'],
          liveUrl: 'https://www.davisbakery.store',
          repoUrl: 'https://github.com/Sebasgonzalez26/david-s-bakery-',
        },
        {
          id: 'portfolio',
          title: 'Personal portfolio',
          description:
            'This very site: a single page in React + TypeScript with Vite, Framer Motion animations, a hand-rolled language system and continuous deployment on Vercel.',
          tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
          repoUrl: 'https://github.com/Sebasgonzalez26/portfolio',
        },
      ],
      stack: [
        { name: 'C# / .NET', category: 'Backend' },
        { name: 'ASP.NET Core', category: 'Backend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Python', category: 'Backend' },
        { name: 'React', category: 'Frontend' },
        { name: 'TypeScript', category: 'Frontend' },
        { name: 'Tailwind CSS', category: 'Frontend' },
        { name: 'SQL Server', category: 'Databases' },
        { name: 'MongoDB', category: 'Databases' },
        { name: 'Azure', category: 'Cloud & DevOps' },
        { name: 'Git / GitHub', category: 'Cloud & DevOps' },
        { name: 'Pentaho ETL', category: 'Data & BI' },
        { name: 'Power BI', category: 'Data & BI' },
        { name: 'Tableau', category: 'Data & BI' },
      ],
      liveLabel: 'View live',
      codeLabel: 'View code',
      noLinkLabel: 'Private repository',
      otherHeading: "Other things I've built",
      otherItems: [
        {
          title: 'C# backends with Clean Architecture',
          description:
            'APIs following Controller → Flujo → DA → Abstracciones, with role-based authentication and access control.',
        },
        {
          title: 'Node.js and Python APIs',
          description: 'REST services integrated with SQL Server and MongoDB, with JWT authentication.',
        },
        {
          title: 'Data Warehouse with Pentaho',
          description: 'Star-schema design and ETL processes to consolidate data from multiple sources.',
        },
        {
          title: 'Power BI and Tableau dashboards',
          description: 'Interactive panels with KPIs and executive reports connected to SQL databases.',
        },
      ],
    },
    contact: {
      eyebrow: 'CONTACT',
      heading: "Let's talk",
      description: 'Got an opportunity, a project, or just want to chat? I\'m available.',
      availability:
        'Advanced Systems Engineering student and independent developer. Looking to join a development team, whether in backend, frontend or data.',
      location: 'San Antonio de Coronado, Costa Rica',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      formPlaceholderName: 'Your name',
      formPlaceholderEmail: 'you@email.com',
      formPlaceholderMessage: 'Tell me about the opportunity...',
      formSubmit: 'Send message',
      formSent: 'Message sent!',
    },
    footer: {
      builtWith: 'Built with React, TypeScript & Tailwind CSS',
      rights: 'All rights reserved',
    },
  },
}
