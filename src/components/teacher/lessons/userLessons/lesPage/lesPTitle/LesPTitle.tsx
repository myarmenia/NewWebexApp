import React, { FC } from "react";
import "./lesPTitle.css";
import editImg from "../../../../../../images/Teacher/UserLessons/editGray.svg";

interface LesPTitleProps {
  title: string;
}

export const LesPTitle: FC<LesPTitleProps> = ({ title }) => {
  return (
    <div className="lesPage_titleBox">
      <h5 className="lesPage_title">{title}</h5>
      <div className="lesPage_editBox">
        <span className="lesPage_editText">Խմբագրել</span>
        <img src={editImg} alt="" />
      </div>
    </div>
  );
};
