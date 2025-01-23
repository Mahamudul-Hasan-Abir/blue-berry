import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-full max-w-7xl md:mx-auto bg-white">{children}</div>;
};

export default Container;
