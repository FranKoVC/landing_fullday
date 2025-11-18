import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Inscribete from "./pages/Inscribete"; 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
        {/* Ruta para la página INSCRÍBETE */}
        <Route path="/inscribete" element={<Inscribete />} />
      </Routes>



      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
