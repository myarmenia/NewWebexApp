import React from "react";
import "./differentCourses.css";
import { CustomNmbInp } from "../customNmbInp/CustomNmbInp";

interface DifferentCoursesProps {
  lessonsCount: number;
}

export const DifferentCourses: React.FC<DifferentCoursesProps> = ({
  lessonsCount,
}) => {
  return (
    <div className="differentCourses">
      {Array.from({ length: lessonsCount }).map((el, index) => {
        return (
          <div className="flex flex-col gap-1" key={index}>
            <span className="text-[#6B6B6B] text-[10px]">Փուլ {index + 1}</span>
            <CustomNmbInp min={1} max={100} defaultValue={12} />
          </div>
        );
      })}
    </div>
  );
};
