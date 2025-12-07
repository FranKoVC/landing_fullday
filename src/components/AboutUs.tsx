// src/components/AboutUs.tsx

import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { teamMembersData } from '../data/estudiantes';

const AboutUs: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-30 bg-[#00193e] text-white">
      {/* Contenedor central */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="text-white">CONOCE A </span>
          <span className="text-yellow-400 inline-block">CADA UNO </span>{' '}
          <span className="text-white">DE </span>
          <span className="text-yellow-400">NOSOTROS</span>
        </h2>

        {/* Descripción */}
        <p className="mb-12 max-w-3xl mx-auto text-slate-200 text-sm md:text-base leading-relaxed">
          Estudiantes de la Promoción XXVI de Ingeniería de Sistemas UNT que hacemos posible el 11º Full Day de Gestión de TI
        </p>

        {/* Grid de estudiantes */}
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
