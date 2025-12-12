import { useState, useEffect } from "react";
import { FiArrowLeft, FiCheck, FiAlertCircle } from "react-icons/fi"; // Añadí FiAlertCircle
import { Link, useNavigate } from "react-router-dom";
import { useRegistration } from "./RegistrationContext";
import { ENDPOINTS } from "../../config";

const Step2Certificado = () => {
  const navigate = useNavigate();
  // Forzamos que la opción inicial sea siempre "gratis"
  const [option, setOption] = useState("gratis");
  const [loading, setLoading] = useState(false);
  
  const { registrationData } = useRegistration();

  useEffect(() => {
    if (!registrationData.documentNumber || !registrationData.fullName) {
      navigate("/inscribete");
    }
  }, [registrationData, navigate]);

  const handleFreeRegister = async () => {
    setLoading(true);
    const dataPayload = {
      documentNumber: registrationData.documentNumber,
      fullName: registrationData.fullName,
      email: registrationData.email,
      phone: registrationData.phone,
      type: registrationData.type || "STUDENT"
    };

    const formData = new FormData();
    formData.append('data', JSON.stringify(dataPayload));

    try {
      const response = await fetch(ENDPOINTS.REGISTRATION, {
        method: "POST",
        body: formData, 
      });

      if (response.ok) {
        navigate("/inscribete/check#pasos-inscripcion");
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
    <div className="w-full mx-auto max-w-7xl transition-all duration-500">

      {/* ===================== TARJETAS DE OPCIÓN ===================== */}
      <div className="max-w-7xl mx-auto bg-white/10 border border-white/20 rounded-3xl p-10 backdrop-blur-md shadow-xl">

        <h2 className="text-lg text-white font-semibold mb-1">
          Opciones de registro
        </h2>
        <p className="text-slate-300 mb-6">
          Selecciona tu modalidad de participación.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Opción Gratis (Activa) */}
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
              <h3 className="text-white font-semibold">Solo registro (Disponible)</h3>
            </div>
            <p className="text-sm text-slate-300">Acceso completo al evento presencial.</p>
            <p className="text-sm mt-2 text-yellow-300 font-medium">Gratis</p>
          </div>

          {/* Opción con pago (DESHABILITADA) */}
          <div
            className="relative p-6 rounded-2xl border border-white/10 bg-white/5 opacity-60 cursor-not-allowed overflow-hidden group"
          >
            {/* Etiqueta de No Disponible */}
            <div className="absolute top-0 right-0 bg-red-500/80 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg">
              Agotado / No disponible
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center bg-white/5 text-slate-500">
                <FiAlertCircle size={14} />
              </div>
              <h3 className="text-slate-400 font-semibold">Con certificado</h3>
            </div>
            
            <p className="text-sm text-slate-500 italic mb-2">
              Las solicitudes de certificación han finalizado por este evento.
            </p>
            
            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
               <p className="text-xs text-red-300 leading-tight">
                 Lo sentimos, la opción de certificación académica ya no se encuentra disponible.
               </p>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between animate-in fade-in slide-in-from-top-4 duration-500">
          
          <Link 
            to="/inscribete#pasos-inscripcion" 
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20 transition flex items-center justify-center gap-2"
          >
            <FiArrowLeft /> Volver
          </Link>

          <button
            onClick={handleFreeRegister}
            disabled={loading}
            className={`w-full sm:w-auto px-10 py-3 rounded-full bg-linear-to-r from-yellow-300 to-yellow-500 text-[#0b1833] font-semibold hover:from-yellow-200 hover:to-yellow-400 transition flex justify-center items-center ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Registrando..." : "Confirmar asistencia gratuita"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2Certificado;