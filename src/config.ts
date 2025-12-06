// src/config.ts

// Detecta automáticamente si estás en Vite o CRA
const API_URL = import.meta.env?.VITE_API_URL ;

export const ENDPOINTS = {
  REGISTRATION: `${API_URL}/api/admin/registration`,
  // Aquí puedes agregar otros endpoints futuros
  // LOGIN: `${API_URL}/api/auth/login`,
};