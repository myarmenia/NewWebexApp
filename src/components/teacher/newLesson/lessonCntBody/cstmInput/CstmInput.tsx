import React from "react";
import "./cstmInput.css";
import { useFormContext } from "react-hook-form";

interface CstmInputProps {
  type: "text" | "number";
  placeholder: string;
  regName?: string;
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
