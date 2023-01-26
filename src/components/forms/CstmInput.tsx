import React, { FC, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { useError } from "../../hooks";
import { ErrorMessage } from "../reusable";

interface CstmInputProps {
  regName?: string;
  img?: string;
  className?: string;
  boxClassName?: string;
  error?: string;
  errorClassName?: string;
}

export const CstmInput: FC<
  CstmInputProps & InputHTMLAttributes<HTMLInputElement>
> = ({
  className = "",
  boxClassName = "",
  img,
  regName,
  error,
  errorClassName,
  ...props
}) => {
  const formMethods = useFormContext();
  const errorMessage = useError(regName, formMethods);
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
        {...props}
        className={`lessonInp ${className} ${img ? "!pl-[30px]" : ""}`}
        {...register}
      />
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};
