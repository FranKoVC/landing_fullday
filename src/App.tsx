import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ubicacion from "./components/Ubicación";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ubicacion" element={<Ubicacion />} />
      <Route path="/nosotros" element={<Nosotros />} />
    </Routes>
  );
}

export default App;
