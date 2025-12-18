// src/components/scenes/BlazeScene.tsx
import type { Scene } from "./types";
import { Blaze } from "@/components/mobs/Blaze";

const VALID_PATTERN =  /^\s*select\s+.+\s+from\s+fortaleza\s+where\s+nome\s*=\s*['"]blaze['"]/i;

export const BlazeScene: Scene = {
  id: "blaze",

  render: ({ command }) => {
    const isValid = VALID_PATTERN.test(command);

    return <Blaze active={isValid} />;
  },
};
