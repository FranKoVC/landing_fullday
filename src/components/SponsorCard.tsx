import React from "react";

interface SponsorCardProps {
  name: string;
  imageSrc: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, imageSrc }) => {
  return (
    <article className="group w-full max-w-[220px]">
      <div className="bg-linear-to-b from-white/10 to-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-white/20 group-hover:border-sky-400/40">
        
        <div className="h-36 md:h-44 w-full flex items-center justify-center p-5 bg-transparent">
          <img
            src={imageSrc}
            alt={`Logo de ${name}`}
            className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          />
        </div>

        {/* BARRA DEL NOMBRE
           - bg-black/20: Fondo oscuro semitransparente para la barra inferior.
           - border-white/10: Separador sutil.
        */}
        <div className="bg-black/20 border-t border-white/10 py-3 px-2 relative z-10">
          {/* Texto claro para que se lea sobre el fondo oscuro */}
          <h3 className="text-xs font-bold text-slate-300 text-center uppercase tracking-wider group-hover:text-white transition-colors">
            {name}
          </h3>
        </div>

      </div>
    </article>
  );
};

export default SponsorCard;