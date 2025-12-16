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
  validationHints: Array<{
    test: (cmd: string) => boolean;
    message: string;
  }>;
}


export const missions: MissionData[] = [
  {
    id: 1,
    title: "Coletar Madeira",
    briefDescription: "Aprenda a usar SELECT para buscar recursos básicos",
    description:
      "Nesta missão introdutória, você aprenderá a usar o comando SELECT para consultar dados em uma tabela.",
    expectedCommand: "SELECT * FROM baú WHERE tipo = 'madeira'",
    sqlConcept: "SELECT",
    icon: "database",
    chestItems: [
      { name: "Madeira de carvalho", type: "madeira", quantity: 10 },
      { name: "Graveto", type: "recurso", quantity: 4 },
    ],
    chestPattern: /^select\s+.+\s+from\s+baú/i,
    validationHints: [
      {
        test: (cmd) => !cmd.includes("where"),
        message: "Use o WHERE para filtrar os dados."
      },
      {
        test: (cmd) => !cmd.includes("tipo"),
        message: "Filtre usando a coluna correta: tipo."
      },
      {
        test: (cmd) => !cmd.includes("madeira"),
        message: "Você precisa filtrar para obter madeira."
      }
    ]
  },

  {
    id: 2,
    title: "Construa Ferramentas",
    briefDescription: "Aprenda a usar INSERT para adicionar novos itens",
    description:
      "Use INSERT para criar ferramentas no inventário.",
    expectedCommand:
      "INSERT INTO inventário (nome, tipo, quantidade) VALUES ('Picareta de Madeira', 'ferramenta', 1)",
    sqlConcept: "INSERT",
    icon: "pickaxe",
    chestItems: [],
    chestPattern: /^insert\s+into\s+inventário/i,
    validationHints: [
      {
        test: (cmd) => !cmd.startsWith("insert"),
        message: "Use o comando INSERT para adicionar novos itens."
      },
      {
        test: (cmd) => !cmd.includes("into inventário"),
        message: "Você deve inserir os dados na tabela inventário."
      },
      {
        test: (cmd) => !cmd.includes("values"),
        message: "Use VALUES para definir os dados do novo item."
      }
    ]
  },

  {
    id: 3,
    title: "Avançar para Pedra",
    briefDescription: "Selecione pedra na mina",
    description:
      "Use SELECT com filtro para encontrar pedra.",
    expectedCommand: "SELECT * FROM mina WHERE recurso = 'pedra'",
    sqlConcept: "SELECT",
    icon: "database",
    chestItems: [{ name: "Pedregulho", type: "minério", quantity: 20 }],
    chestPattern: /^select\s+.+\s+from\s+mina/i,
    validationHints: [
      {
        test: (cmd) => !cmd.includes("where"),
        message: "Use WHERE para filtrar o recurso desejado."
      },
      {
        test: (cmd) => !cmd.includes("recurso"),
        message: "Use a coluna correta para filtrar: recurso."
      },
      {
        test: (cmd) => !cmd.includes("pedra"),
        message: "Você precisa buscar pedra."
      }
    ]
  },

  {
    id: 4,
    title: "Fundir Ferro",
    briefDescription: "Inserir minério na fornalha",
    description:
      "Use INSERT para simular a fundição.",
    expectedCommand:
      "INSERT INTO fornalha (entrada) VALUES ('minério_de_ferro')",
    sqlConcept: "INSERT",
    icon: "pickaxe",
    chestItems: [{ name: "Minério de Ferro", type: "minério", quantity: 6 }],
    chestPattern: /^insert\s+into\s+fornalha/i,
    validationHints: [
      {
        test: (cmd) => !cmd.startsWith("insert"),
        message: "A fundição é feita com o comando INSERT."
      },
      {
        test: (cmd) => !cmd.includes("fornalha"),
        message: "Insira o minério na tabela fornalha."
      },
      {
        test: (cmd) => !cmd.includes("minério_de_ferro"),
        message: "Você precisa inserir minério de ferro."
      }
    ]
  },

  {
    id: 5,
    title: "Criar Equipamentos de Ferro",
    briefDescription: "Buscar ferro fundido",
    description:
      "Use SELECT para consultar barras de ferro.",
    expectedCommand:
      "SELECT * FROM inventário WHERE tipo = 'barra_de_ferro'",
    sqlConcept: "SELECT",
    icon: "database",
    chestItems: [{ name: "Barra de Ferro", type: "barra_de_ferro", quantity: 6 }],
    chestPattern: /^select\s+.+\s+from\s+inventário/i,
    validationHints: [
      {
        test: (cmd) => !cmd.includes("where"),
        message: "Use WHERE para filtrar o inventário."
      },
      {
        test: (cmd) => !cmd.includes("tipo"),
        message: "Use a coluna tipo para filtrar o item."
      },
      {
        test: (cmd) => !cmd.includes("barra_de_ferro"),
        message: "Você precisa buscar barras de ferro."
      }
    ]
  },

  {
    id: 6,
    title: "Minerar Diamantes",
    briefDescription: "Buscar recursos raros",
    description:
      "Use SELECT para localizar diamantes.",
    expectedCommand:
      "SELECT * FROM caverna WHERE recurso = 'diamante'",
    sqlConcept: "SELECT",
    icon: "database",
    chestItems: [{ name: "Diamante", type: "minério_raro", quantity: 3 }],
    chestPattern: /^select\s+.+\s+from\s+caverna/i,
    validationHints: [
      {
        test: (cmd) => !cmd.includes("where"),
        message: "Use WHERE para filtrar recursos raros."
      },
      {
        test: (cmd) => !cmd.includes("recurso"),
        message: "Use a coluna recurso para filtrar."
      },
      {
        test: (cmd) => !cmd.includes("diamante"),
        message: "Você precisa localizar diamantes."
      }
    ]
  },

  {
    id: 7,
    title: "Coletar Obsidiana",
    briefDescription: "Adicionar blocos ao inventário",
    description:
      "Use INSERT para adicionar obsidiana.",
    expectedCommand:
      "INSERT INTO inventário (nome, tipo, quantidade) VALUES ('Obsidiana', 'bloco', 10)",
    sqlConcept: "INSERT",
    icon: "pickaxe",
    chestItems: [],
    chestPattern: /^insert\s+into\s+inventário/i,
    validationHints: [
      {
        test: (cmd) => !cmd.startsWith("insert"),
        message: "Use INSERT para adicionar novos blocos."
      },
      {
        test: (cmd) => !cmd.includes("obsidiana"),
        message: "Você precisa inserir obsidiana."
      }
    ]
  },

  {
    id: 8,
    title: "Explorar o Nether",
    briefDescription: "Buscar Blazes",
    description:
      "Use SELECT para localizar inimigos.",
    expectedCommand:
      "SELECT * FROM fortaleza WHERE inimigo = 'blaze'",
    sqlConcept: "SELECT",
    icon: "database",
    chestItems: [{ name: "Vara de Blaze", type: "drop_inimigo", quantity: 5 }],
    chestPattern: /^select\s+.+\s+from\s+fortaleza/i,
    validationHints: [
      {
        test: (cmd) => !cmd.includes("where"),
        message: "Use WHERE para filtrar inimigos."
      },
      {
        test: (cmd) => !cmd.includes("blaze"),
        message: "Você precisa procurar blazes."
      }
    ]
  },

  {
    id: 9,
    title: "Coletar Ender Pearls",
    briefDescription: "Buscar Endermen",
    description:
      "Use SELECT para encontrar endermen.",
    expectedCommand:
      "SELECT * FROM inimigos WHERE tipo = 'enderman'",
    sqlConcept: "SELECT",
    icon: "database",
    chestItems: [{ name: "Ender Pearl", type: "pearl", quantity: 4 }],
    chestPattern: /^select\s+.+\s+from\s+inimigos/i,
    validationHints: [
      {
        test: (cmd) => !cmd.includes("where"),
        message: "Use WHERE para filtrar o inimigo."
      },
      {
        test: (cmd) => !cmd.includes("enderman"),
        message: "Você precisa buscar endermen."
      }
    ]
  },

  {
    id: 10,
    title: "Derrotar o Ender Dragon",
    briefDescription: "Remover o chefe final",
    description:
      "Use DELETE para eliminar o dragão.",
    expectedCommand:
      "DELETE FROM criaturas WHERE nome = 'Ender Dragon'",
    sqlConcept: "DELETE",
    icon: "sword",
    chestItems: [{ name: "Ovo do Dragão", type: "item_raro", quantity: 1 }],
    chestPattern: /^delete\s+.+\s+from\s+criaturas/i,
    validationHints: [
      {
        test: (cmd) => !cmd.startsWith("delete"),
        message: "Use DELETE para remover registros."
      },
      {
        test: (cmd) => !cmd.includes("where"),
        message: "Use WHERE para indicar qual criatura remover."
      },
      {
        test: (cmd) => !cmd.includes("ender dragon"),
        message: "Você precisa eliminar o Ender Dragon."
      }
    ]
  }
];

