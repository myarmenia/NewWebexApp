import React, { useState } from "react";
import "./customNmbInp.css";
import arrow from "../../../../../images/Teacher/NewLesson/Polygon 3.svg";

interface CustomNmbInpProps {
  defaultValue?: number;
  min: number;
  max: number;
  lessonsCount?: number;
  setLessonCount?: React.Dispatch<React.SetStateAction<number>>;
}

export const CustomNmbInp: React.FC<CustomNmbInpProps> = ({
  min,
  max,
  defaultValue,
  lessonsCount,
  setLessonCount,
}) => {
  const [age, setAge] = useState<number>(lessonsCount || defaultValue!);
  const increase = () => {
    if (age < max) {
      if (lessonsCount) {
        lessonsCount < max && setLessonCount?.((prev) => prev + 1);
      } else {
        setAge((prev) => prev + 1);
      }
    }
  };
  const decrease = () => {
    if (age > min) {
      if (lessonsCount) {
        lessonsCount > min && setLessonCount?.((prev) => prev - 1);
      } else {
        setAge((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="customNmbInp">
      <div className="lessonInp CustomNmbInput">
        <span className="leading-[16.5px] text-[#9C9C9C] text-xs">
          {lessonsCount || age}
        </span>
      </div>
      <img src={arrow} alt="" className="arrowLeft" onClick={decrease} />
      <img src={arrow} alt="" className="arrowRight" onClick={increase} />
    </div>
  );
};
