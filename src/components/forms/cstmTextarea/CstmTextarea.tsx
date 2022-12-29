import React, { Dispatch, SetStateAction, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import "./cstmTextarea.css";

interface CstmTextareaProps {
  regName?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  value?: string;
  error?: string;
}

export const CstmTextarea: React.FC<CstmTextareaProps> = ({
  regName,
  placeholder,
  className,
  defaultValue,
  setValue,
  value,
  error,
}) => {
  const formMethods = useFormContext();
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
        {...formMethods?.register(regName!)}
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => setValue?.(e.target.value)}
      />
      <p className="errorMessage">{errorMessage}</p>
    </div>
  );
};
