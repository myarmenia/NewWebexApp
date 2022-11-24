import "./CustomSelect.css";
import React, { useState } from "react";
import { Options } from "./Options";
import { DefaultOption } from "./DefaultOption";
interface CustomSelectProps {
  select: {
    title: string;
    options: string[];
  };
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  select,
  className,
}: CustomSelectProps) => {
  const [state, setState] = useState<boolean>(false);
  const [name, setName] = useState<string>(select.title);
  const [rotateClass, setRotateClass] = useState(false);
  const selectedOption = (event: string): void => {
    setName(event);
    setState(!state);
  };

  return (
    <div
      className={`customSelect ${className}`}
      onClick={() => {
        setState(!state);
        setRotateClass(!rotateClass);
      }}
    >
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
  );
};
