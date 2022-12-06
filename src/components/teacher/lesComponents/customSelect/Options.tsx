import React, { SetStateAction, useState } from "react";
import { Option } from "./Option";
import { ISelect } from "../../../../models/interfaces";
import { OptionInput } from "./OptionInput";

interface OptionsProps {
  state: boolean;
  setState: React.Dispatch<SetStateAction<boolean>>;
  select: ISelect;
  isInput?: boolean;
  setselectVals?: React.Dispatch<SetStateAction<ISelect>>;
  regName?: string;
}

export const Options: React.FC<OptionsProps> = ({
  state,
  setState,
  select,
  isInput,
  setselectVals,
  regName,
}) => {
  const [newCategory, setNewCategory] = useState<string>("");
  return (
    <div className="options">
      <div className="optionsContainer">
        {select.options.map((option, id) => (
          <Option
            key={id}
            option={option}
            setState={setState}
            state={state}
            regName={regName}
          />
        ))}
      </div>
      {isInput && (
        <OptionInput
          select={select}
          setNewCategory={setNewCategory}
          setselectVals={setselectVals}
          newCategory={newCategory}
        />
      )}
    </div>
  );
};
