import React from "react";
import "./customBtn.css";

interface SubmitBtnProps {
  title: string;
  type: "button" | "submit" | "reset";
  className?: string;
}

export const CustomBtn: React.FC<SubmitBtnProps> = ({
  title,
  type,
  className,
}) => {
  return (
    <button type={type} className={`addLessonBtn ${className}`}>
      {title}
    </button>
  );
};
