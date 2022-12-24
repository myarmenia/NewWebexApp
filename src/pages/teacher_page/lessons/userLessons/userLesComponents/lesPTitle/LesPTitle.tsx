import React, { FC } from "react";
import "./lesPTitle.css";
import editImg from "../../../../../../assets/teacher_images/userLessons/editGray.svg";

interface LesPTitleProps {
  title: string;
  className?: {
    title?: string;
    cont?: string;
  };
}

export const LesPTitle: FC<LesPTitleProps> = ({ title, className }) => {
  return (
    <div className={"lesPage_titleBox " + className?.cont}>
      <h5 className={"lesPage_title " + className?.title}>{title}</h5>
      <div className="lesPage_editBox">
        <span className="lesPage_editText">Խմբագրել</span>
        <img src={editImg} alt="" />
      </div>
    </div>
  );
};
