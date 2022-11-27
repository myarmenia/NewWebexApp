import React from "react";
import "./customSelect.css";

interface OptionProps {
  option: string;
  state: boolean;
  setState: (state: boolean) => void;
}
export const Option: React.FC<OptionProps> = ({
  option,
  state,
  setState,
}: OptionProps) => {
  return (
    <div
      className="custopSelect_option"
      onClick={() => {
        setState(!state);
      }}
    >
      {option}
    </div>
  );
};
