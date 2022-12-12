import React from "react";
import "./phases.css";
import { FieldArrayWithId } from "react-hook-form";
import { TeacherSubmitForm } from "../validationSchema";
import { CstmInput } from "../../../../lesComponents/cstmInput/CstmInput";
import { useFormContext } from "react-hook-form";

interface PhasesProps {
  fields: FieldArrayWithId<TeacherSubmitForm, "stages", "id">[];
}

export const Phases: React.FC<PhasesProps> = ({ fields }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="phases">
      <p className="phasesTitle">Վերնագրել դասընթացի փուլերը</p>
      <div className="phasesCont">
        {fields.map((field, index) => {
          return (
            <CstmInput
              key={field.id}
              type="text"
              placeholder={`Փուլ ${index + 1}`}
              regName={`stages.${index}.stageDescription`}
              error={
                Array.isArray(errors.stages) &&
                errors.stages[index].stageDescription.message
              }
            />
          );
        })}
      </div>
    </div>
  );
};
