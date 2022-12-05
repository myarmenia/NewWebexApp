import React, { useState } from "react";
import "./knowledges.css";
import { UseFieldArrayReturn, useFormContext } from "react-hook-form";
import { TeacherSubmitForm } from "../validationSchema";
import { KnwItem } from "./KnwItem";

interface KnowledgesProps {
  reqKnowledges: UseFieldArrayReturn<
    TeacherSubmitForm,
    "requiredKnowledges",
    "id"
  >;
}

export const Knowledges: React.FC<KnowledgesProps> = ({ reqKnowledges }) => {
  const [val, setVal] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const {
    watch,
    formState: { errors },
  } = useFormContext();
  const keyDownHandler = (
    e: React.KeyboardEvent<HTMLInputElement>,
    value: string,
    setVal: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setVal("");
      reqKnowledges.append({ knowledge: value });
    }
  };

  return (
    <div className="knowledges">
      <div className="knowledgeInputSection">
        <input
          className="lessonInp"
          type="text"
          placeholder="Ավելացնել պահանջվող նախնական գիտելիքները"
          value={val}
          onChange={onChange}
          onKeyDown={(e) => {
            keyDownHandler(e, val, setVal);
          }}
        />
        {/* for error */}
        {/* <p className="errorMessage">
          <>{errors[regName!]?.message}</>
        </p> */}
      </div>
      {!!watch("requiredKnowledges").length && (
        <div className="flex gap-2 flex-wrap">
          {reqKnowledges.fields.map(({ knowledge, id }, i) => {
            return <KnwItem {...{ knowledge, reqKnowledges, i }} key={id} />;
          })}
        </div>
      )}
    </div>
  );
};
