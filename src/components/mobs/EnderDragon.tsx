// src/components/mob/EnderDragon.tsx
import enderDragon from "@/assets/enderDragon.gif";

interface EnderDragonProps {
  active?: boolean;
}

export const EnderDragon = ({ active = false }: EnderDragonProps) => {
  return (
    <div className="relative flex items-end justify-center min-h-[260px]">
      <img
        src={enderDragon}
        alt="Ender Dragon"
        className={`
          pixelated
          transition-opacity duration-500
          ${active ? "opacity-100" : "opacity-50"}
        `}
      />
    </div>
  );
};
