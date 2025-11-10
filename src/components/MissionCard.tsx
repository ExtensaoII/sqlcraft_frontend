import { Card } from "@/components/ui/card";
import { Database, Pickaxe, Sword, Trophy } from "lucide-react";

interface MissionCardProps {
  title: string;
  description: string;
  sqlConcept: string;
  icon: "database" | "pickaxe" | "sword" | "trophy";
  completed?: boolean;
  onClick?: () => void;
}

const iconMap = {
  database: Database,
  pickaxe: Pickaxe,
  sword: Sword,
  trophy: Trophy,
};

export const MissionCard = ({
  title,
  description,
  sqlConcept,
  icon,
  completed = false,
  onClick,
}: MissionCardProps) => {
  const Icon = iconMap[icon];

  return (
    <Card
      onClick={onClick}
      className={`p-6 border-4 pixel-corners block-shadow transition-all hover:translate-y-[-4px] hover:shadow-lg ${
        completed ? "border-primary bg-primary/10" : "border-border bg-card"
      } ${onClick ? "cursor-pointer" : ""}`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded ${completed ? "bg-primary" : "bg-muted"}`}>
          <Icon className={completed ? "text-primary-foreground" : "text-foreground"} size={24} />
        </div>
        <div className="flex-1">
          <h3 className="font-pixel text-sm mb-2 leading-relaxed">{title}</h3>
          <p className="text-muted-foreground text-lg mb-3">{description}</p>
          <div className="inline-block bg-accent/20 border-2 border-accent px-3 py-1 rounded">
            <span className="font-pixel text-xs text-accent-foreground">
              SQL: {sqlConcept}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
