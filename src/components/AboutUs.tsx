// src/components/AboutUs.tsx

import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const teamMembersData = [
  // ... (tus datos de compañeros, esto sigue igual) ...
  {
    id: 1,
    imageUrl: '/images/mary.jpg', 
    name: 'MARY ESTEPHANY GÓMEZ RODRIGUEZ',
    description: 'Entusiasta del diseño UX/UI, enfocada en crear productos accesibles y centrados en el usuario. Le encanta transformar ideas complejas en diseños simples y elegantes.',
    role: 'Full Stack | Cloud Computing',
    socialLinks: {
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 2,
    imageUrl: '/images/mateo.avif', 
    name: 'MATEO PAULO GONGONZÁLEZ SILVA',
    description: 'Estudiante de ingeniería de software con un fuerte interés en la arquitectura backend y la gestión de datos. Responsable de asegurar que la lógica del servidor sea eficiente y escalable.',
    role: 'Frontend Developer',
    socialLinks: {
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 3,
    imageUrl: '/images/alejandro.jpg', 
    name: 'ALEJANDRO TIMOTEO ROJAS PÉREZ',
    description: 'Apasionado por el desarrollo web y la creación de interfaces de usuario intuitivas. Siempre buscando aprender nuevas tecnologías para resolver problemas complejos.',
    role: 'Backend Developer',
    socialLinks: {
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  }
];

const AboutUs: React.FC = () => {
  return (
    // 1. CAJA EXTERNA: Solo fondo y altura. 
    // BORRAMOS 'px-4' de aquí para que no estorbe.
    <section className="w-full py-20 md:py-30 bg-[#00193e] text-white">
      
      {/* 2. CAJA INTERNA DE ALINEACIÓN (LA CLAVE)
         Esta línea debe ser IDÉNTICA a la del Footer: max-w-6xl mx-auto px-6
      */}
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