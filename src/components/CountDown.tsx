import { useEffect, useMemo, useState } from "react";
import { FiCalendar, FiUser } from "react-icons/fi";

const CountDown = () => {
  /* =======================
      COUNTDOWN TIEMPO REAL
     ======================= */
  // ✅ fecha/hora real del evento
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
    <div>
      {/* =======================
              COUNTDOWN
         ======================= */}
      <section className="w-full bg-[#eef2f5] text-[#08213a]">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center space-y-10">
          {/* Tagline */}
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#23426f] uppercase">
            ¡ÚNETE A NUESTRO PRÓXIMO EVENTO!
          </p>

          {/* Título principal (consistente con Nosotros.tsx) */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#007a86]">
            11° Full Day de Gobierno de Tecnologías de la Información
          </h2>

          {/* Bloque de números */}
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 pt-2">
            <div className="min-w-[88px]">
              <p className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#ffb01f] via-[#ffc341] to-[#ffe08a] bg-clip-text text-transparent">
                {countdown.days}
              </p>
              <p className="text-[11px] md:text-xs text-[#55627a] mt-2 tracking-[0.25em] uppercase">
                DÍAS
              </p>
            </div>
            <div className="min-w-[88px]">
              <p className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#ffb01f] via-[#ffc341] to-[#ffe08a] bg-clip-text text-transparent">
                {countdown.hours}
              </p>
              <p className="text-[11px] md:text-xs text-[#55627a] mt-2 tracking-[0.25em] uppercase">
                HORAS
              </p>
            </div>
            <div className="min-w-[88px]">
              <p className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#ffb01f] via-[#ffc341] to-[#ffe08a] bg-clip-text text-transparent">
                {countdown.minutes}
              </p>
              <p className="text-[11px] md:text-xs text-[#55627a] mt-2 tracking-[0.25em] uppercase">
                MINUTOS
              </p>
            </div>
            <div className="min-w-[88px]">
              <p className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#ffb01f] via-[#ffc341] to-[#ffe08a] bg-clip-text text-transparent">
                {countdown.seconds}
              </p>
              <p className="text-[11px] md:text-xs text-[#55627a] mt-2 tracking-[0.25em] uppercase">
                SEGUNDOS
              </p>
            </div>
          </div>

          {/* Fecha y lugar (con íconos outline) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm md:text-base text-[#30415f] pt-4">
            <span className="inline-flex items-center gap-2 font-medium">
              <span className="w-6 h-6 rounded-full border border-[#30415f] flex items-center justify-center">
                <FiCalendar className="w-3.5 h-3.5" />
              </span>
              13 Diciembre, 2025
            </span>
            <span className="inline-flex items-center gap-2 font-medium">
              <span className="w-6 h-6 rounded-full border border-[#30415f] flex items-center justify-center">
                <FiUser className="w-3.5 h-3.5" />
              </span>
              Teatrín Nicolás Copérnico, UNT
            </span>
          </div>

          {/* Botones */}
          <div className="pt-6 flex items-center justify-center gap-4">
            {/* <button
              type="button"
              className="cursor-pointer px-8 py-2.5 rounded-full border border-[#0b3d63] text-[#0b3d63] text-xs md:text-sm font-semibold tracking-wide bg-transparent hover:bg-white hover:shadow-md transition-all duration-300"
            >
              VER DETALLES
            </button> */}
            <a href="/inscribete">
              <button
                type="button"
                className="cursor-pointer px-8 py-2.5 rounded-full text-white text-xs md:text-sm font-semibold tracking-wide bg-linear-to-r from-[#023E55] to-[#2BA5B2] shadow-md hover:shadow-lg hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300"
              >
                INSCRIBIRME
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountDown;
