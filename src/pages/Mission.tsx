import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Chest } from "@/components/chest/Chest";

const Mission = () => {
  const navigate = useNavigate();
  const [sqlCommand, setSqlCommand] = useState("");
  const [isChestUnlocked, setIsChestUnlocked] = useState(false);

  const handleRunCommand = () => {
    console.log("Comando SQL:", sqlCommand);
    // Aqui você pode adicionar a lógica de validação SQL
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            className="font-pixel text-xs mb-4 hover:translate-x-[-4px] transition-transform"
            onClick={() => navigate("/missions")}
          >
            <ArrowLeft className="mr-2" size={20} />
            Voltar às Missões
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="font-pixel text-2xl md:text-3xl mb-4 leading-relaxed pixel-text">
              Fase 1: Coletar Madeira
            </h1>
            <p className="text-lg text-muted-foreground">
              Aprenda a usar SELECT para buscar recursos básicos
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* SQL Terminal */}
          <div className="space-y-4">
            <div className="pixel-corners bg-card p-6 block-shadow">
              <h2 className="font-pixel text-sm mb-4 text-foreground">Terminal SQL</h2>
              <Textarea
                value={sqlCommand}
                onChange={(e) => setSqlCommand(e.target.value)}
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
          </div>

          {/* Chest section */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h2 className="font-pixel text-sm mb-4 text-foreground">Baú de Recursos</h2>

              <Chest onOpen={() => setIsChestUnlocked(true)} />

              {isChestUnlocked && (
                <div className="mt-4 pixel-corners bg-card p-4 block-shadow animate-fade-in">
                  <p className="font-pixel text-xs text-foreground">
                    Baú desbloqueado! ✨
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
