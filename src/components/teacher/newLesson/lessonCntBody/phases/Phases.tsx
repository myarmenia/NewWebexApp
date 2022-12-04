import React from "react";
import "./phases.css";
import { FieldArrayWithId, useFormContext } from "react-hook-form";
import { TeacherSubmitForm } from "../validationSchema";

interface PhasesProps {
  fields: FieldArrayWithId<TeacherSubmitForm, "stages", "id">[];
}

export const Phases: React.FC<PhasesProps> = ({ fields }) => {
  const { register } = useFormContext();

  return (
    <div className="phases">
      <p className="phasesTitle">Վերնագրել դասընթացի փուլերը</p>
      <div className="phasesCont">
        {fields.map((field, index) => {
          return (
            <input
              key={field.id}
              type="text"
              className="lessonInp"
              placeholder={`Փուլ ${index + 1}`}
              {...register(`stages.${index}.stageDescription`)}
            />
          );
        })}
      </div>
    </div>
  );
};
