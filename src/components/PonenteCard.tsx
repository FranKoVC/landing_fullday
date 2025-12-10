import React from "react";

type PonenteCardVariant = "grid" | "inline";

interface PonenteCardProps {
  name: string;
  role: string;
  imageSrc: string;
  variant?: PonenteCardVariant;
}

const PonenteCard: React.FC<PonenteCardProps> = ({
  name,
  role,
  imageSrc,
  variant = "grid",
}) => {
  // --- VARIANTE INLINE (Sin cambios) ---
  if (variant === "inline") {
    return (
      <article className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 transition-all duration-300 cursor-pointer group">
        <div className="w-16 h-16 shrink-0 rounded-full bg-slate-700 overflow-hidden p-0.5 relative">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-sm font-bold text-slate-100 group-hover:text-yellow-400 transition-colors">
            {name}
          </h4>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
      </article>
    );
  }

  // --- VARIANTE GRID (Estilo "Full Image Bright Top") ---
  return (
    <article className="group relative w-full aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-slate-700 shadow-xl hover:shadow-2xl hover:border-yellow-500/50 transition-all duration-500 bg-white/25 ">
      
      {/* 1. IMAGEN DE FONDO (Brillante y completa) */}
      <div className="absolute inset-0">
        {/* 1. La imagen original (con tus ajustes de posición) */}
        <img
          src={imageSrc}
          alt={name}
          // Tus ajustes: h-[130%] y -mt-18
          className="h-[130%] w-auto object-cover object-top -mt-18 transition-transform duration-700 group-hover:scale-110"
        />

        {/* 2. NUEVA CAPA: FILTRO DE CONTRASTE AMARILLO CLARO */}
        {/*
            Explicación de las clases:
            - absolute inset-0: Se coloca encima cubriendo todo el área.
            - bg-yellow-200/40: Un amarillo claro con 40% de opacidad. (Ajusta el /40 si lo quieres más o menos intenso).
            - mix-blend-soft-light: El secreto. Fusiona el amarillo suavemente con la imagen para dar contraste y calidez sin tapar los detalles.
            - z-10: Asegura que esté sobre la imagen.
        */}
        <div className="absolute inset-0 bg-yellow-400/5 mix-blend-soft-light z-10 pointer-events-none"></div>

      </div>

      {/* 2. OVERLAY DEGRADADO INFERIOR (La corrección) */}
      {/* CAMBIO CLAVE:
          - Ya NO usamos 'inset-0' (que cubre todo).
          - Usamos 'bottom-0 left-0 right-0' para pegarlo abajo.
          - Usamos 'h-[45%]' (o h-2/5) para que solo ocupe la parte inferior.
          - El degradado va de negro sólido abajo a transparente arriba.
      */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10"></div>

      {/* 3. CONTENIDO DE TEXTO (Sobre el degradado inferior) */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 text-center">
        
        {/* Línea decorativa */}
        <div className="w-12 h-1 bg-yellow-500 mx-auto mb-4 rounded-full group-hover:w-24 transition-all duration-300 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
        
        <h3 className="text-2xl font-bold uppercase tracking-wider text-white group-hover:text-yellow-400 transition-colors drop-shadow-sm leading-tight">
          {name}
        </h3>
        <p className="mt-2 text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
          {role}
        </p>
      </div>
    </article>
  );
};

export default PonenteCard;