import React, { FC } from "react";
import { ICustomSelect } from "../../../models/interfaces";
import { Option } from "./Option";
import { OptionInput } from "./OptionInput";

type OptionsProps = Pick<
  ICustomSelect,
  "toggleOptions" | "isMutable" | "regName" | "options"
>;

export const Options: FC<OptionsProps> = ({
  toggleOptions,
  options,
  isMutable,
  regName,
}) => {
  const removeOption = (currentId: number) => {
    isMutable?.setOptions(options.filter((option, id) => id !== currentId));
  };
  return (
    <div className="options">
      <div className="optionsContainer">
        {options.map((option, optionId) => (
          <Option
            key={optionId}
            {...{ option, toggleOptions, regName, optionId }}
            removeOption={isMutable && removeOption}
          />
        ))}
      </div>
      {isMutable?.isInput && (
        <OptionInput {...{ options }} setOptions={isMutable?.setOptions} />
      )}
    </div>
  );
};
