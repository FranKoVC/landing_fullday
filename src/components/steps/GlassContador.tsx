import { FiCalendar, FiUser } from "react-icons/fi";
import { useEffect, useMemo, useState } from "react";

const GlassCertificado = () => {
  // ===============================
  // COUNTDOWN REAL (pegado de tu lógica)
  // ===============================
  const targetDate = useMemo(() => new Date("2025-12-13T08:00:00-05:00"), []);

  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = targetDate.getTime() - new Date().getTime();
    return Math.max(diff, 0);
  });

  useEffect(() => {
    const t = setInterval(() => {
      const diff = targetDate.getTime() - new Date().getTime();
      setTimeLeft(Math.max(diff, 0));
    }, 1000);
    return () => clearInterval(t);
  }, [targetDate]);

  const countdown = useMemo(() => {
    const totalSeconds = Math.floor(timeLeft / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  }, [timeLeft]);

  return (
    <section className="w-full flex flex-col md:flex-row gap-6 justify-between mt-14">
      
      {/* === Tarjeta izquierda === */}
        <div className="w-full md:w-1/2 bg-white/5 border border-white/20 rounded-2xl p-10 shadow-[0_0_25px_rgba(255,255,255,0.05)]">
        <h3 className="text-white text-xl font-semibold mb-2">
          Certificado de participación
        </h3>
        <p className="text-slate-200 text-sm mb-4">
          Acredita tu asistencia al 11° Full Day de Gestión
          de TI – Promoción XXVI Ing. de Sistemas UNT.
        </p>

        <p className="text-white text-3xl font-bold mb-6">
          S/ 20.00 <span className="text-sm font-normal">/ pago único</span>
        </p>

        <button className="bg-[#f6c453] text-[#16254b] w-full py-3 font-semibold rounded-lg hover:bg-[#eab449] transition">
          Obtener certificado
        </button>

        <ul className="mt-6 text-slate-200 text-sm space-y-2">
          <li>✔ Entrega presencial y/o virtual</li>
          <li>✔ Certificado digital con validez académica</li>
          <li>✔ Disponible para todos los participantes</li>
        </ul>
      </div>

      {/* === Tarjeta derecha con countdown real === */}
      <div className="w-full md:w-1/2 bg-white/10 border border-white/20 rounded-2xl p-10 shadow-lg text-white">
        <p className="text-slate-200 text-sm mb-2">
          ¡Este es tu momento! Aprende, comparte y vive la experiencia del
        </p>
        <h3 className="text-3xl font-bold leading-tight mb-3">
          11.º Full Day de Gestión de TI, un evento para impulsar tu crecimiento profesional.
        </h3>
        <p className="text-slate-300 mb-6">
          Regístrate gratis y asegura tu lugar en esta edición imperdible.
        </p>

        {/* === Contador adaptado === */}
        <div className="flex justify-between text-center mb-6">
          {[
            { label: "DÍAS", value: countdown.days },
            { label: "HORAS", value: countdown.hours },
            { label: "MINUTOS", value: countdown.minutes },
            { label: "SEGUNDOS", value: countdown.seconds },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-bold bg-linear-to-b from-[#ffb01f] via-[#ffc341] to-[#ffe08a] bg-clip-text text-transparent">
                {item.value}
              </p>
              <span className="text-xs tracking-[0.2em] text-slate-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* === Fecha y lugar adaptado dentro del glass === */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm md:text-base text-slate-300">
          <span className="inline-flex items-center gap-2 font-medium">
            <span className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center">
              <FiCalendar className="w-3.5 h-3.5" />
            </span>
            13 Diciembre, 2025
          </span>
          <span className="inline-flex items-center gap-2 font-medium">
            <span className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center">
              <FiUser className="w-3.5 h-3.5" />
            </span>
            Auditorio de Humanidades, UNT
          </span>
        </div>
      </div>
    </section>
  );
};

export default GlassCertificado;
