import { FC, InputHTMLAttributes } from "react";
import { useError, useFormRegister } from "../../../hooks";
import { MyInputProps } from "../../../models/forms";
import { ErrorMessage } from "../../reusable";
import styles from "./customRadio.module.css";

interface CustomRadioProps extends MyInputProps {
  label?: string;
  labelClassName?: string;
}

export const CustomRadio: FC<
  CustomRadioProps & InputHTMLAttributes<HTMLInputElement>
> = ({
  regName,
  boxClassName = "",
  labelClassName = "",
  className = "",
  label,
  error,
  errorClassName,
  ...props
}) => {
  const errorMessage = useError(regName, error);
  const register = useFormRegister(regName);
  return (
    <div className={[styles.box, boxClassName].join(" ")}>
      <input
        {...props}
        type="radio"
        className={[styles.myRadio, className].join(" ")}
        {...register}
      />
      {label && (
        <span className={[styles.span, labelClassName].join(" ")}>{label}</span>
      )}
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};
