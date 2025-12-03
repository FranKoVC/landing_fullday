import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { faqs } from "../data/faq";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  return (
    <div>
      <section className="w-full bg-[#eef2f5] text-[#08213a] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Título principal */}
          <h2 className="text-center text-4xl font-semibold text-[#0a2c4a] leading-tight mb-14">
            Encuentra respuestas sobre el Full Day
            <br />
            en nuestras preguntas frecuentes
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((f) => {
              const isOpen = openFaq === f.id;

              return (
                <div
                  key={f.id}
                  className="bg-transparent border-b border-[#c5d2e0] pb-6"
                >
                  {/* Botón */}
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : f.id)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <p className="text-base md:text-lg font-semibold text-[#0a2c4a] leading-snug">
                      {f.q}
                    </p>

                    <span className="w-9 h-9 flex items-center justify-center rounded-full border border-[#23426f] text-[#23426f] transition-all duration-300 hover:bg-white cursor-pointer">
                      {isOpen ? (
                        <FiChevronUp className="w-5 h-5 transition-transform duration-300" />
                      ) : (
                        <FiChevronDown className="w-5 h-5 transition-transform duration-300" />
                      )}
                    </span>
                  </button>

                  {/* Respuesta con transición suave */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-500 ease-in-out
                      ${isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}
                    `}
                  >
                    <p className="text-sm md:text-base text-[#4f5a6a] leading-relaxed pr-14">
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
