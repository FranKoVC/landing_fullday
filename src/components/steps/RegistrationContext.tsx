import { createContext, useState, useContext, useEffect, type ReactNode } from "react";

// 1. Estructura para los datos de PAGO
export interface PaymentData {
  paymentDate: string;
  paymentMethod: string;
  operationNumber: string;
}

// 2. Estructura general (Usuario + Pago)
interface RegistrationData {
  fullName: string;
  documentType: string;
  documentNumber: string;
  email: string;
  phone: string;
  type: string;
  payment: PaymentData; // <--- NUEVO: Agregamos el objeto de pago
}

interface RegistrationContextType {
  registrationData: RegistrationData;
  updateRegistrationData: (data: Partial<RegistrationData>) => void;
  updatePaymentData: (data: Partial<PaymentData>) => void; // <--- NUEVO: Helper para pago
  clearRegistrationData: () => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error("useRegistration debe usarse dentro de un RegistrationProvider");
  }
  return context;
};

interface RegistrationProviderProps {
  children: ReactNode;
}

// Valores iniciales
const INITIAL_STATE: RegistrationData = {
  fullName: "",
  documentType: "",
  documentNumber: "",
  email: "",
  phone: "",
  type: "",
  payment: { // Inicializamos pago vacío
    paymentDate: "",
    paymentMethod: "",
    operationNumber: ""
  }
};

const STORAGE_KEY = "registration_session_v1";

export const RegistrationProvider = ({ children }: RegistrationProviderProps) => {
  
  // A. Inicialización con sessionStorage
  const [registrationData, setRegistrationData] = useState<RegistrationData>(() => {
    try {
      const storedData = sessionStorage.getItem(STORAGE_KEY);
      // Fusionamos con INITIAL_STATE para asegurar que 'payment' exista aunque el storage sea antiguo
      return storedData ? { ...INITIAL_STATE, ...JSON.parse(storedData) } : INITIAL_STATE;
    } catch (error) {
      console.error("Error leyendo sessionStorage", error);
      return INITIAL_STATE;
    }
  });

  // B. Guardado automático en navegador
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(registrationData));
  }, [registrationData]);

  const updateRegistrationData = (data: Partial<RegistrationData>) => {
    setRegistrationData((prev) => ({ ...prev, ...data }));
  };

  // Helper para actualizar solo campos de pago (Deep merge simple)
  const updatePaymentData = (data: Partial<PaymentData>) => {
    setRegistrationData((prev) => ({
      ...prev,
      payment: { ...prev.payment, ...data }
    }));
  };

  const clearRegistrationData = () => {
    setRegistrationData(INITIAL_STATE);
    sessionStorage.removeItem(STORAGE_KEY);
  };

  return (
    <RegistrationContext.Provider value={{ registrationData, updateRegistrationData, updatePaymentData, clearRegistrationData }}>
      {children}
    </RegistrationContext.Provider>
  );
};