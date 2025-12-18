// src/components/mob/Enderman.tsx
import enderman from "@/assets/enderman.gif";

interface EndermanProps {
  active?: boolean;
}

export const Enderman = ({ active = false }: EndermanProps) => {
  return (
    <div className="relative flex items-end justify-center min-h-[260px]">
      <img
        src={enderman}
        alt="Enderman"
        className={`
          pixelated
          transition-opacity duration-500
          ${active ? "opacity-100" : "opacity-50"}
        `}
      />
    </div>
  );
};
