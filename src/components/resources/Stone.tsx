import stoneImage from "@/assets/stone.webp";

interface StoneProps {
  active: boolean;
}

export const Stone = ({ active }: StoneProps) => {
  return (
    <div className="relative flex items-center justify-center min-h-[260px]">
      <img
        src={stoneImage}
        alt="Pedra"
        className="transition-opacity duration-300"
        style={{ opacity: active ? 1 : 0.5 }}
      />
    </div>
  );
};
