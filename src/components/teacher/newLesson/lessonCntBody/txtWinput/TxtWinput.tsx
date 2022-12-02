import React, { ReactNode } from "react";
import "./txtWinput.css";

interface TxtWinputProps {
  text: string;
  children: ReactNode;
}

export const TxtWinput: React.FC<TxtWinputProps> = ({ text, children }) => {
  return (
    <div className="flex justify-between items-center w-[279px]">
      <span className="text-[#6B6B6B] text-xs">{text}</span>
      {/* <CustomNmbInp min={0} max={100} defaultValue={3} /> */}
      {children}
    </div>
  );
};
