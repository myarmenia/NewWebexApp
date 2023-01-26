import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";
import { useFormContext } from "react-hook-form";
import { thisDate } from "../../../helper";
import { useError } from "../../../hooks";
import { ErrorMessage } from "../../reusable";
import styles from "./cstmDateInput.module.css";

interface CstmDateInputProps {
  regName?: string;
  boxClassName?: string;
  error?: string;
  defaultValue?: `${number}.${number}.${number}`;
  errorClassName?: string;
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
  const errorMessage = useError(regName, formMethods);
  const [value, setValue] = useState<string>("");
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
      />
      <span className={styles.value}>{value || defaultValue}</span>
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};
