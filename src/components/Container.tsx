import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={`m-auto w-[1150px] max-w-[1150px] ${className}`}>{children}</div>;
}
