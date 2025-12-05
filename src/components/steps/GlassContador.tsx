import { FiCalendar, FiUser } from "react-icons/fi";
import { useEffect, useMemo, useState } from "react";

const GlassCertificado = () => {
  // ===============================
  // COUNTDOWN REAL
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
    <section className="w-full flex flex-col md:flex-row gap-6 justify-between mt-14 max-w-7xl mx-auto px-6">
      
      {/* === Tarjeta izquierda === */}
      <div className="w-full md:w-1/2 bg-white/5 border border-white/20 rounded-2xl p-10 shadow-[0_0_25px_rgba(255,255,255,0.05)]">
        <h3 className="text-white text-xl font-semibold mb-2">
          Certificado de participación
        </h3>
        <p className="text-slate-200 text-sm mb-6">
          Acredita tu asistencia al 11° Full Day de Gestión
          de TI – Promoción XXVI Ing. de Sistemas UNT.
        </p>

        {/* ======================================================= */}
        {/* SECCIÓN DE PRECIOS MODIFICADA */}
        {/* ======================================================= */}
        <div className="flex flex-col gap-3 mb-6">
          {/* Opción 1: Estudiantes */}
          <div className="flex items-center p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <span className="text-[#f6c453] text-2xl font-bold mr-4">S/ 25</span>
            <div className="flex flex-col">
              <span className="text-white text-sm font-medium">Estudiante UNT</span>
            </div>
          </div>

          {/* Opción 2: Profesionales */}
          <div className="flex items-center p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <span className="text-[#f6c453] text-2xl font-bold mr-4">S/ 35</span>
            <div className="flex flex-col">
              <span className="text-white text-sm font-medium">Profesional</span>
              <span className="text-slate-400 text-xs">o Egresado</span>
            </div>
          </div>
        </div>
        {/* ======================================================= */}

        <button className="bg-[#f6c453] text-[#16254b] w-full py-3 font-semibold rounded-lg hover:bg-[#eab449] transition shadow-lg shadow-orange-500/20">
          Obtener certificado
        </button>

        <ul className="mt-6 text-slate-200 text-sm space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-[#f6c453]">✔</span> Entrega presencial y/o virtual
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#f6c453]">✔</span> Certificado digital con validez académica
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#f6c453]">✔</span> Disponible para todos los participantes
          </li>
        </ul>
      </div>

      {/* === Tarjeta derecha con countdown real === */}
      <div className="w-full md:w-1/2 bg-white/10 border border-white/20 rounded-2xl p-10 shadow-lg text-white backdrop-blur-sm">
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
        <div className="flex justify-between text-center mb-6 bg-black/20 p-4 rounded-xl border border-white/5">
          {[
            { label: "DÍAS", value: countdown.days },
            { label: "HORAS", value: countdown.hours },
            { label: "MINUTOS", value: countdown.minutes },
            { label: "SEGUNDOS", value: countdown.seconds },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <p className="text-3xl font-bold bg-gradient-to-b from-[#ffb01f] via-[#ffc341] to-[#ffe08a] bg-clip-text text-transparent drop-shadow-sm">
                {item.value}
              </p>
              <span className="text-[10px] sm:text-xs tracking-[0.2em] text-slate-400 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* === Fecha y lugar adaptado === */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-6 text-sm md:text-base text-slate-300 mt-8">
          <span className="inline-flex items-center gap-3 font-medium">
            <span className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#f6c453]">
              <FiCalendar className="w-4 h-4" />
            </span>
            13 Diciembre, 2025
          </span>
          <span className="inline-flex items-center gap-3 font-medium">
            <span className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#f6c453]">
              <FiUser className="w-4 h-4" />
            </span>
            Auditorio de Humanidades, UNT
          </span>
        </div>
      </div>
    </section>
  );
};

export default GlassCertificado;