import React from "react";

import logoFullDay from "../assets/Logo-DarkMode.png";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import vector from "../assets/image.png";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="nosotros"
      // 1. Agregamos 'relative' y 'overflow-hidden' para contener el vector absoluto
      className="w-full bg-linear-to-t from-[#10284b] via-[#1a325b] to-[#243b70] text-slate-100 pt-12 pb-6 relative overflow-hidden"
    >
      
      {/* --- NUEVO: VECTOR DE FONDO --- */}
      {/* Esto coloca la imagen sobre el degradado, pero detrás del texto */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={vector} 
          alt="Background graphic" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay" 
          // NOTA: Ajusta 'opacity-20' si quieres que se vea más fuerte o más suave.
          // 'mix-blend-overlay' ayuda a que se fusione bonito con el azul.
        />
      </div>

      {/* 2. Agregamos 'relative' y 'z-10' para que el texto quede ENCIMA del vector */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
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
        </div>
        <div>
          {/* Línea final */}
          <div className="border-t border-slate-500/40 pt-3 text-[11px] md:text-xs text-slate-300 flex flex-wrap justify-between gap-2">
          </div>
          {/* Contenedor Principal (Footer bar) */}
          <div className="w-full h-4 mx-auto flex justify-between items-center">
            
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
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61583897481967&mibextid=wwXIfr&rdid=YLnimlv5OE9yfakf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AAKZ9RzB8%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="
                  w-4 h-4 
                  rounded-sm border border-slate-300 
                  flex items-center justify-center 
                  hover:bg-slate-100/10 transition
                "
              >
                <FaFacebookSquare />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/xi_fulldaygestionti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="
                  w-4 h-4 
                  rounded-sm border border-slate-300 
                  flex items-center justify-center 
                  hover:bg-slate-100/10 transition
                "
              >
                <FaInstagramSquare />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/xi-full-day-gesti%C3%B3n-de-ti-30ba03399/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BN1bm%2FopoQI%2BdvK6wzJJrCw%3D%3D"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  w-4 h-4 
                  rounded-sm border border-slate-300 
                  flex items-center justify-center 
                  hover:bg-slate-100/10 transition
                "
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;