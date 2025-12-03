// src/components/TeamMemberCard.tsx

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface TeamMemberCardProps {
  imageUrl: string;
  name: string;
  description: string;
  role: string;
  socialLinks: {
    linkedin: string;
    github: string;
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
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#10284B] text-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10">
      
      {/* Contenedor de la imagen */}
      <div className="relative w-full pt-[80%]"> 
        <img 
          className="absolute top-0 left-0 w-full h-full object-cover" 
          src={imageUrl} 
          alt={`Foto de ${name}`} 
        />
      </div>

      {/* Contenido de texto */}
      <div className="p-2 text-left">
        <h2 className="font-bold text-2xl mb-2">{name}</h2>
        <p className="text-gray-300 text-base mb-4">
          {description}
        </p>
        <h3 className="font-semibold text-lg mb-4">{role}</h3>
        
        {/* Iconos */}
        <div className="flex gap-4 text-2xl">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
            <FaLinkedin />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;