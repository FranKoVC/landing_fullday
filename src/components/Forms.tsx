import React from "react";

const InscripcionForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // luego aquí metes la lógica real (enviar a backend / API)
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl px-6 md:px-10 py-8 md:py-10 backdrop-blur-md shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Fila 1 */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-xs md:text-sm text-slate-200">
              DNI o Pasaporte
            </label>
            <input
              type="text"
              className="h-10 md:h-11 rounded-lg px-3 text-sm md:text-base bg-white/5 border border-white/20 focus:outline-none focus:border-[#f6c453] placeholder:text-slate-300/70"
              placeholder="Ingresa tu documento"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs md:text-sm text-slate-200">
              Nombres y Apellidos
            </label>
            <input
              type="text"
              className="h-10 md:h-11 rounded-lg px-3 text-sm md:text-base bg-white/5 border border-white/20 focus:outline-none focus:border-[#f6c453] placeholder:text-slate-300/70"
              placeholder="Ingresa tu nombre completo"
            />
          </div>
        </div>

        {/* Fila 2 */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-xs md:text-sm text-slate-200">
              Correo electrónico
            </label>
            <input
              type="email"
              className="h-10 md:h-11 rounded-lg px-3 text-sm md:text-base bg-white/5 border border-white/20 focus:outline-none focus:border-[#f6c453] placeholder:text-slate-300/70"
              placeholder="ejemplo@unitru.edu.pe"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs md:text-sm text-slate-200">
              Número de celular
            </label>
            <input
              type="tel"
              className="h-10 md:h-11 rounded-lg px-3 text-sm md:text-base bg-white/5 border border-white/20 focus:outline-none focus:border-[#f6c453] placeholder:text-slate-300/70"
              placeholder="Ingrese su número"
            />
          </div>
        </div>

        {/* Fila 3: radio buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6 text-xs md:text-sm">
          <span className="text-slate-200">
            ¿Eres estudiante o profesional?
          </span>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tipo"
                value="estudiante"
                className="accent-[#f6c453]"
              />
              <span>Estudiante</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tipo"
                value="profesional"
                className="accent-[#f6c453]"
              />
              <span>Profesional</span>
            </label>
          </div>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full md:w-1/3 mt-2 rounded-full py-2.5 md:py-3 bg-[#f6c453] text-[#0b1833] font-semibold text-sm md:text-base hover:bg-[#ffd56e] transition-colors mx-auto block"
        >
          Enviar respuesta
        </button>

        {/* Notas */}
        <div className="mt-2 text-[10px] md:text-xs text-slate-200/80 space-y-1">
          <p>* La entrada al evento es totalmente GRATUITA.</p>
          <p>
            * La adquisición de un certificado es OPCIONAL y conlleva un costo.
          </p>
          <p>* Para la adquisición del certificado comunicarse AQUÍ.</p>
        </div>
      </form>
    </div>
  );
};

export default InscripcionForm;
