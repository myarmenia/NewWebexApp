import { FC, InputHTMLAttributes, ReactNode } from "react";
import { useError, useFormRegister } from "../../hooks";
import { MyInputProps } from "../../models/forms";
import { ErrorMessage } from "../reusable";

interface CstmInputProps extends MyInputProps {}

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
  const errorMessage = useError(regName, error);
  const register = useFormRegister(regName);
  return (
    <div className={"flex w-full relative " + boxClassName}>
      {img && (
        <img
          src={img}
          alt=""
          className="absolute -translate-y-1/2 top-1/2 left-4"
        />
      )}
      <input
        {...props}
        className={`lessonInp ${className} ${img ? "!pl-[40px]" : ""}`}
        {...register}
      />
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};


