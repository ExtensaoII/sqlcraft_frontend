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

  containerTitle?: string;
  containerIcon?: "chest" | "mine" | "furnace" | "portal";

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
    description: `
O baú contém vários tipos de itens misturados, mas você precisa apenas da **madeira**.

Use uma consulta **SELECT** para examinar o conteúdo do baú e filtrar os itens pelo tipo.

**Formato básico de uma consulta:**
\`\`\`sql
SELECT colunas FROM tabela WHERE condição
\`\`\`

Experimente selecionar todos os itens do baú que sejam do tipo desejado.
`.trim(),
    expectedCommand: "SELECT * FROM baú WHERE tipo = 'madeira'",
    sqlConcept: "SELECT",
    icon: "database",
    chestItems: [
      { name: "Madeira de carvalho", type: "madeira", quantity: 10 },
      { name: "Graveto", type: "recurso", quantity: 4 },
    ],
    chestPattern: /^select\s+(\*|[\w\s,]+)\s+from\s+baú/i,
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
    containerTitle: "Inventário",
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
    chestItems: [{ name: "Pedregulho", type: "minério", quantity: 20 }],
    chestPattern: /^select\s+(\*|[\w\s,]+)\s+from\s+mina/i,
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
    containerTitle: "Inventário",
    briefDescription: "Adicionar blocos ao inventário",
    description: `
Para avançar, você precisa **adicionar novos blocos ao inventário**.

Use o comando **INSERT** para incluir a obsidiana, informando corretamente cada valor.

O formato completo é:
\`\`\`sql
INSERT INTO tabela (colunas) VALUES (valores)
\`\`\`

Certifique-se de que cada valor corresponde à sua coluna.
`.trim(),

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
    containerTitle: "Fortaleza",
    briefDescription: "Buscar Blazes",
    description: `
A fortaleza do Nether abriga diferentes tipos de inimigos.

Para encontrar o alvo correto, é necessário **consultar apenas inimigos de um tipo específico**.

Use SELECT com uma condição de filtro:
\`\`\`sql
SELECT colunas FROM tabela WHERE condição
\`\`\`

Localize os inimigos certos para obter o recurso necessário.
`.trim(),

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
    containerTitle: "Inimigos",
    briefDescription: "Buscar Endermen",
    description: `
Nem todos os inimigos deixam os mesmos itens ao serem derrotados.

Use uma consulta **SELECT com filtro** para localizar apenas os inimigos corretos.

Uma condição bem definida garante resultados precisos:
\`\`\`sql
WHERE coluna = 'valor'
\`\`\`

Encontre os inimigos que fornecem o recurso desejado.
`.trim(),

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
    containerTitle: "Criaturas",
    briefDescription: "Remover o chefe final",
    description: `
Chegou o momento final da jornada.

Para remover o chefe supremo do mundo, é preciso **excluir um registro da tabela**.

O comando **DELETE** permite remover dados, mas deve ser usado com cuidado:
\`\`\`sql
DELETE FROM tabela WHERE condição
\`\`\`

Certifique-se de indicar exatamente qual criatura deve ser eliminada.
`.trim(),

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

