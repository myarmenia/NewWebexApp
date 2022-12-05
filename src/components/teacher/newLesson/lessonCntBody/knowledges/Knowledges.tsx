import React, { useState } from "react";
import { UseFieldArrayReturn, useFormContext } from "react-hook-form";
import { CstmInput } from "../cstmInput/CstmInput";
import { TeacherSubmitForm } from "../validationSchema";
import closeImg from "../../../../../images/Teacher/NewLesson/X.svg";
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
    <div className="flex flex-col gap-5">
      <div className="flex flex-col relative">
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
            return (
              // <div
              //   key={field.id}
              //   className="flex justify-between items-center gap-[10px] bg-[#7764FB] text-xs text-white opacity-80 px-[18px] py-[5px] rounded-[30px]"
              // >
              //   <span className="leading-3">{field.knowledge}</span>
              //   <img
              //     className="h-2"
              //     src={closeImg}
              //     alt=""
              //     onClick={() => reqKnowledges.remove(i)}
              //   />
              // </div>
              <KnwItem {...{ knowledge, reqKnowledges, i }} key={id} />
            );
          })}
        </div>
      )}
    </div>
  );
};
