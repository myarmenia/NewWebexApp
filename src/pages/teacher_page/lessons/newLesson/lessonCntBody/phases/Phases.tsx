import React from "react";
import { FieldArrayWithId } from "react-hook-form";
import { CstmInput } from "../../../../../../components/forms";
import { TeacherSubmitForm } from "../../../../../../validations/newLesson_schema";
import styles from "./phases.module.css";

interface PhasesProps {
  fields: FieldArrayWithId<TeacherSubmitForm, "stages", "id">[];
}

export const Phases: React.FC<PhasesProps> = ({ fields }) => {
  return (
    <div className={styles.mycontainer}>
      <p className={styles.title}>Վերնագրել դասընթացի փուլերը</p>
      <div className={styles.content}>
        {fields.map((field, index) => (
          <CstmInput
            key={field.id}
            placeholder={`Փուլ ${index + 1}`}
            regName={`stages.${index}.stageDescription`}
          />
        ))}
      </div>
    </div>
  );
};
