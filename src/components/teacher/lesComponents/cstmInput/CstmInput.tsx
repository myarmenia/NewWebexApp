import React, { ReactNode, useCallback, useEffect } from "react";
import "./cstmInput.css";
import { useFormContext } from "react-hook-form";

interface CstmInputProps {
  type: "text" | "number";
  placeholder: string;
  regName?: string;
  className?: string;
  error?: string;
  defaultValue?: string | number;
}
export const CstmInput: React.FC<CstmInputProps> = ({
  type,
  placeholder,
  regName,
  className,
  error,
  defaultValue,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const RealName = regName ? { ...register(regName) } : null;

  const errorMessage = useCallback(() => {
    if (error) {
      return <p className="errorMessage">{error}</p>;
    } else if (regName) {
      return (
        <p className="errorMessage">{errors[regName]?.message!.toString()}</p>
      );
    } else {
      return;
    }
  }, [error, errors]);
  return (
    <div className="flex flex-col relative w-full">
      <input
        {...RealName}
        className={"lessonInp " + className}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {errorMessage()}
    </div>
  );
};
