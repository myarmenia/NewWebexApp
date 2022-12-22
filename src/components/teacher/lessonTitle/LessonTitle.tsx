import React from "react";
import "./lessonTitle.css";
import editImg from "../../../images/Teacher/NewLesson/pencil 1.svg";
// import CreateGraffic from "../userComponents/CreateGraffic";
import { CustomBtn } from "../lesComponents/customBtn/CustomBtn";

interface LessonTitleProps {
  title: string;
  editIsActive?: boolean;
  isAddLessonBtn?: boolean;
  className?: string;
  classNameParent?: string;
}

export const LessonTitle: React.FC<LessonTitleProps> = ({
  title,
  editIsActive,
  isAddLessonBtn,
  className,
  classNameParent,
}) => {
  return (
    <div className={"newLessonTitle " + classNameParent}>
      <div className={"flex gap-3 items-center " + className}>
        <div className="lessonTitle">{title} </div>
        {editIsActive && (
          <img src={editImg} className="w-4 h-4 cursor-pointer" alt="" />
        )}
        {isAddLessonBtn && (
          // <Link to={"../new_lesson"}>
          // <div onClick={() => navigate("new_lesson")}>
          <CustomBtn
            type="button"
            title="+ Ավելացնել դասընթաց"
            className="whitespace-nowrap"
          />
          // </div>
          // </Link>
        )}
      </div>
      <div className="underline">
        <div className="purpleUnderline" />
      </div>
    </div>
  );
};
