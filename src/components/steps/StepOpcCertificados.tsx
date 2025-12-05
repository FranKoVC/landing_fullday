import { useState } from "react";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const Step2Certificado = () => {
  const [option, setOption] = useState("gratis");

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
            className={`cursor-pointer p-6 rounded-2xl border 
              ${
                option === "gratis"
                  ? "border-yellow-400 bg-yellow-400/10"
                  : "border-white/20 bg-white/5"
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

          {/* Opción con pago */}
          <div
            onClick={() => setOption("pago")}
            className={`cursor-pointer p-6 rounded-2xl border 
              ${
                option === "pago"
                  ? "border-yellow-400 bg-yellow-400/10"
                  : "border-white/20 bg-white/5"
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
            <p className="text-sm mt-2 text-yellow-300">
              S/ 20.00 <span className="text-slate-400">pago único</span>
            </p>
          </div>
        </div>

        {/* ===================== BOTONES ===================== */}
        <div className="flex justify-between mt-10">
          <Link
            to="/inscribete"
            className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20 transition flex items-center gap-2"
          >
            <FiArrowLeft /> Volver
          </Link>

          <Link
            to="/inscribete/pago"
            className="px-10 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-[#0b1833] font-semibold hover:from-yellow-200 hover:to-yellow-400 transition"
          >
            Completar registro
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Step2Certificado;
