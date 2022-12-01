import React, { SetStateAction } from "react";
import "./customSelect.css";

interface OptionProps {
  option: string;
  state: boolean;
  setState: React.Dispatch<SetStateAction<boolean>>;
  setName: React.Dispatch<SetStateAction<string>>;
}
export const Option: React.FC<OptionProps> = ({
  option,
  state,
  setState,
  setName,
}: OptionProps) => {
  return (
    <div
      className="custopSelect_option"
      onClick={() => {
        setState(!state);
        setName(option);
      }}
    >
      {option}
    </div>
  );
};
