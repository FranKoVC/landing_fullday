// src/pages/Nosotros.tsx
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Promo from "/images/promo.jpg";

// Componente principal Nosotros
const Nosotros: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a1f44]">
      <Header />

      <div className="h-4 sm:h-6 md:h-8"></div>
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={Promo}
                alt="Promoción"
                className="w-full h-full object-cover opacity-70 transition-all duration-300 ease-in-out hover:scale-105"
              />
              {/* Gradiente radial desde el centro */}
              <div className="absolute inset-0 bg-linear-to-br from-[#0a1f44]/70 via-transparent to-[#0a1f44]/50"></div>
            </div>

            {/* Contenido */}
            <div className="relative px-6 sm:px-8 md:px-10 lg:px-12 py-10 sm:py-12 md:py-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                Promoción <span className="text-orange-500">XXVI</span>
              </h1>
              <p className="text-justify text-gray-300 max-w-2xl mb-2 sm:mb-3 md:mb-2 leading-relaxed text-sm sm:text-base">
                La Promoción XXVI de Ingeniería de Sistemas de la Universidad
                Nacional de Trujillo representa una generación de profesionales
                comprometidos con la excelencia académica y la innovación
                tecnológica. Formados bajo los más altos estándares educativos,
                nuestros egresados han desarrollado competencias sólidas en
                desarrollo de software, gestión de proyectos tecnológicos,
                análisis de datos, inteligencia artificial y arquitectura de
                sistemas.
              </p>
              <p className="text-justify text-gray-300 max-w-2xl mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Con una visión orientada al futuro, esta promoción se
                caracteriza por su capacidad de adaptación, trabajo en equipo y
                liderazgo tecnológico. Nuestros profesionales están preparados
                para enfrentar los desafíos de la transformación digital y
                contribuir al desarrollo tecnológico del país, aplicando
                soluciones innovadoras que impactan positivamente en la
                sociedad.
              </p>

            {/* Redes sociales */}
            <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/xi_fulldaygestionti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram - XI Fullday Gestión TI"
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-[#1fbac3] flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1fbac3]"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="text-white w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61583897481967&mibextid=wwXIfr&rdid=YLnimlv5OE9yfakf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AAKZ9RzB8%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook - XI Fullday Gestión TI"
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-[#1fbac3] flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1fbac3]"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="text-white w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>

              <a
                href="https://www.linkedin.com/in/xi-full-day-gesti%C3%B3n-de-ti-30ba03399/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BN1bm%2FopoQI%2BdvK6wzJJrCw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn - XI Fullday Gestión TI"
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-[#1fbac3] flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1fbac3]"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="text-white w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Docente Section */}
      <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-6 sm:mb-8 md:mb-10">
            DOCENTE A CARGO DEL EVENTO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
            {/* Foto del docente */}
            <div className="md:col-span-1 flex justify-center md:justify-start">
              {/* Agregamos 'group' aquí para controlar efectos internos si fuera necesario */}
              <div
                className="
                  relative
                  bg-[#1a3a5c]
                  rounded-xl
                  overflow-hidden /* IMPORTANTE: Esto recorta la imagen agrandada */
                  w-full max-w-sm md:max-w-none
                  transition-all duration-500 ease-out
                  /* Efectos Base */
                  ring-1 ring-cyan-500/30 shadow-lg shadow-cyan-500/20
                  /* Efectos Hover */
                  hover:shadow-2xl hover:shadow-cyan-400/50
                  hover:ring-cyan-400
                  hover:-translate-y-3
                "
              >
                {/* Capa de brillo superior opcional */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/0 to-cyan-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                <img
                  src="/images/ponentes/9foto.png"
                  alt="Docente"
                  // CAMBIOS AQUÍ EN EL CLASSNAME:
                  className="
                    w-full h-auto object-cover
                    transform transition-transform duration-700
                    /* 1. AGRANDAR DE BASE: scale-[1.15] hace la imagen 15% más grande que el contenedor inicialmente */
                    /* 2. MOVER HACIA ABAJO: translate-y-8 empuja la imagen hacia abajo (ajusta el 8 si es mucho/poco) */
                    /* 3. HOVER: Al pasar el mouse, la agrandamos aún más (125%) para un efecto zoom dramático */
                    hover:scale-[1.75]
                    /* Opcional: si quieres que al hacer hover suba un poquito mientras hace zoom, añade: hover:translate-y-6 */
                  "
                />
              </div>
            </div>

            {/* Información del docente */}
            <div className="md:col-span-1 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Ing. Alberto Carlos Mendoza de los Santos
              </h3>
              <p className="text-justify text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                Consultor empresarial y docente universitario, Doctor en
                Administración y en Ingeniería de Sistemas e Informática.
                Especialista en gobierno y auditoría de TI, con certificaciones
                internacionales y amplia experiencia como expositor en foros
                latinoamericanos.
              </p>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-orange-500 font-bold mb-2 text-sm sm:text-base">
                  Certificaciones
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm">
                  CISA | CDPSE | COBIT 5 F | COBIT 2019 F | ISO/IEC 27001 Senior
                  Lead Implementer | Academic Advocate ISG UNT
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-orange-500 font-bold mb-2 text-sm sm:text-base">Experiencia</h4>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Gestión de Procesos | Auditoría de TI | Continuidad de Negocio
                  | Gestión de Proyectos | Gestión de Riesgos de Ti
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-orange-500 font-bold mb-2 text-sm sm:text-base">Contacto</h4>
                <a
                  href="mailto:amendozad@unitru.edu.pe"
                  className="text-gray-300 text-xs sm:text-sm hover:text-orange-500 break-all"
                >
                  amendozad@unitru.edu.pe
                </a>
              </div>

              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://www.facebook.com/ALBERTOCARLOSMENDOZA?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <FaFacebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/alberto-mendoza-de-los-santos-9a391728/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Artículos destacados */}
            <div className="md:col-span-1">
              <h3 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">
                ARTÍCULOS DESTACADOS
              </h3>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                {[
                  {
                    id: 1,
                    title:
                      "Systems monitoring platform integrating artificial intelligence for incident response in servers",
                    date: "2025-07-20",
                    type: "Journal article",
                    doi: "10.51252/rcsi.v5i2.811",
                    url: "https://doi.org/10.51252/rcsi.v5i2.811",
                  },
                  {
                    id: 2,
                    title:
                      "Implementación de un chatbot basado en modelo de lenguaje de inteligencia artificial para...",
                    date: "2023-07-10",
                    type: "Journal article",
                    doi: "10.51252/rcsi.v3i2.570",
                    url: "https://doi.org/10.51252/rcsi.v3i2.570",
                  },
                  {
                    id: 3,
                    title:
                      "Vulnerabilidades y amenazas en los activos de información",
                    date: "2023-01-20",
                    type: "Journal article",
                    doi: "10.51252/rcsi.v3i1.461",
                    url: "https://doi.org/10.51252/rcsi.v3i1.461",
                  },
                ].map((article) => (
                  <div
                    key={article.id}
                    className="pb-3 sm:pb-4 border-b border-white/10 last:border-b-0"
                  >
                    <p className="text-white leading-snug mb-1">
                      {article.title}
                    </p>

                    <p className="text-slate-300 text-xs mb-1">
                      {article.date} <span className="mx-1">|</span>{" "}
                      {article.type}
                    </p>

                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-sky-300 hover:underline break-all"
                    >
                      DOI: {article.doi}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Componente AboutUs */}
      <AboutUs />

      <Footer />
    </div>
  );
};

export default Nosotros;