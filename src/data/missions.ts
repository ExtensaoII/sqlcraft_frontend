export interface MissionData {
  id: number;
  title: string;
  description: string;
  expectedCommand: string;
  chestItems: Array<{ name: string; type: string; quantity: number }>;
  chestPattern?: RegExp;         // optional custom trigger
  image?: string;                // if you want a different chest or background
}

export const missions: MissionData[] = [
  {
    id: 1,
    title: "Coletar Madeira",
    description: "Aprenda a usar SELECT para buscar recursos básicos",
    expectedCommand: "SELECT * FROM baú WHERE tipo = 'madeira'",
    chestItems: [
      { name: "Madeira de carvalho", type: "madeira", quantity: 10 },
      { name: "Graveto", type: "recurso", quantity: 4 },
    ],
    chestPattern: /^select\s+.+\s+from\s+baú/i,
  },
];
