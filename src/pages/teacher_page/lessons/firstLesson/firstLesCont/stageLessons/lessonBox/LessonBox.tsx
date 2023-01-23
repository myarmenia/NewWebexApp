import React from "react";
import styles from "./lessonBox.module.css";
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
    <div className={styles.box}>
      <p className={styles.number + "textPurple"}>{`Դաս ${lessonNumber}:`}</p>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <span className={styles.homework}>Տնային աշխատանք</span>
      </div>
      <img src={editImg} alt="" className="cursor-pointer" />
    </div>
  );
};
