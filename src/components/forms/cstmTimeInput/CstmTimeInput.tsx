import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { generateArray } from "../../../helper";
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

const addZero = <T extends number | string>(i: T) =>
  `${i}`.length < 2 ? `0${i}` : i;

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

  const [show, setShow] = useState<boolean>(false);
  const [value, setTimeValue] = useState<IValue>(
    (Boolean(defaultValue) && {
      hour: defaultValue!.split(".")[0],
      minute: defaultValue!.split(".")[1],
    }) || { hour: "00", minute: "00" }
  );
  
  useEffect(() => {
    regName && formMethods.setValue(regName, `${value.hour}:${value.minute}`);
    setValue?.(`${value.hour} : ${value.minute}`);
  }, [value]);

  return (
    <div className={"flex relative w-fit h-fit " + boxClassName}>
      <div onClick={() => setShow((e) => !e)} className="relative">
        <input
          className={`${className} ${styles.input} timeInp`}
          type="text"
          disabled
          name={register?.name}
        />
        <span className={styles.value}>
          {`${value.hour} : ${value.minute}` || defaultValue}
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
