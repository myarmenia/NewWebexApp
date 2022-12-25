import React from "react";
import "./lessonTitle.css";
import editImg from "../../../assets/teacher_images/newLesson/pencil 1.svg";
import { CustomBtn } from "../../teacherComponents/customBtn/CustomBtn";
import { Link } from "react-router-dom";

interface LessonTitleProps {
  title: string;
  editIsActive?: boolean;
  className?: string;
  classNameParent?: string;
  linkForBtn?: {
    to: string;
    title: string;
  };
}

export const LessonTitle: React.FC<LessonTitleProps> = ({
  title,
  editIsActive,
  className,
  classNameParent,
  linkForBtn,
}) => {
  return (
    <div className={"newLessonTitle " + classNameParent}>
      <div className={"flex gap-3 items-center " + className}>
        <div className="lessonTitle">{title} </div>
        {editIsActive && (
          <img src={editImg} className="w-4 h-4 cursor-pointer" alt="" />
        )}
        {linkForBtn && (
          <Link to={linkForBtn.to}>
            <CustomBtn
              type="button"
              title={linkForBtn.title}
              className="whitespace-nowrap"
            />
          </Link>
        )}
      </div>
      <div className="underline">
        <div className="purpleUnderline" />
      </div>
    </div>
  );
};
