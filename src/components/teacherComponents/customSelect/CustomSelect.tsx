import "./customSelect.css";
import React, { FC, useState } from "react";
import { Options } from "./Options";
import { DefaultOption } from "./DefaultOption";
import { useFormContext } from "react-hook-form";
import { ICustomSelect } from "../../../models/interfaces";

type CustomSelectProps = Pick<
  ICustomSelect,
  "options" | "className" | "regName" | "placeholder" | "isMutable"
>;

export const CustomSelect: FC<CustomSelectProps> = ({
  options,
  className,
  isMutable,
  regName,
  placeholder,
}) => {
  const [state, setState] = useState<boolean>(false);
  const formMethods = useFormContext();
  const toggleOptions = () => {
    setState((prev) => !prev);
  };
  return (
    <div className="flex justify-center h-10">
      <div className={`customSelect ${className}`}>
        <DefaultOption {...{ toggleOptions, regName, placeholder }} />
        {state && (
          <Options {...{ options, toggleOptions, regName, isMutable }} />
        )}
        {regName && (
          <p className="errorMessage">
            {formMethods.formState.errors[regName]?.message?.toString()}
          </p>
        )}
      </div>
    </div>
  );
};
