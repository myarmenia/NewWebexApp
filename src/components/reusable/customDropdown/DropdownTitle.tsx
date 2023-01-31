import { FC } from "react";
import chevDown from "../../../assets/general_images/chevDown.svg";
import styles from "./customDropdown.module.css";

interface DropdownTitleProps {
  dropDownTitle: string;
  state: boolean;
}

export const DropdownTitle: FC<DropdownTitleProps> = ({
  dropDownTitle,
  state,
}) => {
  return (
    <div className={styles.dropdownTitle}>
      <div className="flex justify-center w-full">
        <span>{dropDownTitle}</span>
      </div>
      <img
        src={chevDown}
        alt=""
        className={`scale-75 duration-300 h-fit ${
          state ? "rotate-180" : "rotate-0"
        }`}
      />
    </div>
  );
};
