import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgInscribete from "../assets/fondo.png";
import InscripcionForm from "../components/Forms";
import UbicacionSection from "../components/UbicacionSection";
import SponsorsSection from "../components/SponsorSection";



const Inscribete: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen text-white flex flex-col">     

      <Header />

      {/* Contenido principal */}

      <main className="flex-1">

        {/* Sección con título encima de la imagen */}
        <section
          className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 pt-40 bg-cover bg-top"
          style={{ backgroundImage: `url(${bgInscribete})` }}
        >
                
       <div className="max-w-5xl w-full mx-auto">
            {/* Título */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-3">
                INSCRÍBETE <span className="text-[#f6c453]">AHORA</span>
              </h1>
              <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto">
                Completa tus datos para reservar tu cupo y recibir la
                confirmación en tu correo institucional.
              </p>
            </div>
            {/* Formulario como componente */}
            <InscripcionForm />

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
            className="absolute z-10 w-[200%] md:w-[2838px] max-w-none h-auto md:h-[863px] top-[-50px] md:top-[-180px] left-[-20%] md:left-[-93px] rotate-180 mix-blend-soft-light opacity-60 pointer-events-none"
          />

          {/* -------------------------------------------------------- */}
          {/* CONTENIDO UBICACIÓN */}
          {/* -------------------------------------------------------- */}
          <div className="relative z-20 w-full">
            <UbicacionSection />
          </div>
          
        </section>

        {/* Sponsors */}
        <SponsorsSection />

      </main>

      <Footer />
    </div>
  );
};

export default Inscribete;
