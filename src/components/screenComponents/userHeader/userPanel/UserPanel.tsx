import React, { FC } from "react";
import "./userPanel.css";
import exitImg from "../../../../assets/teacher_images/header/Group 1498.svg";
import { Link } from "react-router-dom";

export const UserPanel: FC = () => {
  return (
    <div className="panel">
      <div>
        <Link to={"/teacher/panel"} className="panelTitle">
          Ղեկավարման վահանակ
        </Link>
        <div className="exitHEadBox">
          <img id="exit" src={exitImg} className="cursor-pointer" alt="" />
          <span className="text-xs text-[#9C9C9C] whitespace-nowrap">
            Դուրս գալ
          </span>
        </div>
      </div>
    </div>
  );
};
