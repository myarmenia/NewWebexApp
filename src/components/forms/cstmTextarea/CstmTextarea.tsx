import React, {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";
import { useFormContext } from "react-hook-form";
import "./cstmTextarea.css";

interface CstmTextareaProps {
  regName?: string;
  error?: string;
  placeholder: string;
  className?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export const CstmTextarea: React.FC<CstmTextareaProps> = ({
  regName,
  placeholder,
  className,
  defaultValue,
  error,
  onChange,
}) => {
  const formMethods = useFormContext();
  const errorMessage = useMemo(() => {
    return (
      error ||
      (regName && formMethods?.formState?.errors[regName]?.message!.toString())
    );
  }, [error, formMethods?.formState?.errors]);

  return (
    <div className="flex flex-col relative w-full">
      <textarea
        wrap="off"
        className={`${className} scrollbar_hidden lessonTextarea lessonInp`}
        placeholder={placeholder}
        {...formMethods?.register(regName!)}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      <p className="errorMessage">{errorMessage}</p>
    </div>
  );
};
