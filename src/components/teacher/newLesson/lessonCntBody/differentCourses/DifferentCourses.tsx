import React from "react";
import "./differentCourses.css";
import { CustomNmbInp } from "../customNmbInp/CustomNmbInp";
import { FieldArrayWithId } from "react-hook-form";
import { TeacherSubmitForm } from "../validationSchema";

interface DifferentCoursesProps {
  fields: FieldArrayWithId<TeacherSubmitForm, "stages", "id">[];
}

export const DifferentCourses: React.FC<DifferentCoursesProps> = ({
  fields,
}) => {
  return (
    <div className="differentCourses">
      {fields.map((field, index) => {
        return (
          <div className="flex flex-col gap-1" key={field.id}>
            <span className="text-[#6B6B6B] text-[10px]">Փուլ {index + 1}</span>
            <CustomNmbInp defaultValue={2} regName={`stages.${index}.count`} />
          </div>
        );
      })}
    </div>
  );
};
