import { FiMic, FiTag } from "react-icons/fi";
import { type AgendaItem, agendaData } from "../data/agenda";
import agenda1 from "../assets/agenda-1.jpg";
import agenda2 from "../assets/agenda-2.jpg";
import agenda3 from "../assets/agenda-3.jpg";
import agenda4 from "../assets/agenda-4.jpg";

const Agenda = () => {
  const agendaImages = [agenda1, agenda2, agenda3, agenda4];

  return (
    <div>
      <section className="relative w-full bg-[#061937] py-16">
        <div className="max-w-7xl mx-auto px-2 grid gap-10 lg:grid-cols-3 items-stretch">
          {/* IZQUIERDA: AGENDA */}
          <div className="lg:col-span-2 self-stretch flex flex-col">
            <p className="text-lg text-slate-300 font-semibold tracking-wide uppercase mb-6">
              AGENDA
            </p>

            {/* lista de items con más separación vertical */}
            <div className="flex flex-col gap-x-12 gap-y-24">
              {agendaData.map((item: AgendaItem) => (
                <div key={item.id} className="flex gap-7 items-start">
                  {/* HORA */}
                  {item.highlight ? (
                    // círculo destacado con degradado naranja -> blanco
                    <div className="shrink-0 w-32 h-32 rounded-full bg-linear-to-br from-[#ffb01f] to-white p-px flex items-center justify-center">
                      {/* Círculo interior */}
                      <div className="w-full h-full rounded-full flex flex-col items-center justify-center bg-[#061937]">
                        <div className="text-xl md:text-4xl font-bold bg-linear-to-b from-[#ffb01f] to-white bg-clip-text text-transparent">
                          {item.time}
                        </div>
                        <span className="text-sm md:text-sm ml-1 mt-2 bg-linear-to-b from-[#ffb01f] to-white bg-clip-text text-transparent">
                          {item.timePeriod}
                        </span>
                      </div>
                    </div>
                  ) : (
                    // círculo normal
                    <div className="shrink-0 w-32 h-32 rounded-full border-2 border-white/50 flex flex-col items-center justify-center font-semibold text-white/90">
                      <div className="text-xl md:text-4xl font-bold">
                        {item.time}
                      </div>
                      <span className="text-sm md:text-sm ml-1 mt-2">
                        {item.timePeriod}
                      </span>
                    </div>
                  )}

                  {/* TEXTO */}
                  <div className="space-y-4">
                    <h3
                      className={`text-xl md:text-2xl font-semibold leading-snug transition-colors ${
                        item.highlight
                          ? "bg-linear-to-b from-[#ffb01f] via-[#ffb01f] to-[#ffe8b3] bg-clip-text text-transparent"
                          : "text-white"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {item.speaker && (
                      <p className="text-sm md:text-base text-slate-300 flex items-center gap-2">
                        <FiMic className="w-4 h-4 text-slate-400" />
                        <span>{item.speaker}</span>
                      </p>
                    )}

                    <p className="text-sm md:text-base text-slate-300 flex items-center gap-2">
                      <FiTag className="w-4 h-4 text-slate-500" />
                      <span>{item.place}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DERECHA: IMÁGENES (contornos intercalados + brillo en 3 y 4) */}
          <div className="hidden lg:flex flex-col gap-x-8 gap-y-20 mt-11 items-end self-stretch">
            {agendaImages.map((src, idx) => {
              const roundedStyle =
                idx % 2 === 0
                  ? "rounded-bl-[40px] rounded-tr-[40px] rounded-tl-0 rounded-br-0"
                  : "rounded-tl-[40px] rounded-br-[40px] rounded-tr-0 rounded-bl-0";

              const withGlow = idx === 2 || idx === 3;

              return (
                <div
                  key={idx}
                  className={`relative w-60 h-96 overflow-hidden bg-white/5 border border-white/10 shadow-lg transition-transform duration-500 hover:-translate-y-1 ${roundedStyle}`}
                >
                  {withGlow && (
                    <div className="absolute inset-0 bg-gradient-radial from-[#1fbac3]/28 to-transparent blur-2xl" />
                  )}

                  <img
                    src={src}
                    alt={`Agenda ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agenda;
