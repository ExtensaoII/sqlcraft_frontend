// src/components/ore/DiamondOre.tsx
import diamondOre from "@/assets/diamondOre.webp";

interface DiamondOreProps {
  active?: boolean;
}

export const DiamondOre = ({ active = false }: DiamondOreProps) => {
  return (
    <div className="relative flex items-end justify-center min-h-[260px]">
      <img
        src={diamondOre}
        alt="Minério de Diamante"
        className={`
          pixelated
          transition-opacity duration-500
          ${active ? "opacity-100" : "opacity-50"}
        `}
      />
    </div>
  );
};
