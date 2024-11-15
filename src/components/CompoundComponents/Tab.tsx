import { ReactNode } from "react";

interface TabProps {
  label: string;
  children: ReactNode;
}

const Tab = ({ label, children }: TabProps) => {
  return (
    <>
      <em>{label}</em>
      <span>{children}</span>
    </>
  );
};

export default Tab;
