import React from "react";
import "./lessonTitle.css";
import editImg from "../../../images/Teacher/NewLesson/pencil 1.svg";
import CreateGraffic from "../userComponents/CreateGraffic";
import { Link } from "react-router-dom";
import { CustomBtn } from "../lesComponents/customBtn/CustomBtn";

interface LessonTitleProps {
  title: string;
  editIsActive?: boolean;
  isAddLessonBtn?: boolean;
  className?: string;
}

export const LessonTitle: React.FC<LessonTitleProps> = ({
  title,
  editIsActive,
  isAddLessonBtn,
  className,
}) => {
  return (
    <div className="newLessonTitle">
      <div className={"flex gap-3 items-center " + className}>
        <div className="lessonTitle">{title} </div>
        {editIsActive && (
          <img src={editImg} className="w-4 h-4 cursor-pointer" />
        )}
        {isAddLessonBtn && (
          <CustomBtn
            type="button"
            title="+ Ավելացնել դասընթաց"
            className="whitespace-nowrap"
          />
        )}
      </div>
      <div className="underline">
        <div className="purpleUnderline" />
      </div>
    </div>
  );
};
