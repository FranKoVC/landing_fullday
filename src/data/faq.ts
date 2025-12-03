export interface FaqItem {
  id: number;
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    id: 1,
    q: "¿A quién está dirigido el 11º Full Day de Gestión de TI?",
    a: "A estudiantes, egresados y profesionales interesados en la gestión y el gobierno de las tecnologías de la información. Es ideal para quienes buscan actualizarse y conectar con especialistas del sector",
  },
  {
    id: 2,
    q: "¿Cuándo y dónde se realizará el evento?",
    a: "El 13 de diciembre de 2025, en el Teatrín Nicolás Copérnico de la UNT",
  },
  {
    id: 3,
    q: "¿La inscripción tiene costo y qué incluye?",
    a: "La inscripción al 11º Full Day de Gestión de TI es totalmente gratuita e incluye el acceso a todas las ponencias del evento. Si deseas obtener un certificado de participación, el costo único es de S/ 20",
  },
  {
    id: 4,
    q: "¿Cómo me inscribo?",
    a: "Haz clic en el botón “Inscribirme” y completa tus datos en el formulario. Si deseas certificado, marca la casilla correspondiente, realiza el pago de S/ 20 y sube el comprobante en el mismo formulario",
  },
  {
    id: 5,
    q: "¿El evento es presencial o virtual?",
    a: "El 11º Full Day de Gestión de TI se realizará de forma presencial en el Teatrín Nicolás Copérnico, UNT.",
  },
];

export function getFaqById(id: number): FaqItem | undefined {
  return faqs.find((f) => f.id === id);
}