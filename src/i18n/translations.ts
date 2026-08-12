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
    featured: {
      title: string
      subtitle: string
      description: string
      tags: string[]
      liveLabel: string
      codeLabel: string
    }
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
      available: 'Disponible para roles junior en desarrollo',
    },
    currently: {
      eyebrow: 'AHORA MISMO',
      heading: 'En qué ando',
      paragraph:
        'Estoy en el último tramo de Ingeniería en Sistemas en la Universidad Fidélitas, mientras trabajo en soporte financiero en Concentrix (equipo Goldman Sachs / Apple Card). En paralelo construí y mantengo',
      linkText: "David's Bakery",
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
      heading: 'Educación y certificaciones',
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
      heading: 'Lo que he construido',
      featured: {
        title: "David's Bakery",
        subtitle: 'Sistema de gestión full-stack para pastelería',
        description:
          'Aplicación en producción para un negocio real: dos APIs en ASP.NET Core 8, base de datos SQL Server con 36 stored procedures, frontend en React + TypeScript + Vite, autenticación JWT y CI/CD con GitHub Actions.',
        tags: ['C#', 'ASP.NET Core 8', 'SQL Server', 'React', 'TypeScript', 'Azure'],
        liveLabel: 'Ver sitio en vivo',
        codeLabel: 'Ver código',
      },
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
        'Estudiante avanzado en Ingeniería de Sistemas, abierto a pasantías, trabajos part-time o posiciones junior en desarrollo backend o data.',
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
      available: 'Open to junior developer roles',
    },
    currently: {
      eyebrow: 'RIGHT NOW',
      heading: "What I'm up to",
      paragraph:
        "I'm in the final stretch of my Systems Engineering degree at Universidad Fidélitas, while working financial support at Concentrix (Goldman Sachs / Apple Card team). Alongside that I built and maintain",
      linkText: "David's Bakery",
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
      heading: 'Education & certifications',
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
      heading: "What I've built",
      featured: {
        title: "David's Bakery",
        subtitle: 'Full-stack bakery management system',
        description:
          'Production application built for a real business: two REST APIs in ASP.NET Core 8, a SQL Server database with 36 stored procedures, a React + TypeScript + Vite frontend, JWT authentication and GitHub Actions CI/CD.',
        tags: ['C#', 'ASP.NET Core 8', 'SQL Server', 'React', 'TypeScript', 'Azure'],
        liveLabel: 'View live site',
        codeLabel: 'View code',
      },
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
        'Advanced Systems Engineering student, open to internships, part-time work or junior roles in backend or data development.',
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
