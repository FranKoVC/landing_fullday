import { Routes, Route } from "react-router-dom";
import Inscribete from "./pages/Inscribete";
import InscribeteCertificado from "./pages/InscribeteCertificado";
import InscribeteCheck from "./pages/InscribeteCheck";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inscribete  />} />
      <Route path="/inscribete" element={<Inscribete />} />
      <Route path="/inscribete/certificado" element={<InscribeteCertificado />} />
      <Route path="/inscribete/check" element={<InscribeteCheck />} />
    </Routes>
  );
}

export default App;
