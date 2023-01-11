import { FC } from "react";
import editImg from "../../../../../../assets/teacher_images/userLessons/editGray.svg";
import "./lesPTitle.css";

interface LesPTitleProps {
  title: string;
  className?: {
    title?: string;
    cont?: string;
  };
}

export const LesPTitle: FC<LesPTitleProps> = ({
  title,
  className = {
    title: "",
    cont: "",
  },
}) => {
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
