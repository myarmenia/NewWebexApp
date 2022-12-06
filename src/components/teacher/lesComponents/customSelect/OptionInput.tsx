import React, { SetStateAction } from "react";
import acceptImg from "../../../../images/Teacher/NewLesson/accept.svg";
import { ISelect } from "../../../../models/interfaces";

interface OptionInputProps {
  select: ISelect;
  setselectVals?: React.Dispatch<SetStateAction<ISelect>>;
  newCategory: string;
  setNewCategory: React.Dispatch<SetStateAction<string>>;
}

export const OptionInput: React.FC<OptionInputProps> = ({
  newCategory,
  setNewCategory,
  setselectVals,
  select,
}) => {
  return (
    <div className="relative m-3 mt-2">
      <input
        className="addCategoryInp"
        placeholder="Ավելացնել կատեգորիա"
        value={newCategory}
        onChange={(e) => {
          setNewCategory(e.target.value);
        }}
      />
      <img
        className="addImg"
        src={acceptImg}
        alt=""
        onClick={() => {
          setselectVals?.({
            ...select,
            options: [...select.options, newCategory],
          });
          setNewCategory("");
        }}
      />
    </div>
  );
};
