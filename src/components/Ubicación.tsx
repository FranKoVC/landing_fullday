import React from 'react';

interface UbicacionProps {
  title?: string;
  subtitle?: string;
  mapImage?: string;
  mapLink?: string;
}

const Ubicacion: React.FC<UbicacionProps> = ({
  title = "AUDITORIO",
  subtitle = "COPÉRNICO",
  mapImage = "/images/ubicacion.png", // Imagen desde public/images/
  mapLink = "https://www.google.com/maps/place/Teatrín+Nicolás+Copérnico/@-8.1132694,-79.0400585,17.5z/data=!4m6!3m5!1s0x91ad3d9ef90488e9:0x73783cb69cf5bb17!8m2!3d-8.1133814!4d-79.038607!16s%2Fg%2F1hhjxkwm_?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
}) => {
  return (
    <section className="relative w-full bg-linear-to-b from-[#0a1f44] via-[#1a3a5f] to-[#2d4a6f] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8">
          <div className="inline-block mb-4">
            <span className="text-blue-300 text-sm font-medium tracking-wider uppercase">
              UBICACIÓN
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="text-white">{title}</span>
            <br />
            <span className="text-[#f59e0b]">{subtitle}</span>
          </h2>
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          <a 
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl border-4 border-white/10 hover:border-white/20 transition-all duration-300">
              {/* Map Image */}
              <img 
                src={mapImage}
                alt="Mapa de ubicación del auditorio"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg 
                    className="w-12 h-12 text-white drop-shadow-lg" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Direction indicator */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Ver en Google Maps
            </div>
          </a>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
};

export default Ubicacion;