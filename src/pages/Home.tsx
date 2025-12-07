import React from "react";
import Header from "../components/Header";
import CountDown from "../components/CountDown";
import Agenda from "../components/Agenda";
import PonentesHome from "../components/PonentesHome";
import SponsorSection from "../components/SponsorSection";
import Ubicacion from "../components/Ubicacion";
import FAQSection from "../components/FAQSection";
import homeImage from "../assets/home.png";
import Footer from "../components/Footer";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

type Benefit = {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

const Home: React.FC = () => {
  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Red de Expertos",
      subtitle: "Networking",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3 12h18M12 3c2.6 2.9 2.6 15.1 0 18c-2.6-2.9-2.6-15.1 0-18Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Conocimiento Aplicado",
      subtitle: "Casos Reales",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7l10 5 10-5-10-5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Desarrollo Integral",
      subtitle: "Talleres",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="6"
            width="18"
            height="13"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3 10h18M8 6V4M16 6V4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Respaldo Formal",
      subtitle: "Certificado",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="3"
            width="16"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 11l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 19v3l2-1 2 1v-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#0a1929] text-white">
      <Header />

      {/* Ponente de fondo*/}
      <section
        id="inicio"
        className="relative w-full min-h-screen overflow-hidden bg-[#0a1929]"
      >
        {/* Degradado de fondo con curvas */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#1e3a5f]/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#0d47a1]/10 blur-3xl" />
          </div>
        </div>

        {/* Imagen de fondo a la izquierda - MOVIDA MÁS A LA DERECHA */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 overflow-hidden">
          <img
            src={homeImage}
            alt="Speaker Full Day"
            className="absolute top-0 w-full h-full object-cover object-[15%_center] lg:object-[25%_center]"
          />
          {/* Overlay para transición suave */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#0a1929]/20 to-[#0a1929]" />
        </div>

        {/* contenido principal - texto centrado */}
        <div className="relative w-full px-6 lg:px-16 pt-24 pb-20 min-h-screen flex items-center">
          <div className="w-full lg:w-3/5 lg:ml-auto space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <div className="flex items-center gap-2 text-sm text-[#1fbac3] font-medium justify-center lg:justify-start">
                <div className="w-8 h-0.5 bg-[#1fbac3]" />
                <span>13 DIC 2025</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Impulsa tus conocimientos
              <br />
              en Gestión de Tecnologías
              <br />
              de la Información
            </h1>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                El 11° Full Day de Gestión de TI, organizado por la Promoción
                XXVI de la Escuela de Ingeniería de Sistemas de la UNT, reúne a
                especialistas, ponentes y profesionales del sector para
                compartir experiencias, buenas prácticas y enfoques modernos
                sobre cómo dirigir, gestionar y alinear la tecnología con los
                objetivos organizacionales.
              </p>
              <p>
                Es una oportunidad única para aprender, actualizarte, conectar
                con expertos y ampliar tu visión sobre la gestión estratégica de
                TI.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <p className="text-sm text-slate-400">
                Explora de cerca el mundo de la Gestión de TI
              </p>

              <div className="flex justify-center lg:justify-start">
                <Link
                  to="/inscribete"
                  className="inline-block px-8 py-3 rounded-full bg-[#1fbac3] hover:bg-[#17a7af] text-sm font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-[#1fbac3]/30 hover:shadow-[#1fbac3]/50 hover:-translate-y-0.5"
                >
                  INSCRIBETE AHORA
                </Link>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-4 pt-6 justify-center lg:justify-start">
              <a
              href="https://www.instagram.com/xi_fulldaygestionti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1fbac3] flex items-center justify-center transition-all duration-300"
              >
              <FiInstagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          QUIÉNES SOMOS + BENEFICIOS
          SIN BORDES - DEGRADADO CONTINUO
         ======================= */}
      <section className="relative w-full bg-linear-to-b from-[#0a1929] via-[#0a1a2a] to-[#0d1f35]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Quiénes somos */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                QUIÉNES SOMOS
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                El 11º Full Day de Gestión de TI es un espacio académico y
                profesional, diseñado para que estudiantes, egresados y
                profesionales profundicen en los principios y tendencias
                actuales. Ofrecemos una jornada intensiva de aprendizaje con
                ponentes experimentados y contenido actualizado que fortalecerá
                tus competencias, ampliará tu visión estratégica y te permitirá
                entender mejor el impacto de la tecnología en la toma de
                decisiones. Creemos que este tipo de eventos impulsa el
                crecimiento, la innovación y el desarrollo profesional en el
                campo de TI.
              </p>
            </div>

            {/* Beneficios */}
            <div className="space-y-6">
              <h3 className="text-sm text-slate-400 font-semibold uppercase tracking-wider">
                BENEFICIOS DE ASISTIR AL FULL DAY
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {benefits.map((b, i) => (
                  <div
                    key={b.id}
                    className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl text-center transition-all duration-300 ${
                      i === 0
                        ? "bg-[#1fbac3] text-white shadow-lg shadow-[#1fbac3]/30"
                        : "bg-white/5 hover:bg-white/10 text-slate-200"
                    }`}
                  >
                    <div
                      className={`${i === 0 ? "text-white" : "text-slate-300"}`}
                    >
                      {b.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{b.title}</p>
                      <p
                        className={`text-xs mt-1 ${
                          i === 0 ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {b.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
              COUNTDOWN
         ======================= */}
      <CountDown />

      {/* =======================
              AGENDA
         ======================= */}

      <Agenda />

      {/* =======================
              PONENTES (Carrusel)
           ======================= */}
      <PonentesHome />

      {/* =======================
              SPONSORS
           ======================= */}
      <SponsorSection />

      {/* =======================
              UBICACIÓN
         ======================= */}
      <Ubicacion />

      {/* =======================
              FAQ
         ======================= */}
      <FAQSection />

      {/* =======================
              FOOTER SIMPLE
         ======================= */}
      <Footer />
    </div>
  );
};

export default Home;
