import { FiUser, FiCheck } from "react-icons/fi";
import { PiCertificateBold } from "react-icons/pi"; // Certificado

const StepHeader = () => {
  return (
    <div className="max-w-4xl w-full mx-auto
                    bg-white/10 border border-white/20 rounded-3xl 
                    p-10 backdrop-blur-md shadow-xl mb-10 text-center">

      <div className="flex justify-center items-center gap-20">

        {/* Paso 1 */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 text-[#0b1833] shadow-lg">
            <FiUser size={30} />
          </div>
          <span className="text-yellow-400 font-semibold text-base">
            Datos Personales
          </span>
        </div>

        <div className="h-1 w-20 bg-yellow-400 rounded-full"></div>

        {/* Paso 2 */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 text-[#0b1833] shadow-lg">
            <PiCertificateBold size={30} />
          </div>
          <span className="text-yellow-400 font-semibold text-base">
            Certificado
          </span>
        </div>

        <div className="h-1 w-20 bg-white/30 rounded-full"></div>

        {/* Paso 3 – FINAL con check */}
        <div className="flex flex-col items-center gap-3 opacity-40">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border border-white/40">
            <FiCheck size={30} />
          </div>
          <span className="text-slate-300 font-medium text-base">
            Final
          </span>
        </div>

      </div>
    </div>
  );
};

export default StepHeader;

