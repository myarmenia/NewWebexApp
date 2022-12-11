import React, { FC } from "react";
import "./userPanel.css";
import exitImg from "../../../../images/Teacher/Header/Group 1498.svg";

export const UserPanel: FC = () => {
  return (
    <div className="panel">
      <div>
        <p className="panelTitle">Ղեկավարման վահանակ</p>
        <div className="exitHEadBox">
          <img id="exit" src={exitImg} className="cursor-pointer" />
          <span className="text-xs text-[#9C9C9C] whitespace-nowrap">
            Դուրս գալ
          </span>
        </div>
      </div>
    </div>
  );
};
