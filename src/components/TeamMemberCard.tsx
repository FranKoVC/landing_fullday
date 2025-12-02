// src/components/TeamMemberCard.tsx

import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface TeamMemberCardProps {
  imageUrl: string;
  name: string;
  description: string;
  role: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ 
  imageUrl, 
  name, 
  description, 
  role, 
  socialLinks 
}) => {
  return (
    // --- CAMBIO AQUÍ ---
    // Añadimos las clases para la transición y el efecto hover
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#10284B] text-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10">
      
      {/* Contenedor de la imagen (sin cambios) */}
      <div className="relative w-full pt-[80%]"> 
        <img 
          className="absolute top-0 left-0 w-full h-full object-cover" 
          src={imageUrl} 
          alt={`Foto de ${name}`} 
        />
      </div>

      {/* Contenido de texto (sin cambios) */}
      <div className="p-2 text-left">
        <h2 className="font-bold text-2xl mb-2">{name}</h2>
        <p className="text-gray-300 text-base mb-4">
          {description}
        </p>
        <h3 className="font-semibold text-lg mb-4">{role}</h3>
        
        {/* Iconos (sin cambios) */}
        <div className="flex gap-4 text-2xl">
          <a href={socialLinks.facebook} className="hover:opacity-75"><FaFacebook /></a>
          <a href={socialLinks.instagram} className="hover:opacity-75"><FaInstagram /></a>
          <a href={socialLinks.linkedin} className="hover:opacity-75"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;