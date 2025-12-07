import { Routes, Route } from "react-router-dom";
import Inscribete from "./pages/Inscribete";
import InscribeteCertificado from "./pages/InscribeteCertificado";
import InscribeteCheck from "./pages/InscribeteCheck";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/inscribete" element={<Inscribete />} />
      <Route path="/inscribete/certificado" element={<InscribeteCertificado />} />
      <Route path="/inscribete/check" element={<InscribeteCheck />} />
    </Routes>
  );
}

export default App;
