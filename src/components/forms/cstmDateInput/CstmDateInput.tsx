import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { useFormContext } from "react-hook-form";
import { thisDate } from "../../../helper";
import { useError, useFormRegister } from "../../../hooks";
import { MyInputProps } from "../../../models/forms";
import { ErrorMessage } from "../../reusable";
import styles from "./cstmDateInput.module.css";

interface CstmDateInputProps extends MyInputProps {
  defaultValue?: `${number}.${number}.${number}`;
}
interface IValue {
  value: string;
  curentValue: string;
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
  const register = useFormRegister(regName);

  const [date, setDate] = useState<IValue>({ value: "", curentValue: "" });
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    regName && formMethods.setValue(regName, e.target.value);
    setDate({
      value: e.target.value,
      curentValue: e.target.value.split("-").reverse().join("."),
    });
  };

  useEffect(() => {
    if (date.value !== "" && formMethods.formState.isSubmitted)
      formMethods.trigger(regName);
  }, [date]);

  return (
    <div className={"flex relative w-fit " + boxClassName}>
      <input
        {...props}
        className={`${className} ${styles.input}`}
        type="date"
        onChange={changeHandler}
        value={date.value}
        name={register?.name}
      />
      <span className={styles.value}>{date.curentValue || defaultValue}</span>
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};
