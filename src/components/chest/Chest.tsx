import { useState, useEffect } from "react";
import "./Chest.css";

export const Chest = ({ command, openPattern, items }) => {
  const [state, setState] = useState("closed");

  const shouldOpen = openPattern ? openPattern.test(command) : false;

  // 1️⃣ RESET DURO quando o comando muda
  useEffect(() => {
    if (!command) {
      setState("closed");
    }
  }, [command]);

  // 2️⃣ CONTROLE DE ABERTURA / FECHAMENTO
  useEffect(() => {
    let timeout;

    if (shouldOpen && state === "closed") {
      setState("opening");
      timeout = setTimeout(() => setState("opened"), 900);
    }

    if (!shouldOpen && state === "opened") {
      setState("closing");
      timeout = setTimeout(() => setState("closed"), 900);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [shouldOpen, state]);

  return (
    <div className="relative flex flex-col items-center">
      <div className={`chest ${state}`} />

      {(state === "opening" || state === "opened") && items && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {items}
        </div>
      )}
    </div>
  );
};
