import React from "react";
import closeImg from "../../../../../../assets/teacher_images/newLesson/X.svg";
import { UseFieldArrayReturn } from "react-hook-form";
import { TeacherSubmitForm } from "../validationSchema";

interface KnwItemProps {
  knowledge: string;
  reqKnowledges: UseFieldArrayReturn<
    TeacherSubmitForm,
    "requiredKnowledges",
    "id"
  >;
  i: number;
}

export const KnwItem: React.FC<KnwItemProps> = ({
  knowledge,
  reqKnowledges,
  i,
}) => {
  return (
    <div className="knowledge">
      <span className="knowledgeText">{knowledge}</span>
      <img
        className="h-2"
        src={closeImg}
        alt=""
        onClick={() => reqKnowledges.remove(i)}
      />
    </div>
  );
};
