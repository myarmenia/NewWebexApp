import React, { ChangeEventHandler } from "react";
import { useFormContext } from "react-hook-form";
import { useError } from "../../../hooks";
import "./cstmTextarea.css";

interface CstmTextareaProps {
  regName?: string;
  error?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export const CstmTextarea: React.FC<CstmTextareaProps> = ({
  regName,
  placeholder = "",
  className = "",
  defaultValue,
  error,
  onChange,
}) => {
  const formMethods = useFormContext();
  const errorMessage = useError(error, regName, formMethods);

  return (
    <div className="flex flex-col relative w-full">
      <textarea
        wrap="off"
        className={`${className} scrollbar_hidden lessonTextarea lessonInp`}
        {...formMethods?.register(regName!)}
        {...{ defaultValue, onChange, placeholder }}
      />
      <p className="errorMessage">{errorMessage}</p>
    </div>
  );
};
