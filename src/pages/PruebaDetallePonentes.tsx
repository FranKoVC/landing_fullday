import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PonenteCard from "../components/PonenteCard";
import { speakers, getSpeakerById } from "../data/ponentes";

const DetallePonente: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const numericId = id ? Number(id) : speakers[0].id;
  const mainSpeaker = getSpeakerById(numericId) ?? speakers[0];

  // todos menos el seleccionado
  const otherSpeakers = speakers.filter((s) => s.id !== mainSpeaker.id);

  return (
    <main className="min-h-screen bg-[#061937] text-white">
      {/* HERO CON FOTO GRANDE */}
      <section className="relative">
        <img
          src={mainSpeaker.imageSrc}
          alt={mainSpeaker.name}
          className="w-full h-[260px] md:h-[360px] lg:h-[420px] object-cover"
        />

        <div className="absolute inset-0 bg-[#061937]/60 mix-blend-multiply" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-6xl mx-auto px-4 pb-8">
            <button
              onClick={() => navigate(-1)}
              className="mb-4 inline-flex items-center gap-2 text-xs text-slate-200 hover:text-white transition-colors"
              type="button"
            >
              <span className="text-lg">&larr;</span>
              <span>Regresar</span>
            </button>

            <h1 className="text-2xl md:text-3xl font-semibold">
              {mainSpeaker.name.split(" ")[0]}{" "}
              <span className="text-[#ffb01f]">
                {mainSpeaker.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="mt-2 text-sm text-slate-200 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      {/* CUERPO: IZQUIERDA CONTENIDO – DERECHA OTROS PONENTES */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* IZQUIERDA */}
          <div className="lg:col-span-2">
            <div className="space-y-8 text-sm text-slate-200">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300 mb-3">
                  Sobre mí
                </h2>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300 mb-3">
                  Información de contacto
                </h2>
                <p>Correo electrónico: jennasmith@gmail.com</p>
                <p>Teléfono: +51 999 999 999</p>
              </div>

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300 mb-4">
                  Mi experiencia
                </h2>

                <div className="space-y-6">
                  {/* Timeline items de ejemplo */}
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] px-3 py-1 rounded-full border border-slate-500 text-slate-200 whitespace-nowrap">
                        2020 - 2025
                      </span>
                      <span className="w-px flex-1 bg-slate-600 mt-2" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">CEO empresarial</h3>
                      <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] px-3 py-1 rounded-full border border-slate-500 text-slate-200 whitespace-nowrap">
                        2020 - 2025
                      </span>
                      <span className="w-px flex-1 bg-slate-600 mt-2" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Subgerente</h3>
                      <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] px-3 py-1 rounded-full border border-slate-500 text-slate-200 whitespace-nowrap">
                        2020 - 2025
                      </span>
                      <span className="w-px flex-1 bg-slate-600 mt-2" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">
                        Ingeniero de sistemas
                      </h3>
                      <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] px-3 py-1 rounded-full border border-slate-500 text-slate-200 whitespace-nowrap">
                        2020 - 2025
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">
                        Practicante de TI
                      </h3>
                      <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DERECHA: OTROS PONENTES (solo los diferentes) */}
          <aside className="lg:col-span-1">
            <h3 className="text-xs font-semibold tracking-wide mb-6 uppercase text-slate-300">
              Otros ponentes
            </h3>

            <div className="space-y-4">
              {otherSpeakers.map((speaker) => (
                <Link
                  key={speaker.id}
                  to={`/ponentes/${speaker.id}`}
                  className="block"
                >
                  <PonenteCard
                    name={speaker.name}
                    role={speaker.role}
                    imageSrc={speaker.imageSrc}
                    variant="inline"
                  />
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default DetallePonente;
