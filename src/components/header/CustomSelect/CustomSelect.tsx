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
  const [name, setName] = useState<string>(select.title);
  const [rotateClass, setRotateClass] = useState<boolean>(false);
  const selectedOption = (event: string): void => {
    setName(event);
    setState(!state);
  };

  return (
    <div
      className="flex justify-center"
      onPointerMove={() => {
        setState(true);
        setRotateClass(true);
      }}
      onPointerLeave={() => {
        setState(false);
        setRotateClass(false);
      }}
    >
      <div className={`customSelect ${className}`}>
        <DefaultOption title={name} rotateClass={rotateClass} state={state} />
        {state && (
          <Options
            selectedOption={selectedOption}
            setState={setState}
            state={state}
            options={select.options}
          />
        )}
      </div>
    </div>
  );
};
