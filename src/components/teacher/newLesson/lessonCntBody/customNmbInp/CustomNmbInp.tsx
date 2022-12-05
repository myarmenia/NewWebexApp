import React, { useEffect, useState } from "react";
import "./customNmbInp.css";
import arrow from "../../../../../images/Teacher/NewLesson/Polygon 3.svg";
import { FieldArrayMethodProps, useFormContext } from "react-hook-form";

interface CustomNmbInpProps {
  defaultValue: number;
  regName: string;
  append?: (
    value:
      | {
          stageDescription: string;
          count: number;
          stage: number;
        }
      | {
          stageDescription: string;
          count: number;
          stage: number;
        }[],
    options?: FieldArrayMethodProps | undefined
  ) => void;
  remove?: (index?: number | number[] | undefined) => void;
}

export const CustomNmbInp: React.FC<CustomNmbInpProps> = ({
  defaultValue,
  regName,
  append,
  remove,
}) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const [age, setAge] = useState<number>(defaultValue);
  const increase = () => {
    if (age > 1) {
      setAge((prev) => prev + 1);
      append?.({
        stage: watch("stagesCount"),
        count: 2,
        stageDescription: "",
      });
    }
  };
  const decrease = () => {
    if (age > 1) {
      setAge((prev) => prev - 1);
      remove?.(watch("stagesCount") - 1);
    }
  };
  useEffect(() => {
    setValue(regName, age);
  }, [age]);

  return (
    <div className="relative">
      <div className="customNmbInp">
        <div className="lessonInp CustomNmbInput">
          <input
            type="number"
            className="inpNumber"
            disabled
            defaultValue={age}
            {...register(regName)}
          />
        </div>
        <img src={arrow} alt="" className="arrowLeft" onClick={decrease} />
        <img src={arrow} alt="" className="arrowRight" onClick={increase} />
      </div>
      <p className="errorMessage">
        <>{errors[regName]?.message}</>
      </p>
    </div>
  );
};
