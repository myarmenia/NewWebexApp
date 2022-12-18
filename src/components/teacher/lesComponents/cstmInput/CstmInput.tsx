import React from "react";
import "./cstmInput.css";
import { FieldErrorsImpl, useFormContext } from "react-hook-form";

type MyKey = Partial<
  FieldErrorsImpl<{
    [x: string]: any;
  }>
>;

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
  return (
    <div className="flex flex-col relative w-full">
      <input
        {...RealName}
        className={"lessonInp " + className}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue && defaultValue}
      />
      <p className="errorMessage">
        {error || errors[regName!]?.message?.toString()}
      </p>
    </div>
  );
};
