import "./customDropdown.css";
import React, { useState } from "react";
import { Items } from "./Items";
import { DropdownTitle } from "./DropdownTitle";
import { ISelect } from "../../../models/interfaces";

interface CustomDropdownProps {
  select: ISelect;
  className?: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  select,
  className,
}) => {
  const [state, setState] = useState<boolean>(false);
  const [rotateClass, setRotateClass] = useState<boolean>(false);
  const onPointer = (e: boolean): void => {
    setState(e);
    setRotateClass(e);
  };

  return (
    <div
      className="flex justify-center"
      onMouseEnter={() => onPointer(true)}
      onMouseLeave={() => onPointer(false)}
    >
      <div className={`customDropdown ${className}`}>
        <DropdownTitle
          title={select.title}
          rotateClass={rotateClass}
          state={state}
        />
        {state && (
          <Items setState={setState} state={state} options={select.options} />
        )}
      </div>
    </div>
  );
};
