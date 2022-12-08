import React from "react";
import "./submitBtn.css";

interface SubmitBtnProps {
  title: string;
  type: "button" | "submit" | "reset";
}

export const SubmitBtn: React.FC<SubmitBtnProps> = ({ title, type }) => {
  return (
    <button type={type} className="addLessonBtn ">
      {title}
    </button>
  );
};
