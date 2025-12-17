import { useEffect, useState } from "react";
import "./Chest.css";

type ChestState = "closed" | "opening" | "opened" | "closing";

interface ChestProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

export function Chest({ isOpen, children }: ChestProps) {
  const [state, setState] = useState<ChestState>("closed");

  useEffect(() => {
    let timeout: number | undefined;

    if (isOpen && state === "closed") {
      setState("opening");
      timeout = window.setTimeout(() => setState("opened"), 900);
    }

    if (!isOpen && state === "opened") {
      setState("closing");
      timeout = window.setTimeout(() => setState("closed"), 900);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isOpen, state]);

  return (
    <div className="relative flex flex-col items-center">
      <div className={`chest ${state}`} />

      {(state === "opening" || state === "opened") && children && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {children}
        </div>
      )}
    </div>
  );
}
