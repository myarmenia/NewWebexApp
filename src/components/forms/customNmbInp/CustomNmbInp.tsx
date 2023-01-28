import {
  Dispatch,
  FC,
  InputHTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useFormContext } from "react-hook-form";
import arrow from "../../../assets/teacher_images/newLesson/Polygon 3.svg";
import { useError } from "../../../hooks";
import { ErrorMessage } from "../../reusable";
import styles from "./customNmbInp.module.css";

interface CustomNmbInpProps {
  regName?: string;
  condition?: boolean;
  minValue?: number;
  maxValue?: number;
  setValue?: Dispatch<SetStateAction<number>>;
  value?: number;
  error?: string;
  errorClassName?: string;
  fnIncrease?: () => void;
  fnDecrease?: () => void;
}

export const CustomNmbInp: FC<
  CustomNmbInpProps &
    Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "defaultValue">
> = ({
  regName,
  condition,
  setValue,
  value,
  error,
  errorClassName,
  fnIncrease,
  fnDecrease,
  minValue,
  maxValue,
  ...props
}) => {
  const formMethods = useFormContext();
  const register = regName ? formMethods?.register(regName) : null;
  const [age, setAge] = useState<number>(value || 1);

  const increase = () => {
    if ((condition ?? true) && (maxValue ? maxValue > age : true)) {
      if (maxValue === age) return;
      setAge((prev) => prev + 1);
      fnIncrease?.();
    }
  };
  const decrease = () => {
    if ((condition ?? true) && (minValue ? minValue < age : true)) {
      if (minValue === age) return;
      setAge((prev) => prev - 1);
      fnDecrease?.();
    }
  };
  useEffect(() => {
    setValue?.(age);
    regName && formMethods.setValue(regName, age);
  }, [age]);
  const errorMessage = useError(regName, formMethods, error);

  return (
    <div className="relative">
      <div className={styles.mycontainer}>
        <div className={`lessonInp ${styles.input_box}`}>
          <input {...props} type="number" disabled value={age} {...register} />
        </div>
        <img
          src={arrow}
          alt=""
          className={styles.left_arrow}
          onClick={decrease}
        />
        <img
          src={arrow}
          alt=""
          className={styles.right_arrow}
          onClick={increase}
        />
      </div>
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};
