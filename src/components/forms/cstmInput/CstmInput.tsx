import React, {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";
import "./cstmInput.css";
import { useFormContext } from "react-hook-form";

interface CstmInputProps {
  type: "text" | "number";
  placeholder: string;
  regName?: string;
  className?: string;
  error?: string;
  defaultValue?: string | number;
  // setValue?: Dispatch<SetStateAction<string>>;
  // value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const CstmInput: React.FC<CstmInputProps> = ({
  type,
  placeholder,
  regName,
  className,
  error,
  defaultValue,
  // setValue,
  // value,
  onChange,
}) => {
  const formMethods = useFormContext();
  const RealName = regName ? formMethods?.register(regName) : null;

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
      <input
        {...RealName}
        className={"lessonInp " + className}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        // value={value}
        // onChange={(e) => setValue?.(e.target.value)}
        onChange={onChange}
      />
      <p className="errorMessage">{errorMessage}</p>
    </div>
  );
};
