import React from "react";

interface LessonTitleProps {
  title: string;
}

export const LessonTitle: React.FC<LessonTitleProps> = ({ title }) => {
  return <div className="text-[#6B6B6B] text-base mb-3">{title}</div>;
};
