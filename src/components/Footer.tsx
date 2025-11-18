import React from "react";
import logoFullDay from "../assets/Logo.png";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="nosotros"
      className="w-full mt-24 bg-gradient-to-t from-[#10284b] via-[#1a325b] to-[#243b70] text-slate-100 pt-12 pb-6"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4">
          <img
            src={logoFullDay}
            alt="FullDay logo"
            className="h-12 md:h-14 w-auto"
          />
        </div>

        {/* Texto principal */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <p className="max-w-xl text-2xl md:text-3xl text-slate-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>

        {/* Menú inferior */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm md:text-base text-slate-200 mb-6">
          <nav className="flex gap-6">
            <a href="#inicio" className="hover:text-white font-medium tracking-wide">
              INICIO
            </a>
            <a href="#ponentes" className="hover:text-white font-medium tracking-wide">
              PONENTES
            </a>
            <a href="#nosotros" className="hover:text-white font-medium tracking-wide">
              SOBRE NOSOTROS
            </a>
          </nav>

          {/* Redes sociales */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="h-9 w-9 rounded-full border border-slate-300 flex items-center justify-center text-lg hover:bg-slate-100/10 transition"
            >
              {/* ícono Facebook */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.1 5.66 21.24 10.44 22v-6.99H8.08v-2.94h2.36v-2.24c0-2.33 1.38-3.62 3.5-3.62.7 0 1.45.12 1.45.12v2.16h-.82c-1.14 0-1.49.71-1.49 1.44v1.74h2.54l-.41 2.94h-2.13V22C18.34 21.24 22 17.1 22 12.07z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 rounded-full border border-slate-300 flex items-center justify-center text-lg hover:bg-slate-100/10 transition"
            >
              {/* ícono Instagram */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3.5A4.5 4.5 0 0 0 7.5 12 4.5 4.5 0 0 0 12 16.5 4.5 4.5 0 0 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 0 1 14.5 12 2.5 2.5 0 0 1 12 14.5 2.5 2.5 0 0 1 9.5 12 2.5 2.5 0 0 1 12 9.5zm4.75-3.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Línea final */}
        <div className="border-t border-slate-500/40 pt-3 text-[11px] md:text-xs text-slate-300 flex flex-wrap justify-between gap-2">
          <span>
            Full Day Gobierno de TIC {year} Ingeniería de Sistemas UNT. Todos los
            derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
