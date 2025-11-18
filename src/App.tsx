import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PruebaPonentes from "./pages/PruebaPonentes";
import PruebaDetallePonentes from "./pages/PruebaDetallePonentes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ponentes" element={<PruebaPonentes />} />
      <Route path="/ponentes/:id" element={<PruebaDetallePonentes />} />
    </Routes>
  );
}

export default App;
