export interface Sponsor {
  id: number;
  name: string;
  imageSrc: string;
}

export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "Hotel El Frayle",
    imageSrc: "/images/sponsors/elfrayle.png",
  },
  {
    id: 2,
    name: "Licores Bomech",
    imageSrc: "/images/sponsors/bomech.png",
  },
  {
    id: 3,
    name: "Básica Grupo Corporativo",
    imageSrc: "/images/sponsors/basica.png",
  },
];

export function getSponsorById(id: number): Sponsor | undefined {
  return sponsors.find((s) => s.id === id);
}