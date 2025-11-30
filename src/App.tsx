import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NosotrosEjemplo from "./pages/NosotrosEjemplo";
import PonentesPage from './pages/PonentesPage';
import Ubicacion from "./components/Ubicación";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<NosotrosEjemplo />} />
      <Route path="/ponentes" element={<PonentesPage />} />
      <Route path="/ubicacion" element={<Ubicacion />} />
      <Route path="/nosotros" element={<Nosotros />} />
    </Routes>
  );
}

export default App;
