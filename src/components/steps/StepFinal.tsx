import { FiUser, FiMail, FiCheckCircle, FiFileText } from "react-icons/fi";

const StepFinal = () => {
  return (
    <div className="max-w-3xl mx-auto w-full mt-8 text-center">

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

          {/* Nombre */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-300/20">
              <FiUser className="text-yellow-300" size={22} />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Nombre completo</p>
              <p className="text-white font-medium">María Alexandra Lecca Rengifo</p>
            </div>
          </div>

          {/* Correo */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-300/20">
              <FiMail className="text-yellow-300" size={22} />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Correo electrónico</p>
              <p className="text-white font-medium">ally.lecca@icloud.com</p>
            </div>
          </div>

          {/* Tipo registro */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-300/20">
              <FiFileText className="text-yellow-300" size={22} />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Tipo de registro</p>
              <p className="text-white font-medium">Con certificado</p>
            </div>
          </div>

        </div>
      </div>

      {/* Barra inferior de verificación */}
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
          Tu comprobante de pago será verificado en las próximas 24–48 horas
        </p>
      </div>

    </div>
  );
};

export default StepFinal;
