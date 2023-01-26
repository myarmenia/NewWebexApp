import { FC, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./customRadio.module.css";
interface CustomRadioProps {
  regName?: string;
  label?: string;
  className?: string;
  boxClassName?: string;
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
  ...props
}) => {
  const formMethods = useFormContext();
  const register = regName ? formMethods?.register(regName) : null;
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
    </div>
  );
};
