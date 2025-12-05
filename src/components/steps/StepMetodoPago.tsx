import { FiCreditCard } from "react-icons/fi";
import QRImage from "../../assets/QRvigo.png"; 

const StepMetodoPago = () => {
  return (
    <div className="max-w-7xl w-full mx-auto mt-8">

      

      {/* ===================== CONTENEDOR CENTRADO ===================== */}
      <div className="flex justify-center lg:justify-end w-full">

        {/* ===================== TARJETA QR ===================== */}
        <div className="p-8 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md w-full shadow-xl">
          {/* ===================== TÍTULO ===================== */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Método de pago disponible</h2>
            <p className="text-slate-300 mt-2 text-sm">
                Escanea el código QR para realizar el pago vía Yape.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <FiCreditCard className="text-yellow-400" size={24} />
            <span className="text-slate-200 font-medium">Código QR</span>
          </div>

          <div className="w-full flex justify-center  p-4 rounded-xl  ">
            <img 
              src={QRImage}
              alt="QR Yape"
              className="w-48 h-48 object-contain rounded-lg"
            />
          </div>

          <p className="text-center text-white font-semibold mt-6 text-lg">
            Gustavo A. Vigo R.
          </p>

          <p className="text-center text-yellow-300 mt-1 text-base font-medium tracking-wide">
            933 477 893
          </p>

        </div>

      </div>
    </div>
  );
};

export default StepMetodoPago;