import { FC, useState } from "react";
import { IHeaderDropDownOption } from "../../../models/interfaces";
import styles from "./customDropdown.module.css";
import { DropdownTitle } from "./DropdownTitle";
import { Items } from "./Items";

interface CustomDropdownProps {
  dropDownTitle: string;
  options: IHeaderDropDownOption[];
  className?: string;
}

export const CustomDropdown: FC<CustomDropdownProps> = ({
  dropDownTitle,
  options,
  className = "",
}) => {
  const [state, setState] = useState<boolean>(false);
  return (
    <div
      className="flex justify-center"
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      <div className={`${styles.customDropdown} ${className}`}>
        <DropdownTitle {...{ state, dropDownTitle }} />
        {state && <Items {...{ setState, options }} />}
      </div>
    </div>
  );
};
