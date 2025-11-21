import React from "react";
import { Link } from "react-router-dom";
import PonenteCard from "../components/PonenteCard";
import { speakers } from "../data/ponentes";

const PruebaPonentes: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#061937] text-white">
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-wide">
          CONOCE A NUESTROS{" "}
          <span className="text-[#ffb01f]">PONENTES</span>
        </h2>

        <p className="mt-4 text-xs md:text-sm text-slate-300 text-center max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <Link
              key={speaker.id}
              to={`/ponentes/${speaker.id}`}
              className="block"
            >
              <PonenteCard
                name={speaker.name}
                role={speaker.role}
                imageSrc={speaker.imageSrc}
                variant="grid"
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PruebaPonentes;
