import "./customSelect.css";
import React, { SetStateAction, useState } from "react";
import { Options } from "./Options";
import { DefaultOption } from "./DefaultOption";
import { ISelect } from "../../../../models/interfaces";
import { useFormContext } from "react-hook-form";
import { Selects } from "../lessonCntBody/validationSchema";

interface CustomSelectProps {
  select: ISelect;
  className?: string;
  isInput?: boolean;
  setselectVals?: React.Dispatch<SetStateAction<ISelect>>;
  regName?: Selects;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  select,
  className,
  isInput,
  setselectVals,
  regName,
}) => {
  const [state, setState] = useState<boolean>(false);
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex justify-center h-10">
      <div className={`customSelect ${className}`}>
        <DefaultOption setState={setState} state={state} regName={regName} />
        {state && (
          <Options
            select={select}
            setState={setState}
            state={state}
            regName={regName}
            setselectVals={setselectVals}
            isInput={isInput}
          />
        )}
        <p className="errorMessage">
          <>{errors[regName!]?.message}</>
        </p>
      </div>
    </div>
  );
};
