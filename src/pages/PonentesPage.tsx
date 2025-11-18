// src/pages/PonentesPage.tsx

import React from 'react';

const PonentesPage: React.FC = () => {
  return (
    <div className="min-h-screen">

      {/* ========================================================== */}
      {/* ZONA 1: Navbar y Ponentes (SIN CAMBIOS) */}
      {/* ========================================================== */}
      <section className="relative min-h-screen bg-[#10284B] overflow-hidden">
        {/* Capa de Imagen */}
        <img
          src="/images/fondo_po.png"
          alt="Fondo decorativo"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        {/* Capa de Degradado */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-[#10284B]" />
        
        {/* Capa de Contenido */}
        <div className="relative z-30">
          {/* --- Componente 1: Navbar (Placeholder) --- */}
          <nav className="text-white p-6">
            <div className="container mx-auto flex justify-between items-center">
              <h2 className="text-2xl font-bold">[Logo - Aquí va el Navbar]</h2>
              <div className="space-x-4">
                <span>[Enlace 1]</span>
                <span>[Enlace 2]</span>
              </div>
            </div>
          </nav>

          {/* --- Componente 2: Ponentes (Placeholder) --- */}
          <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-80px)] text-white">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-white">CONOCE A </span>
                <span className="text-yellow-400">NUESTROS PONENTES</span>
              </h1>
              <p className="text-lg max-w-2xl mx-auto">
                (Aquí irá el componente "Ponentes")
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- FIN DE LA ZONA 1 --- */}


      {/* ========================================================== */}
      {/* ZONA 2: Ubicacion (¡AQUÍ ESTÁ EL CAMBIO!) */}
      {/* ========================================================== */}
      
      {/* CAPA 1 (Fondo): Sigue igual */}
      <section className="relative py-20 bg-[#10284B] overflow-hidden">

        {/* CAPA 2 (Medio): El 'Vector.png' con las clases EXACTAS */}
        <img
          src="/images/Vector.png"
          alt="Vector decorativo"
          className="absolute z-10 w-[2838px] h-[863px] top-[-100px] left-[-93px] rotate-180 mix-blend-soft-light opacity-100 border-[0.5px] max-w-none"
        />

        {/* CAPA 3 (Arriba): Contenido (Corregido a 'text-white') */}
        <div className="relative z-20 container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">UBICACIÓN</h2>
          <p className="text-lg">
            (Aquí irá el componente "Ubicacion")
          </p>
          <div className="mt-8 w-full max-w-4xl h-96 bg-gray-300 mx-auto rounded-lg flex items-center justify-center shadow-lg">
            [Espacio para el mapa]
          </div>
        </div>
      </section>
      {/* --- FIN DE LA ZONA 2 --- */}


      {/* ========================================================== */}
      {/* ZONA 3: Footer (SIN CAMBIOS) */}
      {/* ========================================================== */}
      <footer className="bg-[#10284B] text-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-xl mb-4">[Aquí va el componente "Footer"]</h2>
          <p className="mt-4 text-sm text-gray-400">
            © 2025 Tu Evento. Todos los derechos reservados.
          </p>
        </div>
      </footer>
      {/* --- FIN DE LA ZONA 3 --- */}

    </div>
  );
};

export default PonentesPage;