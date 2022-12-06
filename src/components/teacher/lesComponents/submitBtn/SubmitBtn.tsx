import React from "react";
import "./submitBtn.css";

interface SubmitBtnProps {
  title: string;
}

export const SubmitBtn: React.FC<SubmitBtnProps> = ({ title }) => {
  return (
    <button type="submit" className="addLessonBtn ">
      {title}
    </button>
  );
};
