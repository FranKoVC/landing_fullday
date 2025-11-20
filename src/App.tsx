import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ubicacion from "./components/Ubicación";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ubicacion" element={<Ubicacion />} />
    </Routes>
  )
}

export default App
