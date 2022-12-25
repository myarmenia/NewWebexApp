import React, { useMemo } from "react";
import "./cstmInput.css";
import { useFormContext } from "react-hook-form";

interface CstmInputProps {
  type: "text" | "number";
  placeholder: string;
  regName?: string;
  className?: string;
  error?: string;
  defaultValue?: string | number;
}
export const CstmInput: React.FC<CstmInputProps> = ({
  type,
  placeholder,
  regName,
  className,
  error,
  defaultValue,
}) => {
  const formMethods = useFormContext();
  const RealName = regName ? formMethods?.register(regName) : null;

  const errorMessage = useMemo(() => {
    if (error) {
      return <p className="errorMessage">{error}</p>;
    } else if (regName) {
      return (
        <p className="errorMessage">
          {formMethods?.formState?.errors[regName]?.message!.toString()}
        </p>
      );
    } else {
      return;
    }
  }, [error, formMethods?.formState?.errors]);
  return (
    <div className="flex flex-col relative w-full">
      <input
        {...RealName}
        className={"lessonInp " + className}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {errorMessage}
    </div>
  );
};
