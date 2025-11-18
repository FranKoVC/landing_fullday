import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Aquí luego puedes reemplazar por <img src="/ruta/logo.png" /> */}
          <div className="h-8 w-8 rounded-full bg-cyan-400" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-white">FullDay</span>
            <span className="text-[10px] text-sky-200">
              XI Conferencia TIC
            </span>
          </div>
        </div>

        {/* Navegación */}
        <nav className="flex items-center gap-8 text-sm">
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
            className="ml-4 px-5 py-2 rounded-full text-xs font-semibold bg-sky-300 text-slate-900 hover:opacity-90"
          >
            INSCRÍBETE
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
