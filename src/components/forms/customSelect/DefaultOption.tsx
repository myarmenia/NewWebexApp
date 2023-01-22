import { FC } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./customSelect.module.css";
import chevDown from "../../../assets/general_images/customSelectArrow.svg";
import { useSelectContext } from "./CustomSelect";

export const DefaultOption: FC = () => {
  const { toggleOptions, regName, placeholder, value } = useSelectContext();
  const formMethods = useFormContext();
  const register = regName && formMethods?.register(regName);
  return (
    <div className={styles.defaultOption} onClick={() => toggleOptions()}>
      <div className="flex text-gray w-full text-xs">
        <input
          {...register}
          type="text"
          {...{ placeholder }}
          disabled
          className={styles.title}
          value={value}
        />
      </div>
      <img src={chevDown} alt="" className="w-3" />
    </div>
  );
};
