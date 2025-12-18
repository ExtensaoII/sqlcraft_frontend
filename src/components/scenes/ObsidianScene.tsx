// src/components/scenes/ObsidianScene.tsx
import type { Scene } from "./types";
import { Obsidian } from "@/components/ore/Obsidian";

const VALID_PATTERN = /^insert\s+into\s+inventário/i;

export const ObsidianScene: Scene = {
  id: "obsidian",

  render: ({ command }) => {
    const isValid = VALID_PATTERN.test(command);

    return <Obsidian active={isValid} />;
  },
};
