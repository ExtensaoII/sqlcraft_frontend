// src/components/scenes/EndermanScene.tsx
import type { Scene } from "./types";
import { Enderman } from "@/components/mobs/Enderman";

const VALID_PATTERN =  /^\s*delete\s+from\s+inimigos\s+where\s+nome\s*=\s*['"]enderman['"]/i;
 
export const EndermanScene: Scene = {
  id: "enderman",

  render: ({ command }) => {
    const isValid = VALID_PATTERN.test(command);

    return <Enderman active={isValid} />;
  },
};
