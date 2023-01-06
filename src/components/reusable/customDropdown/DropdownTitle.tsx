import React from "react";
import chevDown from "../../../assets/general_images/chevDown.svg";

interface DropdownTitleProps {
  dropDownTitle: string;
  state: boolean;
}

export const DropdownTitle: React.FC<DropdownTitleProps> = ({
  dropDownTitle,
  state,
}) => {
  return (
    <div className="dropdownTitle">
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
