// src/components/scenes/FurnaceScene.tsx
import { Furnace } from "@/components/furnace/Furnace";
import type { Scene } from "./types";

export const FurnaceScene: Scene = {
  id: "furnace",

  render: ({ command }) => {
    return <Furnace command={command} />;
  },

  validate: (command) => {
    return /^\s*insert\s+into\s+fornalha/i.test(command);
  },
};
