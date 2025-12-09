import { Link } from "react-router-dom";
import PonenteCard from "./PonenteCard";
import { speakers } from "../data/ponentes";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Usando iconos reales si los tienes instalados

const PonentesHome = () => {
  /* =======================
        CARRUSEL PONENTES
     ======================= */
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    
    // Detectamos el ancho de una tarjeta individual para hacer el scroll exacto
    // (Asumimos que el primer hijo es una tarjeta)
    const cardWidth = el.firstElementChild?.clientWidth || el.clientWidth;
    
    // En móvil desplazamos 1 tarjeta, en desktop desplazamos el bloque visible
    const scrollAmount = window.innerWidth < 768 ? cardWidth : el.clientWidth;

    el.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#061937] border-t border-white/5"> {/* Fondo consistente con tu tema */}
      <div id="ponentes" className="max-w-7xl mx-auto px-4 py-16">
        
        {/* CABECERA */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl text-white font-bold tracking-wide uppercase">
            Ponentes
          </h2>

          {/* BOTONES DE NAVEGACIÓN */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              className="w-10 h-10 rounded-full border border-slate-600 text-white hover:bg-white/10 hover:border-white transition-all duration-300 grid place-items-center cursor-pointer active:scale-95"
              aria-label="Anterior"
            >
              <span className="text-sm"><FaArrowLeft /></span>
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              className="w-10 h-10 rounded-full border border-slate-600 text-white hover:bg-white/10 hover:border-white transition-all duration-300 grid place-items-center cursor-pointer active:scale-95"
              aria-label="Siguiente"
            >
              <span className="text-sm"><FaArrowRight /></span>
            </button>
          </div>
        </div>

        {/* CONTENEDOR CARRUSEL */}
        <div
          ref={carouselRef}
          className="
            flex overflow-x-auto pb-8 -mx-5 px-4 md:mx-0 md:px-0 scroll-smooth 
            snap-x snap-mandatory 
            scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]
          "
        >
          {speakers.map((s) => (
            <Link
              key={s.id}
              to={`/ponentes/${s.id}`}
              className="
                snap-center shrink-0
                w-full sm:w-1/2 md:w-1/3 lg:w-1/4 
                px-3
                transition-transform duration-300 hover:-translate-y-2
              "
            >
              <PonenteCard
                name={s.name}
                role={s.role}
                imageSrc={s.imageSrc}
                variant="grid"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PonentesHome;