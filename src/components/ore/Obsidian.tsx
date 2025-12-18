// src/components/ore/Obsidian.tsx
import obsidian from "@/assets/obsidian.webp";

interface ObsidianProps {
  active?: boolean;
}

export const Obsidian = ({ active = false }: ObsidianProps) => {
  return (
    <div className="relative flex items-end justify-center min-h-[260px]">
      <img
        src={obsidian}
        alt="Obsidiana"
        className={`
          pixelated
          transition-opacity duration-500
          ${active ? "opacity-100" : "opacity-50"}
        `}
      />
    </div>
  );
};
