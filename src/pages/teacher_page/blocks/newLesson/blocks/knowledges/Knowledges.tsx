import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { CstmInput } from "../../../../../../components/forms";
import { enterPress } from "../../../../../../helper";
import { TeacherSubmitForm } from "../../../../../../validations/newLesson_schema";
import { KnwItem } from "./KnwItem";

export const Knowledges: FC = () => {
  const { watch, control } = useFormContext<TeacherSubmitForm>();
  const [val, setVal] = useState<string>("");
  const reqKnowledges = useFieldArray({
    control,
    name: "requiredKnowledges",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };
  const keyDownHandler = () => {
    if (val) {
      reqKnowledges.append({ knowledge: val });
      setVal("");
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col relative">
        <CstmInput
          value={val}
          onKeyDown={(e) => enterPress(e, keyDownHandler)}
          {...{ onChange }}
          placeholder="Ավելացնել պահանջվող նախնական գիտելիքները"
        />
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
