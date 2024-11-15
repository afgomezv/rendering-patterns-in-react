import { ReactNode, useState } from "react";

interface ParentComponentProps {
  render: (data: string[]) => ReactNode;
}

const ParentComponent = ({ render }: ParentComponentProps) => {
  const [data] = useState<string[]>(["Apple 🍎", "Banana 🍌", "Orange 🍊"]);

  return <ul>{render(data)}</ul>;
};

export default ParentComponent;
