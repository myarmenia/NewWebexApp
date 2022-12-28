import React, { useEffect, useMemo, useState } from "react";
import "./customNmbInp.css";
import arrow from "../../../assets/teacher_images/newLesson/Polygon 3.svg";
import {
  FieldArrayMethodProps,
  UseFieldArrayReturn,
  useFormContext,
} from "react-hook-form";
import { TeacherSubmitForm } from "../../../pages/teacher_page/lessons/newLesson/lessonCntBody/validationSchema";

interface CustomNmbInpProps {
  defaultValue: number;
  regName: string;
  error?: string;
  fieldArray?: UseFieldArrayReturn<TeacherSubmitForm, "stages", "id">;
}

export const CustomNmbInp: React.FC<CustomNmbInpProps> = ({
  defaultValue,
  regName,
  error,
  fieldArray,
}) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const [age, setAge] = useState<number>(defaultValue);
  const increase = () => {
    if (age >= 1) {
      setAge((prev) => prev + 1);
      fieldArray?.append?.({
        stage: watch("stagesCount"),
        count: 2,
        stageDescription: "",
      });
    }
  };
  const decrease = () => {
    if (age > 1) {
      setAge((prev) => prev - 1);
      fieldArray?.remove?.(watch("stagesCount") - 1);
    }
  };
  useEffect(() => {
    setValue(regName, age);
  }, [age]);

  const errorMessage = useMemo(() => {
    if (error) {
      return <p className="errorMessage">{error}</p>;
    } else if (regName) {
      return (
        <p className="errorMessage">{errors[regName]?.message!.toString()}</p>
      );
    } else {
      return;
    }
  }, [error, errors]);
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
      {errorMessage}
    </div>
  );
};
