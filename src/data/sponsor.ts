import sponsor1 from "../assets/sponsor-1.png";

export interface Modulo {
  id: number;
  name: string;
  imageSrc: string;
}

export const modulos: Modulo[] = [
  { id: 1, name: "Sponsor", imageSrc: sponsor1 },
  { id: 2, name: "Sponsor", imageSrc: sponsor1 },
  { id: 3, name: "Sponsor", imageSrc: sponsor1 },
  { id: 4, name: "Sponsor", imageSrc: sponsor1 },
  { id: 5, name: "Sponsor", imageSrc: sponsor1 },
  { id: 6, name: "Sponsor", imageSrc: sponsor1 },
  { id: 7, name: "Sponsor", imageSrc: sponsor1 },
  { id: 8, name: "Sponsor", imageSrc: sponsor1 },
  { id: 9, name: "Sponsor", imageSrc: sponsor1 },
  { id: 10, name: "Sponsor", imageSrc: sponsor1 },
];

export function getModuloById(id: number): Modulo | undefined {
  return modulos.find((m) => m.id === id);
}
