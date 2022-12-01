import "./customSelect.css";
import React, { SetStateAction, useState } from "react";
import { Options } from "./Options";
import { DefaultOption } from "./DefaultOption";
import { ISelect } from "../../../../models/interfaces";
interface CustomSelectProps {
  select: ISelect;
  className?: string;
  isInput?: boolean;
  setselectVals?: React.Dispatch<SetStateAction<ISelect>>;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  select,
  className,
  isInput,
  setselectVals,
}) => {
  const [state, setState] = useState<boolean>(false);
  const [rotateClass, setRotateClass] = useState<boolean>(false);
  const [name, setName] = useState<string>(select.title);

  const toggleSelect = (e: boolean): void => {
    setState(e);
    setRotateClass(e);
  };

  return (
    <div className="flex justify-center">
      <div className={`customSelect ${className}`}>
        <DefaultOption
          title={name}
          rotateClass={rotateClass}
          state={state}
          toggleSelect={toggleSelect}
        />
        {state && (
          <Options
            setState={setState}
            state={state}
            // options={select.options}
            setName={setName}
            select={select}
            isInput={isInput}
            setselectVals={setselectVals}
          />
        )}
      </div>
    </div>
  );
};
