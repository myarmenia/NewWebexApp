import React from "react";
import "./cstmInput.css";
import { useFormContext } from "react-hook-form";
import { Selects } from "../validationSchema";

interface CstmInputProps {
  type: "text" | "number";
  placeholder: string;
  regName: Selects;
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
        className={"lessonInp " + className}
        type={type}
        placeholder={placeholder}
        {...register(regName)}
      />
      <p className="errorMessage">
        <>{errors[regName]?.message}</>
      </p>
    </div>
  );
};
