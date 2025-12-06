import { useEffect, useState } from "react";
import { FiUser, FiMail, FiCheckCircle, FiFileText } from "react-icons/fi";
import { useRegistration } from "./RegistrationContext";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate

const StepFinal = () => {
  const navigate = useNavigate();
  const { registrationData, clearRegistrationData } = useRegistration();

  // 1. SNAPSHOT (Copia Local)
  // Guardamos los datos apenas carga el componente.
  const [localData] = useState(registrationData);

  // 2. GUARDIAN + LIMPIEZA
  useEffect(() => {
    // A. Verificamos la copia local. 
    // Si no hay DNI, significa que entraron por URL directa sin registrarse.
    if (!localData.documentNumber || !localData.fullName) {
      navigate("/inscribete");
      return; // Detenemos la ejecución aquí
    }

    // B. Si hay datos, limpiamos el Contexto Global.
    // El usuario seguirá viendo la info gracias a 'localData', 
    // pero si recarga la página, el contexto estará vacío y el guardián lo sacará.
    clearRegistrationData();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Se ejecuta solo una vez al montar

  // 3. Renderizado Condicional
  // Si no hay datos (mientras redirige), no mostramos nada.
  if (!localData.documentNumber) return null;

  // Verificación para texto (usando la copia local)
  const esPago = localData.payment?.operationNumber;

  return (
    <div className="max-w-4xl mx-auto w-full mt-8 text-center animate-in fade-in zoom-in duration-500 pb-10">

      {/* Icono grande */}
      <div className="flex justify-center mb-6">
        <div className="
          w-20 h-20 rounded-full 
          bg-gradient-to-b from-yellow-500 to-yellow-300 
          flex items-center justify-center shadow-lg
        ">
          <FiCheckCircle size={40} className="text-white drop-shadow-md" />
        </div>
      </div>

      {/* Título */}
      <h2 className="text-2xl font-semibold text-white">¡Todo listo!</h2>
      <p className="text-slate-300 mt-1">
        Has sido registrado con éxito
      </p>

      {/* Card resumen */}
      <div
        className="
          mt-10 p-8 rounded-2xl
          bg-white/5 border border-white/10
          backdrop-blur-xl
        "
      >
        <h3 className="text-lg font-semibold text-white mb-6">
          Resumen de Registro
        </h3>

        <div className="space-y-5 text-left">

          {/* Nombre Dinámico (Usando localData) */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-300/20">
              <FiUser className="text-yellow-300" size={22} />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Nombre completo</p>
              <p className="text-white font-medium capitalize">
                {localData.fullName || "Usuario Registrado"}
              </p>
            </div>
          </div>

          {/* Correo Dinámico (Usando localData) */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-300/20">
              <FiMail className="text-yellow-300" size={22} />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Correo electrónico</p>
              <p className="text-white font-medium">
                {localData.email || "correo@ejemplo.com"}
              </p>
            </div>
          </div>

          {/* Tipo registro Dinámico (Usando localData) */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-300/20">
              <FiFileText className="text-yellow-300" size={22} />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Tipo de participante</p>
              <p className="text-white font-medium">
                {localData.type === "STUDENT" && "Estudiante"}
                {localData.type === "PROFESSIONAL" && "Profesional"}
                {localData.type === "GENERAL" && "Público General"}
                {!localData.type && "Registro General"}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Barra inferior de verificación (Texto dinámico) */}
      <div
        className="
          mt-10 p-4 rounded-xl w-full
          border border-yellow-300/30
          bg-yellow-400/10 text-yellow-200
          flex items-center gap-3 justify-center
        "
      >
        <FiFileText className="text-yellow-300" size={20} />
        <p className="font-medium text-sm">
          {esPago 
            ? "Tu comprobante de pago será verificado en las próximas 24–48 horas"
            : "Tu registro gratuito ha sido confirmado correctamente"
          }
        </p>
      </div>

    </div>
  );
};

export default StepFinal;