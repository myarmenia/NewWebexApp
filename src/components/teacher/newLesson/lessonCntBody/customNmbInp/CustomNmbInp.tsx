import React, { useState } from "react";
import "./customNmbInp.css";
import arrow from "../../../../../images/Teacher/NewLesson/Polygon 3.svg";
import { UseFormSetValue } from "react-hook-form";
import { Selects, TeacherSubmitForm } from "../validationSchema";

interface CustomNmbInpProps {
  defaultValue?: number;
  min: number;
  max: number;
  lessonsCount?: number;
  setLessonCount?: React.Dispatch<React.SetStateAction<number>>;
  register?: {
    name: string;
  };
  setValue?: UseFormSetValue<TeacherSubmitForm>;
  inpNumName?: Selects;
}

export const CustomNmbInp: React.FC<CustomNmbInpProps> = ({
  min,
  max,
  defaultValue,
  lessonsCount,
  setLessonCount,
  register,
  setValue,
  inpNumName,
}) => {
  const [age, setAge] = useState<number>(lessonsCount || defaultValue!);
  const increase = () => {
    // if (age < max) {
    //   if (lessonsCount) {
    //     lessonsCount < max && setLessonCount?.((prev) => prev + 1);
    //   } else {
    //     setAge((prev) => prev + 1);
    //   }
    setAge((prev) => prev + 1);
    inpNumName && setValue?.(inpNumName, age);
    // }
  };
  const decrease = () => {
    // if (age > min) {
    //   if (lessonsCount) {
    //     lessonsCount > min && setLessonCount?.((prev) => prev - 1);
    //   } else {
    //     setAge((prev) => prev - 1);
    //   }
    setAge((prev) => prev - 1);
    inpNumName && setValue?.(inpNumName, age);

    // }
  };

  return (
    <div className="customNmbInp">
      <div className="lessonInp CustomNmbInput">
        {/* <span className="leading-[16.5px] text-[#9C9C9C] text-xs">
          {lessonsCount || age}
        </span> */}
        <input
          type="number"
          // value={lessonsCount || age}
          {...register}
          className="inpNumber"
        />
      </div>
      <img src={arrow} alt="" className="arrowLeft" onClick={decrease} />
      <img src={arrow} alt="" className="arrowRight" onClick={increase} />
    </div>
  );
};
