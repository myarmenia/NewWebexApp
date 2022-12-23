import React, { ReactNode } from "react";
import "./content.css";
interface ContentProps {
  children: ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <main className="contentBody">
      <div className="contentBodyContainer">{children}</div>
    </main>
  );
};
