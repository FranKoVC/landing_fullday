// 1. CORRECCIÓN AQUÍ: Agregamos 'type' antes de ReactNode
import { createContext, useState, useContext, type ReactNode } from "react";

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

export const RegistrationProvider = ({ children }: RegistrationProviderProps) => {
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    fullName: "",
    documentType: "",
    documentNumber: "",
    email: "",
    phone: "",
    type: "",
  });

  const updateRegistrationData = (data: Partial<RegistrationData>) => {
    setRegistrationData((prev) => ({ ...prev, ...data }));
  };

  return (
    <RegistrationContext.Provider value={{ registrationData, updateRegistrationData }}>
      {children}
    </RegistrationContext.Provider>
  );
};