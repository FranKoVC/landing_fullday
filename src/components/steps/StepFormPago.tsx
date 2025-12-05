import { useRef, useState, useEffect, type ChangeEvent } from "react";
import { FiCalendar, FiCreditCard, FiHash, FiUploadCloud, FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useRegistration } from "./RegistrationContext";

const StepPagoForm = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  
  // 1. Traemos la data del paso anterior
  const { registrationData } = useRegistration();
  useEffect(() => {
    if (!registrationData.documentNumber || !registrationData.email) {
      navigate("/inscribete");
    }
  }, [registrationData, navigate]);

  const [loading, setLoading] = useState(false);
  const [archivo, setArchivo] = useState<File | null>(null);
  
  // 2. Estado para el formulario de pago
  const [paymentData, setPaymentData] = useState({
    paymentDate: "",
    paymentMethod: "",
    operationNumber: ""
  });

  // Calculamos monto visualmente
  const monto = registrationData.type === "STUDENT" ? "25.00" : "35.00";

  // Aceptamos Input O Select
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setArchivo(e.target.files[0]);
    }
  };

  const handleFinalSubmit = async () => {
    // Validar campos vacíos
    if (!paymentData.paymentDate || !paymentData.paymentMethod || !paymentData.operationNumber) {
        alert("Por favor completa los datos del pago");
        return;
    }

    setLoading(true);

    const finalPayload = {
      documentNumber: registrationData.documentNumber,
      fullName: registrationData.fullName,
      email: registrationData.email,
      phone: registrationData.phone,
      type: registrationData.type || "STUDENT", 
      payment: {
        paymentDate: paymentData.paymentDate,
        paymentMethod: paymentData.paymentMethod, // Ya vendrá como BANCO o YAPE
        operationNumber: paymentData.operationNumber
      }
    };

    try {
      // Usamos la IP pública de tu servidor
      const response = await fetch("http://3.238.32.48:8080/api/admin/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalPayload),
      });

      if (response.ok) {
        const data = await response.json(); 
        console.log("Registro creado con ID:", data.id);
        navigate("/inscribete/check"); 
      } else {
        const errorText = await response.text();
        console.error("Error Backend:", errorText);
        alert("Ocurrió un error al registrar. Revisa los datos ingresados.");
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  // Si no hay datos, retornamos null para evitar "flasheos" de contenido vacío antes del redirect
  if (!registrationData.documentNumber) return null;

  return (
    <div className="max-w-3xl mx-auto w-full mt-8">

      {/* ==== GLASS CONTAINER ==== */}
      <div className="bg-white/10 border border-white/20 rounded-3xl p-10 backdrop-blur-md shadow-xl">

        {/* Título */}
        <h2 className="text-center text-2xl font-semibold text-white">
          Información de pago
        </h2>
        
        {/* === SECCIÓN DE MONTO DINÁMICO === */}
        <div className="mt-6 mb-8 text-center bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-4 max-w-sm mx-auto">
          <p className="text-slate-300 text-sm mb-1">Monto a cancelar</p>
          <p className="text-3xl font-bold text-yellow-400">S/ {monto}</p>
          <p className="text-slate-400 text-xs mt-1 uppercase tracking-wide">
             {registrationData.type === "STUDENT" ? "Tarifa Estudiante" : "Tarifa Profesional / General"}
          </p>
        </div>

        <p className="text-center text-slate-300 mt-1 text-sm">
          Ingresa la información de tu pago en los siguientes campos para validarlos.
        </p>

        <div className="mt-8 space-y-6">

          {/* Fecha */}
          <div>
            <label className="flex items-center gap-2 text-slate-300 mb-1 text-sm">
              <FiCalendar className="text-yellow-300" />
              Fecha de pago
            </label>
            <input
              type="date"
              name="paymentDate"
              onChange={handleInputChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none cursor-pointer focus:border-yellow-400/50 transition"
            />
          </div>

          {/* Método - AHORA ES UN SELECT */}
          <div>
            <label className="flex items-center gap-2 text-slate-300 mb-1 text-sm">
              <FiCreditCard className="text-yellow-300" />
              Método de pago
            </label>
            <select
              name="paymentMethod"
              onChange={handleInputChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none cursor-pointer focus:border-yellow-400/50 transition"
            >
              <option value="" className="bg-[#0b1833] text-slate-400">Seleccionar</option>
              {/* Estos valores coinciden con el ENUM de Java */}
              <option value="BANCO" className="bg-[#0b1833]">Depósito Bancario</option>
              <option value="YAPE" className="bg-[#0b1833]">Yape / Plin</option>
            </select>
          </div>

          {/* Número operación */}
          <div>
            <label className="flex items-center gap-2 text-slate-300 mb-1 text-sm">
              <FiHash className="text-yellow-300" />
              Número de operación
            </label>
            <input
              type="text"
              name="operationNumber"
              onChange={handleInputChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-yellow-400/50 transition"
            />
          </div>

          {/* Comprobante */}
          <div>
            <label className="flex items-center gap-2 text-slate-300 mb-1 text-sm">
              <FiUploadCloud className="text-yellow-300" />
              Comprobante de pago
            </label>

            <div
              className="w-full h-40 bg-white/5 border border-white/10 rounded-xl
                         flex flex-col justify-center items-center text-center cursor-pointer hover:bg-white/10 transition group"
              onClick={() => fileInputRef.current?.click()}
            >
              <FiUploadCloud className="text-slate-300 group-hover:text-yellow-300 transition mb-2" size={32} />
              <p className="text-slate-300 text-sm group-hover:text-white transition">
                {archivo ? archivo.name : "Arrastra tu comprobante aquí o haz clic para seleccionar"}
              </p>
              <p className="text-slate-500 text-xs mt-1">
                PNG, JPG hasta 5MB
              </p>

              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileSelect}
              />
            </div>
          </div>

        </div>

        {/* Botones */}
        <div className="flex justify-between mt-10">
          <Link
            to="/inscribete"
            className="px-6 py-3 rounded-full bg-white/10 border border-white/20 
                       text-slate-200 hover:bg-white/20 transition flex items-center gap-2"
          >
            <FiArrowLeft /> Volver
          </Link>

          <button
            onClick={handleFinalSubmit}
            disabled={loading}
            className={`px-10 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 
                       text-[#0b1833] font-semibold hover:from-yellow-200 hover:to-yellow-400 transition
                       ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Enviando..." : "Completar registro"}
          </button>
        </div>

      </div>
      {/* ==== FIN GLASS ==== */}

    </div>
  );
};

export default StepPagoForm;