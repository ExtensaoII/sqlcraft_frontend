import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Chest } from "@/components/chest/Chest";
import { MinecraftInventoryTable } from "@/components/inventory/InventoryTable";

const inventoryItems = [
  { name: "Madeira de carvalho", type: "madeira", quantity: 10 },
  { name: "Graveto", type: "Recurso", quantity: 4 },
];

const normalize = (str) =>
  str.trim().replace(/\s+/g, " ").toLowerCase();

const chestPattern = /^select\s+.+\s+from\s+baú/i;

const expectedCommand = "SELECT * FROM baú WHERE tipo = 'madeira'";

const Mission = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const currentId = Number(id);
  const prevId = currentId > 1 ? currentId - 1 : null;
  const nextId = currentId + 1; // pode ajustar se quiser limitar

  const [sqlCommand, setSqlCommand] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isChestOpen, setIsChestOpen] = useState(false);

  const updateChestState = (text) => {
    const cmd = normalize(text);
    setIsChestOpen(chestPattern.test(cmd));
  };

  const handleRunCommand = () => {
    const cmd = normalize(sqlCommand);
    const expected = normalize(expectedCommand);
    setIsCorrect(cmd === expected);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSqlCommand(value);
    updateChestState(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">

    <div className="px-2 pt-4">
        <Button
          variant="ghost"
          className="font-pixel text-xs hover:translate-x-[-4px] transition-transform btn-ghost-blue"
          onClick={() => navigate("/missions")}
        >
          <ArrowLeft className="mr-2" size={20} />
          Voltar às Missões
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">

        {/* Voltar para lista de missões */}

        <div className="text-center mb-8">
          <h1 className="font-pixel text-2xl md:text-3xl mb-4 leading-relaxed pixel-text">
            Fase {currentId}: Coletar Madeira
          </h1>
          <p className="text-lg text-muted-foreground">
            Aprenda a usar SELECT para buscar recursos básicos
          </p>
        </div>


        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Terminal SQL */}
          <div className="space-y-4">
            <div className="pixel-corners bg-card p-6 block-shadow">
              <h2 className="font-pixel text-sm mb-4 text-foreground">Terminal SQL</h2>

              <Textarea
                value={sqlCommand}
                onChange={handleChange}
                placeholder="Digite seu comando SQL aqui..."
                className="font-mono min-h-[200px] bg-background/50 pixel-corners"
              />

              <Button
                onClick={handleRunCommand}
                className="w-full mt-4 font-pixel text-xs pixel-corners block-shadow hover:translate-y-[-2px] transition-transform"
              >
                Executar Comando
              </Button>
            </div>

            <div className="h-6 flex items-center justify-center">
              {isCorrect && (
                <p className="font-pixel text-xs text-center">
                  Comando correto!
                </p>
              )}
            </div>
          </div>

          {/* Baú */}
          <div className="flex items-center justify-center">
            <div className="relative text-center">

              <h2 className="font-pixel text-sm mb-4 text-foreground">
                Baú de Recursos
              </h2>

              <Chest isOpen={isChestOpen} />

              {isChestOpen && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <MinecraftInventoryTable items={inventoryItems} />
                </div>
              )}

            </div>
          </div>

        </div>


      </div>

        {/* Setas de navegação entre fases */}
        <div className="flex justify-between w-full px-4  mt-16">
          {prevId && (
            <Button
              variant="ghost"
              className="font-pixel text-xs hover:translate-x-[-4px] transition-transform btn-ghost-blue"
              onClick={() => navigate(`/mission/${prevId}`)}
            >
              <ArrowLeft className="mr-2" size={20} />
              Fase anterior
            </Button>
          )}

          <div></div>

          <Button
            variant="ghost"
            className="font-pixel text-xs hover:translate-x-[4px] transition-transform btn-ghost-blue"
            onClick={() => navigate(`/mission/${nextId}`)}
          >
            Próxima fase
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
    </div>
  );
};

export default Mission;
