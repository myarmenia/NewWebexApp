import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";
import { useFormContext } from "react-hook-form";
import { thisDate } from "../../../helper";
import { useError, useFormRegister } from "../../../hooks";
import { MyInputProps } from "../../../models/forms";
import { ErrorMessage } from "../../reusable";
import styles from "./cstmDateInput.module.css";

interface CstmDateInputProps extends MyInputProps {
  defaultValue?: `${number}.${number}.${number}`;
}

export const CstmDateInput: FC<
  CstmDateInputProps & Omit<InputHTMLAttributes<HTMLInputElement>, "type">
> = ({
  className = "",
  boxClassName = "",
  defaultValue = thisDate,
  regName,
  error,
  errorClassName,
  onChange,
  ...props
}) => {
  const formMethods = useFormContext();
  const errorMessage = useError(regName, error);
  const [value, setValue] = useState<string>("");
  const register = useFormRegister(regName);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    regName && formMethods.setValue(regName, e.target.value);
    setValue(e.target.value.split("-").reverse().join("."));
  };
  return (
    <div className={"flex relative w-fit " + boxClassName}>
      <input
        {...props}
        className={`${className} ${styles.input} after:content-[${value}]`}
        type="date"
        onChange={changeHandler}
        name={register?.name}
      />
      <span className={styles.value}>{value || defaultValue}</span>
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};
