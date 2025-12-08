import { useState, useEffect } from "react";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import StepMetodoPago from "./StepMetodoPago"; 
import StepFormPago from "./StepFormPago";
import { useRegistration } from "./RegistrationContext";
import { ENDPOINTS } from "../../config";

const Step2Certificado = () => {
  const navigate = useNavigate();
  const [option, setOption] = useState("gratis");
  const [loading, setLoading] = useState(false);
  
  const { registrationData } = useRegistration();

  useEffect(() => {
    if (!registrationData.documentNumber || !registrationData.fullName) {
      navigate("/inscribete");
    }
  }, [registrationData, navigate]);

  const precio = registrationData.type === "STUDENT" ? "25.00" : "35.00";
  const etiqueta = registrationData.type === "STUDENT" ? "Estudiante" : "Profesional";

  // =========================================================
  // === CAMBIO PRINCIPAL: ENVÍO GRATUITO CON FORMDATA ===
  // =========================================================
  const handleFreeRegister = async () => {
    setLoading(true);

    // 1. Construimos el objeto JSON limpio (Sin pago, sin imagen)
    const dataPayload = {
      documentNumber: registrationData.documentNumber,
      fullName: registrationData.fullName,
      email: registrationData.email,
      phone: registrationData.phone,
      type: registrationData.type || "STUDENT"
    };

    // 2. Creamos el FormData
    const formData = new FormData();
    // Aunque no haya imagen, el backend espera el JSON dentro del campo "data"
    formData.append('data', JSON.stringify(dataPayload));

    try {
      const response = await fetch(ENDPOINTS.REGISTRATION, {
        method: "POST",
        // IMPORTANTE: Quitamos el header 'Content-Type': 'application/json'
        // El navegador detectará el FormData y pondrá el boundary automáticamente.
        body: formData, 
      });

      if (response.ok) {
        navigate("/inscribete/check");
      } else {
        const errorText = await response.text();
        console.error("Error Backend:", errorText);
        alert("Ocurrió un error al registrar. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`w-full mx-auto transition-all duration-500 ${option === 'pago' ? 'max-w-7xl' : 'max-w-7xl'}`}>

      {/* ===================== TARJETAS DE OPCIÓN ===================== */}
      <div className="max-w-7xl mx-auto bg-white/10 border border-white/20 rounded-3xl p-10 backdrop-blur-md shadow-xl">

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
              ${option === "gratis" ? "border-yellow-400 bg-yellow-400/10" : "border-white/20 bg-white/5 hover:bg-white/10"}
            `}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${option === "gratis" ? "border-yellow-400 bg-yellow-400" : "border-white/30"}`}>
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
            className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300
              ${option === "pago" ? "border-yellow-400 bg-yellow-400/10" : "border-white/20 bg-white/5 hover:bg-white/10"}
            `}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${option === "pago" ? "border-yellow-400 bg-yellow-400" : "border-white/30"}`}>
                {option === "pago" && <FiCheck size={14} className="text-[#0b1833]" />}
              </div>
              <h3 className="text-white font-semibold">Con certificado</h3>
            </div>
            <p className="text-sm text-slate-300">Acceso + certificado con validez académica</p>
            <p className="text-sm mt-2 text-yellow-300">S/ {precio} <span className="text-slate-400">pago único ({etiqueta})</span></p>
          </div>
        </div>

        {/* Botones GRATIS */}
        {option === "gratis" && (
            <div className="flex justify-between mt-10 animate-in fade-in slide-in-from-top-4 duration-500">
            <Link to="/inscribete" className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20 transition flex items-center gap-2">
                <FiArrowLeft /> Volver
            </Link>
            <button
                onClick={handleFreeRegister}
                disabled={loading}
                className={`px-10 py-3 rounded-full bg-linear-to-r from-yellow-300 to-yellow-500 text-[#0b1833] font-semibold hover:from-yellow-200 hover:to-yellow-400 transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                {loading ? "Registrando..." : "Completar registro"}
            </button>
            </div>
        )}
      </div>
      
      {/* ===================== SECCIÓN PAGO ===================== */}
      {option === "pago" && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-8">
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-start">
                <div className="w-full lg:w-5/12 xl:w-1/3">
                    <StepMetodoPago /> 
                </div>
                <div className="w-full lg:w-7/12 xl:w-2/3">
                    <StepFormPago />
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Step2Certificado;