import React from "react";
import { FieldArrayWithId } from "react-hook-form";
import { CustomNmbInp } from "../../../../../../components/forms";
import { TeacherSubmitForm } from "../../../../../../validations/newLesson_schema";
import styles from "./differentCourses.module.css";

interface DifferentCoursesProps {
  fields: FieldArrayWithId<TeacherSubmitForm, "stages", "id">[];
}

export const DifferentCourses: React.FC<DifferentCoursesProps> = ({
  fields,
}) => {
  return (
    <div className={styles.mycontainer}>
      {fields.map((field, index) => (
        <div className="flex flex-col gap-1" key={field.id}>
          <span className="text-gray text-[10px]">Փուլ {index + 1}</span>
          <CustomNmbInp regName={`stages.${index}.count`} />
        </div>
      ))}
    </div>
  );
};
