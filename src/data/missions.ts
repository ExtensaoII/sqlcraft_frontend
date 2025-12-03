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
  {
    id: 2,
    title: "Construa Ferramentas",
    description: "Aprenda a usar INSERT para adicionar novos itens ao inventário",
    expectedCommand: "INSERT INTO inventário (nome, tipo, quantidade) VALUES ('Picareta de Madeira', 'ferramenta', 1)",
    chestItems: [],
    chestPattern: /^insert\s+into\s+inventário/i,
  },
  {
  id: 3,
  title: "Avançar para Pedra",
  description: "Selecione pedra e crie itens de nível superior",
  expectedCommand: "SELECT * FROM mina WHERE recurso = 'pedra'",
  chestItems: [
    { name: "Pedregulho", type: "minério", quantity: 20 }
  ],
  chestPattern: /^select\s+.+\s+from\s+mina/i,
},
{
  id: 4,
  title: "Fundir Ferro",
  description: "Insira minérios brutos na fornalha para obter ferro",
  expectedCommand: "INSERT INTO fornalha (entrada) VALUES ('minério_de_ferro')",
  chestItems: [
    { name: "Minério de Ferro", type: "minério", quantity: 6 }
  ],
  chestPattern: /^insert\s+into\s+fornalha/i,
},
{
  id: 5,
  title: "Criar Equipamentos de Ferro",
  description: "Busque ferro fundido e fabrique ferramentas melhores",
  expectedCommand: "SELECT * FROM inventário WHERE tipo = 'barra_de_ferro'",
  chestItems: [
    { name: "Barra de Ferro", type: "barra_de_ferro", quantity: 6 }
  ],
  chestPattern: /^select\s+.+\s+from\s+inventário/i,
},
{
  id: 6,
  title: "Minerar Diamantes",
  description: "Localize diamantes usando SELECT em camadas profundas",
  expectedCommand: "SELECT * FROM caverna WHERE recurso = 'diamante'",
  chestItems: [
    { name: "Diamante", type: "minério_raro", quantity: 3 }
  ],
  chestPattern: /^select\s+.+\s+from\s+caverna/i,
},
{
  id: 7,
  title: "Coletar Obsidiana",
  description: "Adicione obsidiana ao inventário para montar o portal",
  expectedCommand: "INSERT INTO inventário (nome, tipo, quantidade) VALUES ('Obsidiana', 'bloco', 10)",
  chestItems: [],
  chestPattern: /^insert\s+into\s+inventário/i,
},
{
  id: 8,
  title: "Explorar o Nether",
  description: "Busque varas de Blaze em fortalezas",
  expectedCommand: "SELECT * FROM fortaleza WHERE inimigo = 'blaze'",
  chestItems: [
    { name: "Vara de Blaze", type: "drop_inimigo", quantity: 5 }
  ],
  chestPattern: /^select\s+.+\s+from\s+fortaleza/i,
},
{
  id: 9,
  title: "Coletar Ender Pearls",
  description: "Obtenha pérolas para criar Olhos do Ender",
  expectedCommand: "SELECT * FROM inimigos WHERE tipo = 'enderman'",
  chestItems: [
    { name: "Ender Pearl", type: "pearl", quantity: 4 }
  ],
  chestPattern: /^select\s+.+\s+from\s+inimigos/i,
},
{
  id: 10,
  title: "Derrotar o Ender Dragon",
  description: "Use DELETE para remover a maior ameaça do jogo",
  expectedCommand: "DELETE FROM criaturas WHERE nome = 'Ender Dragon'",
  chestItems: [
    { name: "Ovo do Dragão", type: "item_raro", quantity: 1 }
  ],
  chestPattern: /^delete\s+.+\s+from\s+criaturas/i,
}
];
