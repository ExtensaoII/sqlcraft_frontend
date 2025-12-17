// src/components/crafting/CraftingTable.tsx
import craftingTable from "@/assets/craftingTable.webp";

interface CraftingTableProps {
  active?: boolean;
}

export const CraftingTable = ({ active = false }: CraftingTableProps) => {
  return (
    <div className="relative flex items-end justify-center min-h-[260px]">
      <img
        src={craftingTable}
        alt="Mesa de Trabalho"
        className={`
          pixelated
          transition-opacity duration-500
          ${active ? "opacity-100" : "opacity-50"}
        `}
      />
    </div>
  );
};
