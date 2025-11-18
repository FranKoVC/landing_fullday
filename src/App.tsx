import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PruebaPonentes from "./pages/PruebaPonentes";
import PruebaDetallePonentes from "./pages/PruebaDetallePonentes";
import PruebaModulos from "./pages/PruebaSponsor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ponentes" element={<PruebaPonentes />} />
      <Route path="/ponentes/:id" element={<PruebaDetallePonentes />} />
      <Route path="/sponsors" element={<PruebaModulos />} />
    </Routes>
  );
}

export default App;
