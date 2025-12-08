import React from "react";

import logoFullDay from "../assets/Logo-DarkMode.png";
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="nosotros"
      className="w-full bg-linear-to-t from-[#10284b] via-[#1a325b] to-[#243b70] text-slate-100 pt-12 pb-6"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="w-[151.9px] h-[60px] relative flex items-center">
          <img
            src={logoFullDay}
            alt="FullDay logo"
            className="
              w-[121.52px] h-[121.52px]
              relative
              top-[-30.76px] left-[15.19px]
              object-contain
              z-50
            "
          />
        </div>
        <div>
          {/* Texto principal */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <p 
              className="
                max-w-2xl
                font-sans font-semibold text-[40px] leading-none tracking-normal
                text-transparent bg-clip-text 
                bg-[linear-gradient(91.04deg,#D0D3DA_0%,#FFFFFF_131.9%)]
              "
            >
              Formando líderes en Gestión de Tecnologías de la Información
            </p>
          </div>
          {/* Menú inferior */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm md:text-base text-slate-200 mb-6">
            <nav className="flex gap-6">
              <a 
                href="/" 
                className="font-sans font-normal text-[12px] leading-none tracking-normal hover:text-white"
              >
                INICIO
              </a>

              <a 
                href="/ponentes" 
                className="font-sans font-normal text-[12px] leading-none tracking-normal hover:text-white"
              >
                PONENTES
              </a>

              <a 
                href="/nosotros" 
                className="font-sans font-normal text-[12px] leading-none tracking-normal hover:text-white"
              >
                SOBRE NOSOTROS
              </a>
            </nav>
          </div>
        </div>
        <div>
          {/* Línea final */}
          <div className="border-t border-slate-500/40 pt-3 text-[11px] md:text-xs text-slate-300 flex flex-wrap justify-between gap-2">
          </div>
          {/* Contenedor Principal (Footer bar) */}
          <div className="w-full  h-[16px] mx-auto flex justify-between items-center">
            
            {/* Texto Copyright */}
            <span
              className="
                font-sans
                font-normal
                text-[10px]
                leading-none
                tracking-normal
                text-[#EEF3F5]
              "
            >
              © {year} · 11º Full Day de Gestión de TI – Escuela de Ingeniería de Sistemas UNT. Todos los derechos reservados.
            </span>

            {/* Redes sociales */}
            <div className="flex items-center gap-[12px]">
              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="
                  w-[16px] h-[16px] 
                  rounded-[4px] border border-slate-300 
                  flex items-center justify-center 
                  hover:bg-slate-100/10 transition
                "
              >
                <FaFacebookSquare />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="
                  w-[16px] h-[16px] 
                  rounded-[4px] border border-slate-300 
                  flex items-center justify-center 
                  hover:bg-slate-100/10 transition
                "
              >
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>
        
        
          
          
        
      </div>
    </footer>
  );
};

export default Footer;
