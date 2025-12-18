import { Button } from "@/components/ui/button";
import { Code2, Gamepad2, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { playClickSound } from "@/lib/sound";

const Index = () => {
  const navigate = useNavigate();

  const goTo = (path: string) => {
    playClickSound();
    navigate(path);
  };
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/20 via-background to-background">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 max-w-2xl">
        {/* Logo/Title */}
        <div className="inline-block mb-8 animate-float">
          <Code2 size={100} className="text-primary" />
        </div>
        
        <h1 className="font-pixel text-3xl md:text-5xl lg:text-6xl mb-16 leading-relaxed text-foreground pixel-text">
          SQLCraft
        </h1>
        
        {/* Menu Buttons */}
        <div className="space-y-6 max-w-md mx-auto">
          <Button 
            size="lg" 
            className="w-full font-pixel  px-8 py-8 pixel-corners block-shadow hover:translate-y-[-2px] bg-primary hover:bg-primary/90 transition-transform text-primary-foreground"
            onClick={() => goTo('/missions')}
          >
            <Gamepad2 className="mr-3" size={24} />
            Iniciar Jogo
          </Button>
          
          <Button 
            size="lg" 
            className="w-full font-pixel px-8 py-8 pixel-corners block-shadow hover:translate-y-[-2px] bg-secondary hover:bg-secondary/90 transition-transform"
            onClick={() => goTo('/missions')}
          >
            <BookOpen className="mr-3" size={24} />
            Ver Missões
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-20">
          <p className="text-muted-foreground text-lg">
            Aprenda SQL jogando
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
