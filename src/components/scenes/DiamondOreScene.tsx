// src/components/scenes/DiamondOreScene.tsx
import type { Scene } from "./types";
import { DiamondOre } from "@/components/ore/DiamondOre";

const VALID_PATTERN = /^select\s+.+\s+from\s+caverna/i;

export const DiamondOreScene: Scene = {
  id: "diamond-ore",

  render: ({ command }) => {
    const isValid = VALID_PATTERN.test(command);

    return <DiamondOre active={isValid} />;
  },
};
