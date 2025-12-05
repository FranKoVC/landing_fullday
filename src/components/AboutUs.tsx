// src/components/AboutUs.tsx

import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const teamMembersData = [
  {
    id: 1,
    imageUrl: '/images/nosotros/acuñaC.jpg', 
    name: 'ACUÑA CISNEROS CESAR ALEXANDER',
    description: 'Desarrollador de Software y Data Engineer especializado en Python, automatización e IA. Creo soluciones inteligentes end-to-end y arquitecturas escalables, con enfoque en accesibilidad y tecnología que mejora vidas.',
    role: 'Desarrollador de Software | Data Ingenieer',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/cesar-ac10/',
      github: 'https://github.com/Cesar-AC',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 2,
    imageUrl: '/images/nosotros/amayaL.png', 
    name: 'AMAYA JAVE LUIGUI JAMPIERRE',
    description: 'Apasionado por la tecnología y la optimización de procesos. Busco oportunidades para aplicar mis conocimientos académicos, aportar soluciones lógicas y crecer dentro del área de TI.',
    role: 'Soporte TI | Help Desk | Asistente de Sistemas',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/ljaj',
      github: 'https://github.com/LuiGui08',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 3,
    imageUrl: '/images/nosotros/alezamaE.jpg', 
    name: 'ARQUEROS LEZAMA ERIKS YEFERSSON',
    description: 'Apasionado por el desarrollo web y la creación de interfaces de usuario intuitivas. Siempre buscando aprender nuevas tecnologías para resolver problemas complejos.',
    role: 'Backend Developer',
    socialLinks: {
      linkedin: '#',
      github: '#',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 4 ,
    imageUrl: '/images/nosotros/', 
    name: 'AVILA REBAZA SERGIO FERNANDO',
    description: 'Apasionado por el desarrollo web y la creación de interfaces de usuario intuitivas. Siempre buscando aprender nuevas tecnologías para resolver problemas complejos.',
    role: 'Backend Developer',
    socialLinks: {
      linkedin: '#',
      github: '#',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 8 ,
    imageUrl: '/images/nosotros/cruzL.png', 
    name: 'CRUZ ULLOA LEYDI MARISOL',
    description: 'Estudiante de Ingeniería de Sistemas en la UNT. Me caracterizo por mi liderazgo, networking y adaptación a entornos diversos. Deseo especializarme en análisis de datos e inteligencia artificial para impulsar soluciones innovadoras.',
    role: 'Data Analyst | Data Engineer | Power BI | Tableau | Python | SQL | Excel',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/marisol-cruz-ulloa-1734442a2',
      github: 'https://github.com/marisol-source',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 10 ,
    imageUrl: '/images/nosotros/espinozaE.jpg', 
    name: 'ESPINOZA CERDÁN EDWIN GIANCARLO',
    description: 'Estudiante de Ingeniería de Sistemas y profesional en Ingeniería Industrial, apasionado por la tecnología y la IA. Me especializo en seguridad de la información, gestión de redes y soporte técnico.',
    role: 'Gestión de Redes | Switching | CCTV |  VoIP',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/giancarlo-espinoza-6690471a6/',
      github: 'https://github.com/giancarloespinoza',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 13 ,
    imageUrl: '/images/nosotros/', 
    name: 'GUTIERREZ SANCHEZ FRANK JHOSEP',
    description: 'Estudiante de décimo ciclo de Ingeniería de Sistemas, apasionado por la tecnología y el desarrollo de software full-stack. Cuento con experiencia en proyectos reales junto a NEON HOUSE LED y SEDALIB.',
    role: 'Desarrollo de Sofware',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/frank-sanchez-dev19/',
      github: 'https://github.com/Frank-Dev19',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 14 ,
    imageUrl: '/images/nosotros/huamanJ.png', 
    name: 'HUAMAN OBREGON JOSE MARIA',
    description: 'Desarrollador de Sistemas enfocado en aplicar inteligencia artificial para automatizar creación de contenido, analizar métricas digitales y apoyar procesos de venta a través de redes sociales y plataformas web.',
    role: 'Inteligencia artificial aplicada | Desarrollo de sistemas orientados a marketing digital',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/jos%C3%A9-huaman-a85aa1375',
      github: 'https://github.com/JMHO-01',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 15 ,
    imageUrl: '/images/nosotros/huamanchumoA.jpg', 
    name: 'HUAMANCHUMO GORDILLO ALEXANDER SAUL',
    description: '................................ web.',
    role: '.................',
    socialLinks: {
      linkedin: '#',
      github: '#',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 17 ,
    imageUrl: '/images/nosotros/leccaM.jpg', 
    name: 'LECCA RENGIFO MARIA ALEXANDRA',
    description: 'Diseñadora web y mobile apasionada por el UX/UI. Mezclo teoría del diseño, sistemas visuales y experiencia real para crear productos atractivos, usables y con un toque de identidad propia.',
    role: 'UX/UI | QA Engineer | Web & Mobile Design',
    socialLinks: {
      linkedin: 'www.linkedin.com/in/allylecca',
      github: '#',
      dribbble: 'https://dribbble.com/allylecca',
      behance: 'https://www.behance.net/allylecca'
    }
  },
  {
    id: 24 ,
    imageUrl: '/images/nosotros/rengifoS.jpg', 
    name: 'RENGIFO GALLEGOS SOFIA ARIANA',
    description: 'Desarrolladora web full stack con experiencia en desarrollo front-end, back-end y diseño UI/UX. Construyo interfaces modernas y sistemas sólidos, integrando diseño y lógica para crear soluciones funcionales y atractivas.',
    role: 'Full Stack Web Developer | UX/UI Designer',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/sofía-rengifo-940aa0256',
      github: 'https://github.com/SofiaRengifo',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 27 ,
    imageUrl: '/images/nosotros/rodriguezD.png', 
    name: 'RODRIGUEZ LEON DIEGO JAIR',
    description: 'Soy estudiante de 10.º ciclo de Ingeniería de Sistemas en la UNT. Soy responsable, proactivo, aprendo rápido y busco aplicar mis conocimientos en PHP, SQL y Python de manera profesional.',
    role: 'Desarrollador de Software | Full Stack Junior | SQL server',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/diego-jair-rodriguez-leon-b258a5317',
      github: 'https://github.com/diegojair17032',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 28 ,
    imageUrl: '/images/nosotros/rodriguezP.jpg', 
    name: 'RODRIGUEZ PONCE KEVIN JOSE',
    description: 'Estudiante de Ingeniería de Sistemas en la UNT. Desarrollador Full Stack Jr y DevOps Jr con experiencia en SQL, despliegue de aplicaciones y automatización',
    role: 'Desarrollador de Software | Full Stack Jr | SQL | Devops Jr',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/kevin-rodriguez-46963033b/',
      github: 'https://github.com/kevinnRod',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 31 ,
    imageUrl: '/images/nosotros/salcedo.jpg', 
    name: 'SALCEDO QUISPE GIOVANI',
    description: 'Desarrollador con experiencia en soluciones web y móviles, enfocado en crear soluciones tecnológicas eficientes y escalables. Fanático del anime y Dota 1, siempre buscando aprender cosas nuevas',
    role: 'Desarrollador de Software | Full Stack Junior',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/giovani-salcedo-quispe/',
      github: 'https://github.com/7Kitsu7',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 34 ,
    imageUrl: '/images/nosotros/vargas.jpg', 
    name: 'VARGAS MUÑOZ JHON RONY',
    description: 'Estudiante de Movilidad de la UNH en la UNT, apasionado por la infraestructura de redes, el desarrollo de software web y móvil, sistemas operativos y la gestión de procesos organizacionales para mejorar la eficiencia tecnológica.',
    role: 'Redes y Telecomunicaciones | Desarrollo Web/Móvil | Sistemas Operativos | Gestión de Procesos',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/jhon-rony-vargas-mu%C3%B1oz/ ',
      github: 'https://github.com/JhonRony',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 38 ,
    imageUrl: '/images/nosotros/estudiante38.jpg', 
    name: 'VIDONDO CHAFLOC GIANFRANCO',
    description: 'Estudiante de Ingeniería de Sistemas UNT, apasionado por el desarrollo full-stack y el diseño web. Proactivo y adaptable, me dedico a crear soluciones robustas para entornos web y móviles. ',
    role: 'Developer Full Stack Jr | React | Laravel | Python | PostgreSQL',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/gianfranco-vidondo-chafloc-636a90346',
      github: 'https://github.com/FranKoVC',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 40 ,
    imageUrl: '/images/nosotros/vigo.JPG', 
    name: 'VIGO RODRIGUEZ GUSTAVO ANDRE',
    description: 'Desarrollador Web con experiencia en automatización, embudos de conversión y gestión de datos mediante GoHighLevel. Actualmente apoyo proyectos internacionales implementando flujos automatizados y optimizando procesos digitales dentro de plataformas SaaS.',
    role: 'GoHighLevel Specialist | Front-End Developer Jr',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/gustavovigorodriguez/',
      github: 'https://github.com/G-alahad',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 41 ,
    imageUrl: '/images/nosotros/villanueva.jpg', 
    name: 'VILLANUEVA RAMOS JUAN RODRIGO',
    description: 'Full Stack Developer Jr. Creo soluciones web modernas y funcionales con un enfoque en la experiencia de usuario, arquitectura limpia y calidad del código.',
    role: 'Full Stack Developer Jr',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/juan-rodrigo-villanueva-ramos-20707b300',
      github: 'https://github.com/ojnauj',
      dribbble: '#',
      behance: '#'
    }
  },
  {
    id: 42 ,
    imageUrl: '/images/nosotros/yesan.jpg', 
    name: 'YESAN LUJAN JOSE ALEXANDER',
    description: 'Estudiante de Ingeniería de Sistemas en la UNT con experiencia en docencia, pedagogía y gestión de proyectos. Enfocado en auditoría y gestión de procesos, con habilidades de liderazgo y aspiraciones de especializarme en Gobierno de TI.',
    role: 'Gestión de Proyectos | Herramientas en TI | Docencia',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/jos%C3%A9-alexander-yes%C3%A1n-luj%C3%A1n-702256309/ ',
      github: 'https://github.com/Yesan10 ',
      dribbble: '#',
      behance: '#'
    }
  }

];

const AboutUs: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-30 bg-[#00193e] text-white ">
      
      {/* 2. CAJA INTERNA DE ALINEACIÓN (LA CLAVE)
         Esta línea debe ser IDÉNTICA a la del Footer: max-w-6xl mx-auto px-6
      */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="text-white">CONOCE A </span>
          <span className="text-yellow-400 inline-block">CADA UNO </span>{' '}
          <span className="text-white">DE </span>
          <span className="text-yellow-400">NOSOTROS</span>
        </h2>

        {/* Descripción */}
        <p className='mb-12 max-w-3xl mx-auto text-slate-200 text-sm md:text-base leading-relaxed'>
          Nos enorgullece presentar a los miembros de nuestra promoción, quienes han demostrado dedicación y excelencia a lo largo de su formación académica.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-items-center items-stretch">
          {teamMembersData.map((member) => (
            <TeamMemberCard
              key={member.id}
              imageUrl={member.imageUrl}
              name={member.name}
              description={member.description}
              role={member.role}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;