import React from "react";
import "./cstmInput.css";

interface CstmInputProps {
  type: "text" | "number";
  placeholder: string;
  error?: string;
  register?: {
    name: string;
  };
  className?: string;
}
export const CstmInput: React.FC<CstmInputProps> = ({
  type,
  placeholder,
  register,
  error,
  className,
}) => {
  return (
    <div className="flex flex-col relative">
      <input
        className={"lessonInp " + className}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      <p className="errorMessage">{error}</p>
    </div>
  );
};
