// src/components/estudiantes.ts

export interface SocialLinks {
  linkedin: string;
  github: string;
  dribbble?: string;
  behance?: string;
  gmail?: string;
}

export interface Student {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  role: string;
  socialLinks: SocialLinks;
}

export const teamMembersData: Student[] = [
  {
    id: 1,
    imageUrl: "/images/nosotros/estudiante1.jpg",
    name: "Acuña Cisneros Cesar Alexander",
    description:
      "Desarrollador de Software y Data Engineer especializado en Python, automatización e IA. Creo soluciones inteligentes end-to-end y arquitecturas escalables, con enfoque en accesibilidad y tecnología que mejora vidas.",
    role: "Desarrollador de Software | Data Ingenieer",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/cesar-ac10/",
      github: "https://github.com/Cesar-AC",
    },
  },
  {
    id: 2,
    imageUrl: "/images/nosotros/estudiante2.png",
    name: "Amaya Jave Luigui Jampierre",
    description:
      "Apasionado por la tecnología y la optimización de procesos. Busco oportunidades para aplicar mis conocimientos académicos, aportar soluciones lógicas y crecer dentro del área de TI.",
    role: "Soporte TI | Help Desk | Asistente de Sistemas",
    socialLinks: {
      linkedin: "www.linkedin.com/in/ljaj",
      github: "https://github.com/LuiGui08",
    },
  },
  {
    id: 3,
    imageUrl: "/images/nosotros/estudiante3.jpg",
    name: "Arqueros Lezama Eriks Yefersson",
    description:
      "Enfocado en ciberseguridad, desarrollo de software y proyectos tecnológicos con impacto social. Apasionado por la innovación, el análisis y la mejora continua.",
    role: "Desarrollador Full-Stack | UIX | Data Ingenieer",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/eriks-arqueros-lezama-164610268/",
      github: "https://github.com/EriksHudson",
    },
  },
  {
    id: 4,
    imageUrl: "/images/nosotros/estudiante4.png",
    name: "Avila Rebaza Sergio Fernando",
    description:
      "Desarrollador web full-stack especializado en backend, arquitectura escalable y APIs. Sólidos conocimientos en IA aplicada para automatizar procesos y potenciar soluciones eficientes, seguras y orientadas a resultados.",
    role:
      "Desarrollador Full-Stack | Backend | Arquitecturas Escalables | Rest APIs | IA | SQL",
    socialLinks: {
      linkedin: "www.linkedin.com/in/savilar",
      github: "https://github.com/saviladev",
    },
  },
  {
    id: 5,
    imageUrl: "/images/nosotros/estudiante5.jpg",
    name: "Bocanegra Chistama Bruno Samir",
    description:
      "Ingeniero Full Stack apasionado por la convergencia entre desarrollo web y nuevas tecnologías. Combino una sólida arquitectura backend con IA aplicada para optimizar procesos, reducir tiempos de desarrollo y crear soluciones digitales inteligentes y orientadas al futuro.",
    role: "Desarrollador Full Stack | APIs | IA | Mobile Developer",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/bruno-samir-bocanegra-chistama-520ab428a/",
      github: "https://github.com/bocanegrabruno11",
      gmail: "bruno.sbc0211@gmail.com",
    },
  },
  {
    id: 6,
    imageUrl: "/images/nosotros/estudiante6.jpg",
    name: "Campos Gamarra Alejandro Roman",
    description:
      "Desarrollador full-stack y mobile con experiencia en soluciones end to end. Especializado en automatización con IA, machine learning, deep learning, business intelligence e integración de dispositivos y plataformas IoT.",
    role:
      "Full-Stack & Mobile Developer | IA/ML/DL | Business Intelligence | IoT | Ponente",
    socialLinks: {
      linkedin:
        "linkedin.com/in/alejandro-campos-gamarra-74a362219",
      github: "https://github.com/HASH-ITSUKAR",
      gmail: " hiraga.chevalier@gmail.com",
    },
  },
  {
    id: 8,
    imageUrl: "/images/nosotros/estudiante8.png",
    name: "Cruz Ulloa Leydi Marisol",
    description:
      "Estudiante de Ingeniería de Sistemas en la UNT. Me caracterizo por mi liderazgo, networking y adaptación a entornos diversos. Deseo especializarme en análisis de datos e inteligencia artificial para impulsar soluciones innovadoras.",
    role:
      "Data Analyst | Data Engineer | Power BI | Tableau | Python | SQL | Excel",
    socialLinks: {
      linkedin:
        "www.linkedin.com/in/marisol-cruz-ulloa-1734442a2",
      github: "https://github.com/marisol-source",
    },
  },
  {
    id: 9,
    imageUrl: "/images/nosotros/estudiante9.jpg",
    name: "Diaz Tomas Marcos Ivan",
    description:
      "Estudiante de ingeniería de sistemas de X ciclo con experiencia en la arquitectura y desarrollo de software Backend, especializado en la implementación de soluciones escalables y de alto rendimiento. Experiencia en proyectos universitarios aplicados a CRM, Data Warehousing y microservicios, con conocimiento en gestión de proyectos tecnológicos y adopción de metodologías ágiles.",
    role:
      "Desarrollador Backend | APIS | SQL | Data Science | Python | N8N",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/marcos-ivan-diaz-tomas-9262682a7/",
      github: "https://github.com/Maquito04",
      gmail: "marcosivandiaztomas@gmail.com",
    },
  },
  {
    id: 10,
    imageUrl: "/images/nosotros/estudiante10.jpg",
    name: "Espinoza Cerdán Edwin Giancarlo",
    description:
      "Estudiante de Ingeniería de Sistemas y profesional en Ingeniería Industrial, apasionado por la tecnología y la IA. Me especializo en seguridad de la información, gestión de redes y soporte técnico.",
    role: "Gestión de Redes | Switching | CCTV | VoIP",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/giancarlo-espinoza-6690471a6/",
      github: "https://github.com/giancarloespinoza",
    },
  },
  {
    id: 12,
    imageUrl: "/images/nosotros/estudiante12.png",
    name: "Guevara Saldaña Rodrigo Alonso",
    description:
      "Estudiante de Ingeniería de Sistemas con interés en ciberseguridad, ethical hacking y seguridad de la información, enfocado en aprender técnicas de análisis y explotación de vulnerabilidades y el fortalecimiento de sistemas informáticos.",
    role: "Ciberseguridad | Ethical Hacking",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/rodrigo-guevara-saldana/",
      github: "https://github.com/d4sda123",
    },
  },
  {
    id: 13,
    imageUrl: "/images/nosotros/estudiante13.jpg",
    name: "Gutierrez Sanchez Frank Jhosep",
    description:
      "Estudiante de décimo ciclo de Ingeniería de Sistemas, apasionado por la tecnología y el desarrollo de software full-stack. Cuento con experiencia en proyectos reales junto a NEON HOUSE LED y SEDALIB.",
    role: "Desarrollo de Sofware Full-Stack",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/frank-sanchez-dev19/",
      github: "https://github.com/Frank-Dev19",
    },
  },
  {
    id: 14,
    imageUrl: "/images/nosotros/estudiante14.png",
    name: "Huaman Obregon Jose Maria",
    description:
      "Desarrollador de Sistemas enfocado en aplicar inteligencia artificial para automatizar creación de contenido, analizar métricas digitales y apoyar procesos de venta a través de redes sociales y plataformas web.",
    role:
      "Inteligencia artificial aplicada | Desarrollo de sistemas orientados a marketing digital",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/jos%C3%A9-huaman-a85aa1375",
      github: "https://github.com/JMHO-01",
    },
  },
  {
    id: 15,
    imageUrl: "/images/nosotros/estudiante15.png",
    name: "Huamanchumo Gordillo Alexander Saul",
    description:
      "Desarrollador Full Stack enfocado en soluciones financieras distribuidas, optimización de procesos críticos, alto rendimiento y diseño de servicios robustos con tecnologías modernas como Java, Spring Boot, microservicios, Docker y bases de datos relacionales.",
    role: "Full Stack Developer",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/alexhuamanchumo/",
      github: "https://github.com/alexander2604gg",
    },
  },
  {
    id: 16,
    imageUrl: "/images/nosotros/estudiante16.jpg",
    name: "Huamanchumo Trujillo Francisco Gerardo",
    description:
      "Estudiante de decimo ciclo interesado y enfocado en desarrollador de software e investigador en inteligencia artificial. Experiencia en deep learning, visión por computadora, sistemas web y auditoría informática. asi mismo en soluciones académicas, científicas y empresariales.",
    role:
      "Full Stack | IA | Deep Learning | Data Science | IoT | Ponente",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/francisco-gerardo-huamanchumo-trujillo",
      github: "https://github.com/Francisco1610",
    },
  },
  {
    id: 17,
    imageUrl: "/images/nosotros/estudiante17.jpg",
    name: "Lecca Rengifo Maria Alexandra",
    description:
      "Diseñadora web y mobile apasionada por el UX/UI. Mezclo teoría del diseño, sistemas visuales y experiencia real para crear productos atractivos, usables y con un toque de identidad propia.",
    role: "UX/UI | QA Engineer | Web & Mobile Design",
    socialLinks: {
      linkedin: "www.linkedin.com/in/allylecca",
      github: "-",
      dribbble: "https://dribbble.com/allylecca",
      behance: "https://www.behance.net/allylecca",
    },
  },
  {
    id: 19,
    imageUrl: "/images/nosotros/estudiante19.png",
    name: "Ordoñez Reyes Abraham Benjamin",
    description:
      "Desarrollador Full Stack con enfoque en frontend y backend. Experto en React, Laravel y gestión de bases de datos (SQL Server, MySQL, PostgreSQL). Cuento con experiencia sólida en desarrollo de aplicaciones móviles.",
    role:
      "Full-Stack Developer | Frontend & Backend | DB | Mobile Developer",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/abraham-ordo%C3%B1ez/",
      github: "https://github.com/Abrancheto22",
    },
  },
  {
    id: 21,
    imageUrl: "/images/nosotros/estudiante21.jpg",
    name: "Querevalu Galan Roger Alejandro",
    description: "",
    role: "Desarrollador Fronted",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/roger-querevalu-galan/",
      github: "https://github.com/RogerAlejandro/",
    },
  },
  {
    id: 23,
    imageUrl: "/images/nosotros/estudiante23.png",
    name: "Quispe Sanchez Edward Steven",
    description:
      "Desarollador Fronted Developer con experiencia en plataformas Web y Móvil. Materializo interfaces dinamicas con manejo de frameworks optimos y legilbes para el buen consumo del usuario. De igual manera cuento con manejo de herramientas para creación de proyectos de Machine Learning.",
    role:
      "Desarrollador Fronted Dev | MVVM | Android Dev | ML",
    socialLinks: {
      linkedin: "www.linkedin.com/in/edwardqs04",
      github: "https://github.com/edwardqs",
      gmail: "esquispes01@gmail.com",
    },
  },
  {
    id: 24,
    imageUrl: "/images/nosotros/estudiante24.jpg",
    name: "Rengifo Gallegos Sofia Ariana",
    description:
      "Desarrolladora web full stack con experiencia en desarrollo front-end, back-end y diseño UI/UX. Construyo interfaces modernas y sistemas sólidos, integrando diseño y lógica para crear soluciones funcionales y atractivas.",
    role: "Full Stack Web Developer | UX/UI Designer",
    socialLinks: {
      linkedin:
        "www.linkedin.com/in/sofía-rengifo-940aa0256",
      github: "https://github.com/SofiaRengifo",
    },
  },
  {
    id: 26,
    imageUrl: "/images/nosotros/estudiante26.jpg",
    name: "Rodriguez Asto Joan Antony",
    description:
      "Desarrollador web full stack con Angular 20 y Django 5.2.",
    role: "Desarrollador Full Stack",
    socialLinks: {
      linkedin: "www.linkedin.com/in/joan-rodriguez-asto",
      github: "https://github.com/Ltm2375",
    },
  },
  {
    id: 27,
    imageUrl: "/images/nosotros/estudiante27.png",
    name: "Rodriguez Leon Diego Jair",
    description:
      "Soy estudiante de 10.º ciclo de Ingeniería de Sistemas en la UNT. Soy responsable, proactivo, aprendo rápido y busco aplicar mis conocimientos en PHP, SQL y Python de manera profesional.",
    role:
      "Desarrollador de Software | Full Stack Junior | SQL server",
    socialLinks: {
      linkedin:
        "www.linkedin.com/in/diego-jair-rodriguez-leon-b258a5317",
      github: "https://github.com/diegojair17032",
    },
  },
  {
    id: 28,
    imageUrl: "/images/nosotros/estudiante28.png",
    name: "Rodriguez Ponce Kevin Jose",
    description:
      "Estudiante de Ingeniería de Sistemas en la UNT. Desarrollador Full Stack Jr y DevOps Jr con experiencia en SQL, despliegue de aplicaciones y automatización de aplicaciones.",
    role:
      "Desarrollador de Software | Full Stack Jr | SQL | Devops Jr",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/kevin-rodriguez-46963033b/",
      github: "https://github.com/kevinnRod",
    },
  },
  {
    id: 29,
    imageUrl: "/images/nosotros/estudiante29.jpg",
    name: "Romero Aguilar Miller Franklin",
    description: "Desarrollador Full Stack enfocado en buscar soluciones innovadoras, especializado en laravel, springboot, experiencia en SQL y despliegue.",
    role: "Desarrollador de Software | Full Stack Jr | SQL ",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/miller-romero",
      github: "https://github.com/millerflex",
    },
  },
  {
    id: 30,
    imageUrl: "/images/nosotros/estudiante30.jpg",
    name: "Ruiz Rojas Luis Daniel",
    description:
      "Fulltstack Developer con experiencia en plataformas web y móviles mediante diversos lenguajes, enfocado en aportar soluciones prácticas, tecnológicas y de calidad. Soy amante del deporte y el trabajo en equipo.",
    role: "Desarrollador de Software | Full Stack Jr | SQL",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/luis-daniel-ruiz-rojas-4152a7296/",
      github: "https://github.com/Daniel3x10",
      gmail: "lruizrojas47@gmail.com",
    },

  },
  {
    id: 31,
    imageUrl: "/images/nosotros/estudiante31.jpg",
    name: "Salcedo Quispe Giovani",
    description:
      "Desarrollador con experiencia en soluciones web y móviles, enfocado en crear soluciones tecnológicas eficientes y escalables. Fanático del anime y Dota 1, siempre buscando aprender cosas nuevas",
    role: "Desarrollador de Software | Full Stack Junior",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/giovani-salcedo-quispe/",
      github: "https://github.com/7Kitsu7",
    },
  },
  {
    id: 33,
    imageUrl: "/images/nosotros/estudiante33.jpg",
    name: "Ugaz Julian Edson Alexis",
    description:
      "Estudiante de Ingeniería de Sistemas con interés en el desarrollo de software y en la aplicación de tecnologías que aporten soluciones prácticas. Me caracterizo por aprender rápido, trabajar en equipo y buscar siempre mejorar mis habilidades a través de nuevos reto",
    role: "Desarrollador Full Stack",
    socialLinks: {
      linkedin:
        "www.linkedin.com/in/edson-ugaz-1b89b5331",
      github: "https://github.com/ElvisCocho69",
    },
  },
  {
    id: 34,
    imageUrl: "/images/nosotros/estudiante34.jpg",
    name: "Vargas Muñoz Jhon Rony",
    description:
      "Estudiante de Movilidad de la UNH en la UNT, apasionado por la infraestructura de redes, el desarrollo de software web y móvil, sistemas operativos y la gestión de procesos organizacionales para mejorar la eficiencia tecnológica.",
    role:
      "Redes y Telecomunicaciones | Desarrollo Web/Móvil | Sistemas Operativos | Gestión de Procesos",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/jhon-rony-vargas-mu%C3%B1oz/",
      github: "https://github.com/JhonRony",
    },
  },
  {
    id: 35,
    imageUrl: "/images/nosotros/estudiante35.png",
    name: "Vela Tulumba Erick Luis",
    description:
      "Desarrollador de software full stack con experiencia en Laravel, React y NestJS. Actualmente me desempeño en el desarrollo integral de un sistema de facturación y logística, abarcando tanto la programación como las tareas de DevOps.",
    role: "Desarrollador de Software Full Stack",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/erick-vela-tsx/",
      github: "https://github.com/DevSieg",
      gmail: "ericklvt22@gmail.com",
    },
  },
  {
    id: 36,
    imageUrl: "/images/nosotros/estudiante36.png",
    name: "Velarde Gonzales Eduardo Jose",
    description:
      "Desarrollador centrado en Android con experiencia en iOS. Exploro las capacidades técnicas del entorno móvil mientras amplío mis conocimientos en backend para comprender la arquitectura global de las aplicaciones.",
    role: "Desarrollador Móvil ",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/eduardo-velarde-1b93902b2",
      github: "https://github.com/MDTaylor315",
      gmail: "edujovelardeg@gmail.com",
    },
  },
  {
    id: 37,
    imageUrl: "/images/nosotros/estudiante37.png",
    name: "Venegas Minchola Brahayan Angehelo",
    description:
      "Estudiante de 10° ciclo de Ing. de Sistemas, especializado en Desarrollo Frontend y Diseño UX. Cuento con conocimientos sólidos en Análisis de Datos, incluyendo Power BI y modelado ETL, lo que me permite abordar la resolución de problemas de forma integral",
    role:
      "Desarrollador Frontend UX | Data Analyst (Power BI/ETL)",
    socialLinks: {
      linkedin:
        "www.linkedin.com/in/brahayan-venegas-723814355",
      github: "",
      gmail: "brahayanghelo@gmail.com",
    },
  },
  {
    id: 38,
    imageUrl: "/images/nosotros/estudiante38.png",
    name: "Vidondo Chafloc Gianfranco",
    description:
      "Estudiante de Ingeniería de Sistemas UNT, apasionado por el desarrollo full-stack y el diseño web. Proactivo y adaptable, me dedico a crear soluciones robustas para entornos web y móviles.",
    role:
      "Developer Full Stack Jr | React | Laravel | Python | PostgreSQL",
    socialLinks: {
      linkedin:
        "www.linkedin.com/in/gianfranco-vidondo-chafloc-636a90346",
      github: "https://github.com/FranKoVC",
      gmail: "frankomc2003@gmail.com",
    },
  },
  {
    id: 40,
    imageUrl: "/images/nosotros/estudiante40.png",
    name: "Vigo Rodriguez Gustavo Andre",
    description:
      "Desarrollador Web con experiencia en automatización, embudos de conversión y gestión de datos mediante GoHighLevel. Actualmente apoyo proyectos internacionales implementando flujos automatizados y optimizando procesos digitales dentro de plataformas SaaS.",
    role: "GoHighLevel Specialist | Front-End Developer Jr",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/gustavovigorodriguez/",
      github: "https://github.com/G-alahad",
    },
  },
  {
    id: 41,
    imageUrl: "/images/nosotros/estudiante41.png",
    name: "Villanueva Ramos Juan Rodrigo",
    description:
      "Full Stack Developer Jr. Creo soluciones web modernas y funcionales con un enfoque en la experiencia de usuario, arquitectura limpia y calidad del código.",
    role: "Full Stack Developer Jr",
    socialLinks: {
      linkedin:
        "www.linkedin.com/in/juan-rodrigo-villanueva-ramos-20707b300",
      github: "https://github.com/ojnauj",
    },
  },
  {
    id: 42,
    imageUrl: "/images/nosotros/estudiante42.jpg",
    name: "Yesan Lujan Jose Alexander",
    description:
      "Estudiante de Ingeniería de Sistemas en la UNT con experiencia en docencia, pedagogía y gestión de proyectos. Enfocado en auditoría y gestión de procesos, con habilidades de liderazgo y aspiraciones de especializarme en Gobierno de TI.",
    role:
      "Gestión de Proyectos | Herramientas en TI | Docencia",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/jos%C3%A9-alexander-yes%C3%A1n-luj%C3%A1n-702256309/",
      github: "https://github.com/Yesan10",
    },
  },
];

export function getStudentById(id: number): Student | undefined {
  return teamMembersData.find((s) => s.id === id);
}
