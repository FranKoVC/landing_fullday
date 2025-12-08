import { FiUser, FiCheck } from "react-icons/fi";
import { PiCertificateBold } from "react-icons/pi";

const StepHeader = () => {
  return (
    <div className="max-w-4xl w-full mx-auto
                    bg-white/10 border border-white/20 rounded-3xl 
                    p-4 md:p-10 backdrop-blur-md shadow-xl mb-10 text-center">
      
      {/* CAMBIOS CLAVE AQUÍ:
         1. 'flex-col md:flex-row': En móvil vertical (opcional) o mantener fila ajustada. 
            Vamos a mantener fila (flex-row) pero ajustando gaps.
         2. 'gap-4': Espacio pequeño en móvil.
         3. 'md:gap-4': Espacio mediano en tablet/desktop (ya que usaremos items-center).
      */}
      <div className="flex justify-center items-center gap-2 md:gap-4">

        {/* Paso 1 */}
        <div className="flex flex-col items-center gap-2 md:gap-3">
          {/* Reduje el tamaño del círculo en móvil (w-12) y normal en desktop (md:w-16) */}
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-yellow-400 text-[#0b1833] shadow-lg">
            <FiUser className="text-xl md:text-3xl" />
          </div>
          {/* Texto más pequeño en móvil */}
          <span className="text-yellow-400 font-semibold text-[10px] md:text-base leading-tight">
            Datos Personales
          </span>
        </div>

        {/* LÍNEA SEPARADORA 1 
           'hidden md:block': OCULTAMOS la línea en celulares para ahorrar espacio
        */}
        <div className="hidden md:block h-1 w-10 lg:w-20 bg-white/30 rounded-full"></div>

        {/* Paso 2 */}
        <div className="flex flex-col items-center gap-2 md:gap-3 opacity-40">
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full border border-white/40">
            <PiCertificateBold className="text-xl md:text-3xl" />
          </div>
          <span className="text-slate-300 font-medium text-[10px] md:text-base leading-tight">
            Certificado
          </span>
        </div>

        {/* LÍNEA SEPARADORA 2 
           'hidden md:block': OCULTA en móvil
        */}
        <div className="hidden md:block h-1 w-10 lg:w-20 bg-white/30 rounded-full"></div>

        {/* Paso 3 – FINAL */}
        <div className="flex flex-col items-center gap-2 md:gap-3 opacity-40">
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full border border-white/40">
            <FiCheck className="text-xl md:text-3xl" />
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