// src/pages/NosotrosEjemplo.tsx

import React from 'react';

// 1. Importa tu componente "ensamblador" de la carpeta de componentes
import AboutUs from '../components/AboutUs';
import Header from '../components/Header';
import Footer from '../components/Footer';

// 2. Define el componente de la Página
const NosotrosEjemplo: React.FC = () => {
  return (
    
    // 3. Renderiza tu componente
    //    Añadimos un padding (py-16) para que no se pegue al Navbar
    <div className="py-16 bg-[#10284B]">
      <Header />
      <AboutUs />
      <Footer />
    </div>
    
  );
};

// 4. Exporta la página para que el Router pueda usarla
export default NosotrosEjemplo;