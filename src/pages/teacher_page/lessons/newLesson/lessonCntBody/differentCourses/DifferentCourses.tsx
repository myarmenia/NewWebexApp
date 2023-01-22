import React from "react";
import "./differentCourses.css";
import { FieldArrayWithId, useFormContext } from "react-hook-form";
import { TeacherSubmitForm } from "../../../../../../validations/newLesson_schema";
import { CustomNmbInp } from "../../../../../../components/forms";

interface DifferentCoursesProps {
  fields: FieldArrayWithId<TeacherSubmitForm, "stages", "id">[];
}

export const DifferentCourses: React.FC<DifferentCoursesProps> = ({
  fields,
}) => {
  const {
    formState: { errors },
  } = useFormContext<TeacherSubmitForm>();
  return (
    <div className="differentCourses">
      {fields.map((field, index) => {
        const myError =
          errors?.stages && errors?.stages[index!]?.count?.message;

        return (
          <div className="flex flex-col gap-1" key={field.id}>
            <span className="text-gray text-[10px]">Փուլ {index + 1}</span>
            <CustomNmbInp
              defaultValue={12}
              regName={`stages.${index}.count`}
              error={myError}
            />
          </div>
        );
      })}
    </div>
  );
};
