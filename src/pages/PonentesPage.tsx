// src/pages/PonentesPage.tsx
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PonenteCard from "../components/PonenteCard";
import { speakers } from "../data/ponentes";
import UbicacionSection from "../components/UbicacionSection";

const PonentesPage: React.FC = () => {
  return (
    <div className="min-h-screen">

      {/* ========================================================== */}
      {/* ZONA 1: Navbar y Ponentes */}
      {/* ========================================================== */}
      <section className="relative min-h-screen bg-[#00193e] overflow-hidden flex flex-col">
        
        {/* -------------------------------------------------------- */}
        {/* FONDO */}
        {/* -------------------------------------------------------- */}
        <img
          src="/images/fondo_po.png"
          alt="Fondo decorativo"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-[#00193e]" />
        
        {/* -------------------------------------------------------- */}
        {/* CONTENIDO  */}
        {/* -------------------------------------------------------- */}
        <div className="relative z-30 w-full h-full flex flex-col">
          
          <Header />
          <div className="w-full max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-4 text-white">
            
            {/* Títulos y Descripción */}
            <div className="text-center w-full mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white block md:inline mr-2">CONOCE A</span>
                <span className="text-yellow-400">NUESTROS PONENTES</span>
              </h1>
              
              {/* Ancho de lectura controlado */}
              <p className='max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-gray-200'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus suscipit quod nisi laudantium, velit expedita id ipsum a temporibus non, tenetur at eos animi ratione debitis beatae ea? Inventore, iusto?
              </p>
            </div>

            {/* Grid de Ponentes */}
            <div className='w-full'>
              <div className="grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {speakers.map((speaker) => (
                  <Link
                    key={speaker.id}
                    to={`/ponentes/${speaker.id}`}
                    className="block transform hover:scale-105 transition-transform duration-300 h-full"
                  >
                    <PonenteCard
                      name={speaker.name}
                      role={speaker.role}
                      imageSrc={speaker.imageSrc}
                      variant="grid"
                    />
                  </Link>
                ))}
              </div>
            </div>
              
          </div>
        </div>
      </section>


      {/* ========================================================== */}
      {/* ZONA 2: Ubicacion */}
      {/* ========================================================== */}
      <section className="relative  bg-[#00193e] overflow-hidden">

        {/* -------------------------------------------------------- */}
        {/* FONDO VECTOR */}
        {/* -------------------------------------------------------- */}
        <img
          src="/images/Vector.png"
          alt="Vector decorativo"
          className="absolute z-10 w-[200%] md:w-[2838px] max-w-none h-auto md:h-[863px] top-[-50px] md:top-[-180px] left-[-20%] md:left-[-93px] rotate-180 mix-blend-soft-light opacity-40 pointer-events-none"
        />

        {/* -------------------------------------------------------- */}
        {/* CONTENIDO UBICACIÓN */}
        {/* -------------------------------------------------------- */}
        <div className="relative z-20 w-full">
           <UbicacionSection />
        </div>
        
      </section>


      {/* ========================================================== */}
      {/* ZONA 3: Footer */}
      {/* ========================================================== */}
      <Footer />

    </div>
  );
};

export default PonentesPage;