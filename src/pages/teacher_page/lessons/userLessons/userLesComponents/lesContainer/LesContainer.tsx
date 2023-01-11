import React, { FC, ReactNode } from "react";
import "./lesContainer.css";

interface LesContainerProps {
  children: ReactNode;
  className?: string;
}

export const LesContainer: FC<LesContainerProps> = ({
  children,
  className = "",
}) => {
  return <div className={"lesContainer " + className}>{children}</div>;
};
