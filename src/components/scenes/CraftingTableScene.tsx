// src/components/scenes/CraftingTableScene.tsx
import type { Scene } from "./types";
import { CraftingTable } from "@/components/crafting/CraftingTable";

const VALID_PATTERN = /^\s*insert\s+into\s+bancada/i;

export const CraftingTableScene: Scene = {
  id: "crafting-table",

  render: ({ command }) => {
    const isValid = VALID_PATTERN.test(command);

    return <CraftingTable active={isValid} />;
  },
};
