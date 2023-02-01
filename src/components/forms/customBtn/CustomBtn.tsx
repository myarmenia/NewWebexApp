import { ButtonHTMLAttributes, FC } from "react";
import styles from "./customBtn.module.css";

interface ButtonProps {
  title: string;
  className?: "gray" | string; // 'gray' className applies gray background to button
}

export const CustomBtn: FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ title, type = "button", className = "", ...props }) => {
  return (
    <button
      {...props}
      className={[
        styles.button,
        className,
        className === "gray" ? styles.grayBtn : "",
      ].join(" ")}
      {...{ type }}
    >
      {title}
    </button>
  );
};
