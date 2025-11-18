import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="nosotros"
      className="w-full mt-24 bg-gradient-to-t from-[#10284b] via-[#1a325b] to-[#243b70] text-slate-100 pt-12 pb-6"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Logo + texto grande */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-cyan-400" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-white">FullDay</span>
              <span className="text-[10px] text-sky-200">
                XI Conferencia TIC
              </span>
            </div>
          </div>

          <p className="max-w-xl text-sm text-slate-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>

        {/* Menú inferior */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-200 mb-6">
          <nav className="flex gap-6">
            <a href="#inicio" className="hover:text-white">
              INICIO
            </a>
            <a href="#ponentes" className="hover:text-white">
              PONENTES
            </a>
            <a href="#nosotros" className="hover:text-white">
              SOBRE NOSOTROS
            </a>
          </nav>

          {/* Redes sociales */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Facebook"
              className="h-7 w-7 rounded-full border border-slate-300 flex items-center justify-center text-[11px]"
            >
              f
            </button>
            <button
              aria-label="Instagram"
              className="h-7 w-7 rounded-full border border-slate-300 flex items-center justify-center text-[11px]"
            >
              in
            </button>
          </div>
        </div>

        {/* Línea final */}
        <div className="border-t border-slate-500/40 pt-3 text-[11px] text-slate-300 flex flex-wrap justify-between gap-2">
          <span>
            Full Day &quot;Gékkimo de TIC&quot; {year} Ingeniería de Sistemas
            UNT. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
