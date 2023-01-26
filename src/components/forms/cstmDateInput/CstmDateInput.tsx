import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useError } from "../../../hooks";
import { ErrorMessage } from "../../reusable";
import styles from "./cstmDateInput.module.css";

interface CstmDateInputProps {
  regName?: string;
  boxClassName?: string;
  error?: string;
  defaultValue?: `${number}.${number}.${number}`;
}
export const CstmDateInput: FC<
  CstmDateInputProps & InputHTMLAttributes<HTMLInputElement>
> = ({
  className = "",
  boxClassName = "",
  defaultValue = "17.01.2023",
  regName,
  error,
  ...props
}) => {
  const formMethods = useFormContext();
  const errorMessage = useError(regName, formMethods);
  const [value, setValue] = useState<string>("");
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    regName && formMethods.setValue(regName, e.target.value);
    const v = e.target.value.split("-").reverse().join(".");
    setValue(v);
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
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};
