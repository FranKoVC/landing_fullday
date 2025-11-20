import React from "react";

const SponsorsSection: React.FC = () => {
  // Por ahora simulamos sponsors con un array simple
  const sponsors = Array.from({ length: 8 });

  return (
    <section className="w-full bg-[#051024] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Títulos */}
        <div className="mb-10">
          <p className="text-xs md:text-sm tracking-[0.2em] text-slate-300 uppercase">
            SPONSORS
          </p>
          <p className="mt-3 text-sm md:text-base text-slate-300 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>

        {/* Grid de logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-10">
          {sponsors.map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3"
            >
              {/* Caja del logo (placeholder) */}
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center">
                <span className="text-xs md:text-sm text-slate-100 font-semibold">
                  Logo
                </span>
              </div>
              <span className="text-[11px] md:text-xs text-slate-300">
                Sponsor
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
