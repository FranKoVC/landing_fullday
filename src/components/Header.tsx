
import React, { useState } from "react";
import logoFullDay from "../assets/Logo-DarkMode.png";

const Header: React.FC = () => {
  // 1. Estado para controlar si el menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // 2. Función para alternar el estado
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-24 md:h-28">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logoFullDay}
            alt="FullDay logo"
            className="h-20 md:h-28 w-auto object-contain"
          />
        </div>


        {/* Navegación Desktop (Oculta en móvil) */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <a href="/" className="text-slate-100 hover:text-white transition-colors">
              INICIO
            </a>
            <a href="/ponentes" className="text-slate-100 hover:text-white transition-colors">
              PONENTES
            </a>
            <a href="/nosotros" className="text-slate-100 hover:text-white transition-colors">
              SOBRE NOSOTROS
            </a>
          </div>

          {/* Botón Desktop */}
          <a
            href="/inscribete"
            className="
              w-[131px] h-[24px] rounded-[12px]
              flex items-center justify-center
              bg-gradient-to-r from-[#023E55] to-[#2BA5B2]
              font-sans font-normal text-[14px] leading-none text-white
              hover:opacity-90 transition-opacity
            "
          >
            INSCRIBIRME
          </a>
        </nav>

        {/* Botón Móvil (Hamburguesa Estática) */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex flex-col justify-center items-center h-9 w-9 rounded-full border border-slate-600/70 bg-black/20 backdrop-blur-sm z-50 hover:bg-black/40 transition-colors"
          aria-label="Alternar menú"
        >
          {/* 3 Líneas estáticas */}
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* --- MENÚ MÓVIL DESPLEGABLE --- */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#00193e]/35 backdrop-blur-md border-t border-slate-700 shadow-xl md:hidden flex flex-col items-center py-6 gap-6 animate-fadeIn">
          <a href="/" className="text-slate-100 text-lg font-medium hover:text-white">
            INICIO
          </a>
          <a href="#" className="text-slate-100 text-lg font-medium hover:text-white">
            PONENTES
          </a>
          <a href="#" className="text-slate-100 text-lg font-medium hover:text-white">
            SOBRE NOSOTROS
          </a>
          
          {/* Botón en versión móvil */}
          <a
            href="/inscribete"
            className="
              w-[131px] h-[24px] rounded-[12px]
              flex items-center justify-center
              bg-gradient-to-r from-[#023E55] to-[#2BA5B2]
              font-sans font-normal text-[14px] leading-none text-white
              hover:opacity-90
            "
          >
            INSCRIBIRME
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;