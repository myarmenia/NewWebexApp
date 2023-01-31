import { FC } from "react";
import chevDown from "../../../assets/general_images/customSelectArrow.svg";
import { useFormRegister } from "../../../hooks";
import { useSelectContext } from "./CustomSelect";
import styles from "./customSelect.module.css";

export const DefaultOption: FC = () => {
  const { toggleOptions, regName, placeholder, value, img } =
    useSelectContext();
  const register = useFormRegister(regName);
  return (
    <div className={styles.defaultOption} onClick={() => toggleOptions()}>
      {img && (
        <img
          src={img}
          alt=""
          className="absolute -translate-y-1/2 top-1/2 left-4"
        />
      )}
      <div
        className={`flex text-gray w-full text-xs cursor-pointer ${
          img ? "!pl-[23px]" : ""
        }`}
      >
        <input
          type="text"
          {...{ placeholder }}
          disabled
          className={styles.title}
          value={value}
          {...register}
        />
      </div>
      <img src={chevDown} alt="" className="w-3" />
    </div>
  );
};
