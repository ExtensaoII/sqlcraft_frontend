// src/components/resources/Wood.tsx
import woodImage from "@/assets/wood.webp";

interface WoodProps {
  active: boolean;
}

export const Wood = ({ active }: WoodProps) => {
  return (
    <div className="relative flex items-center justify-center min-h-[260px]">
      <img
        src={woodImage}
        alt="Madeira"
        className="transition-opacity duration-300"
        style={{ opacity: active ? 1 : 0.5 }}
      />
    </div>
  );
};
