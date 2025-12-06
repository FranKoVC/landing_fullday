import React from "react";
import SponsorCard from "../components/SponsorCard";
import { modulos } from "../data/sponsor";

const PruebaModulos: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#061937] text-white">
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Texto izquierdo */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
            SPONSORS
          </h2>

          <p className="mt-4 text-xs md:text-sm text-slate-300 max-w-xs leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>

        {/* Grid de logos */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
          {modulos.map((m) => (
            <SponsorCard
              key={m.id}
              name={m.name}
              imageSrc={m.imageSrc}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default PruebaModulos;
