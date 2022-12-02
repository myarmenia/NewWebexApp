import React, { SetStateAction, useState } from "react";
import { Option } from "./Option";
import { ISelect } from "../../../../models/interfaces";
import { OptionInput } from "./OptionInput";
import { UseFormSetValue } from "react-hook-form";
import { Selects, TeacherSubmitForm } from "../lessonCntBody/validationSchema";

interface OptionsProps {
  state: boolean;
  setState: React.Dispatch<SetStateAction<boolean>>;
  select: ISelect;
  isInput?: boolean;
  setselectVals?: React.Dispatch<SetStateAction<ISelect>>;
  setValue?: UseFormSetValue<TeacherSubmitForm>;
  selectName?: Selects;
}

export const Options: React.FC<OptionsProps> = ({
  state,
  setState,
  select,
  isInput,
  setselectVals,
  setValue,
  selectName,
}) => {
  const [newCategory, setNewCategory] = useState<string>("");
  return (
    <div className="options">
      <div className="optionsContainer">
        {select.options.map((option, id) => (
          <Option
            key={id}
            setValue={setValue}
            option={option}
            setState={setState}
            state={state}
            selectName={selectName}
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
