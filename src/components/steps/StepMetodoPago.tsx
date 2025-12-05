import { FiCopy, FiCreditCard } from "react-icons/fi";
import QRImage from "../../assets/codigoQR.png"; // 
import BCPLogo from "../../assets/bcp.jpg";
import InterbankLogo from "../../assets/interbank.png";

const StepPago = () => {
  const copiar = (texto:string) => {
    navigator.clipboard.writeText(texto);
  };

  return (
    <div className="max-w-5xl w-full mx-auto">

      {/* ===================== TÍTULO ===================== */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-white">Métodos de pago disponibles</h2>
        <p className="text-slate-300 mt-2">
          Realiza tu pago mediante cualquiera de estos métodos
        </p>
      </div>

      {/* ===================== CONTENEDOR PRINCIPAL ===================== */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* ===================== TARJETA QR ===================== */}
        <div className="p-8 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md">
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <FiCreditCard className="text-yellow-400" />
            <span className="text-slate-300">Código QR</span>
          </div>

          <div className="w-full flex justify-center">
            <img 
              src={QRImage}
              alt="QR"
              className="w-56 h-56 rounded-lg border border-white/20"
            />
          </div>

          <p className="text-center text-slate-300 mt-4 text-sm">
            Escanea con Yape o Plin
          </p>

          <p className="text-center text-white font-semibold mt-4">
            Marko Felipe Garcia López
          </p>

          <p className="text-center text-yellow-300 mt-1 text-sm">
            +51 987 654 321
          </p>

        </div>

        {/* ===================== TARJETA BANCOS ===================== */}
<div className="p-8 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md">

  <div className="flex items-center gap-2 mb-6">
    <FiCreditCard className="text-yellow-400" />
    <span className="text-slate-300">Transferencia bancaria</span>
  </div>

  {/* Banco 1 */}
  <div className="flex gap-4 items-start p-4 mb-4">
    <img src={BCPLogo} alt="BCP" className="w-10" />

    <div className="flex-1 flex flex-col">
      <p className="text-white font-semibold text-left">Banco de Crédito del Perú</p>
      <p className="text-slate-400 text-sm text-left">Cuenta corriente</p>

      <p className="text-slate-300 text-xs mt-2 text-left">CCI</p>

      <p className="text-white text-sm flex items-center justify-between w-full">
        002-194-003456789012-34
        <FiCopy 
          className="cursor-pointer text-yellow-400"
          onClick={() => copiar("002-194-003456789012-34")}
        />
      </p>
    </div>
  </div>

  {/* Banco 2 */}
  <div className="flex gap-4 items-start p-4">
    <img src={InterbankLogo} alt="Interbank" className="w-10" />

    <div className="flex-1 flex flex-col">
      <p className="text-white font-semibold text-left">Banco Interbank</p>
      <p className="text-slate-400 text-sm text-left">Cuenta corriente</p>

      <p className="text-slate-300 text-xs mt-2 text-left">CCI</p>

      <p className="text-white text-sm flex items-center justify-between w-full">
        002-194-003456789012-34
        <FiCopy
          className="cursor-pointer text-yellow-400"
          onClick={() => copiar("002-194-003456789012-34")}
        />
      </p>
    </div>
  </div>

</div>


      </div>
    </div>
  );
};

export default StepPago;
