import { FiUser, FiCheck } from "react-icons/fi";
import { PiCertificateBold } from "react-icons/pi"; // Certificado

const StepHeader = () => {
  return (
    <div className="max-w-7xl w-full mx-auto
                    bg-white/10 border border-white/20 rounded-3xl 
                    p-4 md:p-10 backdrop-blur-md shadow-xl mb-10 text-center">

      {/* CONTENEDOR FLEX: 
          - gap-2: pegaditos en celular.
          - md:gap-4: un poco separados en tablet.
          - lg:gap-20: muy separados en pantallas grandes (como tu diseño original).
      */}
      <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-20">

        {/* Paso 1 */}
        <div className="flex flex-col items-center gap-2 md:gap-3">
          {/* Círculo: w-12 en móvil, w-16 en PC */}
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-yellow-400 text-[#0b1833] shadow-lg">
            {/* Ícono responsive */}
            <FiUser className="text-xl md:text-[30px]" />
          </div>
          <span className="text-yellow-400 font-semibold text-[10px] md:text-base leading-tight">
            Datos Personales
          </span>
        </div>

        {/* LÍNEA 1 (Amarilla) 
            hidden: oculta en celular 
            md:block: visible en tablet/PC
        */}
        <div className="hidden md:block h-1 w-10 lg:w-20 bg-yellow-400 rounded-full"></div>

        {/* Paso 2 */}
        <div className="flex flex-col items-center gap-2 md:gap-3">
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-yellow-400 text-[#0b1833] shadow-lg">
            <PiCertificateBold className="text-xl md:text-[30px]" />
          </div>
          <span className="text-yellow-400 font-semibold text-[10px] md:text-base leading-tight">
            Certificado
          </span>
        </div>

        {/* LÍNEA 2 (Gris) 
            hidden: oculta en celular 
        */}
        <div className="hidden md:block h-1 w-10 lg:w-20 bg-white/30 rounded-full"></div>

        {/* Paso 3 – FINAL con check */}
        <div className="flex flex-col items-center gap-2 md:gap-3 opacity-40">
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full border border-white/40">
            <FiCheck className="text-xl md:text-[30px]" />
          </div>
          <span className="text-slate-300 font-medium text-[10px] md:text-base leading-tight">
            Final
          </span>
        </div>

      </div>
    </div>
  );
};

export default StepHeader;