import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { missions } from "@/data/missions";

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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setSqlCommand("");
    setIsCorrect(false);
    setErrorMessage(null);
  }, [id]);

  if (!mission) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-pixel text-xl">Essa missão não existe.</p>
      </div>
    );
  }

  const handleRunCommand = () => {
    const cmd = normalize(sqlCommand);
    const expected = normalize(mission.expectedCommand);

    setErrorMessage(null);

    if (cmd === expected) {
      setIsCorrect(true);
      return;
    }

    setIsCorrect(false);

    const hint = mission.validationHints?.find((h) => h.test(cmd));

    if (hint) {
      setErrorMessage(hint.message);
    } else {
      setErrorMessage("O comando está incorreto. Revise a estrutura do SQL.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSqlCommand(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-primary/5 to-background">

      {/* Back button */}
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

      <div className="text-center container mx-auto px-4 py-8 flex-1 flex flex-col">

        {/* Header */}
        <div className=" mb-8">
          <h1 className="text-center font-pixel text-2xl md:text-3xl mb-4">
            Fase {mission.id}: {mission.title}
          </h1>
          <div className="text-lg text-muted-foreground mission-description">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {mission.description}
            </ReactMarkdown>
          </div>

        </div>

        {/* Grid */}
        <div className="w-full grid md:grid-cols-2 gap-8 flex-1 max-h-[58vh]">

          {/* Terminal */}
          <div className="flex flex-col space-y-4 h-full">
            <div className="pixel-corners bg-card p-6 block-shadow flex flex-col flex-1">
              <h2 className="font-pixel text-sm mb-4">
                Terminal SQL
              </h2>

              <Textarea
                value={sqlCommand}
                onChange={handleChange}
                placeholder="Digite seu comando SQL aqui..."
                className="font-mono !text-xl flex-1 min-h-[300px]"
              />

              <Button
                onClick={handleRunCommand}
                className="w-full mt-4 font-pixel text-xs"
              >
                Executar Comando
              </Button>
            </div>

            {/* Feedback */}
            <div className="h-6 flex items-center justify-center text-center">
              {isCorrect && (
                <p className="font-pixel text-xs">
                  Comando correto!
                </p>
              )}

              {!isCorrect && errorMessage && (
                <p className="font-pixel text-xs text-red-500">
                  {errorMessage}
                </p>
              )}
            </div>
          </div>

          {/* Scene */}
          <div className="flex items-stretch justify-center">
            <div className="flex flex-col h-full w-full text-center">
              <h2 className="font-pixel text-sm mb-4">
                {mission.containerTitle ?? "Baú de Recursos"}
              </h2>

              <div className="flex-1 flex items-center justify-center">
                {mission.scene.render({ command: sqlCommand })}
              </div>
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

        <div />

        {nextId && (
          <Button
            variant="ghost"
            className="font-pixel text-xs hover:translate-x-[-4px] transition-transform btn-ghost-blue"
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
