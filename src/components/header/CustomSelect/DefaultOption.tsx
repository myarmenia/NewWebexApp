import React from "react";
import chevDown from "../../../images/chevDown.svg";

interface DefaultOptionProps {
  state: boolean;
  title: string;
  rotateClass: boolean;
}

export const DefaultOption: React.FC<DefaultOptionProps> = ({
  title,
  rotateClass,
  state,
}: DefaultOptionProps) => {
  return (
    <div className={`defaultOption ${state && "selectActive"}`}>
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
