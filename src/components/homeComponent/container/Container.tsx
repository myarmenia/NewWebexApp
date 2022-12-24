import React, { ReactNode } from "react";
import './container.css'

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="myContainer">
      <div className="innerCont">{children}</div>
    </div>
  );
}
