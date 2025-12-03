import React from "react";
import logoFullDay from "../assets/Logo.png";

const Header: React.FC = () => {
  return (
<header className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logoFullDay} alt="FullDay logo" className="h-12 md:h-14 w-auto" />
        </div>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-8 text-xs md:text-sm">
          <a href="#inicio" className="text-slate-100 hover:text-white">
            INICIO
          </a>
          <a href="#ponentes" className="text-slate-100 hover:text-white">
            PONENTES
          </a>
          <a href="#nosotros" className="text-slate-100 hover:text-white">
            SOBRE NOSOTROS
          </a>

          {/* Botón INSCRÍBETE */}
          <a
            href="#inscribete"
            className="ml-4 px-4 md:px-5 py-2 rounded-full text-[11px] md:text-xs font-semibold bg-sky-300 text-slate-900 hover:opacity-90"
          >
            INSCRÍBETE
          </a>
        </nav>

        {/* Menú móvil: ícono hamburguesa minimal */}
        <button
          className="md:hidden inline-flex flex-col justify-center items-center h-9 w-9 rounded-full border border-slate-600/70 bg-black/20 backdrop-blur-sm"
          aria-label="Abrir menú"
        >
          <span className="block w-4 h-0.5 rounded-full bg-slate-100 mb-[3px]" />
          <span className="block w-4 h-0.5 rounded-full bg-slate-100 mb-[3px]" />
          <span className="block w-4 h-0.5 rounded-full bg-slate-100" />
        </button>
      </div>
    </header>
  );
};

export default Header;
