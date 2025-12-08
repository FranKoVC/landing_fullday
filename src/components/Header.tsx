import React, { useState } from "react";
import logoFullDay from "../assets/Logo-DarkMode.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado
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

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-slate-100 hover:text-white transition-colors">
              INICIO
            </Link>
            <Link to="/ponentes" className="text-slate-100 hover:text-white transition-colors">
              PONENTES
            </Link>
            <Link to="/nosotros" className="text-slate-100 hover:text-white transition-colors">
              SOBRE NOSOTROS
            </Link>
          </div>

          {/* Botón Desktop */}
          <Link
            to="/inscribete"
            className="
              w-[131px] h-6 rounded-xl
              flex items-center justify-center
              bg-linear-to-r from-[#023E55] to-[#2BA5B2]
              font-sans font-normal text-[14px] leading-none text-white
              hover:opacity-90 transition-opacity
            "
          >
            INSCRIBIRME
          </Link>
        </nav>

        {/* Botón Móvil (Hamburguesa) */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex flex-col justify-center items-center h-9 w-9 rounded-full border border-slate-600/70 bg-black/20 backdrop-blur-sm z-50 hover:bg-black/40 transition-colors"
          aria-label="Alternar menú"
        >
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE - Solo se muestra cuando isOpen es true */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#00193e]/35 backdrop-blur-md border-t border-slate-700 shadow-xl md:hidden flex flex-col items-center py-6 gap-6 animate-fadeIn">
          <Link 
            to="/" 
            className="text-slate-100 text-lg font-medium hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            INICIO
          </Link>
          <Link 
            to="/ponentes" 
            className="text-slate-100 text-lg font-medium hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            PONENTES
          </Link>
          <Link 
            to="/nosotros" 
            className="text-slate-100 text-lg font-medium hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            SOBRE NOSOTROS
          </Link>
          
          {/* Botón en versión móvil */}
          <Link
            to="/inscribete"
            className="
              w-[131px] h-6 rounded-xl
              flex items-center justify-center
              bg-linear-to-r from-[#023E55] to-[#2BA5B2]
              font-sans font-normal text-[14px] leading-none text-white
              hover:opacity-90
            "
            onClick={() => setIsOpen(false)}
          >
            INSCRIBIRME
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;