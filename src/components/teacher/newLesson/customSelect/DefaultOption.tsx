import React from "react";
import chevDown from "../../../../images/chevDown.svg";
import "./customSelect.css";

interface DefaultOptionProps {
  state: boolean;
  title: string;
  rotateClass: boolean;
  toggleSelect: (e: boolean) => void;
}

export const DefaultOption: React.FC<DefaultOptionProps> = ({
  title,
  rotateClass,
  state,
  toggleSelect,
}: DefaultOptionProps) => {
  return (
    <div className="defaultOption" onClick={() => toggleSelect(!state)}>
      <div className="flex text-[#6B6B6B] w-full text-xs">
        <div>{title}</div>
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
