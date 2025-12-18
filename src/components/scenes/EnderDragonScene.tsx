// src/components/scenes/EnderDragonScene.tsx
import type { Scene } from "./types";
import { EnderDragon } from "@/components/mobs/EnderDragon";

const VALID_PATTERN = /^\s*delete\s+from\s+inimigos\s+where\s+nome\s*=\s*['"]ender\s+dragon['"]/i;

export const EnderDragonScene: Scene = {
  id: "ender-dragon",

  render: ({ command }) => {
    const isValid = VALID_PATTERN.test(command);

    return <EnderDragon active={isValid} />;
  },
};
