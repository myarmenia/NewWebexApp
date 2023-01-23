import React, { ChangeEventHandler, KeyboardEventHandler } from "react";
import { useFormContext } from "react-hook-form";
import { useError } from "../../../hooks";

interface CstmInputProps {
  regName?: string;
  type?: "text" | "number";
  placeholder?: string;
  value?: string | number;
  img?: string;
  className?: string;
  error?: string;
  defaultValue?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const CstmInput: React.FC<CstmInputProps> = ({
  type = "text",
  placeholder = "",
  className = "",
  defaultValue,
  img,
  value,
  regName,
  error,
  onChange,
  onKeyDown,
}) => {
  const formMethods = useFormContext();
  const errorMessage = useError(error, regName, formMethods);
  const register = regName ? formMethods?.register(regName) : null;
  return (
    <div className="flex flex-col relative w-full">
      {img && <img src={img} alt="" />}
      <input
        {...register}
        {...{ type, placeholder, defaultValue, value, onKeyDown, onChange }}
        className={"lessonInp " + className}
      />
      <p className="errorMessage">{errorMessage}</p>
    </div>
  );
};
