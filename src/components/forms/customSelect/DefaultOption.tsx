import { FC } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./customSelect.module.css";
import chevDown from "../../../assets/general_images/customSelectArrow.svg";
import { useSelectContext } from "./CustomSelect";

export const DefaultOption: FC = () => {
  const { toggleOptions, regName, placeholder, value, img } =
    useSelectContext();
  const formMethods = useFormContext();
  const register = regName ? formMethods?.register(regName) : null;
  return (
    <div className={styles.defaultOption} onClick={() => toggleOptions()}>
      {img && (
        <img
          src={img}
          alt=""
          className="absolute -translate-y-1/2 top-1/2 left-2"
        />
      )}
      <div
        className={`flex text-gray w-full text-xs cursor-pointer ${
          img ? "!pl-[13px]" : ""
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
