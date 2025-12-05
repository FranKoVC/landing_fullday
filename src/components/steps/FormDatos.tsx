import { useState, type ChangeEvent } from "react";
import { FiUser, FiPhone, FiMail, FiHash, FiBriefcase } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";
import PeruFlag from "../../assets/peru.png";
import { useNavigate } from "react-router-dom";
import { useRegistration } from "./RegistrationContext";

const InscripcionForm = () => {
  const navigate = useNavigate();
  // 1. Obtenemos 'registrationData' para poder pre-llenar el formulario
  const { updateRegistrationData, registrationData } = useRegistration();

  // 2. Inicializamos el estado con los datos del contexto (si existen)
  const [localData, setLocalData] = useState(() => {
    
    // Convertimos el tipo del backend (STUDENT/PROFESSIONAL) al valor del Select (Estudiante/Profesional)
    let initialType = "";
    if (registrationData.type === "STUDENT") initialType = "Estudiante";
    else if (registrationData.type === "PROFESSIONAL") initialType = "Profesional";
    // Nota: Si era "Público general", se mostrará "Profesional" porque ambos son PROFESSIONAL, es aceptable.

    return {
      fullName: registrationData.fullName || "",
      documentType: registrationData.documentType || "",
      documentNumber: registrationData.documentNumber || "",
      phone: registrationData.phone || "",
      email: registrationData.email || "",
      participantType: initialType // Usamos el valor recuperado
    };
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    // 1. Validaciones simples
    if (!localData.fullName || !localData.documentNumber || !localData.email || !localData.participantType) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    // 2. Mapeo de datos (Frontend -> Backend Enum)
    let backendType = "STUDENT"; 
    
    if (localData.participantType === "Estudiante") {
        backendType = "STUDENT";
    } else {
        // "Profesional" y "Público general" -> PROFESSIONAL
        backendType = "PROFESSIONAL";
    }

    // 3. Guardar en el Contexto Global (Esto actualiza la memoria y el sessionStorage)
    updateRegistrationData({
      fullName: localData.fullName,
      documentType: localData.documentType,
      documentNumber: localData.documentNumber,
      phone: localData.phone,
      email: localData.email,
      type: backendType
    });

    // 4. Navegar al siguiente paso
    navigate("/inscribete/certificado");
  };

  return (
    <div className="max-w-4xl w-full mx-auto">

      {/* ===================== GLASS DEL FORM ===================== */}
      <div className="bg-white/10 border border-white/20 rounded-3xl p-10 backdrop-blur-md shadow-xl">

        <form className="space-y-7">

          {/* Nombres */}
          <div className="flex flex-col">
            <div className="relative flex items-center gap-2">
              <FiUser className="text-yellow-400" size={20} />
              <label className="text-sm text-slate-200">
                Nombre y apellidos completos
              </label>
            </div>

            <div className="relative mt-2">
              <input
                type="text"
                name="fullName"
                value={localData.fullName}
                onChange={handleChange}
                className="w-full h-12 pl-12 pr-3 rounded-lg bg-white/5 border border-white/20 
                focus:outline-none focus:border-yellow-400 text-sm text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Documento */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Tipo de documento */}
            <div className="flex flex-col">
              <div className="relative flex items-center gap-2">
                <FaRegAddressCard className="text-yellow-400" size={20} />
                <label className="text-sm text-slate-200">
                  Tipo de documento
                </label>
              </div>

              <div className="relative mt-2">
                <select
                  name="documentType"
                  value={localData.documentType}
                  onChange={handleChange}
                  className="w-full h-12 pl-12 pr-5 rounded-lg bg-[#0b1833]/60 border border-white/20 
                  text-sm focus:border-yellow-400 outline-none text-white cursor-pointer transition"
                >
                  <option className="bg-[#0b1833]" value="">Seleccionar</option>
                  <option className="bg-[#0b1833]" value="DNI">DNI</option>
                  <option className="bg-[#0b1833]" value="Pasaporte">Pasaporte</option>
                  <option className="bg-[#0b1833]" value="Carnet de Extranjería">Carnet de Extranjería</option>
                </select>
              </div>
            </div>

            {/* Número de documento */}
            <div className="flex flex-col">
              <div className="relative flex items-center gap-2">
                <FiHash className="text-yellow-400" size={20} />
                <label className="text-sm text-slate-200">
                  Número de documento
                </label>
              </div>

              <div className="relative mt-2">
                <input
                  type="text"
                  name="documentNumber"
                  value={localData.documentNumber}
                  onChange={handleChange}
                  className="w-full h-12 pl-12 pr-3 rounded-lg bg-white/5 border border-white/20 
                  focus:border-yellow-400 outline-none text-sm text-white placeholder:text-slate-400"
                />
              </div>
            </div>

          </div>

          {/* Celular */}
          <div>
            <div className="relative flex items-center gap-2">
              <FiPhone className="text-yellow-400" size={20} />
              <label className="text-sm text-slate-200 mb-1">Número de celular</label>
            </div>

            <div className="flex gap-4 mt-2">
              {/* +51 con bandera */}
              <div
                className="w-28 h-12 rounded-lg bg-white/5 border border-yellow-400 
                flex items-center justify-center gap-2 font-semibold text-white"
              >
                <img
                  src={PeruFlag}
                  alt="Perú"
                  className="w-5 h-5 object-cover rounded-sm"
                />
                +51
              </div>

              <div className="relative w-full">
                <input
                  type="text"
                  name="phone"
                  value={localData.phone}
                  onChange={handleChange}
                  className="w-full h-12 pl-12 pr-3 rounded-lg bg-white/5 border border-white/20 
                  focus:border-yellow-400 outline-none text-sm text-white placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>

          {/* Correo */}
          <div>
            <div className="relative flex items-center gap-2">
              <FiMail className="text-yellow-400" size={20} />
              <label className="text-sm text-slate-200">
                Correo electrónico
              </label>
            </div>
            <div className="relative mt-2">
              <input
                type="email"
                name="email"
                value={localData.email}
                onChange={handleChange}
                className="w-full h-12 pl-12 pr-3 rounded-lg bg-white/5 border border-white/20 
                focus:border-yellow-400 outline-none text-sm text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Tipo de participante */}
          <div>
            <div className="relative flex items-center gap-2">
              <FiBriefcase className="text-yellow-400" size={20} />
              <label className="text-sm text-slate-200">
                Tipo de participante
              </label>
            </div>
            <div className="relative mt-2">
              <select
                name="participantType"
                value={localData.participantType}
                onChange={handleChange}
                className="w-full h-12 pl-12 pr-3 rounded-lg bg-[#0b1833]/60 border border-white/20 text-sm 
                focus:border-yellow-400 outline-none text-white cursor-pointer transition"
              >
                <option className="bg-[#0b1833]" value="">Seleccionar</option>
                <option className="bg-[#0b1833]" value="Estudiante">Estudiante</option>
                <option className="bg-[#0b1833]" value="Profesional">Profesional</option>
                <option className="bg-[#0b1833]" value="Público general">Público general</option>
              </select>
            </div>
          </div>

          {/* Botón */}
          <button
            type="button"
            onClick={handleNextStep}
            className="w-full mt-4 rounded-full py-3 bg-yellow-400 text-[#0b1833] font-semibold text-lg hover:bg-yellow-300 transition cursor-pointer"
          >
            Continuar al pago
          </button>

        </form>
      </div>

    </div>
  );
};

export default InscripcionForm;