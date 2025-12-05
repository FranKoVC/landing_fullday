import { useState, useEffect } from "react";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import StepMetodoPago from "./StepMetodoPago"; 
import StepFormPago from "./StepFormPago";
import { useRegistration } from "./RegistrationContext";

const Step2Certificado = () => {
  const navigate = useNavigate();
  const [option, setOption] = useState("gratis");
  const [loading, setLoading] = useState(false); // Estado para el botón de carga
  
  // 1. Obtenemos los datos del contexto
  const { registrationData } = useRegistration();

  // === PROTECCIÓN DE RUTA ===
  useEffect(() => {
    if (!registrationData.documentNumber || !registrationData.fullName) {
      navigate("/inscribete");
    }
  }, [registrationData, navigate]);

  // 2. Calculamos precio dinámicamente
  const precio = registrationData.type === "STUDENT" ? "25.00" : "35.00";
  const etiqueta = registrationData.type === "STUDENT" ? "Estudiante" : "Profesional";

  // === FUNCIÓN PARA REGISTRO GRATUITO ===
  const handleFreeRegister = async () => {
    setLoading(true);

    // Construimos el payload SIN el objeto payment
    // El backend espera solo los datos del participante para registros gratuitos
    const finalPayload = {
      documentNumber: registrationData.documentNumber,
      fullName: registrationData.fullName,
      email: registrationData.email,
      phone: registrationData.phone,
      type: registrationData.type || "STUDENT"
    };

    try {
      // Usamos la IP pública del servidor
      const response = await fetch("http://3.238.32.48:8080/api/admin/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalPayload),
      });

      if (response.ok) {
        console.log("Registro gratuito exitoso");
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

          {/* Opción con pago */}
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
            
            <p className="text-sm mt-2 text-yellow-300">
              S/ {precio} <span className="text-slate-400">pago único ({etiqueta})</span>
            </p>
          </div>
        </div>

        {/* ===================== BOTONES CONDICIONALES ===================== */}
        
        {/* Si es GRATIS */}
        {option === "gratis" && (
            <div className="flex justify-between mt-10 animate-in fade-in slide-in-from-top-4 duration-500">
            <Link
                to="/inscribete"
                className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20 transition flex items-center gap-2"
            >
                <FiArrowLeft /> Volver
            </Link>

            {/* BOTÓN DE REGISTRO GRATUITO CONECTADO AL BACKEND */}
            <button
                onClick={handleFreeRegister}
                disabled={loading}
                className={`px-10 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-[#0b1833] font-semibold hover:from-yellow-200 hover:to-yellow-400 transition
                  ${loading ? "opacity-50 cursor-not-allowed" : ""}
                `}
            >
                {loading ? "Registrando..." : "Completar registro"}
            </button>
            </div>
        )}
      </div>
      
      {/* Si es PAGO */}
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