import React, { ChangeEventHandler, KeyboardEventHandler } from "react";
import { useFormContext } from "react-hook-form";
import { useError } from "../../hooks";

interface CstmInputProps {
  regName?: string;
  type?: "text" | "number";
  placeholder?: string;
  value?: string | number;
  img?: string;
  className?: string;
  boxClassName?: string;
  error?: string;
  defaultValue?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const CstmInput: React.FC<CstmInputProps> = ({
  type = "text",
  placeholder = "",
  className = "",
  boxClassName = "",
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
    <div className={"flex relative w-full " + boxClassName}>
      {img && (
        <img
          src={img}
          alt=""
          className="absolute -translate-y-1/2 top-1/2 left-2"
        />
      )}
      <input
        {...register}
        {...{ type, placeholder, defaultValue, value, onKeyDown, onChange }}
        className={`lessonInp ${className} ${img ? "!pl-[30px]" : ""}`}
      />
      <p className="errorMessage">{errorMessage}</p>
    </div>
  );
};
