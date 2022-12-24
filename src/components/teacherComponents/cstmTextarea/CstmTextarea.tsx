import React from "react";
import { useFormContext } from "react-hook-form";
import "./cstmTextarea.css";

interface CstmTextareaProps {
  regName?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
}

export const CstmTextarea: React.FC<CstmTextareaProps> = ({
  regName,
  placeholder,
  className,
  defaultValue,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const name = regName ? { ...register(regName) } : null;

  return (
    <div className="flex flex-col relative w-full">
      <textarea
        wrap="off"
        className={`${className} scrollbar_hidden lessonTextarea lessonInp`}
        placeholder={placeholder}
        {...name}
        defaultValue={defaultValue}
      />
      <p className="errorMessage">{errors[regName!]?.message?.toString()}</p>
    </div>
  );
};
