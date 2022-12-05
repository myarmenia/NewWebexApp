import React, { ReactNode } from "react";
import "./txtWinput.css";

interface TxtWinputProps {
  text: string;
  children: ReactNode;
}

export const TxtWinput: React.FC<TxtWinputProps> = ({ text, children }) => {
  return (
    <div className="stageBox items-center w-[279px]">
      <span className="text-[#6B6B6B] text-xs">{text}</span>
      {children}
    </div>
  );
};
