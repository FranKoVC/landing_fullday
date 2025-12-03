import React from "react";
//import bgLines from "../assets/bg-lines.png"; 

const UbicacionSection: React.FC = () => {
  return (
    <section
      className="w-full py-16 bg-no-repeat bg-cover"

    >
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Títulos */}
        <div className="mb-8">
          <p className="text-xs md:text-sm tracking-[0.2em] text-slate-300 uppercase">
            UBICACIÓN
          </p>
          <h2 className="text-2xl md:text-3xl text-white font-bold leading-tight mt-2">
            AUDITORIO DE{" "}
            <span className="text-[#f6c453]">HUMANIDADES</span>
          </h2>
        </div>

        {/* Mapa */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white">
          <iframe
            title="Mapa Auditorio de Humanidades"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d493.7359758316481!2d-79.035992!3d-8.112905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d9c2f584a39%3A0x9ffa4b4052a512f7!2sTeatr%C3%ADn%20de%20Humanidades!5e0!3m2!1ses!2sus!4v1763709440105!5m2!1ses!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[260px] md:h-[360px] border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default UbicacionSection;