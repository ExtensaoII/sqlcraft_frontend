import { Button } from "@/components/ui/button";
import { MissionCard } from "@/components/MissionCard";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Missions = () => {
  const navigate = useNavigate();
  
  const missions = [
    {
      title: "Coletar Madeira",
      description: "Aprenda a usar SELECT para buscar recursos básicos",
      sqlConcept: "SELECT",
      icon: "database" as const,
      completed: false,
    },
    {
      title: "Construir Ferramentas",
      description: "Use WHERE e filtros para craftar itens específicos",
      sqlConcept: "WHERE",
      icon: "pickaxe" as const,
      completed: false,
    },
    {
      title: "Minerar Recursos",
      description: "Domine JOIN para combinar diferentes tabelas de materiais",
      sqlConcept: "JOIN",
      icon: "pickaxe" as const,
      completed: false,
    },
    {
      title: "Derrotar o Ender Dragon",
      description: "Queries avançadas com agregações e subqueries",
      sqlConcept: "GROUP BY",
      icon: "trophy" as const,
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background relative">

      {/* Botão fora do container → encostado na borda */}
      <div className="px-2 pt-4 relative z-20">
        <Button
          variant="ghost"
          className="font-pixel text-xs hover:translate-x-[-4px] transition-transform btn-ghost-blue"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2" size={20} />
          Voltar ao Menu
        </Button>
      </div>

      {/* Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 z-0"></div>

      {/* Container principal */}
      <div className="container mx-auto px-4 py-8 relative z-10">

        <div className="mb-8 text-center">
          <h1 className="font-pixel text-2xl md:text-3xl mb-4 leading-relaxed pixel-text">
            Roadmap de Missões
          </h1>
          <p className="text-xl text-muted-foreground">
            Progrida no jogo resolvendo queries SQL
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {missions.map((mission, index) => (
            <div key={index} className="relative">
              {index < missions.length - 1 && (
                <div className="absolute left-1/2 top-full w-1 h-6 bg-border z-0 -translate-x-1/2"></div>
              )}
              <MissionCard 
                {...mission} 
                onClick={index === 0 ? () => navigate('/mission/1') : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Missions;
