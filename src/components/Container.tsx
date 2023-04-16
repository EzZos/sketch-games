import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}
export function Container({ children }: ContainerProps) {
  return <div className="m-auto w-[1150px] max-w-[1150px]">{children}</div>;
}
