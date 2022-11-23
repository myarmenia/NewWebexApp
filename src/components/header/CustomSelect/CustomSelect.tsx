import React, { useState } from "react";
import { Options } from "./Options";
import { DefaultOption } from "./DefaultOption";
import "./CustomSelect.css";
interface CustomSelectProps {
  select: {
    title: string;
    options: string[];
  };
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  select,
}: CustomSelectProps) => {
  const [state, setState] = useState<boolean>(false);
  const [name, setName] = useState<string>(select.title);
  const [rotateClass, setRotateClass] = useState(false);
  const selectedOption = (event: string) => {
    setName(event);
    setState(!state);
  };

  return (
    <div
      className="relative"
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
