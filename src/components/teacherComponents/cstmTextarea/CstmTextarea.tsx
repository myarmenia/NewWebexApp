import React, { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import "./cstmTextarea.css";

interface CstmTextareaProps {
  regName?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  error?: string;
}

export const CstmTextarea: React.FC<CstmTextareaProps> = ({
  regName,
  placeholder,
  className,
  defaultValue,
  error,
}) => {
  const formMethods = useFormContext();
  const name = regName ? { ...formMethods?.register(regName) } : null;
  const errorMessage = useMemo(() => {
    if (error) {
      return error;
    } else if (regName) {
      return formMethods?.formState?.errors[regName]?.message!.toString();
    } else {
      return;
    }
  }, [error, formMethods?.formState?.errors]);
  return (
    <div className="flex flex-col relative w-full">
      <textarea
        wrap="off"
        className={`${className} scrollbar_hidden lessonTextarea lessonInp`}
        placeholder={placeholder}
        {...name}
        defaultValue={defaultValue}
      />{" "}
      <p className="errorMessage">{errorMessage}</p>
    </div>
  );
};
