import { FC } from "react";
import editImg from "../../../../../../assets/teacher_images/userLessons/editGray.svg";
import styles from "./lesPTitle.module.css";

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
    <div className={styles.box + className?.cont}>
      <h5 className={styles.title + className?.title}>{title}</h5>
      <div className={styles.edit_box}>
        <span className="text-xs text-gray">Խմբագրել</span>
        <img src={editImg} alt="" />
      </div>
    </div>
  );
};
