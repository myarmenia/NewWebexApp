import "./customSelect.css";
import React, { useState } from "react";
import { Options } from "./Options";
import { DefaultOption } from "./DefaultOption";
import { ISelect } from "../../../models/interfaces";
interface CustomSelectProps {
  select: ISelect;
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  select,
  className,
}: CustomSelectProps) => {
  const [state, setState] = useState<boolean>(false);
  const [rotateClass, setRotateClass] = useState<boolean>(false);
  const onPointer = (e: boolean): void => {
    setState(e);
    setRotateClass(e);
  };

  return (
    <div
      className="flex justify-center"
      onPointerMove={() => onPointer(true)}
      onPointerLeave={() => onPointer(false)}
    >
      <div className={`customSelect ${className}`}>
        <DefaultOption
          title={select.title}
          rotateClass={rotateClass}
          state={state}
        />
        {state && (
          <Options setState={setState} state={state} options={select.options} />
        )}
      </div>
    </div>
  );
};
