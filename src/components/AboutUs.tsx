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
    // --- CAMBIO: Fondo azul, padding y texto blanco general ---
    // bg-blue-900 o similar para el fondo azul oscuro
    // text-white para que todo el texto dentro sea blanco por defecto
    <section className="py-16 px-4 text-center bg-[#10284B] text-white">
      
      {/* --- CAMBIO: Título blanco y amarillo --- */}
      <h2 className="text-5xl font-bold mb-4">
        <span className="text-white">CONOCE A </span><span className="text-yellow-400">CADA UNO </span>
        <span className="text-white">DE </span><span className="text-yellow-400">NOSOTROS</span>
      </h2>
      <p className='mb-9 max-w-2xl mx-auto'>Nos enorgullece presentar a los miembros de nuestra promoción, quienes han demostrado dedicación y excelencia a lo largo de su formación académica.</p>

      {/* Grid de Tailwind (sigue igual) */}
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembersData.map( (member) => (
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
    </section>
  );
};

export default AboutUs;