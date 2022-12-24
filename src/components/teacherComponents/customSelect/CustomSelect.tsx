import "./customSelect.css";
import React, { SetStateAction, useState } from "react";
import { Options } from "./Options";
import { DefaultOption } from "./DefaultOption";
import { useFormContext } from "react-hook-form";

interface CustomSelectProps {
  options: string[];
  className?: string;
  isInput?: boolean;
  setOptions?: React.Dispatch<SetStateAction<string[]>>;
  regName?: string;
  placeholder: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  className,
  isInput,
  setOptions,
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
          <Options
            {...{ options, toggleOptions, regName, setOptions, isInput }}
          />
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
