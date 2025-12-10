export type AgendaItem = {
  id: number;
  time: string;
  timePeriod: "AM" | "PM";
  title: string;
  speaker: string | null;
  place: string | null;
  highlight?: boolean;
};

export const agendaData: AgendaItem[] = [
  {
    id: 1,
    time: "8:30",
    timePeriod: "AM",
    title: "Palabras de bienvenida",
    speaker: null,
    place: "Apertura del evento",
    highlight: true,
  },
  {
    id: 2,
    time: "9:00",
    timePeriod: "AM",
    title: "Inteligencia Artificial y Normatividad: Panorama Global, Legislación Nacional y Retos para las Instituciones",
    speaker: "Alberto Mendoza de los Santos",
    place: "Normatividad . IA",
  },
  {
    id: 3,
    time: "10:10",
    timePeriod: "AM",
    title: "SAP y Transformación Empresarial: tendencias, retos y oportunidades para la nueva generación profesional",
    speaker: "Haybert Escobedo Neyra",
    place: "Cloud . Automatización",
  },
  {
    id: 4,
    time: "11:50",
    timePeriod: "AM",
    title: "Inteligencia Artificial en la Prevención de Fraudes",
    speaker: "Jorge Salvador Mantilla",
    place: "IA . Prevención de fraudes",
  },
  {
    id: 5,
    time: "1:00",
    timePeriod: "PM",
    title: "ENTRETIEMPO / ALMUERZO",
    speaker: null,
    place: "Almuerzo y networking",
    highlight: true,
  },
  {
    id: 6,
    time: "3:00",
    timePeriod: "PM",
    title: "Riesgos y gobernanza de IA (ISO 42001, ética, controles)",
    speaker: "Rose Mary Monroy",
    place: "Gobernanza de IA . ISO 42001",
  },
  {
    id: 7,
    time: "4:10",
    timePeriod: "PM",
    title:
      "El nuevo rostro del fraude, combatiendo la suplantación de identidad y las amenazas de deepfake",
    speaker: "Juan Victor Nizama",
    place: "Fraude . Suplantación de identidad . Deepfake",
  },
  {
    id: 8,
    time: "5:35",
    timePeriod: "PM",
    title:
      "Gobierno de TI y Resiliencia Operacional: Cómo las organizaciones pueden sobrevivir a la próxima ola de amenazas digitales",
    speaker: "Manuel Gamarra Vigo",
    place: "Gobierno TI . Resiliencia operacional",
  },
];
