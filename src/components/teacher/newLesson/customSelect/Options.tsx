import React, { SetStateAction, useState } from "react";
import "./customSelect.css";
import { Option } from "./Option";
import acceptImg from "../../../../images/Teacher/NewLesson/accept.svg";
import { ISelect } from "../../../../models/interfaces";
import { OptionInput } from "./OptionInput";

interface OptionsProps {
  state: boolean;
  setState: React.Dispatch<SetStateAction<boolean>>;
  select: ISelect;
  isInput?: boolean;
  setName: React.Dispatch<SetStateAction<string>>;
  setselectVals?: React.Dispatch<SetStateAction<ISelect>>;
}

export const Options: React.FC<OptionsProps> = ({
  state,
  setState,
  select,
  setName,
  setselectVals,
  isInput,
}: OptionsProps) => {
  const [newCategory, setNewCategory] = useState<string>("");
  return (
    <div className="options">
      {select.options.map((option, id) => (
        <Option
          option={option}
          key={id}
          state={state}
          setState={setState}
          setName={setName}
        />
      ))}
      {isInput && (
        <OptionInput
          newCategory={newCategory}
          setNewCategory={setNewCategory}
          setselectVals={setselectVals}
          select={select}
        />
      )}
    </div>
  );
};
