import { useState } from "react";
import "./Chest.css";

export const Chest = () => {
  const [state, setState] = useState("closed"); // "closed" | "opening" | "opened| "closing"
  const handleClick = () => {
    if (state === "opening" || state === "closing") return;

    if (state === "closed") {
      setState("opening");
      setTimeout(() => {
        setState("opened")
      }, 900);
    } else if (state === "opened") {
      setState("closing")
      setTimeout(() => {
        setState("closed")
      }, 900);
    }
  }

  return <div className={`chest ${state}`} onClick={handleClick} 
  />;
};
