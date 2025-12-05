import React, { useEffect } from "react"; // 1. Importar useEffect
import { useNavigate } from "react-router-dom"; // 2. Importar useNavigate
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgInscribete from "../assets/fondo.png";
import UbicacionSection from "../components/UbicacionSection";
import SponsorsSection from "../components/SponsorSection";
import GlassContador from "../components/steps/GlassContador";
import StepHeader from "../components/steps/StepHeader3";
import StepFinal from "../components/steps/StepFinal";
import { useRegistration } from "../components/steps/RegistrationContext"; // 3. Importar el Contexto

const InscribeteCheck: React.FC = () => {
  const navigate = useNavigate();
  const { registrationData } = useRegistration();

  // === PROTECCIÓN DE RUTA ===
  // Si el usuario recarga aquí (F5), los datos se borran.
  // Lo redirigimos al inicio para que no vea la pantalla de éxito vacía.
  useEffect(() => {
    if (!registrationData.documentNumber || !registrationData.fullName) {
      navigate("/inscribete");
    }
  }, [registrationData, navigate]);

  // Si no hay datos, evitamos renderizar el resto mientras redirige
  if (!registrationData.documentNumber) return null;

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
          <GlassContador />

          <div className="max-w-5xl w-full mx-auto mt-20">
            {/* Título */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-3">
                INSCRÍBETE <span className="text-[#f6c453]">AHORA</span>
              </h1>
              <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto">
                Regístrate gratis al 11.º Full Day de Gestión de TI y asegura tu lugar. 
              </p>
              <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto">
                Completa los siguientes pasos para inscribirte
              </p>
            </div>
            
            {/* Pasos y Componente Final */}
            <StepHeader />
            <StepFinal />
            
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

export default InscribeteCheck;