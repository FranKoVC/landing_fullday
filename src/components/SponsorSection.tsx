import React from "react";
import SponsorCard from "./SponsorCard";
import { sponsors } from "../data/sponsor";

const SponsorsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#061937] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

          {/* 1. TEXTO INTRODUCTORIO (Lado Izquierdo) */}
          <div className="lg:w-1/3 text-center lg:text-left space-y-4">
            <div className="inline-block px-3 py-1 border border-yellow-500/30 rounded-full bg-yellow-500/5">
                <span className="text-[10px] font-bold tracking-[0.2em] text-yellow-400 uppercase">
                    Nuestros Aliados
                </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              RESPALDADO POR <br/>
              <span className=" bg-clip-text bg-linear-to-r text-[#f6c453]">
                GRANDES MARCAS
              </span>
            </h2>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              Gracias al respaldo de empresas líderes que hacen posible este evento e impulsan el desarrollo y crecimiento de nuestra región
            </p>
          </div>
        
          {/* 2. GRID DE LOGOS (Lado Derecho - MÁS GRANDE) */}
          <div className="lg:w-2/3 w-full">
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-10">
              {sponsors.map((sponsor) => (
                <SponsorCard 
                    key={sponsor.id}
                    name={sponsor.name}
                    imageSrc={sponsor.imageSrc}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SponsorsSection;