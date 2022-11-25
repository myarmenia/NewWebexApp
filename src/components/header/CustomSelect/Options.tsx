import React from "react";
import "./customSelect.css";
import { Option } from "./Option";

interface OptionsProps {
  selectedOption: (event: string) => void;
  state: boolean;
  setState: (state: boolean) => void;
  options: string[];
}

export const Options: React.FC<OptionsProps> = ({
  selectedOption,
  state,
  setState,
  options,
}: OptionsProps) => {
  // const { arr } = useSelector(
  //   (val: { options: IselectOptionsInitialState }) => val.options
  // );
  return (
    <div className="options">
      {options.map((option, id) => (
        <Option
          option={option}
          selectedOption={selectedOption}
          key={id}
          state={state}
          setState={setState}
        />
      ))}
    </div>
  );
};
