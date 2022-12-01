import React from "react";
import "./newLessonTitle.css";
import editImg from "../../../../images/Teacher/NewLesson/pencil 1.svg";
interface NewLessonTitleProps {
  title: string;
  editIsActive?: boolean;
}

export const NewLessonTitle: React.FC<NewLessonTitleProps> = ({
  title,
  editIsActive,
}) => {
  return (
    <div className="newLessonTitle">
      <div className="flex gap-3 items-center">
        <div className="lessonTitle">{title} </div>
        {editIsActive && (
          <img src={editImg} className="w-4 h-4 cursor-pointer" />
        )}
      </div>
      <div className="underline">
        <hr className="purpleUnderline" />
      </div>
    </div>
  );
};
