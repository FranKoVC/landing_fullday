// Nosotros.tsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Tipos para los props
interface TeamMemberCardProps {
  name: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
}

// Componente de tarjeta de miembro del equipo
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, title, description, tags, imageSrc }) => (
  <div className="bg-[#1a3a5c] rounded-lg overflow-hidden">
    <div className="aspect-4/3 bg-gray-600">
      <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
      <p className="text-orange-500 text-sm mb-3">{title}</p>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-orange-500 text-xs">
            {tag} {index < tags.length - 1 && '|'}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Componente principal Nosotros
const Nosotros: React.FC = () => {
  // Datos de ejemplo para los miembros del equipo
  const teamMembers = [
    {
      name: "MARY ESTEPHANY",
      title: "GÓMEZ RODRÍGUEZ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      tags: ["Full Stack", "Cloud Computing"],
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop"
    },
    {
      name: "MARY ESTEPHANY",
      title: "GÓMEZ RODRÍGUEZ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      tags: ["Full Stack", "Cloud Computing"],
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop"
    },
    {
      name: "MARY ESTEPHANY",
      title: "GÓMEZ RODRÍGUEZ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      tags: ["Full Stack", "Cloud Computing"],
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a1f44]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop" 
                alt="Promoción" 
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#0a1f44] via-[#0a1f44]/80 to-transparent"></div>
            </div>
            
            {/* Contenido */}
            <div className="relative px-12 py-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Promoción <span className="text-orange-500">XXVI</span>
              </h1>
              <p className="text-gray-300 max-w-2xl mb-2 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra 
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-gray-300 max-w-2xl mb-8 leading-relaxed">
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel 
                facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <FaFacebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <FaInstagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <FaLinkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Docente Section */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-2xl font-bold mb-10">DOCENTE A CARGO DEL EVENTO</h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Foto del docente */}
            <div className="md:col-span-1">
              <div className="bg-[#1a3a5c] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" 
                  alt="Docente" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Información del docente */}
            <div className="md:col-span-1 text-white">
              <h3 className="text-xl font-bold mb-4">Ing. Alberto Carlos Mendoza de los Santos</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Docente especializado, licenciando académica y profesional - Ing. Electrónico a 
                lo largo del tiempo de especialización en TI, Comunicación audiovisual por la empresa, 
                posee Maestría en Tutoría y monitoreo pedagógico y principalmente tiene una experiencia.
              </p>
              
              <div className="mb-6">
                <h4 className="text-orange-500 font-bold mb-2">Certificaciones</h4>
                <p className="text-gray-300 text-sm">
                  CCSE | CBRSE | CCIE 3.7 | CCNA7 2018 | DGMKEP 24M17 Sernior Label 
                  Empresarios | Oracle Foundtion | Polytechnic University
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-orange-500 font-bold mb-2">Experiencia</h4>
                <p className="text-gray-300 text-sm">
                  Gerente de servicios y auditoria de TI | Comunidad de Negocios | 
                  Arquitectura de redes | Oracle DB | SQL SERVER DB | Linux 4.3 DB Server y 
                  principally tiene una experiencia.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-orange-500 font-bold mb-2">Contacto</h4>
                <a href="mailto:albertomendoza@gmail.com" className="text-gray-300 text-sm hover:text-orange-500">
                  albertomendoza@gmail.com
                </a>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <FaFacebook className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <FaInstagram className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <FaLinkedin className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
            
            {/* Artículos destacados */}
            <div className="md:col-span-1">
              <h3 className="text-white font-bold mb-4">ARTÍCULOS DESTACADOS</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="text-gray-300 text-sm pb-4 border-b border-gray-600">
                    <p className="leading-relaxed">
                      Suspendisse sollicitudin varius justo. Fermentum turpis mi adipiscing in. Faucibus adipiscing ut varius.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-3xl font-bold text-center mb-4">
            CONOCE A <span className="text-orange-500">CADA UNO</span> DE <span className="text-orange-500">NOSOTROS</span>
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;