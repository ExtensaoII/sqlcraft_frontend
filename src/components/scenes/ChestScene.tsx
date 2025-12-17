import { Chest } from "@/components/chest/Chest";
import { MinecraftInventoryTable } from "@/components/inventory/InventoryTable";
import type { Scene } from "./types";

type ChestItem = {
  name: string;
  type: string;
  quantity: number;
};

export function ChestScene(
  items: ChestItem[],
  openPattern: RegExp
): Scene {
  return {
    id: "chest",

    render: ({ command }) => {
      const isOpen = openPattern.test(command);

      return (
        <Chest isOpen={isOpen}>
          {items.length > 0 && (
            <MinecraftInventoryTable items={items} />
          )}
        </Chest>
      );
    }
  };
}
