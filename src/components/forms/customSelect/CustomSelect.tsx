import "./customSelect.css";
import React, { FC, useMemo, useState } from "react";
import { Options } from "./Options";
import { DefaultOption } from "./DefaultOption";
import { useFormContext } from "react-hook-form";
import { ICustomSelect } from "../../../models/interfaces";

type CustomSelectProps = Pick<
  ICustomSelect,
  "options" | "className" | "regName" | "placeholder" | "isMutable" | "error"
>;

export const CustomSelect: FC<CustomSelectProps> = ({
  options,
  className,
  isMutable,
  regName,
  error,
  placeholder,
}) => {
  const [state, setState] = useState<boolean>(false);
  const formMethods = useFormContext();
  const toggleOptions = () => {
    setState((prev) => !prev);
  };
  const errorMessage = useMemo(() => {
    if (error) {
      return error;
    } else if (regName) {
      return formMethods?.formState?.errors[regName]?.message!.toString();
    } else {
      return;
    }
  }, [error, formMethods?.formState?.errors]);
  return (
    <div className="flex justify-center h-10">
      <div className={`customSelect ${className}`}>
        <DefaultOption {...{ toggleOptions, regName, placeholder }} />
        {state && (
          <Options {...{ options, toggleOptions, regName, isMutable }} />
        )}
        <p className="errorMessage">{errorMessage}</p>
      </div>
    </div>
  );
};