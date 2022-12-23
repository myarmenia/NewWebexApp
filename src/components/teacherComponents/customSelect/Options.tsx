import React, { SetStateAction, useState } from "react";
import { Option } from "./Option";
import { OptionInput } from "./OptionInput";

interface OptionsProps {
  toggleOptions: () => void;
  options: string[];
  isInput?: boolean;
  setOptions?: React.Dispatch<SetStateAction<string[]>>;
  regName?: string;
}

export const Options: React.FC<OptionsProps> = ({
  toggleOptions,
  options,
  isInput,
  setOptions,
  regName,
}) => {
  return (
    <div className="options">
      <div className="optionsContainer">
        {options.map((option, id) => (
          <Option key={id} {...{ option, toggleOptions, regName }} />
        ))}
      </div>
      {isInput && <OptionInput {...{ options, setOptions }} />}
    </div>
  );
};
