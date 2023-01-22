import React, { ChangeEvent, useState } from "react";
import { UseFieldArrayReturn, useFormContext } from "react-hook-form";
import { CstmInput } from "../../../../../../components/forms";
import { TeacherSubmitForm } from "../../../../../../validations/newLesson_schema";
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
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && val) {
      reqKnowledges.append({ knowledge: val });
      setVal("");
      e.preventDefault();
    }
    if (e.key === "Enter" && !val) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col relative">
        <CstmInput
          value={val}
          onKeyDown={keyDownHandler}
          {...{ onChange }}
          placeholder="Ավելացնել պահանջվող նախնական գիտելիքները"
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
              <KnwItem
                {...{ knowledge }}
                onClick={() => reqKnowledges.remove(i)}
                key={id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
