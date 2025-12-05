import { createContext, useState, useContext, useEffect, type ReactNode } from "react";

// 1. Definimos la estructura de los datos del usuario
interface RegistrationData {
  fullName: string;
  documentType: string;
  documentNumber: string;
  email: string;
  phone: string;
  type: string;
}

// 2. Definimos qué funciones y datos tendrá el Contexto
interface RegistrationContextType {
  registrationData: RegistrationData;
  updateRegistrationData: (data: Partial<RegistrationData>) => void;
  clearRegistrationData: () => void; // <--- NUEVO: Para borrar datos al finalizar
}

// 3. Creamos el contexto
const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

// Hook personalizado
export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error("useRegistration debe usarse dentro de un RegistrationProvider");
  }
  return context;
};

// 4. Definimos el tipo para los props
interface RegistrationProviderProps {
  children: ReactNode;
}

// Valores iniciales vacíos
const INITIAL_STATE: RegistrationData = {
  fullName: "",
  documentType: "",
  documentNumber: "",
  email: "",
  phone: "",
  type: "",
};

const STORAGE_KEY = "registration_session_v1";

export const RegistrationProvider = ({ children }: RegistrationProviderProps) => {
  
  // A. INICIALIZACIÓN CON SESSION STORAGE
  const [registrationData, setRegistrationData] = useState<RegistrationData>(() => {
    try {
      // Intentamos leer del navegador al cargar la página
      const storedData = sessionStorage.getItem(STORAGE_KEY);
      return storedData ? JSON.parse(storedData) : INITIAL_STATE;
    } catch (error) {
      console.error("Error leyendo sessionStorage", error);
      return INITIAL_STATE;
    }
  });

  // B. GUARDADO AUTOMÁTICO
  // Cada vez que registrationData cambie, lo guardamos en el navegador
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(registrationData));
  }, [registrationData]);

  const updateRegistrationData = (data: Partial<RegistrationData>) => {
    setRegistrationData((prev) => ({ ...prev, ...data }));
  };

  // C. FUNCIÓN DE LIMPIEZA
  const clearRegistrationData = () => {
    setRegistrationData(INITIAL_STATE);
    sessionStorage.removeItem(STORAGE_KEY);
  };

  return (
    <RegistrationContext.Provider value={{ registrationData, updateRegistrationData, clearRegistrationData }}>
      {children}
    </RegistrationContext.Provider>
  );
};