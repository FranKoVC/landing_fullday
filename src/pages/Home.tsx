import React from "react";
import Header from "../components/Header";
import CountDown from "../components/CountDown";
import Agenda from "../components/Agenda";
import PonentesHome from "../components/PonentesHome";
import SponsorSection from "../components/SponsorSection";
import UbicacionSection from "../components/UbicacionSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


type Benefit = {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

const Home: React.FC = () => {
  /* =======================
      IMÁGENES (REEMPLAZA)
     ======================= */
  const heroImage = "/assets/hero.jpg"; // ✅ pon tu imagen en public/assets o cambia ruta

  /* =======================
          DATA MOCKUP
     ======================= */

  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Red global",
      subtitle: "Networking",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
      title: "Casos reales",
      subtitle: "Innovación",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M4 12h3M17 12h3M12 4v3M12 17v3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Talleres",
      subtitle: "Práctica",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 8h8M8 12h8M8 16h5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Certificado",
      subtitle: "Participación",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="3"
            width="16"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7 8h10M7 12h10M7 16h6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#061937] text-white">

<Header/>

      {/* =======================
              HERO
         ======================= */}
      <section
        id="inicio"
        className="relative w-full min-h-[85vh] md:min-h-[95vh] overflow-hidden bg-[#061937]"
      >
        {/* fondo degradado */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-[#061937] to-[#061937]" />

        {/* imagen hero izquierda */}
        <img
          src={heroImage}
          alt="Hero"
          className="absolute left-0 top-0 h-full w-full md:w-1/2 object-cover object-center opacity-90"
        />

        {/* overlay para suavizar imagen */}
        <div className="absolute inset-0 bg-[#061937]/60 md:bg-transparent md:from-[#061937]/80 md:via-[#061937]/40 md:to-transparent md:bg-linear-to-r" />

        {/* contenido */}
        <div className="relative max-w-6xl mx-auto px-4 pt-28 md:pt-32 pb-20 grid gap-10 md:grid-cols-2 items-center">
          {/* columna izquierda vacía en desktop para respetar imagen */}
          <div className="hidden md:block" />

          {/* columna derecha texto */}
          <div className="space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-wide">
              Impulsa tus Conocimientos
              <br />
              en Gobierno de Tecnologías
              <br />
              de la Información
            </h1>

            <p className="text-sm md:text-base text-slate-200 leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              bibendum, sapien non viverra pretium, metus urna viverra lorem,
              sed condimentum elit risus et sapien.
            </p>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-slate-300">
                26 FullDay
              </p>
              <p className="text-sm text-slate-100 mt-1">
                Explora de cerca el mundo
                <br />
                de Gobierno de TIC
              </p>

             <Link
  to="/inscribete"
  className="mt-4 inline-block px-5 py-2 rounded-full bg-[#1fbac3] hover:bg-[#17a7af] text-xs font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-[#1fbac3]/30 hover:shadow-[#1fbac3]/50 hover:-translate-y-0.5"
>
  INSCRÍBETE YA
</Link>
            </div>
          </div>
        </div>

        {/* =======================
            QUIÉNES SOMOS + BENEFICIOS
           ======================= */}
        <div className="relative w-full bg-[#061937] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-2 items-start">
            {/* Quiénes somos */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-wide">
                QUIÉNES SOMOS
              </h2>
              <p className="text-sm text-slate-200 leading-relaxed">
                Full Day es un evento académico enfocado en el Gobierno de TI,
                impulsado por estudiantes y docentes, con el objetivo de crear
                un espacio de aprendizaje, innovación y networking entre la
                comunidad universitaria y profesional.
              </p>
              <button
                className="mt-2 px-5 py-2 rounded-full bg-[#1fbac3] hover:bg-[#17a7af] text-[11px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                type="button"
              >
                VER MÁS
              </button>
            </div>

            {/* Beneficios */}
            <div>
              <p className="text-xs text-slate-300 font-semibold mb-3">
                Beneficios de asistir al Full Day
              </p>

              <div className="grid grid-cols-4 bg-white/5 rounded-xl overflow-hidden border border-white/10">
                {benefits.map((b, i) => (
                  <div
                    key={b.id}
                    className={`flex flex-col items-center justify-center gap-2 p-5 text-center transition-all duration-300 ${
                      i === 0
                        ? "bg-[#1fbac3]/30 text-white"
                        : "hover:bg-white/10 text-slate-200"
                    }`}
                  >
                    <div className="text-white/90">{b.icon}</div>
                    <p className="text-xs font-semibold">{b.title}</p>
                    <p className="text-[10px] text-slate-200/80">
                      {b.subtitle}
                    </p>
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
      <UbicacionSection />

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
