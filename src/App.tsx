import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PonentesPage from './pages/PonentesPage';
import Ubicacion from "./components/Ubicación";
import Nosotros from "./pages/Nosotros";
import Inscribete from "./pages/Inscribete";
import InscribeteCertificado from "./pages/InscribeteCertificado";
import InscribeteCheck from "./pages/InscribeteCheck";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";

import DetallePonente from "./pages/PruebaDetallePonentes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ponentes" element={<PonentesPage />} />
      <Route path="/ponentes/:id" element={<DetallePonente />} />

      <Route path="/ubicacion" element={<Ubicacion />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/inscribete" element={<Inscribete />} />
      <Route path="/inscribete/certificado" element={<InscribeteCertificado />} />
      <Route path="/inscribete/check" element={<InscribeteCheck />} />



    </Routes>
  );
}

export default App;
