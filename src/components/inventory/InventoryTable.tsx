import { cn } from "@/lib/utils";

interface InventoryItem {
  name: string;
  type: string;
  quantity: number;
}

interface MinecraftInventoryTableProps {
  items: InventoryItem[];
  className?: string;
}

export const MinecraftInventoryTable = ({
  items,
  className,
}: MinecraftInventoryTableProps) => {
  return (
    <div
      className={cn(
        "inline-block bg-[#c6c6c6] p-1 border-2 border-[#373737] border-t-[#ffffff] border-l-[#ffffff]",
        className
      )}
      style={{
        boxShadow: "inset -2px -2px 0 0 #555555, inset 2px 2px 0 0 #ffffff",
      }}
    >
      {/* Inventory Header */}
      <div className="bg-[#a0a0a0] px-3 py-1.5 mb-1 border border-[#373737] border-t-[#ffffff] border-l-[#ffffff]">
        <h3 className="font-pixel text-[10px] text-[#404040] leading-none">
          Inventário
        </h3>
      </div>

      {/* Table Container */}
      <div className="bg-[#8b8b8b] p-1">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-[#a0a0a0] border border-[#373737] border-t-[#ffffff] border-l-[#ffffff] px-3 py-2 text-left font-pixel text-[10px] text-[#404040]" style={{ boxShadow: "inset -1px -1px 0 0 #555555, inset 1px 1px 0 0 #ffffff" }}>
                Nome
              </th>
              <th className="bg-[#a0a0a0] border border-[#373737] border-t-[#ffffff] border-l-[#ffffff] px-3 py-2 text-left font-pixel text-[10px] text-[#404040]" style={{ boxShadow: "inset -1px -1px 0 0 #555555, inset 1px 1px 0 0 #ffffff" }}>
                Tipo
              </th>
              <th className="bg-[#a0a0a0] border border-[#373737] border-t-[#ffffff] border-l-[#ffffff] px-3 py-2 text-center font-pixel text-[10px] text-[#404040]" style={{ boxShadow: "inset -1px -1px 0 0 #555555, inset 1px 1px 0 0 #ffffff" }}>
                Quantidade
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="hover:bg-[#a0a0a0] transition-colors">
                <td className="bg-[#8b8b8b] border border-[#373737] border-t-[#ffffff] border-l-[#ffffff] px-3 py-2 font-pixel text-[10px] text-[#3f3f3f]" style={{ boxShadow: "inset -1px -1px 0 0 #555555, inset 1px 1px 0 0 #ffffff" }}>
                  {item.name}
                </td>
                <td className="bg-[#8b8b8b] border border-[#373737] border-t-[#ffffff] border-l-[#ffffff] px-3 py-2 font-pixel text-[10px] text-[#3f3f3f]" style={{ boxShadow: "inset -1px -1px 0 0 #555555, inset 1px 1px 0 0 #ffffff" }}>
                  {item.type}
                </td>
                <td className="bg-[#8b8b8b] border border-[#373737] border-t-[#ffffff] border-l-[#ffffff] px-3 py-2 text-center font-pixel text-[10px] text-[#3f3f3f]" style={{ boxShadow: "inset -1px -1px 0 0 #555555, inset 1px 1px 0 0 #ffffff" }}>
                  {item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
