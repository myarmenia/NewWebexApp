import React from "react";
import "./customSelect.css";
import { Option } from "./Option";

interface OptionsProps {
  state: boolean;
  setState: (state: boolean) => void;
  options: string[];
}

export const Options: React.FC<OptionsProps> = ({
  state,
  setState,
  options,
}: OptionsProps) => {
  return (
    <div className="options">
      {options.map((option, id) => (
        <Option
          option={option}
          key={id}
          state={state}
          setState={setState}
        />
      ))}
    </div>
  );
};
