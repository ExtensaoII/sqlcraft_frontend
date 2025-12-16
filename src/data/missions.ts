export interface MissionData {
  id: number;
  title: string;
  briefDescription: string;
  description: string;
  expectedCommand: string;
  sqlConcept: string;
  icon: "database" | "pickaxe" | "sword" | "trophy";
  chestItems: Array<{ name: string; type: string; quantity: number }>;
  chestPattern?: RegExp;
  image?: string;
}

export const missions: MissionData[] = [
  {
    id: 1,
    title: "Coletar Madeira",
    briefDescription: "Aprenda a usar SELECT para buscar recursos básicos",
    description:
      "Nesta missão introdutória, você aprenderá a usar o comando SELECT para consultar dados em uma tabela. O objetivo é buscar recursos básicos no mundo do jogo, entendendo como recuperar informações específicas a partir de uma estrutura de dados.",
    expectedCommand: "SELECT * FROM baú WHERE tipo = 'madeira'",
    sqlConcept: "SELECT",
    icon: "database",
    chestItems: [
      { name: "Madeira de carvalho", type: "madeira", quantity: 10 },
      { name: "Graveto", type: "recurso", quantity: 4 },
    ],
    chestPattern: /^select\s+.+\s+from\s+baú/i,
  },
  {
    id: 2,
    title: "Construa Ferramentas",
    briefDescription: "Aprenda a usar INSERT para adicionar novos itens ao inventário",
    description:
      "Aqui você será introduzido ao comando INSERT. Ele permite adicionar novos registros em uma tabela, simulando a criação de ferramentas ao inserir itens diretamente no inventário do jogador.",
    expectedCommand:
      "INSERT INTO inventário (nome, tipo, quantidade) VALUES ('Picareta de Madeira', 'ferramenta', 1)",
    sqlConcept: "INSERT",
    icon: "pickaxe",
    chestItems: [],
    chestPattern: /^insert\s+into\s+inventário/i,
  },
  {
    id: 3,
    title: "Avançar para Pedra",
    briefDescription: "Selecione pedra e crie itens de nível superior",
    description:
      "Nesta fase, você reforça o uso do SELECT aplicando filtros mais específicos. O foco é consultar a mina para encontrar recursos de pedra, preparando a progressão para ferramentas mais avançadas.",
    expectedCommand: "SELECT * FROM mina WHERE recurso = 'pedra'",
    sqlConcept: "SELECT",
    icon: "database",
    chestItems: [{ name: "Pedregulho", type: "minério", quantity: 20 }],
    chestPattern: /^select\s+.+\s+from\s+mina/i,
  },
  {
    id: 4,
    title: "Fundir Ferro",
    briefDescription: "Insira minérios brutos na fornalha para obter ferro",
    description:
      "Esta missão aprofunda o uso do INSERT em outro contexto. Você irá simular a fundição de minérios ao inserir matérias-primas em uma fornalha, entendendo como dados podem representar processos do jogo.",
    expectedCommand:
      "INSERT INTO fornalha (entrada) VALUES ('minério_de_ferro')",
    sqlConcept: "INSERT",
    icon: "pickaxe",
    chestItems: [{ name: "Minério de Ferro", type: "minério", quantity: 6 }],
    chestPattern: /^insert\s+into\s+fornalha/i,
  },
  {
    id: 5,
    title: "Criar Equipamentos de Ferro",
    briefDescription: "Busque ferro fundido e fabrique ferramentas melhores",
    description:
      "Nesta etapa, você utiliza SELECT para consultar itens já processados no inventário. A missão reforça a ideia de filtragem de dados e a reutilização de informações previamente armazenadas.",
    expectedCommand:
      "SELECT * FROM inventário WHERE tipo = 'barra_de_ferro'",
    sqlConcept: "SELECT",
    icon: "database",
    chestItems: [{ name: "Barra de Ferro", type: "barra_de_ferro", quantity: 6 }],
    chestPattern: /^select\s+.+\s+from\s+inventário/i,
  },
  {
    id: 6,
    title: "Minerar Diamantes",
    briefDescription: "Localize diamantes usando SELECT em camadas profundas",
    description:
      "Aqui o SELECT é aplicado a um cenário mais avançado. Você precisará consultar áreas específicas da caverna para localizar recursos raros, reforçando o uso de condições para buscas precisas.",
    expectedCommand:
      "SELECT * FROM caverna WHERE recurso = 'diamante'",
    sqlConcept: "SELECT",
    icon: "database",
    chestItems: [{ name: "Diamante", type: "minério_raro", quantity: 3 }],
    chestPattern: /^select\s+.+\s+from\s+caverna/i,
  },
  {
    id: 7,
    title: "Coletar Obsidiana",
    briefDescription: "Adicione obsidiana ao inventário para montar o portal",
    description:
      "Nesta missão, você volta a utilizar INSERT para adicionar blocos estratégicos ao inventário. O objetivo é mostrar como novos registros podem representar progresso estrutural no jogo.",
    expectedCommand:
      "INSERT INTO inventário (nome, tipo, quantidade) VALUES ('Obsidiana', 'bloco', 10)",
    sqlConcept: "INSERT",
    icon: "pickaxe",
    chestItems: [],
    chestPattern: /^insert\s+into\s+inventário/i,
  },
  {
    id: 8,
    title: "Explorar o Nether",
    briefDescription: "Busque varas de Blaze em fortalezas",
    description:
      "Esta fase reforça consultas em ambientes perigosos. Usando SELECT, você irá buscar inimigos específicos em uma fortaleza, aprendendo a consultar dados em cenários mais complexos.",
    expectedCommand:
      "SELECT * FROM fortaleza WHERE inimigo = 'blaze'",
    sqlConcept: "SELECT",
    icon: "database",
    chestItems: [{ name: "Vara de Blaze", type: "drop_inimigo", quantity: 5 }],
    chestPattern: /^select\s+.+\s+from\s+fortaleza/i,
  },
  {
    id: 9,
    title: "Coletar Ender Pearls",
    briefDescription: "Obtenha pérolas para criar Olhos do Ender",
    description:
      "Aqui você utiliza SELECT para buscar inimigos específicos no mundo. A missão enfatiza consultas direcionadas e a coleta de recursos essenciais para avançar à etapa final do jogo.",
    expectedCommand:
      "SELECT * FROM inimigos WHERE tipo = 'enderman'",
    sqlConcept: "SELECT",
    icon: "database",
    chestItems: [{ name: "Ender Pearl", type: "pearl", quantity: 4 }],
    chestPattern: /^select\s+.+\s+from\s+inimigos/i,
  },
  {
    id: 10,
    title: "Derrotar o Ender Dragon",
    briefDescription: "Use DELETE para remover a maior ameaça do jogo",
    description:
      "Na missão final, você aprende o comando DELETE. Ele representa a remoção definitiva de um registro, simbolizando a derrota do chefe final ao eliminá-lo da base de dados do mundo.",
    expectedCommand:
      "DELETE FROM criaturas WHERE nome = 'Ender Dragon'",
    sqlConcept: "DELETE",
    icon: "sword",
    chestItems: [{ name: "Ovo do Dragão", type: "item_raro", quantity: 1 }],
    chestPattern: /^delete\s+.+\s+from\s+criaturas/i,
  },
];
