import React from "react";
import "./submitBtn.css";

interface SubmitBtnProps {
  title: string;
  type: "button" | "submit" | "reset";
  className?: string;
}

export const SubmitBtn: React.FC<SubmitBtnProps> = ({
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
