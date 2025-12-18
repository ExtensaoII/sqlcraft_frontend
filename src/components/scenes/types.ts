export interface SceneRenderProps {
  command: string;
}

export interface Scene {
  id: string;
  render: (props: SceneRenderProps) => JSX.Element;
  validate?: (command: string) => boolean;
}

