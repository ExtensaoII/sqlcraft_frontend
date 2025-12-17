import { ChestScene } from "@/components/scenes/ChestScene";
import type { MissionData } from "@/components/scenes/types";

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

    scene: ChestScene(
      [
        { name: "Madeira de carvalho", type: "madeira", quantity: 10 },
        { name: "Graveto", type: "recurso", quantity: 4 }
      ],
      /^select\s+.+\s+from\s+baú/i
    ),

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
    description: "Use INSERT para criar ferramentas no inventário.",
    expectedCommand:
      "INSERT INTO inventário (nome, tipo, quantidade) VALUES ('Picareta de Madeira', 'ferramenta', 1)",
    sqlConcept: "INSERT",
    icon: "pickaxe",

    scene: ChestScene(
      [{ name: "Madeira de carvalho", type: "madeira", quantity: 10 },],
      /^insert\s+into\s+inventário/i
    ),

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
    description: "Use SELECT com filtro para encontrar pedra.",
    expectedCommand: "SELECT * FROM mina WHERE recurso = 'pedra'",
    sqlConcept: "SELECT",
    icon: "database",

    scene: ChestScene(
      [{ name: "Pedregulho", type: "minério", quantity: 20 }],
      /^select\s+.+\s+from\s+mina/i
    ),

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
    description: "Use INSERT para simular a fundição.",
    expectedCommand:
      "INSERT INTO fornalha (entrada) VALUES ('minério_de_ferro')",
    sqlConcept: "INSERT",
    icon: "pickaxe",

    scene: ChestScene(
      [{ name: "Minério de Ferro", type: "minério", quantity: 6 }],
      /^insert\s+into\s+fornalha/i
    ),

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
    description: "Use SELECT para consultar barras de ferro.",
    expectedCommand:
      "SELECT * FROM inventário WHERE tipo = 'barra_de_ferro'",
    sqlConcept: "SELECT",
    icon: "database",

    scene: ChestScene(
      [{ name: "Barra de Ferro", type: "barra_de_ferro", quantity: 6 }],
      /^select\s+.+\s+from\s+inventário/i
    ),

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
  }
];
