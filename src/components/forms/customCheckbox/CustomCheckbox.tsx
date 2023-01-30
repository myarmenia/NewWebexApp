import { FC, InputHTMLAttributes } from "react";
import { useError, useFormRegister } from "../../../hooks";
import { MyInputProps } from "../../../models/forms";
import { ErrorMessage } from "../../reusable";
import styles from "./customCheckbox.module.css";

interface CustomCheckboxProps extends MyInputProps {
  label?: string;
}

export const CustomCheckbox: FC<
  CustomCheckboxProps & InputHTMLAttributes<HTMLInputElement>
> = ({
  regName,
  boxClassName = "",
  className = "",
  label,
  error,
  errorClassName,
  ...props
}) => {
  const errorMessage = useError(regName, error);
  const register = useFormRegister(regName);
  return (
    <div className={"flex gap-2 pl-[1px] relative " + boxClassName}>
      <input
        {...props}
        type="checkbox"
        className={[styles.myCheckbox, className].join(" ")}
        {...register}
      />
      {label && <span className="text-[10px] text-gray">{label}</span>}
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};
