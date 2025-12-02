import React from "react";

interface SponsorCardProps {
  name: string;
  imageSrc: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, imageSrc }) => {
  return (
    <article className="flex flex-col items-center">
      <div className="w-20 h-20 flex items-center justify-center bg-white/5 rounded-xl p-2 shadow-md">
        <img
          src={imageSrc}
          alt={`Logo de ${name}`}
          className="w-full h-full object-contain"
        />
      </div>

      <p className="mt-3 text-s text-slate-300">{name}</p>
    </article>
  );
};

export default SponsorCard;
