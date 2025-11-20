import React from "react";
import bgLines from "../assets/bg-lines.png"; 

const UbicacionSection: React.FC = () => {
  return (
    <section
      className="w-full py-16 md:py-20 bg-[#00193e] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bgLines})`,
        backgroundPosition: "center top",   // 👈 que empiece arriba
      }}
    >
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Títulos */}
        <div className="mb-8">
          <p className="text-xs md:text-sm tracking-[0.2em] text-slate-300 uppercase">
            UBICACIÓN
          </p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mt-2">
            AUDITORIO DE{" "}
            <span className="text-[#f6c453]">HUMANIDADES</span>
          </h2>
        </div>

        {/* Mapa */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white">
          <iframe
            title="Mapa Auditorio de Humanidades"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.779157335657!2d-79.030836!3d-8.111739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d8b9e5a6a1f%3A0x9d1c7f8b2e21bd1!2sUniversidad%20Nacional%20de%20Trujillo!5e0!3m2!1ses-419!2spe!4v1700000000000"
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
