import React, { FC, ReactNode } from "react";
import "./lesContainer.css";

interface LesContainerProps {
  children: ReactNode;
}

export const LesContainer: FC<LesContainerProps> = ({ children }) => {
  return <div className="lesContainer">{children}</div>;
};
