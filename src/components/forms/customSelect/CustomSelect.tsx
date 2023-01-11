import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useError } from "../../../hooks";
import { ICustomSelect } from "../../../models/interfaces";
import "./customSelect.css";
import { DefaultOption } from "./DefaultOption";
import { Options } from "./Options";

interface CustomSelectProps
  extends Pick<
    ICustomSelect,
    | "options"
    | "className"
    | "regName"
    | "placeholder"
    | "isMutable"
    | "error"
    | "setValue"
    | "value"
  > {}

export const CustomSelect: FC<CustomSelectProps> = ({
  options,
  className = "",
  isMutable,
  regName,
  error,
  placeholder,
  // if you want to make select work without react-hook-form you need to pass value and setValue useState
  setValue,
  value,
}) => {
  const [state, setState] = useState<boolean>(false);
  const formMethods = useFormContext();
  const toggleOptions = () => {
    setState((prev) => !prev);
  };
  const errorMessage = useError(error, regName, formMethods);
  return (
    <div className="flex justify-center h-10">
      <div className={`customSelect ${className}`}>
        <DefaultOption
          {...{ toggleOptions, regName, placeholder, setValue, value }}
        />
        {state && (
          <Options
            {...{ options, toggleOptions, regName, isMutable, setValue }}
          />
        )}
        <p className="errorMessage">{errorMessage}</p>
      </div>
    </div>
  );
};
