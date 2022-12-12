import React from "react";
import { useFormContext } from "react-hook-form";
import "./cstmTextarea.css";

interface CstmTextareaProps {
  regName?: string;
  placeholder?: string;
  className?: string;
  value?: string;
}

export const CstmTextarea: React.FC<CstmTextareaProps> = ({
  regName,
  placeholder,
  className,
  value,
}) => {
  const { register } = useFormContext();
  const name = regName ? { ...register(regName) } : null;
  return (
    <textarea
      className={`${className} lessonTextarea lessonInp`}
      placeholder={placeholder}
      {...name}
      defaultValue={value}
    ></textarea>
  );
};
