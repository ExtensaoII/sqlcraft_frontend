// src/components/scenes/StoneScene.tsx
import type { Scene } from "./types";
import { Stone } from "@/components/resources/Stone";

const VALID_PATTERN = /^select\s+\*\s+from\s+mina\s+where\s+recurso\s*=\s*['"]pedra['"]/i;

export const StoneScene: Scene = {
  id: "stone",

  render: ({ command }) => {
    const isValid = VALID_PATTERN.test(command);

    return <Stone active={isValid} />;
  },
};
