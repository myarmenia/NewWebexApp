import React, { ReactNode } from "react";
import "./txtWinput.css";

interface TxtWinputProps {
  text: string;
  children: ReactNode;
}

export const TxtWinput: React.FC<TxtWinputProps> = ({ text, children }) => {
  return (
    <div className="txtWinput">
      <span className="txtWinput_text">{text}</span>
      {children}
    </div>
  );
};
