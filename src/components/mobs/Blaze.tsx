// src/components/mob/Blaze.tsx
import blaze from "@/assets/blaze.gif";

interface BlazeProps {
  active?: boolean;
}

export const Blaze = ({ active = false }: BlazeProps) => {
  return (
    <div className="relative flex items-end justify-center min-h-[260px]">
      <img
        src={blaze}
        alt="Blaze"
        className={`
          pixelated
          transition-opacity duration-500
          ${active ? "opacity-100" : "opacity-50"}
        `}
      />
    </div>
  );
};
