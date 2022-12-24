import React from "react";
import chevDown from "../../../assets/general_images/chevDown.svg";

interface DropdownTitleProps {
  state: boolean;
  title: string;
  rotateClass: boolean;
}

export const DropdownTitle: React.FC<DropdownTitleProps> = ({
  title,
  rotateClass,
  state,
}) => {
  return (
    <div className="dropdownTitle">
      <div className="flex justify-center w-full">
        <button>{title}</button>
      </div>
      <img
        src={chevDown}
        alt=""
        className={`scale-75 duration-300 h-fit ${
          rotateClass ? "rotate-180" : "rotate-0"
        }`}
      />
    </div>
  );
};
