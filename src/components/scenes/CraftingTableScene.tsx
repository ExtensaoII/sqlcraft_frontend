// src/components/scenes/CraftingTableScene.tsx
import type { Scene } from "./types";
import { CraftingTable } from "@/components/crafting/CraftingTable";

const VALID_PATTERN = /^insert\s+into\s+crafting/i;

export const CraftingTableScene: Scene = {
  id: "crafting-table",

  render: ({ command }) => {
    const isValid = VALID_PATTERN.test(command);

    return <CraftingTable active={isValid} />;
  },
};
