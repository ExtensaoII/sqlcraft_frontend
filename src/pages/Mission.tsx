import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { Chest } from "@/components/chest/Chest";
import { MinecraftInventoryTable } from "@/components/inventory/InventoryTable";

import { missions } from "@/data/missions"; // <- your missions array

const normalize = (str: string) =>
  str.trim().replace(/\s+/g, " ").toLowerCase();

const Mission = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const currentId = Number(id);

  const mission = missions.find((m) => m.id === currentId);
  const maxMissionId = missions.length;

  const prevId = currentId > 1 ? currentId - 1 : null;
  const nextId = currentId < maxMissionId ? currentId + 1 : null;

  const [sqlCommand, setSqlCommand] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isChestOpen, setIsChestOpen] = useState(false);

  // Mission not found → show error screen
  if (!mission) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-pixel text-xl">Essa missão não existe.</p>
      </div>
    );
  }

  const chestPattern = mission.chestPattern ?? /.*/;

  const updateChestState = (text: string) => {
    const cmd = normalize(text);
    setIsChestOpen(chestPattern.test(cmd));
  };

  const handleRunCommand = () => {
    const cmd = normalize(sqlCommand);
    const expected = normalize(mission.expectedCommand);
    setIsCorrect(cmd === expected);
  };

  const handleChange = (e: any) => {
    const value = e.target.value;
    setSqlCommand(value);
    updateChestState(value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-primary/5 to-background">

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

      <div className="container mx-auto px-4 py-8 relative z-10 flex-1 flex flex-col">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-pixel text-2xl md:text-3xl mb-4 leading-relaxed pixel-text">
            Fase {mission.id}: {mission.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {mission.description}
          </p>
        </div>

        {/* Grid */}
        <div className="w-full grid md:grid-cols-2 gap-8 flex-1 max-h-[58vh]">

          {/* Terminal */}
          <div className="flex flex-col space-y-4 h-full">
            <div className="pixel-corners bg-card p-6 block-shadow flex flex-col flex-1">
              <h2 className="font-pixel text-sm mb-4 text-foreground">
                Terminal SQL
              </h2>

              <Textarea
                value={sqlCommand}
                onChange={handleChange}
                placeholder="Digite seu comando SQL aqui..."
                className="font-mono !text-xl bg-background/50 pixel-corners flex-1 min-h-[300px]"
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

          {/* Chest */}
          <div className="flex items-stretch justify-center">
            <div className="relative text-center flex flex-col h-full w-full">

              <h2 className="font-pixel text-sm mb-4 text-foreground">
                Baú de Recursos
              </h2>

              <div className="flex-1 flex items-center justify-center">
                <Chest isOpen={isChestOpen} image={mission.image} />
              </div>

              {isChestOpen && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <MinecraftInventoryTable items={mission.chestItems} />
                </div>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Navigation */}
      <div className="flex justify-between w-full px-4 mb-4">

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

        {nextId && (
          <Button
            variant="ghost"
            className="font-pixel text-xs hover:translate-x-[4px] transition-transform btn-ghost-blue"
            onClick={() => navigate(`/mission/${nextId}`)}
          >
            Próxima fase
            <ArrowRight className="ml-2" size={20} />
          </Button>
        )}

      </div>

    </div>
  );
};

export default Mission;
