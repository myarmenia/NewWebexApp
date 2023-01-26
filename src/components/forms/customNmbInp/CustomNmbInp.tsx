import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UseFieldArrayReturn, useFormContext } from "react-hook-form";
import arrow from "../../../assets/teacher_images/newLesson/Polygon 3.svg";
import { useError } from "../../../hooks";
import { TeacherSubmitForm } from "../../../validations/newLesson_schema";
import { ErrorMessage } from "../../reusable";
import styles from "./customNmbInp.module.css";

interface CustomNmbInpProps {
  defaultValue?: number;
  regName?: string;
  error?: string;
  fieldArray?: UseFieldArrayReturn<TeacherSubmitForm, "stages", "id">;
  setValue?: Dispatch<SetStateAction<number>>;
  value?: number;
}

export const CustomNmbInp: React.FC<CustomNmbInpProps> = ({
  defaultValue = 1,
  regName,
  error,
  fieldArray,
  setValue,
  value,
}) => {
  const formMethods = useFormContext();
  const register = regName ? formMethods?.register(regName) : null;

  const [age, setAge] = useState<number>(defaultValue);
  const increase = () => {
    if (age >= 1) {
      setAge((prev) => prev + 1);
      fieldArray?.append?.({
        stage: formMethods?.watch("stagesCount"),
        count: 2,
        stageDescription: "",
      });
    }
  };
  const decrease = () => {
    if (age > 1) {
      setAge((prev) => prev - 1);
      fieldArray?.remove?.(formMethods?.watch("stagesCount") - 1);
    }
  };
  useEffect(() => {
    setValue?.(age);
    regName && formMethods?.setValue(regName, age);
  }, [age]);

  const errorMessage = useError(error, regName, formMethods);

  return (
    <div className="relative">
      <div className={styles.mycontainer}>
        <div className={`lessonInp ${styles.input_box}`}>
          <input
            type="number"
            disabled
            defaultValue={age}
            value={value}
            {...register}
          />
        </div>
        <img
          src={arrow}
          alt=""
          className={styles.left_arrow}
          onClick={decrease}
        />
        <img
          src={arrow}
          alt=""
          className={styles.right_arrow}
          onClick={increase}
        />
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};
