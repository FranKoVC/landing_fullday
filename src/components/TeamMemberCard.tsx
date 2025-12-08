// src/components/TeamMemberCard.tsx

import React from 'react';
import { FaLinkedin, FaGithub, FaDribbble, FaBehance } from 'react-icons/fa';

interface TeamMemberCardProps {
  imageUrl: string;
  name: string;
  description: string;
  role: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    dribbble?: string;
    behance?: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  imageUrl,
  name,
  description,
  role,
  socialLinks,
}) => {
  return (
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#00193e] text-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10 p-4 sm:p-5">

      {/* Contenedor de la imagen */}
      <div className="relative w-full pt-[90%]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
          src={imageUrl}
          alt={`Foto de ${name}`}
        />
      </div>

      {/* Contenido de texto */}
      <div className="pt-4 pb-2 px-1 sm:px-2 text-left">
        <h2 className="font-bold text-2xl mb-3">{name}</h2>
        <p className="text-gray-300 text-base mb-4">{description}</p>
        <h3 className="font-semibold text-lg mb-5">{role}</h3>

        {/* Iconos */}
        <div className="flex gap-4 text-2xl">
          {socialLinks.linkedin && socialLinks.linkedin !== '#' && (
            <a
              href={socialLinks.linkedin}
              className="hover:opacity-75 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          )}

          {socialLinks.github && socialLinks.github !== '#' && (
            <a
              href={socialLinks.github}
              className="hover:opacity-75 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          )}

          {socialLinks.dribbble && socialLinks.dribbble !== '#' && (
            <a
              href={socialLinks.dribbble}
              className="hover:opacity-75 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDribbble />
            </a>
          )}

          {socialLinks.behance && socialLinks.behance !== '#' && (
            <a
              href={socialLinks.behance}
              className="hover:opacity-75 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
