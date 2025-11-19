import { useState, useEffect } from "react";
import "./Chest.css";

export const Chest = ({ isOpen }) => {
  const [state, setState] = useState("closed");

  useEffect(() => {
    if (isOpen && state === "closed") {
      setState("opening");
      setTimeout(() => setState("opened"), 900);
    }
    if (!isOpen && state === "opened") {
      setState("closing");
      setTimeout(() => setState("closed"), 900);
    }
  }, [isOpen]);

  return <div className={`chest ${state}`} />;
};
