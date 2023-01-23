import React from "react";
import styles from "./phases.module.css";
import { FieldArrayWithId } from "react-hook-form";
import { TeacherSubmitForm } from "../../../../../../validations/newLesson_schema";
import { useFormContext } from "react-hook-form";
import { CstmInput } from "../../../../../../components/forms";

interface PhasesProps {
  fields: FieldArrayWithId<TeacherSubmitForm, "stages", "id">[];
}

export const Phases: React.FC<PhasesProps> = ({ fields }) => {
  const {
    formState: { errors },
  } = useFormContext<TeacherSubmitForm>();
  return (
    <div className={styles.mycontainer}>
      <p className={styles.title}>Վերնագրել դասընթացի փուլերը</p>
      <div className={styles.content}>
        {fields.map((field, index) => {
          const myError =
            errors?.stages && errors?.stages[index!]?.stageDescription?.message;

          return (
            <CstmInput
              key={field.id}
              placeholder={`Փուլ ${index + 1}`}
              regName={`stages.${index}.stageDescription`}
              error={myError}
            />
          );
        })}
      </div>
    </div>
  );
};
