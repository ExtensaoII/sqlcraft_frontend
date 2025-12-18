import { WoodScene } from "@/components/scenes/WoodScene";
import { StoneScene } from "@/components/scenes/StoneScene";
import { FurnaceScene } from "@/components/scenes/FurnaceScene";
import { CraftingTableScene } from "@/components/scenes/CraftingTableScene";
import { DiamondOreScene } from "@/components/scenes/DiamondOreScene";
import { ObsidianScene } from "@/components/scenes/ObsidianScene";
import { BlazeScene } from "@/components/scenes/BlazeScene";
import { EndermanScene } from "@/components/scenes/EndermanScene";
import { EnderDragonScene } from "@/components/scenes/EnderDragonScene";

import type { MissionData } from "./types";

export const missions: MissionData[] = [
  {
    id: 1,
    title: "Coletar Madeira",
    containerTitle: "Floresta",
    briefDescription: "Aprenda a usar SELECT para buscar recursos básicos",
    description: `
O baú contém vários tipos de itens misturados, mas você precisa apenas da **madeira**.

Use uma consulta **SELECT** para examinar o conteúdo do baú e filtrar os itens pelo tipo.

**Formato básico de uma consulta:**
\`\`\`sql
SELECT colunas FROM tabela WHERE condição
\`\`\`

Experimente selecionar todos os itens do baú que sejam do tipo desejado.
`.trim(),
    expectedCommand: "SELECT * FROM floresta WHERE recurso = 'madeira'",
    sqlConcept: "SELECT",
    icon: "database",
    scene: WoodScene,
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
    containerTitle: "Bancada",
    briefDescription: "Aprenda a usar INSERT para adicionar novos itens",
    description: `
Para criar uma ferramenta, é preciso **adicionar um novo item ao inventário**.

Isso é feito usando o comando **INSERT**, que permite incluir novos registros em uma tabela.

O formato básico de um INSERT é:
\`\`\`sql
INSERT INTO tabela (colunas) VALUES (valores)
\`\`\`

Crie uma ferramenta informando seu nome, tipo e quantidade.
`.trim(),
    expectedCommand:
      "INSERT INTO bancada (nome, tipo, quantidade) VALUES ('Picareta de Madeira', 'ferramenta', 1)",
    sqlConcept: "INSERT",
    icon: "pickaxe",
    scene: CraftingTableScene,
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
    title: "Localizar pedra",
    containerTitle: "Mina",
    briefDescription: "Selecione pedra na mina",
    description: `
A mina possui diversos tipos de recursos, mas nem todos são úteis agora.

Use uma consulta **SELECT com filtro** para localizar apenas o recurso necessário.

Filtros são feitos usando condições como:
\`\`\`sql
WHERE coluna = 'valor'
\`\`\`

Consulte a mina e traga apenas o recurso correto.
`.trim(),
    expectedCommand: "SELECT * FROM mina WHERE recurso = 'pedra'",
    sqlConcept: "SELECT",
    icon: "database",
    scene: StoneScene,
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
    containerTitle: "Fornalha",
    briefDescription: "Inserir minério na fornalha",
    description: `
Para fundir minério, é necessário **enviar o item para a fornalha**.

Isso pode ser simulado adicionando um novo registro na tabela da fornalha usando **INSERT**.

Lembre-se do formato:
\`\`\`sql
INSERT INTO tabela (colunas) VALUES (valores)
\`\`\`

Insira o minério correto para iniciar a fundição.
`.trim(),
    expectedCommand:
      "INSERT INTO fornalha (entrada) VALUES ('ferro')",
    sqlConcept: "INSERT",
    icon: "pickaxe",
    scene: FurnaceScene,
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
        test: (cmd) => !cmd.includes("ferro"),
        message: "Você precisa inserir ferro."
      }
    ]
  },

  {
    id: 5,
    title: "Criar Equipamentos de Ferro",
    containerTitle: "Inventário",
    briefDescription: "Buscar ferro fundido",
    description: `
Antes de criar equipamentos, você precisa **verificar quais itens já estão no inventário**.

Use uma consulta **SELECT** para examinar o inventário e **filtrar apenas as barras de ferro**.

Você pode combinar SELECT e WHERE assim:
\`\`\`sql
SELECT colunas FROM tabela WHERE condição
\`\`\`

Consulte o inventário e encontre o material necessário.
`.trim(),
    expectedCommand: "INSERT INTO bancada (nome, tipo, quantidade) VALUES ('Espada de Ferro', 'equipamento', 1)",
    sqlConcept: "SELECT",
    icon: "database",
    scene: CraftingTableScene,
    validationHints: [
      {
        test: (cmd) => !cmd.startsWith("insert"),
        message: "Use o comando INSERT para criar um novo o equipamento."
      },
      {
        test: (cmd) => !cmd.includes("into bancada"),
        message: "Você deve inserir o equipamento na bancada"
      },
      {
        test: (cmd) => !cmd.includes("values"),
        message: "Use VALUES para definir os dados do equipamento"
      }
    ]
  },

  {
    id: 6,
    title: "Minerar Diamantes",
    containerTitle: "Caverna",
    briefDescription: "Buscar recursos raros",
    description: `
Alguns recursos são raros e exigem uma busca mais precisa.

Use uma consulta **SELECT com filtro** para localizar apenas os recursos mais valiosos da caverna.

Lembre-se de usar uma condição para refinar o resultado:
\`\`\`sql
WHERE coluna = 'valor'
\`\`\`

Procure cuidadosamente pelo recurso desejado.
`.trim(),
    expectedCommand:
      "SELECT * FROM caverna WHERE recurso = 'diamante'",
    sqlConcept: "SELECT",
    icon: "database",
    scene: DiamondOreScene,
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
    containerTitle: "Inventário",
    briefDescription: "Adicionar blocos ao inventário",
    description: "Use INSERT para adicionar obsidiana.",
    expectedCommand:
      "INSERT INTO inventário (nome, tipo, quantidade) VALUES ('Obsidiana', 'bloco', 10)",
    sqlConcept: "INSERT",
    icon: "pickaxe",
    scene: ObsidianScene,
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
    containerTitle: "Fortaleza",
    briefDescription: "Buscar Blazes",
    description: "Use SELECT para localizar inimigos.",
    expectedCommand:
      "SELECT * FROM fortaleza WHERE inimigo = 'blaze'",
    sqlConcept: "SELECT",
    icon: "database",
    scene: BlazeScene,
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
    containerTitle: "Mundo",
    briefDescription: "Buscar Endermen",
    description: "Use DELETE para derrotar endermen.",
    expectedCommand:
      "DELETE FROM inimigos WHERE nome = 'enderman'",
    sqlConcept: "SELECT",
    icon: "database",
    scene: EndermanScene,
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
    containerTitle: "The End",
    briefDescription: "Remover o chefe final",
    description: "Use DELETE para eliminar o dragão.",
    expectedCommand:
      "DELETE FROM inimigos WHERE nome = 'Ender Dragon'",
    sqlConcept: "DELETE",
    icon: "sword",
    scene: EnderDragonScene,
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
