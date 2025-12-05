import { FiUser, FiPhone, FiMail } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";
import { FiHash } from "react-icons/fi";
import PeruFlag from "../../assets/peru.png";
import { FiBriefcase } from "react-icons/fi";
import { useNavigate } from "react-router-dom";



const InscripcionForm = () => {
    const navigate = useNavigate();

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
                className="w-full h-12 pl-12 pr-3 rounded-lg bg-white/5 border border-white/20 
                focus:outline-none focus:border-yellow-400 text-sm placeholder:text-slate-400"
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
                    className="w-full h-12 pl-12  pr-5 rounded-lg bg-[#0b1833]/60 border border-white/20 
                    text-sm focus:border-yellow-400 outline-none text-white cursor-pointer transition"

                  >
                    <option className="bg-[#0b1833]">Seleccionar</option>
                    <option className="bg-[#0b1833]">DNI</option>
                    <option className="bg-[#0b1833]">Pasaporte</option>
                    <option className="bg-[#0b1833]">Carnet de Extranjería</option>
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
                    className="w-full h-12 pl-12 pr-3 rounded-lg bg-white/5 border border-white/20 
                    focus:border-yellow-400 outline-none text-sm placeholder:text-slate-400"
                  />
                </div>
              </div>

            </div>

          {/* Celular */}
          <div>
            <div className="relative flex items-center gap-2">
            <FiPhone className=" text-yellow-400" size={20} />
            <label className="text-sm text-slate-200 mb-1">Número de celular</label>
            </div>

            <div className="flex gap-4 mt-2">
            {/* +51 con bandera */}
            <div
              className="w-28 h-12 rounded-lg bg-white/5 border border-yellow-400 
              flex items-center justify-center gap-2 font-semibold"
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
                  className="w-full h-12 pl-12 pr-3 rounded-lg bg-white/5 border border-white/20 
                  focus:border-yellow-400 outline-none text-sm placeholder:text-slate-400"
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
                className="w-full h-12 pl-12 pr-3 rounded-lg bg-white/5 border border-white/20 
                focus:border-yellow-400 outline-none text-sm placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Tipo de participante */}
          <div>
            
            <div className="relative flex items-center gap-2">
              <FiBriefcase  className="text-yellow-400" size={20} />
              <label className="text-sm text-slate-200">
                Tipo de participante
              </label>
            </div>
            <div className="relative mt-2">
            <select
              className="w-full h-12 pl-12 pr-3 rounded-lg bg-[#0b1833]/60 border border-white/20 text-sm 
              focus:border-yellow-400 outline-none text-white cursor-pointer transition"
            >
              <option className="bg-[#0b1833]">Seleccionar</option>
              <option className="bg-[#0b1833]">Estudiante</option>
              <option className="bg-[#0b1833]">Profesional</option>
              <option className="bg-[#0b1833]">Público general</option>
            </select>
            </div>
         
          </div>

          {/* Botón */}
          <button
            type="button"
            onClick={() => navigate("/inscribete/certificado")}
            className="w-full mt-4 rounded-full py-3 bg-yellow-400 text-[#0b1833] font-semibold text-lg hover:bg-yellow-300 transition cursor-pointer"
          >
            Enviar código de verificación
          </button>

        </form>
      </div>

    </div>
  );
};

export default InscripcionForm;
