import { FC, useState } from "react";
import { IHeaderDropDownOption } from "../../../models/interfaces";
import "./customDropdown.css";
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
      <div className={`customDropdown ${className}`}>
        <DropdownTitle {...{ state, dropDownTitle }} />
        {state && <Items {...{ setState, options }} />}
      </div>
    </div>
  );
};

// export interface IHeaderDropDownOption {
//   title?: string;
//   path?: string;
//   onClick?: () => void;
// }
