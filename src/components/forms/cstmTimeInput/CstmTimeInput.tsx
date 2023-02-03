import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { addZero, generateArray } from "../../../helper";
import { useError, useFormRegister } from "../../../hooks";
import { MyInputProps } from "../../../models/forms";
import { ErrorMessage } from "../../reusable";
import styles from "./cstmTimeInput.module.css";

interface CstmTimeInputProps extends MyInputProps {
  defaultValue?: `${number}.${number}`;
  setValue?: Dispatch<SetStateAction<string>>;
}
interface IValue {
  hour: number | string;
  minute: number | string;
}

export const CstmTimeInput: FC<CstmTimeInputProps> = ({
  className = "",
  boxClassName = "",
  defaultValue,
  regName,
  error,
  errorClassName,
  setValue,
}) => {
  const formMethods = useFormContext();
  const errorMessage = useError(regName, error);
  const register = useFormRegister(regName);

  const defValue: IValue = (Boolean(defaultValue) && {
    hour: defaultValue!.split(".")[0],
    minute: defaultValue!.split(".")[1],
  }) || { hour: "00", minute: "00" };

  const [show, setShow] = useState<boolean>(false);
  const [value, setTimeValue] = useState<IValue>(defValue);

  useEffect(() => {
    regName && formMethods.setValue(regName, `${value.hour}:${value.minute}`);
    setValue?.(`${value.hour} : ${value.minute}`);

    if (value !== defValue) {
      formMethods.trigger(regName);
    }
  }, [value]);

  return (
    <div className={"flex relative w-fit h-fit " + boxClassName}>
      <div onClick={() => setShow((e) => !e)} className="relative">
        <input
          className={`${className} ${styles.input} timeInp`}
          type="text"
          disabled
          value={defaultValue || `${value.hour}:${value.minute}`}
          name={register?.name}
        />
        <span className={styles.value}>
          {defaultValue || `${value.hour} : ${value.minute}`}
        </span>
      </div>

      {show && (
        <>
          <div className={styles.numbers}>
            <div className={styles.hours}>
              {generateArray(25, {}).map((_, i) => {
                return (
                  <NumberBox
                    key={i}
                    onCLick={() => {
                      setTimeValue((prev) => ({
                        ...prev,
                        hour: addZero(i),
                      }));
                    }}
                    i={i}
                  />
                );
              })}
            </div>
            <div className={styles.minutes}>
              {generateArray(61, {}).map((_, i) => {
                return (
                  <NumberBox
                    key={i}
                    onCLick={() => {
                      setTimeValue((prev) => ({
                        ...prev,
                        minute: addZero(i),
                      }));
                    }}
                    i={i}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.backDiv} onClick={() => setShow((e) => !e)} />
        </>
      )}
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};

// ======================================================================

interface NumberBoxProps {
  onCLick: () => void;
  i: string | number;
}

const NumberBox: FC<NumberBoxProps> = ({ onCLick, i }) => {
  return (
    <div className={styles.number_box} key={i} onClick={onCLick}>
      <span className="text-white text-xl">{i}</span>
    </div>
  );
};
