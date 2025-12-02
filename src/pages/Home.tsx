import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PonenteCard from "../components/PonenteCard";
import { speakers } from "../data/ponentes";

type Benefit = {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

type AgendaItem = {
  id: number;
  time: string;
  title: string;
  speaker: string;
  place: string;
  highlight?: boolean;
};

type FaqItem = {
  id: number;
  q: string;
  a: string;
};

const Home: React.FC = () => {
  /* =======================
      IMÁGENES (REEMPLAZA)
     ======================= */
  const heroImage = "/assets/hero.jpg"; // ✅ pon tu imagen en public/assets o cambia ruta
  const agendaImages = [
    "/assets/agenda-1.jpg",
    "/assets/agenda-2.jpg",
    "/assets/agenda-3.jpg",
    "/assets/agenda-4.jpg",
  ]; // ✅ cambia por tus imágenes reales
  const sponsorLogos = [
    "/assets/sponsor-1.png",
    "/assets/sponsor-2.png",
    "/assets/sponsor-3.png",
    "/assets/sponsor-4.png",
    "/assets/sponsor-5.png",
    "/assets/sponsor-6.png",
    "/assets/sponsor-7.png",
    "/assets/sponsor-8.png",
    "/assets/sponsor-9.png",
    "/assets/sponsor-10.png",
  ]; // ✅ cambia por tus logos

  /* =======================
      COUNTDOWN TIEMPO REAL
     ======================= */
  // ✅ cambia la fecha/hora del evento aquí
  const targetDate = useMemo(() => new Date("2025-12-20T08:30:00-05:00"), []);

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

  /* =======================
          DATA MOCKUP
     ======================= */

  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Red global",
      subtitle: "Networking",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3 12h18M12 3c2.6 2.9 2.6 15.1 0 18c-2.6-2.9-2.6-15.1 0-18Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Casos reales",
      subtitle: "Innovación",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M4 12h3M17 12h3M12 4v3M12 17v3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Talleres",
      subtitle: "Práctica",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 8h8M8 12h8M8 16h5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Certificado",
      subtitle: "Participación",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="3"
            width="16"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7 8h10M7 12h10M7 16h6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
  ];

  const agenda: AgendaItem[] = [
    {
      id: 1,
      time: "8:30",
      title: "Palabras de bienvenida",
      speaker: "Apertura del evento",
      place: "Auditorio de Humanidades",
      highlight: true,
    },
    {
      id: 2,
      time: "9:00",
      title:
        "Liderazgo en la gestión de TI: Integrando IA para el futuro de la innovación",
      speaker: "Ponente invitado",
      place: "Auditorio de Humanidades",
    },
    {
      id: 3,
      time: "10:10",
      title:
        "Gobierno de TI en entidades financieras y oportunidades que nos ofrece la IA",
      speaker: "Ponente invitado",
      place: "Auditorio de Humanidades",
    },
    {
      id: 4,
      time: "11:50",
      title:
        "Gobierno de Servicios de Desarrollo y mantenimiento de aplicaciones y su integración con la IA",
      speaker: "Ponente invitado",
      place: "Auditorio de Humanidades",
    },
    {
      id: 5,
      time: "1:00",
      title: "Entretenimiento / Pausa",
      speaker: "Break",
      place: "Zona de descanso",
      highlight: true,
    },
    {
      id: 6,
      time: "3:00",
      title: "IA y Tecnología: Redefiniendo el Mundo Empresarial",
      speaker: "Ponente invitado",
      place: "Auditorio de Humanidades",
    },
    {
      id: 7,
      time: "4:10",
      title:
        "Construyendo el Futuro: Gobierno de TI, Tecnologías Emergentes y Responsabilidad Profesional",
      speaker: "Ponente invitado",
      place: "Auditorio de Humanidades",
    },
    {
      id: 8,
      time: "5:35",
      title:
        "Problemas de I&T en el Diseño del Gobierno de TI: ¿Generador de Valor o Nuevo Punto de Dolor con la IA?",
      speaker: "Ponente invitado",
      place: "Auditorio de Humanidades",
    },
  ];

  const faqs: FaqItem[] = [
    {
      id: 1,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
      a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      id: 2,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      a: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      id: 3,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
      a: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },
    {
      id: 4,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      a: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
    },
  ];

  /* =======================
          FAQ STATE
     ======================= */
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  /* =======================
        CARRUSEL PONENTES
     ======================= */
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const amount = 280;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-[#061937] text-white">
      {/* =======================
              HERO
         ======================= */}
      <section
        id="inicio"
        className="relative w-full min-h-[85vh] md:min-h-[95vh] overflow-hidden bg-[#061937]"
      >
        {/* fondo degradado */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-[#061937] to-[#061937]" />

        {/* imagen hero izquierda */}
        <img
          src={heroImage}
          alt="Hero"
          className="absolute left-0 top-0 h-full w-full md:w-1/2 object-cover object-center opacity-90"
        />

        {/* overlay para suavizar imagen */}
        <div className="absolute inset-0 bg-[#061937]/60 md:bg-transparent md:from-[#061937]/80 md:via-[#061937]/40 md:to-transparent md:bg-linear-to-r" />

        {/* contenido */}
        <div className="relative max-w-6xl mx-auto px-4 pt-28 md:pt-32 pb-20 grid gap-10 md:grid-cols-2 items-center">
          {/* columna izquierda vacía en desktop para respetar imagen */}
          <div className="hidden md:block" />

          {/* columna derecha texto */}
          <div className="space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-wide">
              Impulsa tus Conocimientos
              <br />
              en Gobierno de Tecnologías
              <br />
              de la Información
            </h1>

            <p className="text-sm md:text-base text-slate-200 leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              bibendum, sapien non viverra pretium, metus urna viverra lorem,
              sed condimentum elit risus et sapien.
            </p>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-slate-300">
                26 FullDay
              </p>
              <p className="text-sm text-slate-100 mt-1">
                Explora de cerca el mundo
                <br />
                de Gobierno de TIC
              </p>

              <button
                className="mt-4 px-5 py-2 rounded-full bg-[#1fbac3] hover:bg-[#17a7af] text-xs font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-[#1fbac3]/30 hover:shadow-[#1fbac3]/50 hover:-translate-y-0.5"
                type="button"
              >
                INSCRÍBETE YA
              </button>
            </div>
          </div>
        </div>

        {/* =======================
            QUIÉNES SOMOS + BENEFICIOS
           ======================= */}
        <div className="relative w-full bg-[#061937] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-2 items-start">
            {/* Quiénes somos */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-wide">
                QUIÉNES SOMOS
              </h2>
              <p className="text-sm text-slate-200 leading-relaxed">
                Full Day es un evento académico enfocado en el Gobierno de TI,
                impulsado por estudiantes y docentes, con el objetivo de crear
                un espacio de aprendizaje, innovación y networking entre la
                comunidad universitaria y profesional.
              </p>
              <button
                className="mt-2 px-5 py-2 rounded-full bg-[#1fbac3] hover:bg-[#17a7af] text-[11px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                type="button"
              >
                VER MÁS
              </button>
            </div>

            {/* Beneficios */}
            <div>
              <p className="text-xs text-slate-300 font-semibold mb-3">
                Beneficios de asistir al Full Day
              </p>

              <div className="grid grid-cols-4 bg-white/5 rounded-xl overflow-hidden border border-white/10">
                {benefits.map((b, i) => (
                  <div
                    key={b.id}
                    className={`flex flex-col items-center justify-center gap-2 p-5 text-center transition-all duration-300 ${
                      i === 0
                        ? "bg-[#1fbac3]/30 text-white"
                        : "hover:bg-white/10 text-slate-200"
                    }`}
                  >
                    <div className="text-white/90">{b.icon}</div>
                    <p className="text-xs font-semibold">{b.title}</p>
                    <p className="text-[10px] text-slate-200/80">
                      {b.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
              COUNTDOWN
         ======================= */}
      <section className="w-full bg-[#eef2f5] text-[#08213a]">
        <div className="max-w-5xl mx-auto px-4 py-14 text-center space-y-6">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            ÚNETE A NUESTRO PRÓXIMO EVENTO!
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#0a2c4a]">
            Full Day de Gobierno de Tecnologías de la Información
          </h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-3">
            <div className="min-w-[70px]">
              <p className="text-3xl md:text-4xl font-bold text-[#ffb01f] transition-all">
                {countdown.days}
              </p>
              <p className="text-xs text-slate-600 mt-1">DÍAS</p>
            </div>
            <div className="min-w-[70px]">
              <p className="text-3xl md:text-4xl font-bold text-[#ffb01f] transition-all">
                {countdown.hours}
              </p>
              <p className="text-xs text-slate-600 mt-1">HORAS</p>
            </div>
            <div className="min-w-[70px]">
              <p className="text-3xl md:text-4xl font-bold text-[#ffb01f] transition-all">
                {countdown.minutes}
              </p>
              <p className="text-xs text-slate-600 mt-1">MINUTOS</p>
            </div>
            <div className="min-w-[70px]">
              <p className="text-3xl md:text-4xl font-bold text-[#ffb01f] transition-all">
                {countdown.seconds}
              </p>
              <p className="text-xs text-slate-600 mt-1">SEGUNDOS</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-600 pt-2">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              20 Diciembre, 2025
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              Auditorio de Humanidades, UNT
            </span>
          </div>

          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              className="px-6 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-white transition-all duration-300 text-xs font-semibold"
            >
              MÁS INFO
            </button>
            <button
              type="button"
              className="px-6 py-2 rounded-full bg-[#1fbac3] hover:bg-[#17a7af] text-white transition-all duration-300 text-xs font-semibold shadow-md hover:-translate-y-0.5"
            >
              INSCRIBIRME
            </button>
          </div>
        </div>
      </section>

      {/* =======================
              AGENDA
         ======================= */}
      <section className="relative w-full bg-[#061937] py-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-3">
          {/* izquierda agenda */}
          <div className="lg:col-span-2">
            <p className="text-xs text-slate-300 font-semibold tracking-wide uppercase mb-6">
              AGENDA
            </p>

            <div className="space-y-8">
              {agenda.map((item) => (
                <div key={item.id} className="flex gap-5 items-start">
                  {/* hora */}
                  <div
                    className={`shrink-0 w-14 h-14 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                      item.highlight
                        ? "border-[#ffb01f] text-[#ffb01f] shadow-[0_0_0_6px_rgba(255,176,31,0.08)]"
                        : "border-white/30 text-white/80"
                    }`}
                  >
                    {item.time}
                  </div>

                  {/* contenido */}
                  <div className="space-y-1">
                    <h3
                      className={`text-sm md:text-base font-semibold leading-snug transition-colors ${
                        item.highlight ? "text-[#ffb01f]" : "text-white"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300">{item.speaker}</p>
                    <p className="text-xs text-slate-400">{item.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* derecha imágenes agenda */}
          <div className="hidden lg:flex flex-col gap-6 items-end">
            {agendaImages.map((src, idx) => (
              <div
                key={idx}
                className="w-[220px] h-[220px] overflow-hidden rounded-2xl rounded-tr-[40px] bg-white/5 border border-white/10 shadow-lg transition-transform duration-500 hover:-translate-y-1"
              >
                <img
                  src={src}
                  alt={`Agenda ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* =======================
              PONENTES (Carrusel)
           ======================= */}
        <div id="ponentes" className="max-w-6xl mx-auto px-4 pt-16">
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs text-slate-300 font-semibold tracking-wide uppercase">
              PONENTES
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 grid place-items-center"
                aria-label="Anterior"
              >
                <span className="text-lg">‹</span>
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 grid place-items-center"
                aria-label="Siguiente"
              >
                <span className="text-lg">›</span>
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory
             scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {speakers.map((s) => (
              <Link
                key={s.id}
                to={`/ponentes/${s.id}`}
                className="snap-start shrink-0 w-[180px] md:w-[210px] transition-transform duration-300 hover:-translate-y-1"
              >
                <PonenteCard
                  name={s.name}
                  role={s.role}
                  imageSrc={s.imageSrc}
                  variant="grid"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* =======================
              SPONSORS
           ======================= */}
        <div className="max-w-6xl mx-auto px-4 pt-16">
          <p className="text-xs text-slate-300 font-semibold tracking-wide uppercase mb-6">
            SPONSORS
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {sponsorLogos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Sponsor ${i + 1}`}
                  className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
              UBICACIÓN
         ======================= */}
      <section id="ubicacion" className="w-full bg-[#061937] py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          <p className="text-xs text-slate-300 font-semibold tracking-wide uppercase">
            UBICACIÓN
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
            AUDITORIO DE <span className="text-[#ffb01f]">HUMANIDADES</span>
          </h2>

          <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {/* ✅ reemplaza src por tu mapa si quieres */}
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.865201583144!2d-79.0421257!3d-8.1094384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d7d8edb8c6b%3A0x2c0d35b3eb47a29f!2sTeatrin%20de%20Humanidades%20UNT!5e0!3m2!1ses-419!2spe!4v1732060000000"
              width="100%"
              height="380"
              loading="lazy"
              className="block w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* =======================
              FAQ
         ======================= */}
      <section className="w-full bg-[#eef2f5] text-[#08213a] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-center text-xl md:text-2xl font-semibold text-[#0a2c4a] mb-8">
            Encuentra respuestas sobre el Full Day
            <br />
            en nuestras preguntas frecuentes
          </h3>

          <div className="space-y-3">
            {faqs.map((f) => {
              const isOpen = openFaq === f.id;
              return (
                <div
                  key={f.id}
                  className="bg-white rounded-xl border border-slate-200/80 overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : f.id)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
                  >
                    <p className="text-sm font-semibold text-[#0a2c4a]">
                      {f.q}
                    </p>

                    <div className="w-7 h-7 rounded-full border border-slate-300 grid place-items-center text-slate-600 transition-transform duration-300">
                      <span
                        className={`${
                          isOpen ? "rotate-45" : ""
                        } inline-block transition-transform duration-300`}
                      >
                        +
                      </span>
                    </div>
                  </button>

                  <div
                    className={`px-5 pb-4 text-sm text-slate-600 leading-relaxed transition-all duration-300 ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    {f.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =======================
              FOOTER SIMPLE
         ======================= */}
      <footer className="w-full bg-[#061937] border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <img
                src="/assets/logo-fullday.png"
                alt="FullDay"
                className="h-8 mb-4"
              />
              <h4 className="text-2xl md:text-3xl font-semibold leading-snug">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed do.
              </h4>

              <nav className="mt-6 flex gap-6 text-xs text-slate-300">
                <a
                  href="#inicio"
                  className="hover:text-white transition-colors"
                >
                  INICIO
                </a>
                <a
                  href="#ponentes"
                  className="hover:text-white transition-colors"
                >
                  PONENTES
                </a>
                <a
                  href="#ubicacion"
                  className="hover:text-white transition-colors"
                >
                  SOBRE NOSOTROS
                </a>
              </nav>
            </div>

            <div className="md:text-right text-xs text-slate-400 space-y-2">
              <p>Full Day Gobierno de TIC 2025 Ingeniería de Sistemas UNT.</p>
              <p>Todos los derechos reservados.</p>
              <div className="flex md:justify-end gap-3 pt-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 grid place-items-center hover:bg-white/10 transition-colors"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 grid place-items-center hover:bg-white/10 transition-colors"
                >
                  i
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/5 pt-4 text-[10px] text-slate-500 flex flex-col md:flex-row justify-between gap-2">
            <span>Trujillo - Perú 2025</span>
            <span>Contacto: fullday@unt.edu.pe</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
