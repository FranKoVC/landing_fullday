// src/data/ponentes.ts

export interface Experience {
  period: string;
  role: string;
  description: string;
}

export interface Speaker {
  id: number;
  name: string;
  role: string;
  imageSrc: string;
  linkedin?: string;
  description: string;
  experience: Experience[]; 
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "Jorge Salvador M.",
    role: "Investigaciones, Fraudes y Cibercriminología",
    imageSrc: "/images/ponentes/7foto.png",
    linkedin: "https://www.linkedin.com/in/jorgesmcra",
    description: "Profesional con más de 20 años de experiencia en la prevención, detección, análisis e investigación de fraudes, control interno y auditoría forense. Actualmente es Chapter Leader en Investigación de Fraudes en el BCP.",
    experience: [
      { 
        period: "2025 - Actualidad", 
        role: "CHAPTER LEADER INVESTIGACIÓN", 
        description: "Liderazgo en investigación de fraudes, supervisión de equipos y gestión de riesgos operativos y cibercriminología en el BCP."
      },
      { 
        period: "2023 - 2025", 
        role: "LÍDER DE FRAUDE EXTERNO", 
        description: "Gestión de investigaciones de fraude externo y originación, implementando acciones preventivas y políticas de seguridad en BCP."
      },
      { 
        period: "2021 - 2023", 
        role: "GERENTE DE PREVENCIÓN", 
        description: "Gerencia de prevención e investigación de fraudes en Mibanco, enfocada en la ética de negocios y dirección de equipos de control."
      },
      { 
        period: "2014 - 2021", 
        role: "SUB GERENTE DE RIESGOS", 
        description: "Subgerencia de prevención e investigación de fraudes en Mibanco, liderando análisis de datos y formación en control interno."
      },
      { 
        period: "2008 - 2013", 
        role: "SUB GERENTE ADJ. INVESTIGACIÓN", 
        description: "Investigación de fraudes corporativos y acciones preventivas en el Banco de Crédito del Perú."
      },
    ],
  },
  {
    id: 2,
    name: "Rose Mary Monroy",
    role: "Gobernanza Digital, IA y Ciberseguridad",
    imageSrc: "/images/ponentes/8foto.png",
    linkedin: "https://www.linkedin.com/in/rosemarymonroy",
    description: "Ejecutiva senior con más de 25 años liderando áreas de Tecnología e Innovación. Co-fundadora de TitanIA y experta en transformación digital estratégica.",
    experience: [
      { 
        period: "2024 - Actualidad", 
        role: "LÍDER & CO-FOUNDER TITANIA", 
        description: "Brinda soluciones integrales en nube, automatización e IA para impulsar la competitividad de medianas empresas en Latam."
      },
      { 
        period: "2023 - Actualidad", 
        role: "DIRECTORA INDEPENDIENTE", 
        description: "Gestión de la innovación y liderazgo estratégico en Editora Perú, enfocada en transformación digital y gobierno corporativo."
      },
      { 
        period: "2023 - 2024", 
        role: "COO - GERENTE DE OPERACIONES", 
        description: "Gestión de servicios de TI, transformación de empresas y mejora de procesos operativos en Zest."
      },
      { 
        period: "2020 - 2020", 
        role: "GERENTE DE TI (INTEGRA RETAIL)", 
        description: "Integración y estabilización de nuevas plataformas comerciales, administrativas y financieras, mejorando KPIs del área en 100%."
      },
      { 
        period: "2019 - 2020", 
        role: "GERENTE DE TI (QROMA)", 
        description: "Gestión del plan estratégico de TI, seguridad de la información, transformación digital y definición de ERP SAP S4/Hana."
      },
    ],
  },
  {
    id: 3,
    name: "Alberto Mendoza",
    role: "Especialista en Gobierno de TI y Auditoría",
    imageSrc: "/images/ponentes/9foto.png",
    linkedin: "https://www.linkedin.com/in/alberto-mendoza-de-los-santos-9a391728/",
    description: "Ingeniero de Sistemas, Gestor de Proyectos de TI y Gerente General. Certificado CISA y especialista en Gobierno de TI con amplia trayectoria docente y consultora.",
    experience: [
      { 
        period: "2009 - Actualidad", 
        role: "GERENTE GENERAL", 
        description: "Liderazgo en Business Solution Enterprise SAC, brindando consultoría técnico-administrativa a empresas de prestigio."
      },
      { 
        period: "2011 - Actualidad", 
        role: "DOCENTE ASOCIADO (UNT)", 
        description: "Docencia en pregrado y postgrado en Ingeniería de Sistemas y Maestría en Tecnologías de la Información."
      },
      { 
        period: "2010 - Actualidad", 
        role: "CONSULTOR EXTERNO", 
        description: "Consultoría especializada en proyectos de redes y telecomunicaciones para SGT Telecomunicaciones."
      },
      { 
        period: "2001 - Actualidad", 
        role: "AUDITOR DE SISTEMAS", 
        description: "Auditor especialista en TI para Li Valencia & Asociados, evaluando entidades del sector público y cajas municipales."
      },
      { 
        period: "2000 - 2007", 
        role: "JEFE DE SISTEMAS", 
        description: "Planificación y ejecución de políticas de sistemas y TI para los distintos rubros del Grupo Nestorovic - Razzeto."
      },
    ],
  },
  {
    id: 4,
    name: "Haybert Escobedo",
    role: "Gestión de Proyectos y Servicios de TI",
    imageSrc: "/images/ponentes/10foto.png",
    linkedin: "https://www.linkedin.com/in/haybert-escobedo-neyra-4403005a/",
    description: "Más de 20 años gestionando proyectos TI para clientes globales. Experto en certificaciones ISO y CMMI, y liderazgo de equipos SAP regionales.",
    experience: [
      { 
        period: "2022 - Actualidad", 
        role: "MANAGER (NTT DATA)", 
        description: "Gestión de proyectos y servicios tecnológicos a nivel regional en NTT DATA Europe & Latam."
      },
      { 
        period: "2019 - 2022", 
        role: "CENTERS SERVICE LEADER", 
        description: "Gestor responsable de proyectos y servicios multicliente SAP para Perú, Chile, Colombia, México, Argentina y España."
      },
      { 
        period: "2016 - 2017", 
        role: "COORDINADOR DE CALIDAD", 
        description: "Coordinación de calidad (QA Lead) y mejora de procesos del mercado TELCO en Indra."
      },
      { 
        period: "2015 - 2016", 
        role: "ANALISTA CALIDAD SENIOR", 
        description: "Analista de calidad para el proyecto SUNAT dentro del consorcio GMD & Indra."
      },
      { 
        period: "2006 - 2010", 
        role: "JEFE DE TECNOLOGÍAS", 
        description: "Jefe del área de tecnologías en Tepran SRL (Milán, Italia), liderando la infraestructura informática."
      },
    ],
  },
  {
    id: 5,
    name: "Juan Victor Nizama",
    role: "Ciberseguridad y Continuidad del Negocio",
    imageSrc: "/images/ponentes/11foto.png",
    linkedin: "https://www.linkedin.com/in/juan-victor-nizama-morales/",
    description: "Ingeniero de Sistemas experto en gestión de riesgos tecnológicos, ciberseguridad y privacidad. Ha liderado la continuidad de negocio en grandes corporaciones.",
    experience: [
      { 
        period: "2025 - Actualidad", 
        role: "SENIOR CYBERSECURITY MANAGER", 
        description: "Gerencia senior de ciberseguridad en PwC Perú, liderando estrategias de protección y riesgos tecnológicos."
      },
      { 
        period: "2023 - 2025", 
        role: "TECH RISK & CYBER MANAGER", 
        description: "Gestión de riesgos tecnológicos, crisis management y continuidad del negocio en Minsait."
      },
      { 
        period: "2021 - 2022", 
        role: "CORPORATE PRODUCT OWNER", 
        description: "Responsable corporativo de gestión de crisis y respuesta a incidentes cibernéticos en Falabella (Chile)."
      },
      { 
        period: "2015 - 2021", 
        role: "RISK ADVISORY MANAGER", 
        description: "Gerente de consultoría de riesgos en Deloitte S-LATAM, asesorando en continuidad y seguridad."
      },
      { 
        period: "2010 - 2015", 
        role: "SENIOR CONSULTANT", 
        description: "Consultor senior de riesgos tecnológicos en Deloitte, enfocado en auditoría y control de TI."
      },
    ],
  },
  {
    id: 6,
    name: "Manuel Gamarra Vigo",
    role: "Gestión de Riesgos Financieros",
    imageSrc: "/images/ponentes/12foto.png",
    linkedin: "https://www.linkedin.com/in/manuel-gamarra-vigo/",
    description: "Especialista en gestión de riesgos y seguridad de la información. Enfocado en la resiliencia empresarial y cumplimiento normativo financiero.",
    experience: [
      { 
        period: "2024 - Actualidad", 
        role: "CONSULTOR ESTRATÉGICO", 
        description: "Asesoría en gestión de riesgos, seguridad de la información y continuidad del negocio para diversas organizaciones."
      },
      { 
        period: "2016 - 2024", 
        role: "SUB GERENTE DE RIESGOS", 
        description: "Gestión integral de riesgos operativos, ciberseguridad y plan de continuidad en Almafin S.A."
      },
      { 
        period: "2014 - 2016", 
        role: "JEFE DE TECNOLOGÍA", 
        description: "Responsable de infraestructura, seguridad de información y esquemas de continuidad en Neptunia S.A."
      },
      { 
        period: "2011 - 2014", 
        role: "ESPECIALISTA CONTINUIDAD", 
        description: "Implementación del modelo de madurez en continuidad del negocio y reducción de brechas regulatorias en Mibanco."
      },
      { 
        period: "2008 - 2010", 
        role: "ESPECIALISTA INFRAESTRUCTURA", 
        description: "Virtualización y optimización de plataformas TI, logrando reducción de costos en EXSA S.A."
      },
    ],
  },
];

export const getSpeakerById = (id: number): Speaker | undefined => {
  return speakers.find((s) => s.id === id);
};