import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  size?: string;
}

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      {children}
    </div>
  );
};

export default Container;
