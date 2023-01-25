import React, { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { useError } from "../../hooks";
import { ErrorMessage } from "../reusable";

interface CstmInputProps {
  regName?: string;
  img?: string;
  className?: string;
  boxClassName?: string;
  error?: string;
}

export const CstmInput: React.FC<
  CstmInputProps & InputHTMLAttributes<HTMLInputElement>
> = ({ className = "", boxClassName = "", img, regName, error, ...props }) => {
  const formMethods = useFormContext();
  const errorMessage = useError(error, regName, formMethods);
  const register = regName ? formMethods?.register(regName) : null;
  return (
    <div className={"flex w-full relative " + boxClassName}>
      {img && (
        <img
          src={img}
          alt=""
          className="absolute -translate-y-1/2 top-1/2 left-2"
        />
      )}
      <input
        className={`lessonInp ${className} ${img ? "!pl-[30px]" : ""}`}
        {...props}
        {...register}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};
