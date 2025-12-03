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
    title:
      "Liderazgo en la gestión de TI: Integrando IA para el futuro de la innovación",
    speaker: "Rose Mary Monroy",
    place: "Liderazgo TI . Innovación IA",
  },
  {
    id: 3,
    time: "10:10",
    timePeriod: "AM",
    title:
      "Gobierno de TI en entidades financieras y oportunidades que nos ofrece la IA",
    speaker: "Rafael Antonio Porturas Busso",
    place: "Gobierno TI . Entidades Financieras . IA",
  },
  {
    id: 4,
    time: "11:50",
    timePeriod: "AM",
    title:
      "Gobierno de Servicios de Desarrollo y mantenimiento de aplicaciones y su integración con la IA",
    speaker: "Haybert Escobedo Neyra",
    place: "Gobierno TI . IA",
  },
  {
    id: 5,
    time: "1:00",
    timePeriod: "PM",
    title: "Entretenimiento / Pausa",
    speaker: null,
    place: "Break del evento",
    highlight: true,
  },
  {
    id: 6,
    time: "3:00",
    timePeriod: "PM",
    title: "IA y Tecnología: Redefiniendo el Mundo Empresarial",
    speaker: "Miguel Llantop Megía",
    place: "IA . Tecnología . Empresas",
  },
  {
    id: 7,
    time: "4:10",
    timePeriod: "PM",
    title:
      "Construyendo el Futuro: Gobierno de TI, Tecnologías Emergentes y Responsabilidad Profesional",
    speaker: "Marcos Uriel Pinto Mamani",
    place: "Gobierno TI . Tecnologías Emergentes . Ética Profesional",
  },
  {
    id: 8,
    time: "5:35",
    timePeriod: "PM",
    title:
      "Problemas de I&T en el Diseño del Gobierno de TI: ¿Generador de Valor o Nuevo Punto de Dolor con la IA?",
    speaker: "Alberto Mendoza de los Santos",
    place: "Gobierno TI . IA",
  },
];
