import React from "react";
import "./contTitle.css";
interface ContTitleProps {
  title: string;
}

export const CntTitle: React.FC<ContTitleProps> = ({ title }) => {
  return (
    <div className="contTitle">
      <span className="contTitle_text">{title}</span>
      <div className="underline"/>
    </div>
  );
};
