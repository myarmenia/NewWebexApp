import React, { ChangeEventHandler } from "react";
import { useFormContext } from "react-hook-form";
import { useError } from "../../../hooks";
import "./cstmInput.css";

interface CstmInputProps {
  type?: "text" | "number";
  placeholder?: string;
  regName?: string;
  className?: string;
  error?: string;
  defaultValue?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const CstmInput: React.FC<CstmInputProps> = ({
  type = "text",
  placeholder = "",
  className = "",
  defaultValue,
  regName,
  error,
  onChange,
}) => {
  const formMethods = useFormContext();
  const errorMessage = useError(error, regName, formMethods);
  const RealName = regName ? formMethods?.register(regName) : null;
  return (
    <div className="flex flex-col relative w-full">
      <input
        {...RealName}
        {...{ type, placeholder, defaultValue, onChange }}
        className={"lessonInp " + className}
      />
      <p className="errorMessage">{errorMessage}</p>
    </div>
  );
};
