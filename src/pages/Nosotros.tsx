// src/pages/Nosotros.tsx
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Promo from "/images/promo.jpg";

// Componente principal Nosotros
const Nosotros: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a1f44]">
      <Header />

      {/* Hero Section */}
      <section className="relative px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
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
            <div className="relative px-12 py-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Promoción <span className="text-orange-500">XXVI</span>
              </h1>
              <p className="text-gray-300 max-w-2xl mb-2 leading-relaxed">
                La Promoción XXVI de Ingeniería de Sistemas de la Universidad
                Nacional de Trujillo representa una generación de profesionales
                comprometidos con la excelencia académica y la innovación
                tecnológica. Formados bajo los más altos estándares educativos,
                nuestros egresados han desarrollado competencias sólidas en
                desarrollo de software, gestión de proyectos tecnológicos,
                análisis de datos, inteligencia artificial y arquitectura de
                sistemas.
              </p>
              <p className="text-gray-300 max-w-2xl mb-8 leading-relaxed">
                Con una visión orientada al futuro, esta promoción se
                caracteriza por su capacidad de adaptación, trabajo en equipo y
                liderazgo tecnológico. Nuestros profesionales están preparados
                para enfrentar los desafíos de la transformación digital y
                contribuir al desarrollo tecnológico del país, aplicando
                soluciones innovadoras que impactan positivamente en la
                sociedad.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/system26unt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <FaInstagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.tiktok.com/@system_26_unt?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <FaTiktok className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Docente Section */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-2xl font-bold mb-10">
            DOCENTE A CARGO DEL EVENTO
          </h2>

            <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Foto del docente */}
            <div className="md:col-span-1">
              <div className="bg-[#1a3a5c] rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
              <img
                src="/images/ponentes/9foto.png"
                alt="Docente"
                className="w-full h-auto object-cover"
              />
              </div>
            </div>

            {/* Información del docente */}
            <div className="md:col-span-1 text-white">
              <h3 className="text-xl font-bold mb-4">
                Ing. Alberto Carlos Mendoza de los Santos
              </h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Consultor empresarial y docente universitario, Doctor en
                Administración y en Ingeniería de Sistemas e Informática.
                Especialista en gobierno y auditoría de TI, con certificaciones
                internacionales y amplia experiencia como expositor en foros
                latinoamericanos.
              </p>

              <div className="mb-6">
                <h4 className="text-orange-500 font-bold mb-2">
                  Certificaciones
                </h4>
                <p className="text-gray-300 text-sm">
                  CISA | CDPSE | COBIT 5 F | COBIT 2019 F | ISO/IEC 27001 Senior
                  Lead Implementer | Academic Advocate ISG UNT
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-orange-500 font-bold mb-2">Experiencia</h4>
                <p className="text-gray-300 text-sm">
                  Gestión de Procesos | Auditoría de TI | Continuidad de Negocio
                  | Gestión de Proyectos | Gestión de Riesgos de Ti
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-orange-500 font-bold mb-2">Contacto</h4>
                <a
                  href="mailto:albertomendoza@gmail.com"
                  className="text-gray-300 text-sm hover:text-orange-500"
                >
                  amendozad@unitru.edu.pe
                </a>
              </div>

              <div className="flex gap-4">
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
              <h3 className="text-white font-bold mb-4">
                ARTÍCULOS DESTACADOS
              </h3>

              <div className="space-y-4 text-sm">
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
                    className="pb-4 border-b border-white/10 last:border-b-0"
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
