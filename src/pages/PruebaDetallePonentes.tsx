import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PonenteCard from "../components/PonenteCard";
import { speakers, getSpeakerById } from "../data/ponentes";
import Footer from "../components/Footer";
import { FaLinkedin, FaUserTie, FaEnvelope } from "react-icons/fa";
import logo from "../assets/Logo-DarkMode.png";

const DetallePonente: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Scroll al inicio cuando carga la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const numericId = id ? Number(id) : speakers[0].id;
  const mainSpeaker = getSpeakerById(numericId) ?? speakers[0];

  // Filtrar otros ponentes
  const otherSpeakers = speakers.filter((s) => s.id !== mainSpeaker.id);

  return (
    <main className="min-h-screen bg-[#061937] text-white font-sans">

      {/* ========================================================== */}
      {/* HERO MEJORADO: LOGO + BOTÓN PRO + ZOOM */}
      {/* ========================================================== */}
      <section className="relative w-full bg-[#041229] overflow-hidden">
        
        {/* 1. CAJA MAESTRA CENTRAL */}
        <div className="relative max-w-7xl mx-auto h-[280px] md:h-[350px] lg:h-[450px] w-full">
          <div className="absolute top-6 left-4 z-30">
            <img 
              src={logo} 
              alt="Logo FullDay" 
              className="h-26 md:h-34 w-auto drop-shadow-lg"
            />
          </div>

          <img
            src={mainSpeaker.imageSrc}
            alt={mainSpeaker.name}
            className="absolute right-0 top-18 h-full w-auto object-contain z-0 
                       scale-135 origin-bottom-right" 
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#041229] via-[#041229]/70 to-transparent z-10" />

          <div className="absolute inset-0 bg-linear-to-t from-[#041229] via-transparent to-transparent z-10" />

          <div className="absolute bottom-0 left-0 px-4 pb-8 z-20 w-full md:w-2/3">
             <button
                onClick={() => navigate('/ponentes')}
                className="group mb-5 inline-flex items-center gap-2 px-5 py-2 rounded-full 
                           bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30
                           backdrop-blur-md transition-all duration-300 ease-out"
              >
                {/* La flecha se mueve al hacer hover */}
                <span className="text-lg text-sky-300 group-hover:-translate-x-1 transition-transform duration-300">
                  &larr;
                </span>
                <span className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-white">
                  Regresar
                </span>
              </button>

              <h1 className="text-3xl md:text-5xl font-bold uppercase text-white drop-shadow-xl tracking-tight">
                {mainSpeaker.name.split(" ")[0]}{" "}
                <span className="text-[#ffb01f]">
                  {mainSpeaker.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              <p className="mt-2 text-sm md:text-lg text-slate-200 max-w-xl font-light drop-shadow-md border-l-4 border-[#ffb01f] pl-4">
                {mainSpeaker.role}
              </p>
          </div>

        </div>
      </section>

      {/* ========================================================== */}
      {/* CUERPO PRINCIPAL */}
      {/* ========================================================== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* COLUMNA IZQUIERDA (8 columnas) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. SECCIÓN: SOBRE MÍ */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <FaUserTie className="text-sky-400" /> Sobre mí
              </h2>
              <p className="text-base text-slate-200 leading-relaxed text-justify">
                {mainSpeaker.description}
              </p>
            </div>

            {/* 2. SECCIÓN: CONTACTO (Solo LinkedIn) */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
               <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <FaEnvelope className="text-sky-400" /> Información de contacto
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                {mainSpeaker.linkedin && (
                  <a 
                    href={mainSpeaker.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 bg-[#0a66c2] hover:bg-[#004182] rounded-lg transition-all shadow-lg hover:shadow-sky-500/20 w-full sm:w-auto justify-center text-sm font-medium"
                  >
                    <FaLinkedin className="text-xl" />
                    Conectar en LinkedIn
                  </a>
                )}
              </div>
            </div>

            {/* 3. SECCIÓN: TRAYECTORIA (ESTILO IMAGEN PIL) */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide text-white mb-8 border-b border-white/10 pb-2">
                Mi Experiencia
              </h2>

              {/* Contenedor del Timeline */}
              <div className="relative">
                {/* Línea vertical conectora (Ajustada para pasar por el centro de las píldoras) */}
                {/* Ajusta 'left-[70px]' si cambias el ancho de las píldoras */}
                <div className="absolute left-[70px] md:left-20 top-4 bottom-0 w-px bg-slate-500/50"></div>

                <div className="space-y-10">
                  {mainSpeaker.experience && mainSpeaker.experience.map((exp, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-10">
                      
                      {/* LADO IZQUIERDO: AÑO (Píldora) */}
                      <div className="relative z-10 shrink-0">
                        <div className=" w-[140px] md:w-40 py-2 border border-slate-400 rounded-full bg-[#061937] text-center text-sm text-slate-200 shadow-md">
                          {exp.period}
                        </div>
                      </div>

                      {/* LADO DERECHO: CONTENIDO */}
                      <div className="pt-1 md:pt-0">
                        <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                          {exp.role}
                        </h3>
                        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: BARRA LATERAL (4 columnas) */}
          <aside className="lg:col-span-4">
             <div className="sticky top-24">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-white/10 pb-2">
                  Otros Ponentes
                </h3>

                <div className="space-y-4">
                  {otherSpeakers.map((speaker) => (
                    <Link
                      key={speaker.id}
                      to={`/ponentes/${speaker.id}`}
                      className="block transform hover:-translate-x-1 transition-transform"
                    >
                      <PonenteCard
                        name={speaker.name}
                        role={speaker.role}
                        imageSrc={speaker.imageSrc}
                        variant="inline"
                      />
                    </Link>
                  ))}
                </div>
             </div>
          </aside>
        </div>
      </section>

      {/* FOOTER */}
      <div className="relative z-20">
        <Footer />
      </div>

    </main>
  );
};

export default DetallePonente;