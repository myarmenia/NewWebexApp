import { FC } from "react";
import { Link } from "react-router-dom";
import editImg from "../../../assets/teacher_images/newLesson/pencil 1.svg";
import { CustomBtn } from "../../forms";
import "./lessonTitle.css";

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

export const LessonTitle: FC<LessonTitleProps> = ({
  title,
  editIsActive,
  className = "",
  classNameParent = "",
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
