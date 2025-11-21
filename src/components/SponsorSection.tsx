import React from "react";

const SponsorsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#00193e] py-16 md:py-20">
  <div className="max-w-6xl mx-auto px-6">

    {/* ENCABEZADO + LOGOS EN UNA SOLA FILA */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-8">

      {/* Títulos a la izquierda */}
      <div className="flex-1">
        <p className="text-xs md:text-sm tracking-[0.2em] text-slate-300 uppercase">
          SPONSORS
        </p>
        <p className="mt-3 text-sm md:text-base text-slate-300 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
    
      {/* Logos: dos filas fijas de 5 columnas */}
      <div className="grid grid-cols-5 gap-y-10 gap-x-6 flex-1">

        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            {/* Caja del logo */}
            <div className="h-14 w-14 md:h-16 md:w-16 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center">
              <span className="text-[10px] md:text-xs text-slate-100 font-semibold">
                Logo
              </span>
            </div>

            {/* Texto pegado sin romper filas */}
            <span className="text-[10px] md:text-xs text-slate-300 mt-1 leading-none">
              Sponsor
            </span>
          </div>
        ))}

      </div>


    </div>

  </div>
</section>
  );
}

export default SponsorsSection;
