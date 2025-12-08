import { FiCalendar, FiMapPin } from "react-icons/fi";
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
    <section className="w-full flex flex-col md:flex-row gap-6 justify-between max-w-7xl mx-auto px-6">
      
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

      {/* === Tarjeta derecha con countdown real (RESPONSIVE) === */}
      <div className="w-full md:w-1/2 bg-white/4 border border-white/20 rounded-2xl p-6 md:p-10 shadow-lg text-white backdrop-blur-sm">
        
        <div className="text-justify mb-6">
          {/* Párrafo Superior */}
          <p 
            className="
              font-sans font-medium 
              text-[14px] md:text-[16px]  /* 14px en móvil, 16px en PC */
              leading-tight md:leading-none
              tracking-normal
              text-transparent bg-clip-text 
              bg-[linear-gradient(90deg,#EEF3F5_0%,#2BA5B2_287.92%)]
              mb-2
            "
          >
            ¡Este es tu momento! Aprende, comparte y vive la experiencia del
          </p>

          {/* Título H3 */}
          <h3
            className="
              font-sans font-semibold 
              text-[24px] sm:text-[28px] md:text-[36px] /* Escala progresiva de tamaño */
              leading-tight md:leading-none
              tracking-normal
              text-transparent bg-clip-text 
              bg-[linear-gradient(90deg,#EEF3F5_0%,#2BA5B2_287.92%)]
              mb-3
            "
          >
            11.º Full Day de Gestión de TI, un evento para impulsar tu crecimiento profesional.
          </h3>

          {/* Párrafo Inferior */}
          <p 
            className="
              font-sans font-medium 
              text-[14px] md:text-[16px] /* Ajuste móvil */
              leading-tight md:leading-none
              tracking-normal
              text-transparent bg-clip-text 
              bg-[linear-gradient(90deg,#EEF3F5_0%,#2BA5B2_287.92%)]
              mb-6
            "
          >
            ¡Regístrate gratis y asegura tu lugar en esta edición imperdible!
          </p>
        </div>
        
        {/* === Contador adaptado === */}
        {/* Reduje el padding interno en móvil (p-4) vs PC (p-8) */}
        <div className="flex justify-between text-center mb-6 p-4 md:p-8 ">
          {[
            { label: "DÍAS", value: countdown.days },
            { label: "HORAS", value: countdown.hours },
            { label: "MINUTOS", value: countdown.minutes },
            { label: "SEGUNDOS", value: countdown.seconds },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center min-w-[50px]">
              <p 
                className="
                  font-sans font-extrabold
                  text-[26px] sm:text-[32px] md:text-[40px] /* Números más pequeños en móvil */
                  leading-none tracking-normal text-center
                  text-transparent bg-clip-text 
                  bg-[linear-gradient(118.9deg,#F7AF02_-18.84%,#EEF3F5_137.06%)]
                "
              >
                {item.value}
              </p>
              <span 
                className="
                  font-sans font-semibold
                  text-[10px] md:text-[12px] /* Texto etiqueta más pequeño */
                  leading-none tracking-normal text-center
                  text-[#EEF3F5]
                  mt-1
                "
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* === Fecha y lugar adaptado === */}
        <div className="
          flex flex-col md:flex-row       /* Columna en móvil, Fila en PC */
          items-start md:items-center     /* Izquierda en móvil, Centro en PC */
          justify-center 
          gap-4 md:gap-6 
          mt-6 md:mt-10
        ">
          {/* Fecha */}
          <span className="
              inline-flex items-center gap-2 md:gap-1
              font-sans font-semibold
              text-[13px] md:text-[14px]
              leading-none tracking-normal
              text-[#EEF3F5]"
          >
            <span className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#EEF3F5] shrink-0">
              <FiCalendar className="w-4 h-4" />
            </span>
            13 Diciembre, 2025
          </span>

          {/* Lugar */}
          <span 
            className="
              inline-flex items-center gap-2 md:gap-1
              font-sans font-semibold
              text-[13px] md:text-[14px]
              leading-none tracking-normal
              text-[#EEF3F5]
            "
          >
            <span className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#EEF3F5] shrink-0">
              <FiMapPin className="w-4 h-4" />
            </span>
            Teatrín Nicolás Copérnico, UNT
          </span>
        </div>
      </div>
    </section>
  );
};

export default GlassCertificado;