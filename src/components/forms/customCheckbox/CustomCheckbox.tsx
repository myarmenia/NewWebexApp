import { FC, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./customCheckbox.module.css";
interface CustomCheckboxProps {
  regName?: string;
  label?: string;
  className?: string;
  boxClassName?: string;
}
export const CustomCheckbox: FC<
  CustomCheckboxProps & InputHTMLAttributes<HTMLInputElement>
> = ({ regName, boxClassName = "", className = "", label, ...props }) => {
  const formMethods = useFormContext();
  const register = regName ? formMethods?.register(regName) : null;
  return (
    <div className={"flex gap-2 pl-[1px] " + boxClassName}>
      <input
        type="checkbox"
        {...props}
        className={[styles.myCheckbox, className].join(" ")}
        {...register}
      />
      {label && <span className="text-[10px] text-gray">{label}</span>}
    </div>
  );
};
