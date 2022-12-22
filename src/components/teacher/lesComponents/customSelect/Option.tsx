import React, { SetStateAction } from "react";
import { useFormContext } from "react-hook-form";

interface OptionProps {
  toggleOptions: () => void;
  regName?: string;
  option: string;
}

export const Option: React.FC<OptionProps> = ({
  toggleOptions,
  option,
  regName,
}) => {
  const { setValue } = useFormContext();
  return (
    <div
      className="custopSelect_option"
      onClick={() => {
        toggleOptions();
        regName && setValue(regName, option, { shouldValidate: true });
      }}
    >
      {option}
    </div>
  );
};
