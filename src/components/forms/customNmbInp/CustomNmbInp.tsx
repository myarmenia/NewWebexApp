import React, {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
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
  // setValue?: Dispatch<SetStateAction<string>>;
  // value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const CustomNmbInp: React.FC<CustomNmbInpProps> = ({
  defaultValue,
  regName,
  error,
  fieldArray,
  // setValue,
  // value,
  onChange,
}) => {
  const methods = useFormContext();
  const {
    register,
    watch,
    formState: { errors },
  } = methods;

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
    methods?.setValue(regName, age);
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
            // value={value}
            // onChange={(e) => setValue?.(e.target.value)}
            onChange={onChange}
          />
        </div>
        <img src={arrow} alt="" className="arrowLeft" onClick={decrease} />
        <img src={arrow} alt="" className="arrowRight" onClick={increase} />
      </div>
      {errorMessage}
    </div>
  );
};
