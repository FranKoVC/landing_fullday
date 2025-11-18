import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgInscribete from "../assets/fondo.png";

const Inscribete: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen text-white flex flex-col">

      {/* Imagen de fondo de toda la página */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgInscribete})` }}
      />

      <Header />

      {/* Contenido principal */}
      <main className="flex-1">
        {/* Sección con título encima de la imagen */}
        <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            INSCRÍBETE AHORA
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl">
            Completa tus datos para reservar tu cupo y recibir la confirmación en tu correo institucional.
          </p>
        </section>

        {/* Sección de formulario y sponsors */}
        <section className="max-w-5xl mx-auto px-6 py-10">
          {/* Formulario */}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Inscribete;
