import { FC, MouseEventHandler } from "react";
import styles from "./customBtn.module.css";

interface SubmitBtnProps {
  title: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const CustomBtn: FC<SubmitBtnProps> = ({
  title,
  type = "button",
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`${styles.addLessonBtn} ${className}`}
      {...{ type, onClick }}
    >
      {title}
    </button>
  );
};
