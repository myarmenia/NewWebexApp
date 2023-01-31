import { FC } from "react";
import { Link } from "react-router-dom";
import editImg from "../../../assets/teacher_images/newLesson/pencil 1.svg";
import { CustomBtn } from "../../forms";
import styles from "./lessonTitle.module.css";

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
    <div className={[styles.newLessonTitle, classNameParent].join(" ")}>
      <div className={"flex gap-3 items-center " + className}>
        <div className={styles.lessonTitle}>{title} </div>
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
      <div className={styles.underline}>
        <div className={styles.purpleUnderline} />
      </div>
    </div>
  );
};
