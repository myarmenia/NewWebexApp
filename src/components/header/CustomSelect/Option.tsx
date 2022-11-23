import React from "react";

interface OptionProps {
  selectedOption: (event: string) => void;
  option: string;
  state: boolean;
  setState: (state: boolean) => void;
}
export const Option: React.FC<OptionProps> = ({
  selectedOption,
  option,
  state,
  setState,
}: OptionProps) => {
  return (
    <div
      className="custopSelect_option"
      onClick={() => {
        selectedOption(option);
        setState(!state);
      }}
    >
      {option}
    </div>
  );
};
