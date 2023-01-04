import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState
} from "react";
import {
  UseFieldArrayReturn,
  useFormContext
} from "react-hook-form";
import arrow from "../../../assets/teacher_images/newLesson/Polygon 3.svg";
import { TeacherSubmitForm } from "../../../pages/teacher_page/lessons/newLesson/lessonCntBody/validationSchema";
import "./customNmbInp.css";

interface CustomNmbInpProps {
  defaultValue: number;
  regName?: string;
  error?: string;
  fieldArray?: UseFieldArrayReturn<TeacherSubmitForm, "stages", "id">;
  setValue?: Dispatch<SetStateAction<number>>;
  value?: number;
}

export const CustomNmbInp: React.FC<CustomNmbInpProps> = ({
  defaultValue,
  regName,
  error,
  fieldArray,
  setValue,
  value,
}) => {
  const methods = useFormContext();
  const registerWithName = regName && methods.register(regName);

  const [age, setAge] = useState<number>(defaultValue);
  const increase = () => {
    if (age >= 1) {
      setAge((prev) => prev + 1);
      fieldArray?.append?.({
        stage: methods?.watch("stagesCount"),
        count: 2,
        stageDescription: "",
      });
    }
  };
  const decrease = () => {
    if (age > 1) {
      setAge((prev) => prev - 1);
      fieldArray?.remove?.(methods?.watch("stagesCount") - 1);
    }
  };
  useEffect(() => {
    setValue?.(age);
    regName && methods?.setValue(regName, age);
  }, [age]);

  const errorMessage = useMemo(() => {
    return (
      error ||
      (regName && methods?.formState?.errors[regName]?.message!.toString())
    );
  }, [error, methods?.formState?.errors]);
  return (
    <div className="relative">
      <div className="customNmbInp">
        <div className="lessonInp CustomNmbInput">
          <input
            type="number"
            className="inpNumber"
            disabled
            defaultValue={age}
            {...registerWithName}
            value={value}
            // onChange={(e) => setValue?.(e.target.value)}
          />
        </div>
        <img src={arrow} alt="" className="arrowLeft" onClick={decrease} />
        <img src={arrow} alt="" className="arrowRight" onClick={increase} />
      </div>
      <p className="errorMessage">{errorMessage}</p>
    </div>
  );
};
