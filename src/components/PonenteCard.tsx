import React from "react";

type PonenteCardVariant = "grid" | "inline";

interface PonenteCardProps {
  name: string;
  role: string;
  imageSrc: string;
  variant?: PonenteCardVariant; // "grid" = tarjetas grandes, "inline" = lista lateral
}

const PonenteCard: React.FC<PonenteCardProps> = ({
  name,
  role,
  imageSrc,
  variant = "grid",
}) => {
  if (variant === "inline") {
    return (
      <article className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
        <div className="w-16 h-16 shrink-0 overflow-hidden rounded-md">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h4 className="text-sm font-semibold text-white leading-snug">
            {name}
          </h4>
          <p className="text-xs text-slate-300 leading-snug">{role}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="group cursor-pointer">
      <div className="overflow-hidden rounded-xl bg-slate-900/40">
        <img
          src={imageSrc}
          alt={name}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-xl font-semibold uppercase tracking-wide text-white">
        {name}
      </h3>
      <p className="mt-1 text-base text-slate-300 max-w-xs">{role}</p>
    </article>
  );
};

export default PonenteCard;
