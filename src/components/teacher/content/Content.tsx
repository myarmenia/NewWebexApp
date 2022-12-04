import React, { ReactNode } from "react";
import "./content.css";
interface ContentProps {
  children: ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="contentBody">
      <div className="contentBodyContainer">{children}</div>
    </div>
  );
};
