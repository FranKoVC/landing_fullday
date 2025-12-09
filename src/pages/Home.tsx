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
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
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

      {/* HERO + QUIÉNES SOMOS EN LA MISMA SECCIÓN */}
      <section
        id="inicio"
        className="relative w-full overflow-hidden bg-[#0a1929]"
      >
        {/* Degradado de fondo con curvas */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full bg-[#1e3a5f]/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full bg-[#0d47a1]/10 blur-3xl" />
          </div>
        </div>

        {/* Imagen de fondo a la izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 overflow-hidden">
          <img
            src={homeImage}
            alt="Speaker Full Day"
            className="absolute top-0 w-full h-full object-cover object-[15%_center] lg:object-[25%_center] opacity-40 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#0a1929]/60 to-[#0a1929] lg:via-[#0a1929]/20" />
        </div>

        {/* Contenido principal del hero */}
        <div className="relative w-full px-4 sm:px-6 lg:px-16 pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 min-h-[90vh] lg:min-h-screen flex items-center">
          <div className="w-full lg:w-3/5 lg:ml-auto space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1fbac3] font-medium justify-center lg:justify-start">
                <div className="w-6 sm:w-8 h-0.5 bg-[#1fbac3]" />
                <span>13 DIC 2025</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight px-2 sm:px-0">
              Impulsa tus conocimientos
              <br />
              en Gestión de Tecnologías
              <br />
              de la Información
            </h1>

            <div className="space-y-3 sm:space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base px-2 sm:px-0">
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

            <div className="space-y-3 pt-2 sm:pt-4">
              <p className="text-xs sm:text-sm text-slate-400">
                Explora de cerca el mundo de la Gestión de TI
              </p>

                <div className="flex justify-center lg:justify-start">
                <Link
                  to="/inscribete"
                  className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#1fbac3] hover:bg-[#17a7af] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-[#1fbac3]/30 hover:shadow-[#1fbac3]/50 hover:-translate-y-0.5"
                >
                  INSCRIBETE AHORA
                </Link>
                </div>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-4 pt-4 sm:pt-6 justify-center lg:justify-start">
              <a
                href="https://www.instagram.com/xi_fulldaygestionti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#1fbac3] flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61583897481967&mibextid=wwXIfr&rdid=YLnimlv5OE9yfakf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AAKZ9RzB8%2F%3Fmibextid%3DwwXIfr"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#1fbac3] flex items-center justify-center transition-all duration-300"
              >
                <FaFacebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/xi-full-day-gesti%C3%B3n-de-ti-30ba03399/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BN1bm%2FopoQI%2BdvK6wzJJrCw%3D%3D"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#1fbac3] flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              </div>
          </div>
        </div>

        {/* QUIÉNES SOMOS + BENEFICIOS (MISMO FONDO, SIN LÍNEA) */}
        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
              {/* Quiénes somos */}
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  QUIÉNES SOMOS
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                  El 11º Full Day de Gestión de TI es un espacio académico y
                  profesional, diseñado para que estudiantes, egresados y
                  profesionales profundicen en los principios y tendencias
                  actuales. Ofrecemos una jornada intensiva de aprendizaje con
                  ponentes experimentados y contenido actualizado que
                  fortalecerá tus competencias, ampliará tu visión estratégica y
                  te permitirá entender mejor el impacto de la tecnología en la
                  toma de decisiones. Creemos que este tipo de eventos impulsa
                  el crecimiento, la innovación y el desarrollo profesional en
                  el campo de TI.
                </p>
              </div>

              {/* Beneficios */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xs sm:text-sm text-slate-400 font-semibold uppercase tracking-wider">
                  BENEFICIOS DE ASISTIR AL FULL DAY
                </h3>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {benefits.map((b) => (
                    <div
                      key={b.id}
                      className="
                        group flex flex-col items-center justify-center gap-2 sm:gap-3
                        p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center
                        transition-all duration-300
                        bg-white/5 text-slate-200
                        hover:bg-[#1fbac3] hover:text-white
                        hover:shadow-lg hover:shadow-[#1fbac3]/30
                      "
                    >
                      <div className="text-xl sm:text-2xl text-slate-300 transition-colors group-hover:text-white">
                        {b.icon}
                      </div>

                      <div>
                        <p className="text-xs sm:text-sm font-semibold">{b.title}</p>
                        <p className="text-[10px] sm:text-xs mt-1 text-slate-300 transition-colors group-hover:text-white/90">
                          {b.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <CountDown />

      {/* AGENDA */}
      <Agenda />

      {/* PONENTES (Carrusel) */}
      <PonentesHome />

      {/* SPONSORS */}
      <SponsorSection />

      {/* ========================================================== */}
      {/* ZONA 2: Ubicacion */}
      {/* ========================================================== */}
      <section className="relative z-20 bg-[#00193e] overflow-hidden">

        {/* Fondo Vector */}
        <img
          src="/images/Vector.png"
          alt="Vector decorativo"
          className="absolute z-10 w-[300%] sm:w-[250%] md:w-[200%] lg:w-[2838px] max-w-none h-auto md:h-[863px] top-[-30px] sm:top-[-50px] md:top-[-100px] lg:top-[-180px] left-[-50%] sm:left-[-40%] md:left-[-20%] lg:left-[-93px] rotate-180 mix-blend-soft-light opacity-40 sm:opacity-50 md:opacity-60 pointer-events-none"
        />

        {/* Contenido Ubicación */}
        <div className="relative z-20 w-full">
           <Ubicacion />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;