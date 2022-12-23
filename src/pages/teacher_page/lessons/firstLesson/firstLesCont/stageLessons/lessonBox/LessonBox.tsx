import React from "react";
import "./lessonBox.css";
import editImg from "../../../../../../..//assets/teacher_images/newLesson/pencil 1.svg";

interface LessonBoxProps {
  lessonNumber: number;
  title: string;
}

export const LessonBox: React.FC<LessonBoxProps> = ({
  lessonNumber,
  title,
}) => {
  return (
    <div className="lessonBox">
      <p className="lessonBox_number textPurple">{`Դաս ${lessonNumber}:`}</p>
      <div className="lessonBox_body">
        <p className="lessonBox_title">{title}</p>
        <span className="lessonBox_homework">Տնային աշխատանք</span>
      </div>
      <img src={editImg} alt="" className="cursor-pointer" />
    </div>
  );
};
