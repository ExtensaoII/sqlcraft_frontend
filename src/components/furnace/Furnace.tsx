// src/components/furnace/Furnace.tsx
import { useEffect, useState } from "react";

import furnaceOff from "@/assets/furnace.webp";
import furnaceOn from "@/assets/litFurnace.gif";

interface FurnaceProps {
  command: string;
}

export const Furnace = ({ command }: FurnaceProps) => {
  const [lit, setLit] = useState(false);

  useEffect(() => {
    setLit(/^insert\s+into\s+fornalha/i.test(command));
  }, [command]);

  return (
    <div className="relative flex items-end justify-center min-h-[260px]">
      <img
        src={lit ? furnaceOn : furnaceOff}
        alt="Fornalha"
        className="furnace-image"
      />
    </div>
  );
};
