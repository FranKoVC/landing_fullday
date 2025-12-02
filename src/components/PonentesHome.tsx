import { Link } from "react-router-dom";
import PonenteCard from "./PonenteCard";
import { speakers } from "../data/ponentes";
import { useRef } from "react";

const PonentesHome = () => {
  /* =======================
        CARRUSEL PONENTES
     ======================= */
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    // Desplaza una "página" completa para que siempre queden 4 cards completos
    const amount = el.clientWidth;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div id="ponentes" className="max-w-7xl mx-auto px-4 pt-16">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xl text-slate-300 font-semibold tracking-wide uppercase">
            PONENTES
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 grid place-items-center cursor-pointer"
              aria-label="Anterior"
            >
              <span className="text-xl">←</span>
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 grid place-items-center cursor-pointer"
              aria-label="Siguiente"
            >
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="
            flex overflow-x-auto pb-4 scroll-smooth 
            snap-x snap-mandatory 
            scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]
          "
        >
          {speakers.map((s) => (
            <Link
              key={s.id}
              to={`/ponentes/${s.id}`}
              className="
                snap-start shrink-0
                w-[80%] sm:w-[55%] md:w-1/4 
                px-4
                transition-transform duration-300 hover:-translate-y-1
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
