import React, { useState } from "react";
import "./cstmInput.css";
import { useFormContext, FieldArrayMethodProps } from "react-hook-form";
import { Selects } from "../validationSchema";

interface CstmInputProps {
  type: "text" | "number";
  placeholder: string;
  regName?: Selects;
  className?: string;
}
export const CstmInput: React.FC<CstmInputProps> = ({
  type,
  placeholder,
  regName,
  className,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col relative">
      <input
        {...register(regName!)}
        className={"lessonInp " + className}
        type={type}
        placeholder={placeholder}
      />
      <p className="errorMessage">
        <>{errors[regName!]?.message}</>
      </p>
    </div>
  );
};
