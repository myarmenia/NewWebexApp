import { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";
import styles from "./customBtn.module.css";

interface SubmitBtnProps {
  title: string;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const CustomBtn: FC<
  SubmitBtnProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ title, type = "button", className = "", ...props }) => {
  return (
    <button
      className={`${styles.addLessonBtn} ${className}`}
      {...{ type }}
      {...props}
    >
      {title}
    </button>
  );
};
