import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MissionDescriptionProps {
  description: string;
}

export function MissionDescription({ description }: MissionDescriptionProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {description}
    </ReactMarkdown>
  );
}