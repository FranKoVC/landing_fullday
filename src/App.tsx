import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NosotrosEjemplo from "./pages/NosotrosEjemplo";
import PonentesPage from './pages/PonentesPage';
import Ubicacion from "./components/Ubicación";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<NosotrosEjemplo />} />
      <Route path="/ponentes" element={<PonentesPage />} />
      <Route path="/ubicacion" element={<Ubicacion />} />
    </Routes>
  );
}

export default App;
