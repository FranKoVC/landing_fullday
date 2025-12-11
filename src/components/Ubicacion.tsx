import React from "react";

const UbicacionSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-no-repeat bg-cover">
      <div className="max-w-7xl mx-auto px-6">
        {/* Títulos */}
        <div className="mb-8">
          <p className="text-xs md:text-sm tracking-[0.2em] text-slate-300 uppercase">
            UBICACIÓN
          </p>
          <h2 className="text-2xl md:text-3xl text-white font-bold leading-tight mt-2">
            TEATRÍN DE <span className="text-[#f6c453]">HUMANIDADES</span>
          </h2>
        </div>

        {/* Mapa */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white">
          <iframe
            title="MAPA TEATRÍN HUMANIDADES"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.8881614955867!2d-79.03842602517781!3d-8.11286889191633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d9c2f584a39%3A0x9ffa4b4052a512f7!2sTeatr%C3%ADn%20de%20Humanidades!5e0!3m2!1ses-419!2spe!4v1765479280503!5m2!1ses-419!2spe"
            className="w-full h-[260px] md:h-[360px] border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default UbicacionSection;
