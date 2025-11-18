import ponente1 from "../assets/ponente-1.jpg";

export interface Speaker {
  id: number;
  name: string;
  role: string;
  imageSrc: string;
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "Jenna Smith",
    role: "Lorem ipsum dolor sit amet, consectetur.",
    imageSrc: ponente1,
  },
  {
    id: 2,
    name: "Mark Johnson",
    role: "Lorem ipsum dolor sit amet, consectetur.",
    imageSrc: ponente1,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Lorem ipsum dolor sit amet, consectetur.",
    imageSrc: ponente1,
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Lorem ipsum dolor sit amet, consectetur.",
    imageSrc: ponente1,
  },
  {
    id: 5,
    name: "Sarah Wilson",
    role: "Lorem ipsum dolor sit amet, consectetur.",
    imageSrc: ponente1,
  },
  {
    id: 6,
    name: "David Lee",
    role: "Lorem ipsum dolor sit amet, consectetur.",
    imageSrc: ponente1,
  },
];

export function getSpeakerById(id: number): Speaker | undefined {
  return speakers.find((s) => s.id === id);
}
