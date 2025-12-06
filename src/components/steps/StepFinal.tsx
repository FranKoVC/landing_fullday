import { useEffect } from "react"; 
import { FiUser, FiMail, FiCheckCircle, FiFileText, FiHome } from "react-icons/fi"; // Agregamos FiHome
import { useRegistration } from "./RegistrationContext";
import { useNavigate } from "react-router-dom"; // Importamos el hook de navegación

const StepFinal = () => {
  const navigate = useNavigate();
  const { registrationData, clearRegistrationData } = useRegistration();

  // Detectamos si es pago o gratis para ajustar el mensaje de texto (sin romper estilo)
  const esPago = registrationData.payment?.operationNumber;

  // === TU SUGERENCIA IMPLEMENTADA ===
  const handleFinalizar = () => {
    // 1. Navegamos primero
    navigate("/"); 

    // 2. Borramos los datos después de 100ms para que el componente padre
    // se desmonte antes y no detecte que los datos están vacíos.
    setTimeout(() => {
        clearRegistrationData();
    }, 100);
  };

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

          {/* Nombre Dinámico */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-300/20">
              <FiUser className="text-yellow-300" size={22} />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Nombre completo</p>
              <p className="text-white font-medium capitalize">
                {registrationData.fullName || "Usuario Registrado"}
              </p>
            </div>
          </div>

          {/* Correo Dinámico */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-300/20">
              <FiMail className="text-yellow-300" size={22} />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Correo electrónico</p>
              <p className="text-white font-medium">
                {registrationData.email || "correo@ejemplo.com"}
              </p>
            </div>
          </div>

          {/* Tipo registro Dinámico */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-300/20">
              <FiFileText className="text-yellow-300" size={22} />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Tipo de participante</p>
              <p className="text-white font-medium">
                {registrationData.type === "STUDENT" && "Estudiante"}
                {registrationData.type === "PROFESSIONAL" && "Profesional"}
                {registrationData.type === "GENERAL" && "Público General"}
                {!registrationData.type && "Registro General"}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Barra inferior de verificación (Texto dinámico, MISMO ESTILO) */}
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