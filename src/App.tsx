import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NosotrosEjemplo from "./pages/NosotrosEjemplo";
import PonentesPage from './pages/PonentesPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<NosotrosEjemplo />} />
      <Route path="/ponentes" element={<PonentesPage />} />
    </Routes>
  )
}

export default App
