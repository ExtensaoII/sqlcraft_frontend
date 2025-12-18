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
    briefDescription: "Aprenda o formato básico do SELECT",
    description: `
Você está olhando para a tabela **floresta**, que contém vários recursos misturados.

Seu objetivo é buscar **apenas os registros onde o recurso é madeira**.

Formato completo de um SELECT com filtro:
\`\`\`sql
SELECT * FROM floresta WHERE recurso = 'valor'
\`\`\`

Substitua o valor corretamente para encontrar a madeira.
`.trim(),
    expectedCommand: "SELECT * FROM floresta WHERE recurso = 'madeira'",
    sqlConcept: "SELECT",
    icon: "database",
    scene: WoodScene,
    validationHints: [
      {
        test: (cmd) => !cmd.includes("where"),
        message:
          "Use o formato completo: SELECT * FROM floresta WHERE condição. Sem WHERE, nada é filtrado."
      },
      {
        test: (cmd) => !cmd.includes("recurso"),
        message:
          "A coluna correta para filtrar nesta tabela é recurso."
      },
      {
        test: (cmd) => !cmd.includes("madeira"),
        message:
          "O valor do filtro deve ser exatamente 'madeira'."
      }
    ]
  },

  {
    id: 2,
    title: "Construa Ferramentas",
    containerTitle: "Bancada",
    briefDescription: "Aprenda o formato completo do INSERT",
    description: `
Criar um item significa **inserir um novo registro** na tabela correta.

Você irá adicionar uma ferramenta na tabela **bancada**.

Formato completo do INSERT:
\`\`\`sql
INSERT INTO bancada (nome, tipo, quantidade)
VALUES ('valor', 'valor', número)
\`\`\`

Preencha os valores corretamente para criar a ferramenta.
`.trim(),
    expectedCommand:
      "INSERT INTO bancada (nome, tipo, quantidade) VALUES ('Picareta de Madeira', 'ferramenta', 1)",
    sqlConcept: "INSERT",
    icon: "pickaxe",
    scene: CraftingTableScene,
    validationHints: [
      {
        test: (cmd) => !cmd.startsWith("insert"),
        message:
          "Criação de itens começa com INSERT INTO nome_da_tabela."
      },
      {
        test: (cmd) => !cmd.includes("bancada"),
        message:
          "A tabela correta para criar ferramentas é bancada."
      },
      {
        test: (cmd) => !cmd.includes("values"),
        message:
          "Depois das colunas, use VALUES para informar os dados do item."
      }
    ]
  },

  {
    id: 3,
    title: "Localizar Pedra",
    containerTitle: "Mina",
    briefDescription: "Reforço de SELECT com WHERE",
    description: `
A tabela **mina** possui vários recursos.

Você já conhece o formato do SELECT.
Agora, aplique o filtro correto para buscar apenas pedra.

Estrutura esperada:
\`\`\`sql
SELECT * FROM mina WHERE recurso = 'valor'
\`\`\`
`.trim(),
    expectedCommand: "SELECT * FROM mina WHERE recurso = 'pedra'",
    sqlConcept: "SELECT",
    icon: "database",
    scene: StoneScene,
    validationHints: [
      {
        test: (cmd) => !cmd.includes("where"),
        message:
          "Faltou aplicar o filtro WHERE na consulta."
      },
      {
        test: (cmd) => !cmd.includes("recurso"),
        message:
          "Use a coluna recurso para diferenciar os materiais."
      },
      {
        test: (cmd) => !cmd.includes("pedra"),
        message:
          "O valor do filtro precisa ser pedra."
      }
    ]
  },

  {
    id: 4,
    title: "Fundir Ferro",
    containerTitle: "Fornalha",
    briefDescription: "INSERT com menos instruções",
    description: `
Enviar minério para a fornalha significa **registrar uma entrada**.

A tabela usada agora é **fornalha**.
Você já conhece o formato do INSERT.

Insira corretamente o minério necessário.
`.trim(),
    expectedCommand:
      "INSERT INTO fornalha (entrada) VALUES ('ferro')",
    sqlConcept: "INSERT",
    icon: "pickaxe",
    scene: FurnaceScene,
    validationHints: [
      {
        test: (cmd) => !cmd.startsWith("insert"),
        message:
          "Fundir algo exige adicionar um novo registro."
      },
      {
        test: (cmd) => !cmd.includes("fornalha"),
        message:
          "O destino do minério é a tabela fornalha."
      },
      {
        test: (cmd) => !cmd.includes("ferro"),
        message:
          "O minério correto ainda não foi informado."
      }
    ]
  },

  {
    id: 5,
    title: "Criar Equipamentos de Ferro",
    containerTitle: "Inventário",
    briefDescription: "Menos formato, mais decisão",
    description: `
Agora você já domina INSERT e SELECT.

Crie um equipamento usando o material correto
e registre-o no local adequado.
`.trim(),
    expectedCommand:
      "INSERT INTO bancada (nome, tipo, quantidade) VALUES ('Espada de Ferro', 'equipamento', 1)",
    sqlConcept: "INSERT",
    icon: "database",
    scene: CraftingTableScene,
    validationHints: [
      {
        test: (cmd) => !cmd.startsWith("insert"),
        message:
          "Criar equipamentos ainda significa inserir registros."
      },
      {
        test: (cmd) => !cmd.includes("bancada"),
        message:
          "Equipamentos não são criados em qualquer lugar."
      },
      {
        test: (cmd) => !cmd.includes("values"),
        message:
          "Um item sem dados não pode existir."
      }
    ]
  },

  {
    id: 6,
    title: "Minerar Diamantes",
    containerTitle: "Caverna",
    briefDescription: "Busca precisa",
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
        message:
          "Recursos raros exigem filtros."
      },
      {
        test: (cmd) => !cmd.includes("recurso"),
        message:
          "Você sabe qual coluna diferencia os minérios."
      },
      {
        test: (cmd) => !cmd.includes("diamante"),
        message:
          "Esse não é o recurso certo."
      }
    ]
  },

  {
    id: 7,
    title: "Coletar Obsidiana",
    containerTitle: "Inventário",
    briefDescription: "Execução direta",
    description: `
Adicione o bloco necessário ao inventário. (Use INSERT para adicionar obsidiana.)
`.trim(),
    expectedCommand:
      "INSERT INTO inventário (nome, tipo, quantidade) VALUES ('Obsidiana', 'bloco', 10)",
    sqlConcept: "INSERT",
    icon: "pickaxe",
    scene: ObsidianScene,
    validationHints: [
      {
        test: (cmd) => !cmd.startsWith("insert"),
        message:
          "Isso não adiciona nada."
      },
      {
        test: (cmd) => !cmd.includes("obsidiana"),
        message:
          "O bloco esperado não foi inserido."
      }
    ]
  },

  {
    id: 8,
    title: "Explorar o Nether",
    containerTitle: "Fortaleza",
    briefDescription: "Busca por inimigos",
    description: `
Encontre a criatura correta. (Blaze)
`.trim(),
    expectedCommand:
      "SELECT * FROM fortaleza WHERE inimigo = 'blaze'",
    sqlConcept: "SELECT",
    icon: "database",
    scene: BlazeScene,
    validationHints: [
      {
        test: (cmd) => !cmd.includes("where"),
        message:
          "Procurar sem filtro não funciona aqui."
      },
      {
        test: (cmd) => !cmd.includes("blaze"),
        message:
          "Esse não é o inimigo certo."
      }
    ]
  },

  {
    id: 9,
    title: "Coletar Ender Pearls",
    containerTitle: "Mundo",
    briefDescription: "Primeiro DELETE",
    description: `
Alguns problemas não são resolvidos com SELECT. (use delete para derrotar o enderman)
`.trim(),
    expectedCommand:
      "DELETE FROM inimigos WHERE nome = 'enderman'",
    sqlConcept: "DELETE",
    icon: "database",
    scene: EndermanScene,
    validationHints: [
      {
        test: (cmd) => !cmd.includes("where"),
        message:
          "Algo específico precisa ser removido."
      },
      {
        test: (cmd) => !cmd.includes("enderman"),
        message:
          "O alvo está errado."
      }
    ]
  },

  {
    id: 10,
    title: "Derrotar o Ender Dragon",
    containerTitle: "The End",
    briefDescription: "Chefe final",
    description: `
O último obstáculo.
`.trim(),
    expectedCommand:
      "DELETE FROM inimigos WHERE nome = 'Ender Dragon'",
    sqlConcept: "DELETE",
    icon: "sword",
    scene: EnderDragonScene,
    validationHints: [
      {
        test: (cmd) => !cmd.startsWith("delete"),
        message:
          "Esse comando não resolve o problema."
      },
      {
        test: (cmd) => !cmd.includes("where"),
        message:
          "Sem um alvo, nada acontece."
      },
      {
        test: (cmd) => !cmd.includes("ender dragon"),
        message:
          "O chefe final ainda está lá."
      }
    ]
  }
];
