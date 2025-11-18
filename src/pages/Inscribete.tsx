import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Inscribete: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#0b1833] text-white">
      <Header />

      {/* Deja un padding-top porque el header está fixed */}
      <main className="pt-24">
        {/* Aquí luego metes todo el contenido de tu pantalla:
            título INSCRÍBETE AHORA, formulario, ubicación, sponsors */}
      </main>

      <Footer />
    </div>
  );
};

export default Inscribete;
