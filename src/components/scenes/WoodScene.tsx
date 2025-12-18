// src/components/scenes/WoodScene.tsx
import type { Scene } from "./types";
import { Wood } from "@/components/resources/Wood";

const VALID_PATTERN = /^\s*select\s+\*\s+from\s+floresta\s+where\s+recurso\s*=\s*['"]madeira['"]/i;

export const WoodScene: Scene = {
  id: "wood",

  render: ({ command }) => {
    const isValid = VALID_PATTERN.test(command);

    return <Wood active={isValid} />;
  },
};
