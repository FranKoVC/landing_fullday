import React from "react";

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
            AUDITORIO{" "}
            <span className="text-[#f6c453]">NICOLÁS COPÉRNICO</span>
          </h2>
        </div>

        {/* Mapa */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white">
          <iframe
            title="MMAPA AUDITORIO COPÉRNICO"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3949.884225523186!2d-79.0400585!3d-8.1132694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d9ef90488e9%3A0x73783cb69cf5bb17!2zVGVhdHLDrW4gTmljb2zDoXMgQ29ww6lybmljbw!5e0!3m2!1ses!2spe!4v1764972172275!5m2!1ses!2spe"
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