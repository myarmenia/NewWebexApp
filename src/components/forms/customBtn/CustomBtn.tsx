import React from "react";
import "./customBtn.css";

interface SubmitBtnProps {
  title: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

export const CustomBtn: React.FC<SubmitBtnProps> = ({
  title,
  type = "button",
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`addLessonBtn ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
