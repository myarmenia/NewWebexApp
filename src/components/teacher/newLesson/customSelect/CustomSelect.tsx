import "./customSelect.css";
import React, { SetStateAction, useState } from "react";
import { Options } from "./Options";
import { DefaultOption } from "./DefaultOption";
import { ISelect } from "../../../../models/interfaces";
import { UseFormSetValue } from "react-hook-form";
import { Selects, TeacherSubmitForm } from "../lessonCntBody/validationSchema";

interface CustomSelectProps {
  select: ISelect;
  className?: string;
  isInput?: boolean;
  setselectVals?: React.Dispatch<SetStateAction<ISelect>>;
  setValue?: UseFormSetValue<TeacherSubmitForm>;
  register?: {
    name: string;
  };
  error?: string;
  selectName?: Selects;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  select,
  className,
  isInput,
  setselectVals,
  setValue,
  register,
  error,
  selectName,
}) => {
  const [state, setState] = useState<boolean>(false);
  return (
    <div className="flex justify-center h-10">
      <div className={`customSelect ${className}`}>
        <DefaultOption setState={setState} state={state} register={register} />

        {state && (
          <Options
            select={select}
            setState={setState}
            state={state}
            selectName={selectName}
            setValue={setValue}
            setselectVals={setselectVals}
            isInput={isInput}
          />
        )}
        <p className="errorMessage">{error && error}</p>
      </div>
    </div>
  );
};
