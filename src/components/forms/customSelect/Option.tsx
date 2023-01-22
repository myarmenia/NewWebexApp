import { FC } from "react";
import styles from "./customSelect.module.css";
import { useFormContext } from "react-hook-form";
import trashbinImg from "../../../assets/teacher_images/exam/delete.svg";
import { useSelectContext } from "./CustomSelect";

interface OptionProps {
  optionId: number;
  option: string;
}

export const Option: FC<OptionProps> = ({ option, optionId }) => {
  const formMethods = useFormContext();
  const { toggleOptions, regName, removeOption, setValue, isMutable } =
    useSelectContext();
  return (
    <div className={styles.optionBox}>
      <div
        className={styles.option}
        onClick={() => {
          setValue?.(option);
          regName &&
            formMethods?.setValue(regName, option, { shouldValidate: true });
          toggleOptions();
        }}
      >
        {option}
      </div>
      {isMutable && (
        <img
          className="py-3 px-4"
          src={trashbinImg}
          onClick={() => removeOption?.(optionId)}
          alt=""
        />
      )}
    </div>
  );
};
