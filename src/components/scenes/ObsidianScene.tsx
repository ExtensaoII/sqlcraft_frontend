// src/components/scenes/ObsidianScene.tsx
import type { Scene } from "./types";
import { Obsidian } from "@/components/ore/Obsidian";

const VALID_PATTERN = /^\s*insert\s+into\s+inventário\s*\(\s*nome\s*,\s*quantidade\s*\)\s*values\s*\(\s*['"]obsidiana['"]\s*/i;

export const ObsidianScene: Scene = {
  id: "obsidian",

  render: ({ command }) => {
    const isValid = VALID_PATTERN.test(command);

    return <Obsidian active={isValid} />;
  },
};
