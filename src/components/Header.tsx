import React, { useState, useEffect } from "react";
import logoFullDay from "../assets/Logo-DarkMode.png";
import { Link, useLocation } from "react-router-dom"; // 1. Importamos useLocation

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 2. Obtenemos la ubicación actual (ruta)
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Verificamos la posición
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Agregamos el "oyente" para cuando el usuario hace scroll
    window.addEventListener("scroll", handleScroll);

    // 3. ¡LA CLAVE! Ejecutamos la función inmediatamente al cargar.
    // Esto revisa si ya estamos abajo al entrar a la página.
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
    // 4. Agregamos 'location' a las dependencias. 
    // Esto fuerza a que el efecto se verifique cada vez que cambias de URL.
  }, [location]); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-[#00193e]/90 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
        }
      `}
    >
      <div 
        className={`
          max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-300
          ${isScrolled ? "h-20" : "h-[108px]"} 
        `}
      >
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logoFullDay}
            alt="FullDay logo"
            className={`
               w-auto object-contain transition-all duration-300
               ${
                 isScrolled 
                   ? "h-20 md:h-24" // Pequeño al bajar
                   : "h-20 md:h-24" // Grande al inicio
               } 
            `}
          />
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-slate-100 hover:text-white transition-colors text-sm font-medium tracking-wide">
              INICIO
            </Link>
            <Link to="/ponentes" className="text-slate-100 hover:text-white transition-colors text-sm font-medium tracking-wide">
              PONENTES
            </Link>
            <Link to="/nosotros" className="text-slate-100 hover:text-white transition-colors text-sm font-medium tracking-wide">
              SOBRE NOSOTROS
            </Link>
          </div>

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

        {/* Botón Móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex flex-col justify-center items-center h-9 w-9 rounded-full border border-slate-600/70 bg-black/20 backdrop-blur-sm z-50 hover:bg-black/40 transition-colors"
        >
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#00193e]/90 backdrop-blur-xl border-t border-slate-700 shadow-xl md:hidden flex flex-col items-center py-6 gap-6 animate-fadeIn">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-slate-100 text-lg font-medium hover:text-white">INICIO</Link>
          <Link to="/ponentes" onClick={() => setIsOpen(false)} className="text-slate-100 text-lg font-medium hover:text-white">PONENTES</Link>
          <Link to="/nosotros" onClick={() => setIsOpen(false)} className="text-slate-100 text-lg font-medium hover:text-white">SOBRE NOSOTROS</Link>
          <Link to="/inscribete" onClick={() => setIsOpen(false)} className="w-[131px] h-6 rounded-xl flex items-center justify-center bg-linear-to-r from-[#023E55] to-[#2BA5B2] text-white hover:opacity-90">INSCRIBIRME</Link>
        </div>
      )}
    </header>
  );
};

export default Header;