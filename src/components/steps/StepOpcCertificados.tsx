import { useState } from "react";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import StepMetodoPago from "./StepMetodoPago"; // Asegúrate que la ruta sea correcta
import StepFormPago from "./StepFormPago";     // Asegúrate que la ruta sea correcta
import { useRegistration } from "./RegistrationContext"; // <--- IMPORTANTE: Importar Contexto

const Step2Certificado = () => {
  const [option, setOption] = useState("gratis");
  
  // 1. OBTENEMOS EL TIPO DE PARTICIPANTE DEL CONTEXTO
  const { registrationData } = useRegistration();

  // 2. CALCULAMOS EL PRECIO DINÁMICAMENTE
  const precio = registrationData.type === "STUDENT" ? "25.00" : "35.00";
  const etiqueta = registrationData.type === "STUDENT" ? "Estudiante" : "Profesional";

  return (
    <div className="max-w-4xl w-full mx-auto">

      {/* ===================== TARJETAS DE OPCIÓN ===================== */}
      <div className="bg-white/10 border border-white/20 rounded-3xl p-10 backdrop-blur-md shadow-xl">

        <h2 className="text-lg text-white font-semibold mb-1">
          Opciones de certificado
        </h2>
        <p className="text-slate-300 mb-6">
          ¿Deseas obtener un certificado de participación?
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Opción Gratis */}
          <div
            onClick={() => setOption("gratis")}
            className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300
              ${
                option === "gratis"
                  ? "border-yellow-400 bg-yellow-400/10"
                  : "border-white/20 bg-white/5 hover:bg-white/10"
              }
            `}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-6 h-6 rounded-full border flex items-center justify-center
                  ${
                    option === "gratis"
                      ? "border-yellow-400 bg-yellow-400"
                      : "border-white/30"
                  }
                `}
              >
                {option === "gratis" && <FiCheck size={14} className="text-[#0b1833]" />}
              </div>
              <h3 className="text-white font-semibold">Solo registro</h3>
            </div>

            <p className="text-sm text-slate-300">Acceso al evento sin certificado.</p>
            <p className="text-sm mt-2 text-yellow-300">Gratis</p>
          </div>

          {/* Opción con pago (CORREGIDO) */}
          <div
            onClick={() => setOption("pago")}
            className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300
              ${
                option === "pago"
                  ? "border-yellow-400 bg-yellow-400/10"
                  : "border-white/20 bg-white/5 hover:bg-white/10"
              }
            `}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-6 h-6 rounded-full border flex items-center justify-center
                  ${
                    option === "pago"
                      ? "border-yellow-400 bg-yellow-400"
                      : "border-white/30"
                  }
                `}
              >
                {option === "pago" && <FiCheck size={14} className="text-[#0b1833]" />}
              </div>
              <h3 className="text-white font-semibold">Con certificado</h3>
            </div>

            <p className="text-sm text-slate-300">
              Acceso + certificado con validez académica
            </p>
            
            {/* AQUÍ ESTÁ EL CAMBIO DINÁMICO */}
            <p className="text-sm mt-2 text-yellow-300">
              S/ {precio} <span className="text-slate-400">pago único ({etiqueta})</span>
            </p>
          </div>
        </div>

        {/* ===================== BOTONES CONDICIONALES ===================== */}
        
        {/* Si es GRATIS, mostramos botones normales */}
        {option === "gratis" && (
            <div className="flex justify-between mt-10 animate-in fade-in slide-in-from-top-4 duration-500">
            <Link
                to="/inscribete"
                className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20 transition flex items-center gap-2"
            >
                <FiArrowLeft /> Volver
            </Link>

            <Link
                to="/inscribete/check" // O a donde redirijas cuando es gratis
                className="px-10 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-[#0b1833] font-semibold hover:from-yellow-200 hover:to-yellow-400 transition"
            >
                Completar registro
            </Link>
            </div>
        )}
      </div>
      
      {/* Si es PAGO, mostramos los componentes de pago */}
      {option === "pago" && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-6 space-y-6">
            <StepMetodoPago /> 
            <StepFormPago />
        </div>
      )}
    </div>
  );
};

export default Step2Certificado;