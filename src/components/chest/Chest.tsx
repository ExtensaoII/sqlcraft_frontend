import { useState, useEffect } from "react";
import "./Chest.css";

export const Chest = ({ command, openPattern, items }) => {
  const [state, setState] = useState("closed");

  const shouldOpen = openPattern ? openPattern.test(command) : false;

  useEffect(() => {
    if (shouldOpen && state === "closed") {
      setState("opening");
      setTimeout(() => setState("opened"), 900);
    }
    if (!shouldOpen && state === "opened") {
      setState("closing");
      setTimeout(() => setState("closed"), 900);
    }
  }, [shouldOpen]);

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
