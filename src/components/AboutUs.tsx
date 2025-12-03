// src/components/AboutUs.tsx

import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const teamMembersData = [
  {
    id: 1,
    imageUrl: '/src/assets/estudiante1.jpg', 
    name: 'Acuña Cisneros Cesar Alexander',
    description: 'Desarrollador de Software y Data Engineer especializado en Python, automatización e IA. Creo soluciones inteligentes end-to-end y arquitecturas escalables, con enfoque en accesibilidad y tecnología que mejora vidas.',
    role: 'Desarrollador de Software | Data Ingenieer',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/cesar-ac10/',
      github: 'https://github.com/Cesar-AC'
    }
  },
  {
    id: 2,
    imageUrl: '/src/assets/estudiante2.jpg', 
    name: 'Amaya Jave Luigui Jampierre',
    description: 'Apasionado por la tecnología y la optimización de procesos. Busco oportunidades para aplicar mis conocimientos académicos, aportar soluciones lógicas y crecer dentro del área de TI.',
    role: 'Soporte TI | Help Desk | Asistente de Sistemas',
    socialLinks: {
      linkedin: 'www.linkedin.com/in/ljaj',
      github: 'https://github.com/LuiGui08'
    }
  },
  {
    id: 3,
    imageUrl: '/src/assets/estudiante3.jpg', 
    name: 'Arqueros Lezama Eriks Yefersson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 4,
    imageUrl: '/src/assets/estudiante4.jpg', 
    name: 'Avila Rebaza Sergio Fernando',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 5,
    imageUrl: '/src/assets/estudiante5.jpg', 
    name: 'Bocanegra Chistama Bruno Samir',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/bruno-samir-bocanegra-chistama-520ab428a/',
      github: 'https://github.com/bocanegrabruno11'
    }
  },
  {
    id: 6,
    imageUrl: '/src/assets/estudiante6.jpg', 
    name: 'Campos Gamarra Alejandro Roman',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 7,
    imageUrl: '/src/assets/estudiante7.jpg', 
    name: 'Cruz Ulloa Anahy Estrella',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Desarrollador de Sofware',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/estrella-cruz-ulloa-102708275',
      github: 'https://github.com/estrellacruzulloa'
    }
  },
  {
    id: 8,
    imageUrl: '/src/assets/estudiante8.png', 
    name: 'Cruz Ulloa Leydi Marisol',
    description: 'Estudiante de ingeniería de software con un fuerte interés en la arquitectura backend y la gestión de datos. Responsable de asegurar que la lógica del servidor sea eficiente y escalable.',
    role: 'Data Analyst | Data Engineer | Power BI | Tableau | Python | SQL | Excel',
    socialLinks: {
      linkedin: 'www.linkedin.com/in/marisol-cruz-ulloa-1734442a2',
      github: 'https://github.com/marisol-source'
    }
  },
  {
    id: 9,
    imageUrl: '/src/assets/estudiante9.jpg', 
    name: 'Diaz Tomas Marcos Ivan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 10,
    imageUrl: '/src/assets/estudiante10.jpg', 
    name: 'Espinoza Cerdán Edwin Giancarlo',
    description: 'Estudiante de Ingeniería de Sistemas y profesional en Ingeniería Industrial, apasionado por la tecnología y la IA. Me especializo en seguridad de la información, gestión de redes y soporte técnico.',
    role: 'Gestión de Redes | Switching | CCTV |  VoIP',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/giancarlo-espinoza-6690471a6/',
      github: 'https://github.com/giancarloespinoza'
    }
  },
  {
    id: 11,
    imageUrl: '/src/assets/estudiante11.jpg', 
    name: 'Fernandez Salvo Fernando Arturo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 12,
    imageUrl: '/src/assets/estudiante12.jpg', 
    name: 'Guevara Saldaña Rodrigo Alonso',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 13,
    imageUrl: '/src/assets/estudiante13.jpg', 
    name: 'Gutierrez Sanchez Frank Jhosep',
    description: 'Estudiante de décimo ciclo de Ingeniería de Sistemas, apasionado por la tecnología y el desarrollo de software full-stack. Cuento con experiencia en proyectos reales junto a NEON HOUSE LED y SEDALIB.',
    role: 'Desarrollo de Sofware',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/frank-sanchez-dev19/',
      github: 'https://github.com/Frank-Dev19'
    }
  },
  {
    id: 14,
    imageUrl: '/src/assets/estudiante14.png', 
    name: 'Huaman Obregon Jose Maria',
    description: 'Desarrollador de Sistemas enfocado en aplicar inteligencia artificial para automatizar creación de contenido, analizar métricas digitales y apoyar procesos de venta a través de redes sociales y plataformas web.',
    role: 'Inteligencia artificial aplicada | Desarrollo de sistemas orientados a marketing digital',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/jos%C3%A9-huaman-a85aa1375',
      github: 'https://github.com/JMHO-01'
    }
  },
  {
    id: 15,
    imageUrl: '/src/assets/estudiante15.jpg', 
    name: 'Huamanchumo Gordillo Alexander Saul',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 16,
    imageUrl: '/src/assets/estudiante16.jpg', 
    name: 'Huamanchumo Trujillo Francisco Gerardo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 17,
    imageUrl: '/src/assets/estudiante17.jpg', 
    name: 'Lecca Rengifo Maria Alexandra',
    description: 'Diseñadora web y mobile apasionada por el UX/UI. Mezclo teoría del diseño, sistemas visuales y experiencia real para crear productos atractivos, usables y con un toque de identidad propia.',
    role: 'UX/UI | QA Engineer | Web & Mobile Design',
    socialLinks: {
      linkedin: 'www.linkedin.com/in/allylecca',
      github: '-'
    }
  },
  {
    id: 18,
    imageUrl: '/src/assets/estudiante18.jpg', 
    name: 'Mendez Barreto Giancarlo Yoel',
    description: 'Estudiante de Ingeniería de Sistemas, apasionado por la tecnología y la inteligencia artificial. Me especializo en big data y arquitectura de soluciones, con enfoque en innovación y resolución eficiente de problemas.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 19,
    imageUrl: '/src/assets/estudiante19.jpg', 
    name: 'Ordoñez Reyes Abraham Benjamin',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 20,
    imageUrl: '/src/assets/estudiante20.jpg', 
    name: 'Palma Rojas Anthony Joel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 21,
    imageUrl: '/src/assets/estudiante21.jpg', 
    name: 'Querevalu Galan Roger Alejandro',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Desarrollador Fronted',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/roger-querevalu-galan/',
      github: 'https://github.com/RogerAlejandro/'
    }
  },
  {
    id: 22,
    imageUrl: '/src/assets/estudiante22.jpg', 
    name: 'Quispe Pinillos Josue Gabriel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 23,
    imageUrl: '/src/assets/estudiante23.jpg', 
    name: 'Quispe Sanchez Edward Steven',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 24,
    imageUrl: '/src/assets/estudiante24.jpg', 
    name: 'Rengifo Gallegos Sofia Ariana',
    description: 'Desarrolladora web full stack con experiencia en desarrollo front-end, back-end y diseño UI/UX. Construyo interfaces modernas y sistemas sólidos, integrando diseño y lógica para crear soluciones funcionales y atractivas.',
    role: 'Full Stack Web Developer | UX/UI Designer',
    socialLinks: {
      linkedin: 'www.linkedin.com/in/sofía-rengifo-940aa0256',
      github: 'https://github.com/SofiaRengifo'
    }
  },
  {
    id: 25,
    imageUrl: '/src/assets/estudiante25.jpg', 
    name: 'Revilla Medina Dominick Abel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 26,
    imageUrl: '/src/assets/estudiante26.jpg', 
    name: 'Rodriguez Asto Joan Antony',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 27,
    imageUrl: '/src/assets/estudiante27.png', 
    name: 'Rodriguez Leon Diego Jair',
    description: 'Soy estudiante de 10.º ciclo de Ingeniería de Sistemas en la UNT. Soy responsable, proactivo, aprendo rápido y busco aplicar mis conocimientos en PHP, SQL y Python de manera profesional.',
    role: 'Desarrollador de Software | Full Stack Junior | SQL server',
    socialLinks: {
      linkedin: 'www.linkedin.com/in/diego-jair-rodriguez-leon-b258a5317',
      github: 'https://github.com/diegojair17032'
    }
  },
  {
    id: 28,
    imageUrl: '/src/assets/estudiante28.jpg', 
    name: 'Rodriguez Ponce Kevin Jose',
    description: 'Estudiante de Ingeniería de Sistemas en la UNT. Desarrollador Full Stack Jr y DevOps Jr con experiencia en SQL, despliegue de aplicaciones y automatización',
    role: 'Desarrollador de Software | Full Stack Jr | SQL | Devops Jr',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/kevin-rodriguez-46963033b/',
      github: 'https://github.com/kevinnRod'
    }
  },
  {
    id: 29,
    imageUrl: '/src/assets/estudiante29.jpg', 
    name: 'Romero Aguilar Miller Franklin',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 30,
    imageUrl: '/src/assets/estudiante30.jpg', 
    name: 'Ruiz Rojas Luis Daniel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Desarrollador de Software | Full Stack Jr | SQL',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/luis-daniel-ruiz-rojas-4152a7296/',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 31,
    imageUrl: '/src/assets/estudiante31.jpg', 
    name: 'Salcedo Quispe Giovani',
    description: 'Desarrollador con experiencia en soluciones web y móviles, enfocado en crear soluciones tecnológicas eficientes y escalables. Fanático del anime y Dota 1, siempre buscando aprender cosas nuevas',
    role: 'Desarrollador de Software | Full Stack Junior',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/giovani-salcedo-quispe/',
      github: 'https://github.com/7Kitsu7'
    }
  },
  {
    id: 32,
    imageUrl: '/src/assets/estudiante32.jpg', 
    name: 'Samana Rodriguez Segundo Manuel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 33,
    imageUrl: '/src/assets/estudiante33.jpg', 
    name: 'Ugaz Julian Edson Alexis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 34,
    imageUrl: '/src/assets/estudiante34.jpg', 
    name: 'Vargas Muñoz Jhon Rony',
    description: 'Estudiante de Movilidad de la UNH en la UNT, apasionado por la infraestructura de redes, el desarrollo de software web y móvil, sistemas operativos y la gestión de procesos organizacionales para mejorar la eficiencia tecnológica.',
    role: 'Redes y Telecomunicaciones | Desarrollo Web/Móvil | Sistemas Operativos | Gestión de Procesos',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/jhon-rony-vargas-mu%C3%B1oz/',
      github: 'https://github.com/JhonRony'
    }
  },
  {
    id: 35,
    imageUrl: '/src/assets/estudiante35.jpg', 
    name: 'Vela Tulumba Erick Luis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 36,
    imageUrl: '/src/assets/estudiante36.jpg', 
    name: 'Velarde Gonzales Eduardo Jose',
    description: 'Desarrollador centrado en Android con experiencia en iOS. Exploro las capacidades técnicas del entorno móvil mientras amplío mis conocimientos en backend para comprender la arquitectura global de las aplicaciones.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 37,
    imageUrl: '/src/assets/estudiante37.jpg', 
    name: 'Venegas Minchola Brahayan Angehelo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 38,
    imageUrl: '/src/assets/estudiante38.jpg', 
    name: 'Vidondo Chafloc Gianfranco',
    description: 'Estudiante de Ingeniería de Sistemas UNT, apasionado por el desarrollo full-stack y el diseño web. Proactivo y adaptable, me dedico a crear soluciones robustas para entornos web y móviles.',
    role: 'Developer Full Stack Jr | React | Laravel | Python | PostgreSQL',
    socialLinks: {
      linkedin: 'www.linkedin.com/in/gianfranco-vidondo-chafloc-636a90346',
      github: 'https://github.com/FranKoVC'
    }
  },
  {
    id: 39,
    imageUrl: '/src/assets/estudiante39.jpg', 
    name: 'Vigo Chavez Daniel Josias',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Lorem ipsum (Role)',
    socialLinks: {
      linkedin: 'https://lorem.ipsum',
      github: 'https://lorem.ipsum'
    }
  },
  {
    id: 40,
    imageUrl: '/src/assets/estudiante40.jpg', 
    name: 'Vigo Rodriguez Gustavo Andre',
    description: 'Desarrollador Web con experiencia en automatización, embudos de conversión y gestión de datos mediante GoHighLevel. Actualmente apoyo proyectos internacionales implementando flujos automatizados y optimizando procesos digitales dentro de plataformas SaaS.',
    role: 'GoHighLevel Specialist | Front-End Developer Jr',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/gustavovigorodriguez/',
      github: 'https://github.com/G-alahad'
    }
  },
  {
    id: 41,
    imageUrl: '/src/assets/estudiante41.jpg', 
    name: 'Villanueva Ramos Juan Rodrigo',
    description: 'Full Stack Developer Jr. Creo soluciones web modernas y funcionales con un enfoque en la experiencia de usuario, arquitectura limpia y calidad del código.',
    role: 'Full Stack Developer Jr',
    socialLinks: {
      linkedin: 'www.linkedin.com/in/juan-rodrigo-villanueva-ramos-20707b300',
      github: 'https://github.com/ojnauj'
    }
  },
  {
    id: 42,
    imageUrl: '/src/assets/estudiante42.jpg', 
    name: 'Yesan Lujan Jose Alexander',
    description: 'Estudiante de Ingeniería de Sistemas en la UNT con experiencia en docencia, pedagogía y gestión de proyectos. Enfocado en auditoría y gestión de procesos, con habilidades de liderazgo y aspiraciones de especializarme en Gobierno de TI.',
    role: 'Gestión de Proyectos | Herramientas en TI | Docencia',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/jos%C3%A9-alexander-yes%C3%A1n-luj%C3%A1n-702256309/',
      github: 'https://github.com/Yesan10'
    }
  }
];

const AboutUs: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-30 bg-[#00193e] text-white">
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        
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