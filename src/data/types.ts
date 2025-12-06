export interface UserData {
  nombres: string;
  tipoDocumento: string;
  numeroDocumento: string;
  celular: string;
  correo: string;
  tipoParticipante: string;
}

export interface StepProps {
  onComplete: () => void;
  isCompleted: boolean;
  data: UserData;
  updateData: (field: keyof UserData, value: string) => void;
}